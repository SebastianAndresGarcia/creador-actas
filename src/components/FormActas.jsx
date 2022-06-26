import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import { Pagination } from './Pagination';

export function FormActas() {
    const [arraydispositivos, setarraydispositivos] = useState([]);

    const [nroDispositivos, setnroDispositivos] = useState(null)

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(1);
    const maximo = nroDispositivos;

    console.log("maximo " + nroDispositivos)
    console.log("array lenght " + arraydispositivos.length)
    console.log(arraydispositivos)

    const abrirformularios = async () => {
        const array = []
        if (nroDispositivos > 0) {
            for (let i = 0; i < nroDispositivos; i++) {
                array.push({
                    id: i,
                    marca: "",
                    modelo: "",
                    imei: "",
                })
            }
        }
        setarraydispositivos(array);
    }
    const volver = async () => {
        setnroDispositivos(null);
        setarraydispositivos([]);
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

            <Container style={{ display: "flex", justifyContent: "center", margin: "5%" }}>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    {arraydispositivos.length > 0 ? <Row style={{ marginBottom: "3%" }}><Button className="btn btn-outline-success my-2 my-sm-0" variant="outline-success" as={Col} onClick={volver}>Volver a Elegir cantidad de dispositivos</Button></Row> : ""}
                    <Row style={{ display: "flex", justifyContent: "center" }}> {
                        arraydispositivos?.slice(
                            (pagina - 1) * porPagina,
                            (pagina - 1) * porPagina + porPagina
                        ).map(i => (
                            <>
                                <Form key={i.id} className="form-control" style={{ width: "70%", justifyContent: "center" }}>
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
                                </Form>
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

