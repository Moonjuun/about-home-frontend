import React, { useEffect } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

import MainPage from "./MainPage";

export default function Home() {
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isIE =
      userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1;

    if (isIE) {
      const message = document.createElement("div");
      message.innerHTML =
        "이 웹 페이지는 Internet Explorer를 지원하지 않습니다. 크롬이나 사파리와 같은 다른 브라우저를 사용해주세요.";
      message.style.backgroundColor = "yellow";
      message.style.padding = "10px";
      message.style.textAlign = "center";
      message.style.fontWeight = "bold";
      document.body.insertBefore(message, document.body.firstChild);
    }
  }, []);

  return (
    <>
      <Head>
        <title>어바웃홈</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="우리집은 안전할까? 우리집 정보 확인하기"
        />
        <meta
          name="keywords"
          content="우리집은 안전할까? 우리집 정보 확인하기"
        />
        <meta name="robots" content="index,follow" />

        <meta
          property="og:site_name"
          content="어바웃홈, 우리집은 안전할까? 우리집 정보 확인하기"
        />
        <meta
          property="og:image"
          content="/assets/main/mod1_main1.png"
          alt="우리집은 안전할까? 우리집 정보 확인하기"
        />
        <meta
          property="og:title"
          content="우리집은 안전할까? 우리집 정보 확인하기"
        />
        <meta
          property="og:description"
          content="우리집은 안전할까? 우리집 정보 확인하기"
        />

        <meta
          name="naver-site-verification"
          content="9217c20caf4ab578daaca1721c67c7f24c3d6d59"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YDDKFT9LPJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-YDDKFT9LPJ');
              `,
          }}
        />
      </Head>
      <Container fluid className="p-0">
        <MainPage></MainPage>
      </Container>
    </>
  );
}
