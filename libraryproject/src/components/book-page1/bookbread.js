import React from 'react'
import { Col, Row} from 'react-bootstrap';
import "../book-page1/bookbread.scss";
const Bookbread = () => {
  return (
    <div class="breadcrumb3">
    <nav aria-label="breadcrumb">
     
 <Row>
 <Col class="breadcrumb-item active"aria-current="page">Dashboard</Col>
     <Col  class="breadcrumb-item active"aria-current="page">Book</Col>
     <Col  class="breadcrumb-item active" aria-current="page">Historical Fiction</Col>
 </Row>
 
</nav>
 </div>
  )
}

export default Bookbread