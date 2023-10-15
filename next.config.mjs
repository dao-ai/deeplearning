import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// import { remarkMdxToc } from "remark-mdx-toc";

// import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExtractToc from "@stefanprobst/rehype-extract-toc";
import rehypeExtractTocMdx from "@stefanprobst/rehype-extract-toc/mdx";

import createMDX from "@next/mdx";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // experimental: {
  //   mdxRs: true,
  // },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      remarkMdxFrontmatter,
      // remarkMdxToc
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: "hash-link",
          },
        },
      ],
      rehypeExtractToc,
      rehypeExtractTocMdx,
      // [
      //   rehypeToc,
      //   {
      //     headings: ["h1", "h2"], // 标题层级
      //     position: "beforebegin",
      //     cssClasses: {
      //       toc: "sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]", // Change the CSS class for the TOC
      //       list: "list-none text-slate-700 text-sm leading-6",
      //       listItem: "",
      //       link: "block py-1 font-medium font-medium text-sky-500 dark:text-sky-400", // Change the CSS class for links in the TOC
      //     },
      //   },
      // ],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX(nextConfig);
