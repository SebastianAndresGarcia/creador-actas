import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Form, Col, Row, Container, Button, RadioButton } from 'react-bootstrap';
import { Pagination } from './Pagination';
import { FormularioCelular } from './FormularioCelular';
import { FormularioComputadora } from './FormularioComputadora'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';



export function FormActas() {
    const [arraydispositivos, setarraydispositivos] = useState([]);

    const [nroDispositivos, setnroDispositivos] = useState(null)

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(1);
    const maximo = nroDispositivos;
    const [formulario, setformulario] = useState([])
    const [checkedcel, setcheckedcel] = useState(false);
    const [checkedcpu, setcheckedcpu] = useState(false);
    const options = [
        { value: '', text: '--Choose an option--' },
        { value: 'cel', text: 'Celular' },
        { value: 'compu', text: 'Computadora' },
        { value: 'otro', text: 'Otro' },
    ];


    console.log("maximo " + nroDispositivos)
    console.log("array lenght " + arraydispositivos.length)
    console.log(arraydispositivos)
    //console.log("checked " + checked)
    const abrirformularios = async () => {
        const array = []
        if (nroDispositivos > 0) {
            for (let i = 0; i < nroDispositivos; i++) {
                array.push({
                    id: i,
                    tipo: "",
                    marca: "",
                    modelo: "",
                    imei: "",
                    bateria: "",
                    simcard: "",
                    disco: ""
                })
            }
        }
        setarraydispositivos(array);
    }
  
    const volver = async () => {
        setnroDispositivos(null);
        setarraydispositivos([]);
    }
    /*const handleChangecel = () => {
        setformulario('cel')
    }
    const handleChangecpu = () => {
        setformulario('compu')
    }
     const handleChangeotro = () => {
        setformulario('otro')
     } */

    const handleChangecel = async () => {
        setcheckedcpu(false)
        setcheckedcel(true);
    }
    const handleChangecpu = async () => {
        setcheckedcel(false)
        setcheckedcpu(true);
    }
    return (
        <>
            {arraydispositivos.length === 0 ?
                <div style={{ display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                    <Form className="form-inline my-2 my-lg-0" >
                        <Row>
                            <Col> <Form.Label >Cantidad de dispositivos</Form.Label></Col>
                            <Col><Form.Control required type="number" value={nroDispositivos} name="nroDispositivos"
                                onChange={(e) => setnroDispositivos(e.target.value)} /></Col>
                            <Col><Button className="btn btn-outline-success my-2 my-sm-0" variant="outline-success" as={Col} onClick={abrirformularios}>Confirmar</Button></Col>
                        </Row>
                    </Form>
                </div>
                : ""}

            <Container style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
                <Row style={{ display: "flex", justifyContent: "center" }}>

                    {arraydispositivos.length > 0 ? <Row style={{ marginBottom: "3%" }}><Button className="btn btn-outline-success my-2 my-sm-0" variant="outline-success" as={Col} onClick={volver}>Volver a Elegir cantidad de dispositivos</Button></Row> : ""}
                    <Row style={{ display: "flex", justifyContent: "center" }}> {
                        arraydispositivos?.slice(
                            (pagina - 1) * porPagina,
                            (pagina - 1) * porPagina + porPagina
                        ).map(i => (
                            <>
                                <div key={i.id}>

                                    <ToggleButtonGroup key={i.id} type="radio" name="options" defaultValue={i.tipo} >
                                        <ToggleButton id="tbg-radio-1" value={'cel'} onChange={(e) => {

                                            i.tipo = e.target.value
                                          //  handleChangecel()
                                            //console.log("dont show task detail")
                                        }}>
                                            Celular
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-2" value={'compu'} onChange={e => {

                                            i.tipo = e.target.value
                                          //  handleChangecpu()
                                        }}>
                                            Computadora
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-3" value={'otro'} onChange={e => {
                                            
                                            i.tipo = e.target.value
                                            //handleChangeotro()
                                        }}>
                                            Otro
                                        </ToggleButton>
                                    </ToggleButtonGroup>

                                    {i.tipo === "cel"  ?
                                        <Form className="form-control" style={{ width: "70%", justifyContent: "center" }}>

                                            <h4>Dispositivo N° {i.id + 1} </h4>
                                            <Form.Group className="mb-3" controlId={i.id}>
                                                <Form.Label>Marca</Form.Label>
                                                <Form.Control type="text" placeholder="marca" name="marca" defaultValue={i.marca} onChange={e => i.marca = String(e.target.value)} />
                                                <Form.Label>Modelo</Form.Label>
                                                <Form.Control type="text" placeholder="modelo" name="modelo" defaultValue={i.modelo} onChange={e => i.modelo = String(e.target.value)} />
                                                <Form.Label>IMEI</Form.Label>
                                                <Form.Control type="number" required name="imei" defaultValue={i.imei} onChange={e => i.imei = String(e.target.value)} />
                                            </Form.Group>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Guardar
                                            </Button>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Modificar
                                            </Button>

                                        </Form> : ""}
                                    {i.tipo === "compu"  ?
                                        <Form className="form-control" style={{ width: "70%", justifyContent: "center" }}>
                                            <h4>Dispositivo N° {i.id + 1} </h4>
                                            <Form.Group className="mb-3" controlId={i.id}>
                                                <Form.Label>Marca</Form.Label>
                                                <Form.Control type="text" placeholder="marca" name="marca" defaultValue={i.marca} onChange={e => i.marca = String(e.target.value)} />
                                                <Form.Label>Modelo</Form.Label>
                                                <Form.Control type="text" placeholder="modelo" name="modelo" defaultValue={i.modelo} onChange={e => i.modelo = String(e.target.value)} />
                                                <Form.Label>S/N</Form.Label>
                                                <Form.Control type="text" required name="imei" defaultValue={i.imei} onChange={e => i.imei = String(e.target.value)} />
                                                <Form.Label>Batería</Form.Label>
                                                <Form.Control type="text" required name="bateria" defaultValue={i.bateria} onChange={e => i.bateria = String(e.target.value)} placeholder="marca y modelo" />
                                                <Form.Label>Disco Rígido</Form.Label>
                                                <Form.Control type="text" required name="disco" defaultValue={i.disco} onChange={e => i.disco = String(e.target.value)} placeholder="marca-modelo-capacidad" />

                                            </Form.Group>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Guardar
                                            </Button>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Modificar
                                            </Button>
                                        </Form>
                                        : ""}
                                </div>
                            </>
                        ))
                    }</Row>
                </Row>
            </Container>
            {arraydispositivos.length > 0 ?
                <div >
                    <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
                </div>
                : ""}
        </>
    )
}

{/* 
<div key={i.id}>
                                    {i.tipo === "cel" ?
                                        <Form className="form-control" style={{ width: "70%", justifyContent: "center" }}>                                         
                                        
                                            <h4>Dispositivo N° {i.id + 1} </h4>
                                            <Form.Group className="mb-3" controlId={i.id}>
                                                <Form.Label>Marca</Form.Label>
                                                <Form.Control type="text" placeholder="marca" name="marca" defaultValue={i.marca} onChange={e => i.marca = String(e.target.value)} />
                                                <Form.Label>Modelo</Form.Label>
                                                <Form.Control type="text" placeholder="modelo" name="modelo" defaultValue={i.modelo} onChange={e => i.modelo = String(e.target.value)} />
                                                <Form.Label>IMEI</Form.Label>
                                                <Form.Control type="number" required name="imei" defaultValue={i.imei} onChange={e => i.imei = String(e.target.value)} />
                                            </Form.Group>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Guardar
                                            </Button>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Modificar
                                            </Button>

                                        </Form> : ""}
                                        {i.tipo === "compu" ?
                                            <Form  className="form-control" style={{ width: "70%", justifyContent: "center" }}>
                                            <h4>Dispositivo N° {i.id + 1} </h4>
                                            <Form.Group className="mb-3" controlId={i.id}>
                                                <Form.Label>Marca</Form.Label>
                                                <Form.Control type="text" placeholder="marca" name="marca" defaultValue={i.marca} onChange={e => i.marca = String(e.target.value)} />
                                                <Form.Label>Modelo</Form.Label>
                                                <Form.Control type="text" placeholder="modelo" name="modelo" defaultValue={i.modelo} onChange={e => i.modelo = String(e.target.value)} />
                                                <Form.Label>S/N</Form.Label>
                                                <Form.Control type="text" required name="imei" defaultValue={i.imei} onChange={e => i.imei = String(e.target.value)} />
                                                <Form.Label>Batería</Form.Label>
                                                <Form.Control type="text" required name="bateria" defaultValue={i.bateria} onChange={e => i.bateria = String(e.target.value)} placeholder="marca y modelo" />
                                                <Form.Label>Disco Rígido</Form.Label>
                                                <Form.Control type="text" required name="disco" defaultValue={i.disco} onChange={e => i.disco = String(e.target.value)} placeholder="marca-modelo-capacidad" />
                                
                                            </Form.Group>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Guardar
                                            </Button>
                                            <Button style={{ margin: "5px" }} variant="primary" >
                                                Modificar
                                            </Button>
                                        </Form>
                                        :""}
                                </div>

 <ToggleButtonGroup type="radio" name="options" defaultValue={i.tipo} >
                                    <ToggleButton id="tbg-radio-1" value={'cel'} onChange={e => i.tipo = e.target.value}>
                                        Celular
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-2" value={'compu'} onChange={e => i.tipo = e.target.value}>
                                        Computadora
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-3" value={'otro'} onChange={e => i.tipo = e.target.value}>
                                        Otro
                                    </ToggleButton>
                                </ToggleButtonGroup>

<select defaultValue={i.tipo} onChange={e => i.tipo = e.target.value} >
                                        {options.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </select>
                                
                                {i.tipo === 'cel' ?
                                    <FormularioCelular
                                        key={i.id}
                                        id={i.id}
                                        marca={i.marca}
                                        modelo={i.modelo}
                                        imei={i.imei}
                                        bateria={i.bateria}

                                    /> : ""}
                                {i.tipo === 'compu' ?
                                    <FormularioComputadora
                                        key={i.id}
                                        id={i.id}
                                        marca={i.marca}
                                        modelo={i.modelo}
                                        imei={i.imei}
                                        bateria={i.bateria}
                                        disco={i.disco}

                                    /> : ""}



                                <ToggleButtonGroup type="radio" name="options" defaultValue={0} onChange={handleChange}>
                                    <ToggleButton id="tbg-radio-1" value={1} >
                                        Celular
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-2" value={2}>
                                        Computadora
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-3" value={3}>
                                        Otro
                                    </ToggleButton>
                                </ToggleButtonGroup>
<Form key={i.id} className="form-control" style={{ width: "70%", justifyContent: "center" }}>
                                    <h4>Dispositivo N° {i.id + 1} </h4>
                                    <Form.Group className="mb-3" controlId={i.id}>
                                        <Form.Label>Marca</Form.Label>
                                        <Form.Control type="text" placeholder="marca" name="marca" defaultValue={i.marca} onChange={e => i.marca = String(e.target.value)} />
                                        <Form.Label>Modelo</Form.Label>
                                        <Form.Control type="text" placeholder="modelo" name="modelo" defaultValue={i.modelo} onChange={e => i.modelo = String(e.target.value)} />
                                        <Form.Label>IMEI</Form.Label>
                                        <Form.Control type="number" required name="imei" defaultValue={i.imei} onChange={e => i.imei = String(e.target.value)} />
                                        <Form.Label>Batería</Form.Label>
                                        <Form.Control type="number" required name="bateria" defaultValue={i.bateria} onChange={e => i.bateria = String(e.target.value)} placeholder="marca y modelo" />
                                    </Form.Group>
                                    <Button style={{ margin: "5px" }} variant="primary" >
                                        Guardar
                                    </Button>
                                    <Button style={{ margin: "5px" }} variant="primary" >
                                        Modificar
                                    </Button>
</Form>*/}