import React from "react";
import { Card, Accordion } from "react-bootstrap";

const CheckInfo = () => {
  return (
    <>
      <div style={{ paddingTop: "30px", marginRight: "10px" }}>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>참고사항</Accordion.Header>
            <Accordion.Body>
              <p>1. 거래가 없는 달은 노출되지 않아요!</p>
              <p>
                2. 평균 전세 및 실거래가는 단순한 평균 값이며, 개별 거래시
                가격은 상이할 수 있어요!
                <br /> 따라서 실제 거래 시 가격 협상이 이루어지며, 가격 또는
                전세가는 실제 거래가격보다 낮거나 높을 수 있어요!!
              </p>
              <p>
                3. 평균 실제 거래 가격은 시장의 경향을 파악하는 데 도움을 줄 수
                있지만, 개별 지번의 가치를 판단하는 데에는 절대적인 기준이
                아니예요!
              </p>
              <p>4. 월세는 보증금에 따라 가격이 차이가 크다보니 제외했어요!</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default CheckInfo;
