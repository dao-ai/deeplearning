import { navs } from "@/nav/navs";
import Link from "next/link";

function SubNav({ nav, ...props }: any) {
  return nav.subNavs && nav.subNavs.length ? (
    <li key={nav.label}>
      <details>
        <summary>{nav.label}</summary>
        <ul className="p-2 bg-base-100">
          {nav.subNavs.map((subNav: any) => (
            <SubNav key={subNav.label} nav={subNav} />
          ))}
        </ul>
      </details>
    </li>
  ) : (
    <li key={nav.label}>
      <Link href={nav.href}>{nav.label}</Link>
    </li>
  );
}

export function Header({}: any) {
  return (
    <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 [transform:translate3d(0,0,0)] shadow-sm">
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {Object.entries(navs).map(([key, nav]) => (
              <SubNav key={key} nav={nav} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
