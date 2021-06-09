import Modal from 'react-bootstrap/Modal'
import {Button,Form} from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addType} from '../../actions/actionAddTovar'


export const AddType = ({show,onHide}) => {
    const dispatch = useDispatch()


    const[value,setValue] = useState()

    const sendData = (value) =>{
      console.log(value);
        dispatch(addType(value))
        onHide()
        setValue('')
    }

    return(
        <div>
            <Modal
        show={show}
        onHide ={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control placeholder={'Введите название типа'} value={value} onChange={(e)=>setValue(e.target.value)}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={()=>sendData(value)}>Добавить</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}