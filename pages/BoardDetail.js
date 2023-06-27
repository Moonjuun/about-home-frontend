import React from "react";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { useRouter } from "next/router";

const BoardDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
    notionVersion: "2022-06-28",
  });

  // 받은 id를 마크다운으로 변환
  const n2m = new NotionToMarkdown({ notionClient: notion });
  (async () => {
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);
    console.log(mdString.parent);
  })();

  return <></>;
};

export default BoardDetail;
