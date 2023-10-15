export const menus = {
  docs: {
    label: "文档",
    href: "/docs",
    subMenus: [
      {
        label: "hello",
        href: "/docs/hello",
      },
    ],
  },
  openai: {
    label: "openai",
    subMenus: [
      {
        label: "sub",
        href: "/docs/sub",
        subMenus: [
          {
            label: "nodejs",
            href: "/docs/sub/nodejs",
          },
        ],
      },
    ],
  },
};
