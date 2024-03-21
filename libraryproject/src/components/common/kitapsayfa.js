import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import "../common/kitapsayfa.scss";

const Kitapsayfa = () => {
   
    const[member,setMember]=useState("");
    const[notes,setNotes]=useState("");
    const[showConfirmation, setShowConfirmation] = useState(false);

    const handleMemberChange =(e) =>{
        setMember(e.target.value);
    };

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    const handleLoan = () => {
        // Kredi işlemini gerçekleştirme kodu
        console.log("Kredi oluşturuldu!");
        setShowConfirmation(false);
    };

    const handleConfirmLoan = () => {
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const handleDelete = () => {
        console.log("form silindi!")
    }

    const handleSubmit = () => {
        console.log("form gönderildi")
    }

     // Seçilen üyenin puanına göre son kullanma tarihini hesapla
    /* const calculateExpireDate = () => {
         / Son kullanma tarihini hesaplamak için mantık uygulayın
        return "Son Kullanma Tarihi";
    };*/

  return (
    
    <Form className='formalan'>

        <Form.Group className='ad'controlId='member'>
            <Form.Label >Name</Form.Label>
            <Form.Control
            className='adalan'
             type='text'
             minLength={2}
             list="members"
             required
             onChange={handleMemberChange}
             value={member}
             
            />
            <datalist id="members">
                <option value="User1">User1</option>
                <option value="User2">User2</option>
            </datalist>
        </Form.Group>

        <Form.Group className='not' controlId="notes">
                        <Form.Label>Notlar:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            maxLength={300}
                            onChange={handleNotesChange}
                            value={notes}
                        />
                    </Form.Group>
                    <Button className='loan' variant="primary" onClick={handleConfirmLoan}>Loan</Button>

        <Form.Group className='isbn' controlId='isbn'> 
            <Form.Label>ISBN</Form.Label>
            <Form.Control
            type='text'
            pattern='\d{3}-\d{2}-\d{6}-\d{1,2}'
            maxLength={17}
            required
            />
        </Form.Group>

        <Form.Group className='rafkod' controlId='shelfCode'>
            <Form.Label>Raf Kodu:</Form.Label>
            <Form.Control
              type='text'
              pattern='[A-Za-z]{2}-\d{3}'
              maxLength={6}
              required
            />
        </Form.Group>
          
        <Form.Group className='yazar' controlId="author">
             <Form.Label>Yazar:</Form.Label>
             <Form.Control
                  as="select"
                 required
             >
                 <option value="">Seçiniz...</option>
                  {/* Yazarları burada listelemek için gerekli kod */}
            </Form.Control>
        </Form.Group>

        <Form.Group className='yayinci'>
            <Form.Label>Yayıncı:</Form.Label>
            <Form.Control
              as="select"
              required
            >
                <option value="">seçiniz...</option>
                {/*yayinci listesi*/}
            </Form.Control>
        </Form.Group>

        <Form.Group className='kategory' controlId="category">
                    <Form.Label>Kategori:</Form.Label>
                    <Form.Control
                        as="select"
                        required
                    >
                        <option value="">Seçiniz...</option>
                        {/* Kategorileri burada listelemek için gerekli kod */}
                    </Form.Control>
                </Form.Group>

                <Button variant='danger' className='deletebuton'  onClick={handleDelete}>Delete</Button>
                <Button variant='success' className='submitbuton' onClick={handleSubmit}>submit</Button>
           
                <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Krediyi Onayla</Modal.Title>
                </Modal.Header>
                <Modal.Body className='yazi'>
                Kredi işlemini onaylamak istediğinizden emin misiniz?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmation}>Cancel</Button>
                    <Button variant="primary" onClick={handleLoan}>Confirm</Button>
                </Modal.Footer>
            </Modal>
             

    </Form>
  )
}

export default Kitapsayfa