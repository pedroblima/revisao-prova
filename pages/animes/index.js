import Pagina from '@/components/Pagina';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import ApiAnimes from '@/services/apiAnimes';
import { Button, Col, Table } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs'

const index = () => {

    const [anime, setAnime] = useState([])

    useEffect(() => {
        ApiAnimes.get('/anime').then(resultado => {
            setAnime(resultado.data.data)
        })
    }, [])
    return (
        <Pagina titulo='Anime'>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Duração</th>
                            <th>Ano</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {anime.map(item => (
                            <tr key={item.mal_id}>
                                <td>{item.title}</td>
                                <td>{item.duration}</td>
                                <td>{item.year}</td>
                                <td>
                                    <Link href={'/animes/' + item.mal_id}>
                                       <BsSearch/>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Pagina>
    )
}

export default index
