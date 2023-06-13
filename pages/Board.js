import React, { useEffect } from "react";
import BoardList from "./components/BulletinBoard/BoardList";
import { Container } from "react-bootstrap";
import Head from "next/head";
import { Client } from "@notionhq/client";

const Board = ({ results }) => {
  useEffect(() => {
    console.log(results);
  });

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
        <BoardList results={results}></BoardList>
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
  const databaseId = process.env.NOTION_DATABASE_ID;
  const res = await notion.databases.query({ database_id: databaseId });

  console.log(res);

  return {
    props: {
      results: res.results,
    },
  };
}

export default Board;
