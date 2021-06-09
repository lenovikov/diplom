import {Button,Container} from 'react-bootstrap'
import {AddType} from '../components/modals/ModalAddType'
import {AddDevice} from '../components/modals/ModalAddTovar'
import { useState } from 'react'

export const AddTovar = () => {
    const [typeVisible,setTypeVisible] = useState(false)
    const [deivceVisible,setDeviceVisible] = useState(false)



    return (
        <Container className='d-flex flex-column' >
            <Button onClick={(e)=>{setTypeVisible(true)}} variant={"outline-dark"} className='mt-2' >Добавить тип</Button>
            <Button onClick={(e)=>{setDeviceVisible(true)}} variant={"outline-dark"} className='mt-2' >Добавить устройство</Button>
            <AddType show={typeVisible} onHide={()=>setTypeVisible(false)} />
            <AddDevice show={deivceVisible}  onHide={()=>setDeviceVisible(false)} />

        </Container>
    )
} 