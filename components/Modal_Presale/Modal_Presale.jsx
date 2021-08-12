import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import OrderCallForm  from './Form_Presale'
import ReactMarkdown from "react-markdown";

// import data
import { personal_data_policy } from '../../data/personal_data_policy/personal_data_policy'
import { local } from '../../data/localization_data/components/Modal_Presale/Modal_Presale'
// import { kassa } from './kassa.html'

import {createMarkup} from './kassa'

export function ModalPresale() {

    const [show_presale, setShow_presale] = useState(false);
    const handleClose_presale = () => setShow_presale(false);
    const handleShow_presale = () => setShow_presale(true);
    const handleU_presale = () => console.log('Understood');

    return (
        <>
          <div onClick={handleShow_presale}>
            {local.link_text}
          </div>

          <Modal
            onHide={handleClose_presale}
            show={show_presale}
            keyboard={false}
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {local.modal_header_title}
              </Modal.Title>
            </Modal.Header>
            
            {/* <Modal.Body>
              <OrderCallForm />
            </Modal.Body> */}

            {/* <Modal.Footer> */}


              {/* <Button 
                onClick={handleClose_presale}
                variant="secondary" 
              >
                Close
              </Button>
              <Button onClick={handleU_presale} variant="success">Understood</Button> */}
              {/* <ReactMarkdown
                source={personal_data_policy[0].text} 
              /> */}
            {/* </Modal.Footer> */}
            <div dangerouslySetInnerHTML={createMarkup()} />
            
            <br/>
            <br/>
          </Modal>
        </>
    )
}