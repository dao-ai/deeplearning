export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="mt-4 w-full min-w-0 max-w-6xl px-1 md:px-6">
      <div className="prose prose-stone lg:prose-xl">{children}</div>
    </article>
  );
}
