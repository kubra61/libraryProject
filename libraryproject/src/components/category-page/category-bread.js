import React from 'react'
import { Col, Row} from 'react-bootstrap';
import "../category-page/category-bread.scss";
const Categorybread = () => {
  return (
    <div class="breadcrumb2">
    <nav aria-label="breadcrumb">
     
 <Row>
 <Col class="breadcrumb-item active"aria-current="page">Dashboard</Col>
     <Col  class="breadcrumb-item active"aria-current="page">Category</Col>
     <Col  class="breadcrumb-item active" aria-current="page">Historical Fiction</Col>
 </Row>
 
</nav>
 </div>
  )
}

export default Categorybread