import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const LoanForm = ({ canBeBorrowed }) => {
    const [member, setMember] = useState("");
    const [notes, setNotes] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleMemberChange = (e) => {
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

    // Calculate expire date based on selected member's score
    const calculateExpireDate = () => {
        // Implement logic to calculate expire date
        return "Expire Date";
    };

    return (
        <>
            {canBeBorrowed && (
                <Form>
                    <Form.Group controlId="member">
                        <Form.Label>Üye:</Form.Label>
                        <Form.Control
                            type="text"
                            value={member}
                            onChange={handleMemberChange}
                            minLength={2}
                            list="members"
                            required
                        />
                        <datalist id="members">
                            {/* Use a list of users here */}
                            <option value="User1">User1</option>
                            <option value="User2">User2</option>
                        </datalist>
                    </Form.Group>
                    <Form.Group controlId="notes">
                        <Form.Label>Notlar:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={notes}
                            onChange={handleNotesChange}
                            maxLength={300}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleConfirmLoan}>Loan</Button>
                </Form>
            )}

            <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Krediyi Onayla</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Kredi işlemini onaylamak istediğinizden emin misiniz?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmation}>Cancel</Button>
                    <Button variant="primary" onClick={handleLoan}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoanForm;
