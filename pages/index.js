import Head from "next/head";
import { Container } from "react-bootstrap";
import { Client } from "@notionhq/client";

import MainPage from "./MainPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>어바웃홈</title>
        <meta
          name="description"
          content="우리집은 안전할까? 우리집 정보 확인하기"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className="p-0">
        <MainPage></MainPage>
      </Container>
    </>
  );
}

// 처음 빌드될때 데이터를 한번 가져옴
// export async function getStaticProps() {
//   const notion = new Client({
//     auth: process.env.NOTION_API_KEY,
//     notionVersion: "2022-06-28",
//   });
//   const databaseId = process.env.NOTION_DATABASE_ID;
//   const res = await notion.databases.query({ database_id: databaseId });

//   console.log(res);
//   return {
//     props: {
//       results: res.results,
//     },
//   };
// }
