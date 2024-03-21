import React from 'react'
import { Col, Row} from 'react-bootstrap';
import "../useredite-page/userbread.scss";
const Userbread = () => {
  return (
    <div class="breadcrumb4">
    <nav aria-label="breadcrumb">
     
 <Row>
 <Col class="breadcrumb-item active"aria-current="page">Dashboard</Col>
     <Col  class="breadcrumb-item active"aria-current="page">Users</Col>
     <Col  class="breadcrumb-item active" aria-current="page">Hank</Col>
 </Row>
 
</nav>
 </div>
  )
}

export default Userbread