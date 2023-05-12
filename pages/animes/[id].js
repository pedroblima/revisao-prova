import apiAnimes from '@/services/ApiAnimes'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import Link from 'next/link';
import {GrFormView} from 'react-icons/gr'

const detalhes = ({ anime }) => {

    //const [anime, setAnime] = useState([])

    //useEffect(() => {
    // apiAnimes.get('/anime/{id}').then(resultado => {
    //   setAnime(resultado.data.data)
    //   })
    //}, [])


    return (
        <Pagina titulo={anime.title}>
            <Row>

                <Col md={4}>
                    <Card border="danger" >
                        <Card.Header className='bg-danger text-white'>Foto</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={anime.images.jpg.image_url} />
                            <a target='_blank' className='mt-2 btn btn-primary' href={anime.images.jpg.image_url}>
                                 <GrFormView />
                            </a>
                        </Card.Body>
                    </Card>

                </Col>



                <Col md={8}>
                    <Card border="danger">
                        <Card.Header className='bg-danger text-white'>{anime.title}</Card.Header>
                        <Card.Body>


                            <p><strong>Episodios: </strong>{anime.episodes}</p>
                            <p><strong>Status: </strong>{anime.status}</p>
                            <p><strong>Ano: </strong>{anime.year || "sem ano cadastrado"}</p>
                            <p><strong>Duração: </strong>{anime.duration}</p>
                            <p><strong>Avaliação: </strong>{anime.score}</p>
                            <p>{anime.synopsis}</p>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Link className='mt-2 btn btn-success' href='/animes'>
                Voltar 
            </Link>
        </Pagina>
    )
}

export default detalhes

export async function getServerSideProps(context) {
    const id = context.params.id

    const resultado = await apiAnimes.get('/anime/' + id)
    const anime = resultado.data.data


    return {
        props: { anime },
    }
}
