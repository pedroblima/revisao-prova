import apiAnimes from '@/services/ApiAnimes'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';

const detalhes = ({ Detalhes }) => {

    const [anime, setAnime] = useState([])

    useEffect(() => {
        apiAnimes.get('/anime/{id}').then(resultado => {
            setAnime(resultado.data.data)
        })
    }, [])
    return (
        <Pagina titulo='Detalhes'>
            <Col>
                <Card>
                    <Card.Header as="h5">{anime.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </Col>
        </Pagina>
    )
}

export default detalhes

