import React from 'react'
//import { Breadcrumb } from 'react-bootstrap';
import "./breadcrumb.scss";
import { Col, Row} from 'react-bootstrap';

const BreadCrumb = () => {
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

export default BreadCrumb;