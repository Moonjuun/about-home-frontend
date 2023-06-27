import React from "react";
import { Table, Container } from "react-bootstrap";
import Link from "next/link";

const BoardList = ({ noticeChild }) => {
  console.log(noticeChild);

  // noticeChild 배열을 역순으로 만듭니다.
  const reversedNoticeChild = noticeChild ? [...noticeChild].reverse() : [];

  return (
    <>
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>공지사항</h2>
      <Container>
        <Table bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>번호</th>
              <th style={{ width: "50%" }}>제목</th>
              <th style={{ width: "20%" }}>작성자</th>
              <th style={{ width: "20%" }}>날짜</th>
            </tr>
          </thead>
          <tbody>
            {reversedNoticeChild.map((notice, index) => (
              <tr key={notice.id}>
                <td>{reversedNoticeChild.length - index}</td>
                <td>
                  <Link
                    href={`https://choiii.notion.site/${notice.id.replace(
                      /-/g,
                      ""
                    )}`}
                    style={{ textDecoration: "none" }}
                  >
                    {notice.child_page.title}
                  </Link>
                </td>
                <td style={{ color: "#0D6EFD" }}>운영자</td>
                <td>
                  {notice.created_time.slice(0, 4)}.{" "}
                  {notice.created_time.slice(5, 7)}.{" "}
                  {notice.created_time.slice(8, 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default BoardList;
