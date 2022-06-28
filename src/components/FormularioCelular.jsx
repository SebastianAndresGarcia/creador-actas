import React, { useState } from 'react';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';

export const FormularioCelular = ({  id, marca, modelo, imei, bateria }) => {

    return (
        <Form  className="form-control" style={{ width: "70%", justifyContent: "center" }}>
            <h4>Dispositivo N° {id + 1} </h4>
            <Form.Group className="mb-3" controlId={id}>
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" placeholder="marca" name="marca" defaultValue={marca} onChange={e => marca = String(e.target.value)} />
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="text" placeholder="modelo" name="modelo" defaultValue={modelo} onChange={e => modelo = String(e.target.value)} />
                <Form.Label>IMEI</Form.Label>
                <Form.Control type="text" required name="imei" defaultValue={imei} onChange={e => imei = String(e.target.value)} />
                <Form.Label>Batería</Form.Label>
                <Form.Control type="text" required name="bateria" defaultValue={bateria} onChange={e => bateria = String(e.target.value)} placeholder="marca y modelo" />
            </Form.Group>
            <Button style={{ margin: "5px" }} variant="primary" >
                Guardar
            </Button>
            <Button style={{ margin: "5px" }} variant="primary" >
                Modificar
            </Button>
        </Form>
    )
}