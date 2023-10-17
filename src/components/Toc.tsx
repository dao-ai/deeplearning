import Link from "next/link";

function SubToc({ item, ...props }: any) {
  // console.log({ item });
  return (
    <li>
      <Link href={"#" + item.id}>{item.value}</Link>
      {item.children && item.children.length ? (
        <ul>
          {item.children.map((children: any, index: number) => (
            <SubToc key={index} item={children} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
}

export function Toc({ toc }: any) {
  return (
    toc && (
      <ul className="menu w-56 rounded-box">
        {toc.map((item: any, index: number) => (
          <SubToc key={index} item={item} />
        ))}
      </ul>
    )
  );
}
