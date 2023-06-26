import React from "react";
import { Table, Container } from "react-bootstrap";

const BoardList = (noticeChild) => {
  console.log("noticeChild", noticeChild);

  return (
    <>
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>공지사항</h2>
      <Container>
        <Table striped bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>번호</th>
              <th style={{ width: "50%" }}>제목</th>
              <th style={{ width: "15%" }}>작성자</th>
              <th style={{ width: "15%" }}>날짜</th>
            </tr>
          </thead>
          <tbody>
            {noticeChild.noticeChild &&
              noticeChild.noticeChild.reverse().map((notice, index) => (
                <tr key={notice.id}>
                  <td>{noticeChild.noticeChild.length - index}</td>
                  <td>
                    <a href={notice.id}>{notice.child_page.title}</a>
                  </td>
                  <td>운영자</td>
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
