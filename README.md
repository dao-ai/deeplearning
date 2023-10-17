2023 年 10 月 8 号 启动 AI 学习站

## 开始

首先，运行开发服务器:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

用浏览器打开[http://localhost:3000](http://localhost:3000)查看结果。

你可以通过修改`app/page.tsx`开始编辑页面。当您编辑文件时，页面会自动更新。

这个项目使用[`next/font`](https://nextjs.org/docs/basic-features/font-optimization)来自动优化和加载 Inter，一个自定义的谷歌字体。

## tailwindcss

## daisyui

## react-player

速度问题，使用了本地视频，太大就没有传到 git,可以使用网络链接

修改`src/components/Player.tsx`里的 baseUrl 即可观看网络视频

使用剪影翻译并导出字幕数据 srt，然后转换为 vtt

应用有道翻译翻译字幕，我做的翻译插件[智译](https://marketplace.visualstudio.com/items?itemName=wohugb.intelitrans)
