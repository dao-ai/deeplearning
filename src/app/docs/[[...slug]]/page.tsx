// export const metadata = {
//   title: "Hello, Next.js!",
//   description: "a test mdx file",
// };
import { Toc } from "@/components/Toc";
import { existsSync } from "fs";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
// import dynamic from "next/dynamic";

type Props = {
  params: { slug: [] };
  searchParams: { [key: string]: string | string[] | undefined };
};
async function getMdx(params: any) {
  // return dynamic(() => import(`@/content/docs/${path}.mdx`));
  let path = (params.slug && params.slug.length && params.slug.join("/")) || "index";
  let file = `@/content/docs/${path}.mdx`;
  // if (!existsSync(file)) file = `@/content/docs/${path}/index.mdx`;
  // if (!existsSync(file)) return undefined;
  const Mdx: any = await import(`@/content/docs/${path}.mdx`);
  return Mdx;
}
export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  console.log({ params });
  const Mdx = await getMdx(params);
  // console.log(Mdx.tableOfContents);
  if (!Mdx) return { title: "未找到" };
  return {
    ...Mdx.frontmatter,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function MDXPage({ params }: any) {
  const Mdx: any = await getMdx(params);
  if (!Mdx) return notFound();

  return (
    <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
      <article className="relative z-20 prose prose-slate mt-8 dark:prose-dark">
        <div className="prose prose-stone lg:prose-xl">
          <Mdx.default />
        </div>
      </article>
      <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
        <Toc toc={Mdx.tableOfContents} />
      </div>
    </div>
  );
}
