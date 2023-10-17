"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Breadcrumb() {
  const segments = useSelectedLayoutSegments();
  console.log("segments", segments);
  let pathArr = [""];
  // const breadcrumbs = segments.map((segment) => {
  //   console.log("segment", segment.split("/"));
  //   pathArr.push(segment);
  //   const path = pathArr.join("/");
  //   return { path, segment };
  // });
  let breadcrumbs = [];
  for (const segment of segments) {
    let segmentSubs = segment.split("/");
    for (let segmentSub of segmentSubs) {
      pathArr.push(segmentSub);
      const path = pathArr.join("/");
      breadcrumbs.push({ path, segment: segmentSub });
    }
  }

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
