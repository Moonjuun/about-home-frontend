import React, { useState, useEffect } from "react";
import BoardList from "./components/BulletinBoard/BoardList";
import { Container } from "react-bootstrap";
import Head from "next/head";
import { Client } from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";

const Board = ({ noticeChild }) => {
  // useEffect(() => {
  //   console.log("results", results);
  //   console.log("notices", notices);
  //   console.log("noticeChild", noticeChild);
  // });

  const filteredNoticeChild = noticeChild
    .filter((notice) => notice.child_page) // child_page가 있는 객체만 필터링
    .map((notice) => notice);

  return (
    <>
      <Head>
        <title>어바웃홈 - 공지사항</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta name="description" content="어바웃홈, 공지사항" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="어바웃홈 about-home" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="어바웃홈 about-home, 공지사항" />
        <meta property="og:title" content="어바웃홈 about-home, 공지사항" />
        <meta
          property="og:description"
          content="어바웃홈 about-home, 공지사항"
        />
        <meta property="og:url" content="https://about-home.net" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="어바웃홈 about-home" />
        <meta name="twitter:description" content="어바웃홈 about-home" />
      </Head>
      <Container style={{ minHeight: "80vh" }}>
        <BoardList noticeChild={filteredNoticeChild}></BoardList>
      </Container>
    </>
  );
};

// 처음 빌드될때 데이터를 한번 가져옴
export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
    notionVersion: "2022-06-28",
  });
  //DB 접근
  const databaseId = process.env.NOTION_DATABASE_ID;
  const res = await notion.databases.query({ database_id: databaseId });

  // 공지사항 Block 접근
  const blockId = res.results[0].id;
  const noticeData = await notion.blocks.retrieve({ block_id: blockId });

  // 공지사항 Block 밑에 있는 Child 접근
  const noticeChildId = noticeData.id;
  const blockChildData = await notion.blocks.children.list({
    block_id: noticeChildId,
  });

  // 받은 id를 마크다운으로 변환
  // const n2m = new NotionToMarkdown({ notionClient: notion });

  // const mdblocks = await n2m.pageToMarkdown(noticeChildId);
  // const mdString = n2m.toMarkdownString(mdblocks);
  // console.log(mdString.parent);

  return {
    props: {
      // results: res.results,
      // notices: noticeData,
      noticeChild: blockChildData.results,
      // mdString: mdString.parent,
    },
  };
}

export default Board;
