import React from "react";
import { Table, Container } from "react-bootstrap";
import Link from "next/link";

const BoardList = ({ noticeChild }) => {
  console.log(noticeChild);
  return (
    <>
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>공지사항</h2>
      <Container>
        <Table bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>번호</th>
              <th style={{ width: "50%" }}>제목</th>
              <th style={{ width: "15%" }}>작성자</th>
              <th style={{ width: "15%" }}>날짜</th>
            </tr>
          </thead>
          <tbody>
            {noticeChild &&
              noticeChild.reverse().map((notice, index) => (
                <tr key={notice.id}>
                  <td>{noticeChild.length - index}</td>
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
                  <td>{notice.created_time.slice(0, 10)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default BoardList;
