import Modal from 'react-bootstrap/Modal'
import {Button,Form,Dropdown} from 'react-bootstrap'
import {getTypes} from '../../actions/actionsGetTypes'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {addTovar} from '../../actions/actionAddTovar'


export const AddDevice = ({show,onHide}) => {
    const dispatch = useDispatch()
    
    const type = useSelector(state=>state.showTypes.getTypes)
    const [SelectedType,setSelectedType] = useState('')
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [files,setFiles] = useState(null)
    console.log(SelectedType,name,price,files);

    const sendData = ({typeId:SelectedType,name,price,files}) => {
        dispatch(addTovar({typeId,name,price,files}))
    }
    
    useEffect(()=>{
      dispatch(getTypes())
    },[dispatch])
    
    
    
    
    console.log(type);

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
          Добавить Товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown >
                <Dropdown.Toggle> Выберите тип</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {type.map(type=>
                    <Dropdown.Item onClick={(e)=>setSelectedType(type.id)}  key={type.id} value={type.name}> {type.name}</Dropdown.Item>
                    )}
                  </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                className ='mt-3'
                placeholder = 'введите название устройства'
                onChange={(e)=>{setName(e.target.value)}}
                name='name-Tovar'
            >
            </Form.Control>
            <Form.Control
                className ='mt-3'
                placeholder = 'введите стоимость устройства'
                type = 'number'
                name = 'price'
                onChange={(e)=>{setPrice(e.target.value)}}
            >
            </Form.Control>
            <Form.Control
                className ='mt-3'
                type='file'
                name='file'
                onChange={(e)=>{setFiles(e.target.files[0])}}
            >
            </Form.Control>
              <hr/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={sendData}>Добавить</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}