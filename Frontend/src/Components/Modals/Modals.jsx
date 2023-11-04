import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BuyIcon from '../../assets/images/buy-iconitem.png'
import './Modals.scss'

 const TitleWraper = ({ButtonModalTitle,bodydata}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className='buyButton btnFix' onClick={handleShow}>
                {ButtonModalTitle}
                <span><img src={BuyIcon} alt="buyicon" /> </span>
            </Button>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className='body_book'>
                {bodydata}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default TitleWraper
