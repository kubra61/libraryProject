import React, { useState } from 'react'
import { Button, Container, Form, Nav } from 'react-bootstrap'
import "./authorupdateform.scss";
import { Link } from 'react-router-dom';
const Authorupdateform = () => {
  const [form, setForm] = useState({
    name: ''
  });

  const[showData,setShowData]=useState(false);

  const handleSubmit=(e)  =>{
    e.preventDefault();
  };

  const handleShow = () =>{
    setShowData(true);
  };

  const handleDelete=(id)=>{
    setForm({ name: '' }); // Name alanını sıfırla
    alert('Name deleted');
  }

  return (
    <Container className='outside'>
        <Form onSubmit={handleSubmit}>
           <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter Name"
             value={form.name}
             onChange={(e)=>{setForm(prev=>({...prev,name : e.target.value}))}}/>
          </Form.Group>
        </Form>
        <Button 
          type='submit'
          className='send'
        >
          send
        </Button>

        <Button  type="button"  onClick={handleDelete} className='delete' >
          Delete
        </Button>

        <Button 
          onClick={handleShow} 
          className='show' 
                
        >
            Show
        </Button>

        {
            showData && (
                <div>
                    <p>{form.name}</p>
                </div>
            )
        }

        <Nav>
          <Nav.Link as={Link} to="/category" >category</Nav.Link>
          <Nav.Link as={Link} to="/Book" >Book</Nav.Link>
          <Nav.Link as={Link} to={"/user"}>User</Nav.Link>
        </Nav>
   

    </Container>

    
  )
}

export default Authorupdateform;