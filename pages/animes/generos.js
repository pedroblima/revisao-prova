import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiAnimes from '@/services/ApiAnimes';

const generos = () => {
    const [anime, setAnime] = useState([])

    useEffect(() => {
        ApiAnimes.get('/genres/anime').then(resultado => {
            setAnime(resultado.data.data)
        })
    }, [])
    return (
    <Pagina titulo='Generos'>
         <ol>
          {anime.map(item => (
            <li>{item.name}({item.count})</li>
          ))}
        </ol>
    </Pagina>
  )
}

export default generos