import {useState}from 'react'
import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Order = () =>{
    const [regData,setRegData] = useState()
    const [smShow, setSmShow] = useState(false);

    const changeReg = (event) =>{
     setRegData({...regData,[event.target.name]:event.target.value})
    }
    console.log(regData);


    return(
        <>
            <div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <input style={{width:'300px',margin:'10px 0'}} placeholder='введите данные' name='name' onChange={(e)=>{changeReg(e)}} />
                    <input style={{width:'300px',margin:'10px 0'}} placeholder='введите данные' name='surname' onChange={(e)=>{changeReg(e)}} />
                    <input style={{width:'300px',margin:'10px 0'}} placeholder='введите данные' name='adress' onChange={(e)=>{changeReg(e)}} />
                    <input style={{width:'300px',margin:'10px 0'}} placeholder='введите данные' name='paymants' onChange={(e)=>{changeReg(e)}} />
                    <input style={{width:'300px',margin:'10px 0'}} placeholder='введите данные' name='number' onChange={(e)=>{changeReg(e)}} />
                    <Button style={{width:'300px',margin:'10px 0'}} onClick={() => setSmShow(true)}>отправить</Button>

                </div>
                <div></div>


            </div>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Small Modal
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>

        </>
    )
}