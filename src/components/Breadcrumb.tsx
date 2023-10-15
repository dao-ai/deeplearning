"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Breadcrumb() {
  const segments = useSelectedLayoutSegments();
  console.log("segments", segments);
  let pathArr = [""];
  const breadcrumbs = segments.map((segment) => {
    pathArr.push(segment);
    const path = pathArr.join("/");
    return { path, segment };
  });

  return (
    <div className="max-w-xs text-sm breadcrumbs">
      <ul>
        {breadcrumbs.map((breadcrumb, index) => {
          console.log({ breadcrumb });
          return (
            <li key={index}>
              <Link href={breadcrumb.path}>{breadcrumb.segment}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
