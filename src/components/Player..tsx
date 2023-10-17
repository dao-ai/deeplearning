"use client";

import React from "react";
import ReactPlayer from "react-player";
// prompt_eng_01_intro_v3

export default function Player({ title, ...props }: any) {
  // const baseUrl = 'https://dft3h5i221ap1.cloudfront.net/OpenAI/chatgpt-prompt-eng/video/'
  const baseUrl = "/videos/";
  const url = `${baseUrl}${title}.mp4`;
  const src = `/vtts/chatgpt/${title}.zh.vtt`;
  return (
    <ReactPlayer
      playing
      controls
      url={url}
      config={{
        file: {
          tracks: [
            {
              label: "",
              kind: "subtitles",
              src: src,
              srcLang: "zh-CN",
              default: true,
            },
          ],
        },
      }}
    />
  );
}
