import React, { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { jsonDeptList } from "../service/dbLogic"


const NoticeDetail = (props) => {
  // DeptRow에서 쿼리스트링으로 넘어온 부서번호 담기
  const { deptno } = useParams()
  const [deptVO, setDeptVO] = useState({
    n_no: 0,
    n_title: "",
    n_writer: "",
    n_content: "",
    n_date: ""
  })
  useEffect(() => {
    const asyncDB = async () => {
      const res = await jsonDeptList({ n_no: n_no })
      console.log(res) //fetch함수와 차이점 발견 - JSON.stringify, JSON.parse사용하지 않아도 바로 json받아냄
      setDeptVO(res.data[0])
    }
    asyncDB()
  }, [deptno]) //의존배열이 있고 없고는 useState의 순서에 영향없다

    return (
        <>
           <div className="container">
        <div className="page-header">
          <h2>
            공지관리&nbsp;<i className="fa-solid fa-angles-right"></i>&nbsp;
            <small>공지상세보기</small>
          </h2>
          <hr />
        </div>
        <Card style={{ width: "58rem" }}>
          <Card.Body>
            <div className="dept-detail">
              <Card.Img
                variant="top"
                style={{ width: "250px" }}
                src={`${deptVO.FILEURL}`}
              />
              <div className="dept-header">
                <Card.Title>{notice.n_no}</Card.Title>
                <Card.Text>{notice.n_title}</Card.Text>
                <Card.Text>{notice.n_writer}</Card.Text>
                <Card.Text>{notice.n_content}</Card.Text>
                <Card.Text>{notice.n_date}</Card.Text>
              </div>
            </div>
          </Card.Body>
          <div>
            <Button variant="primary">삭제</Button>
            <Link to="/notice" className="nav-link">
              공지목록
            </Link>
          </div>
        </Card>
      </div> 
        </>
    );
}

export default NoticeDetail;