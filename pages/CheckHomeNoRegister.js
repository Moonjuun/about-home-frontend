import React, { useState, useRef } from "react";
import { Container, Form, Button, Accordion } from "react-bootstrap";
import Head from "next/head";
import DaumPostcode from "react-daum-postcode";
import axios from "axios";
import { useRouter } from "next/router";

import LoadingPage from "./LoadingPage";

const CheckHomeNoRegister = () => {
  const router = useRouter();

  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [showDaumPostcode, setShowDaumPostcode] = useState(false);
  const [buildingcode, setBuildingcode] = useState("");
  const [jibun, setJibun] = useState("");

  const [building, setBuilding] = useState("APART");

  const [result, setResult] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [validated, setValidated] = useState(false);

  const handleBuildingChange = (e) => {
    setBuilding(e.target.value);
  };

  const handleOpenPostcode = () => {
    setShowDaumPostcode(!showDaumPostcode);
  };

  // 카카오주소 API
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let jibunAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // 지번 찾는 함수
    const getJibun = (address) => {
      const commaIndex = address.indexOf(",");
      return address.substring(0, commaIndex);
    };

    console.log(data.userSelectedType);
    if (data.userSelectedType === "J") {
      jibunAddress = getJibun(data.jibunAddressEnglish);
    } else if (data.autoJibunAddressEnglish) {
      jibunAddress = getJibun(data.autoJibunAddressEnglish);
    } else if (data.jibunAddressEnglish) {
      jibunAddress = getJibun(data.jibunAddressEnglish);
    }

    // 주소에 필요한 값 set
    setJibun(jibunAddress);
    setBuildingcode(data.buildingCode);
    setPostcode(data.zonecode);
    setAddress(extraAddress);
  };

  // 진단하기
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const newResult = {
      postcode: postcode,
      buildingcode: buildingcode,
      address: address,
      detailAddress: detailAddress,
      building: building,
      jibun: jibun,
    };

    // result에 새로운 값을 추가합니다.
    setResult(newResult);
    // 결과를 콘솔에 출력합니다.
    if (form.checkValidity()) {
      try {
        // API 호출을 수행하고 응답을 기다립니다.
        setIsLoading(true);
        const res = await axios.post("/api/check", {
          result: newResult,
        });

        setIsLoading(false);

        router.push(
          {
            pathname: "/ResultPage",
            query: {
              response1: JSON.stringify(res.data.response1),
              response2: JSON.stringify(res.data.response2),
              response3: JSON.stringify(res.data.response3),
              response4: JSON.stringify(res.data.response4),
              result: JSON.stringify(newResult),
            },
          },
          "/ResultPage",
          { shallow: true }
        );
      } catch (error) {
        // API 호출 중에 오류가 발생한 경우, 에러를 처리합니다.
        setIsLoading(false);
        console.error(error);
        alert("서버 오류로 나중에 다시 시도해주세요!");
      }
    }
  };

  return (
    <>
      <Head>
        <title>어바웃홈 - 진단하기</title>
        <meta charset="utf-8" />
        <meta name="referrer" content="always" />
        <meta name="description" content="어바웃홈, 진단하기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="어바웃홈 about-home" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="어바웃홈 about-home, 진단하기" />
        <meta property="og:title" content="어바웃홈 about-home, 진단하기" />
        <meta
          property="og:description"
          content="어바웃홈 about-home, 진단하기"
        />
        <meta property="og:url" content="https://about-home.net" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="어바웃홈 about-home" />
        <meta name="twitter:description" content="어바웃홈 about-home" />
      </Head>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Container style={{ minHeight: "70vh" }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div
              style={{
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              건물 종류: <br />
              <Form.Select
                style={{ marginTop: "10px" }}
                value={building}
                onChange={handleBuildingChange}
              >
                <option value="APART">아파트</option>
                <option value="HOUSE">
                  다세대주택 / 연립주택 / 빌라 / 도시형 생활주택
                </option>
                <option value="OFFICETEL">오피스텔</option>
                <option value="TOWNHOUSE">단독주택 / 다가구주택</option>
              </Form.Select>
            </div>
            <Form.Label>
              <h5 style={{ marginTop: "20px" }}>소재지</h5>
            </Form.Label>{" "}
            <Button type="button" onClick={handleOpenPostcode} size="sm">
              검색
            </Button>
            {showDaumPostcode && (
              <div>
                <DaumPostcode
                  onComplete={handleComplete}
                  autoClose={true}
                  width={500}
                  height={600}
                  animation
                />
              </div>
            )}
            <Form.Control
              type="text"
              placeholder="우편번호"
              value={postcode}
              readOnly
            />
            <div>
              <Form.Control
                type="text"
                placeholder="주소"
                value={address}
                readOnly
              />
            </div>
            <div>
              <Form.Control
                type="text"
                placeholder="상세주소"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                required
              />
            </div>
            <Button
              style={{
                width: "100%",
                marginBottom: "20px",
                marginTop: "30px",
              }}
              type="submit"
            >
              진단하기
            </Button>
          </Form>

          <div style={{ paddingTop: "30px", marginRight: "10px" }}>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>참고사항</Accordion.Header>
                <Accordion.Body>
                  <p>
                    1.{" "}
                    <strong>
                      등기부등본이 있으면 좀 더 정확한 정보 조회가 가능해요.
                    </strong>
                  </p>
                  <p>
                    2. <strong>최우선변제권, 권리사항</strong>에 대해 좀 더
                    자세히 알 수 있어요.
                  </p>
                  <p>
                    3. 소재지만 입력해도 해당 소재지의 정보 조회가 가능해요.
                  </p>
                  <p>
                    4. 건물 종류는 <strong>건축물대장, 등기부등본</strong>을
                    통해 확인 가능해요!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      )}
    </>
  );
};

export default CheckHomeNoRegister;
