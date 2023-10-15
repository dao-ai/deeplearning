import { menus } from "@/app/docs/menus";
import Link from "next/link";

function SubMenu({ menu, ...props }: any) {
  return menu.subMenus && menu.subMenus.length ? (
    <li key={menu.label}>
      <details open>
        <summary>{menu.label}</summary>
        <ul>
          {menu.subMenus.map((subMenu: any) => (
            <SubMenu key={subMenu.label} menu={subMenu} />
          ))}
        </ul>
      </details>
    </li>
  ) : (
    <li key={menu.label}>
      <Link href={menu.href}>{menu.label}</Link>
    </li>
  );
}

export function SidebarDocs() {
  return (
    <ul className="menu menu-sm lg:menu-md px-4 py-0">
      {Object.entries(menus).map(([key, menu]) => (
        <SubMenu key={key} menu={menu} />
      ))}
    </ul>
  );
}
