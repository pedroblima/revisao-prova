import apiAnimes from "@/services/ApiAnimes"

apiAnimes.get('/anime')
  .then(resultado => {
    setAnime(resultado.data.dados)
  })
  .catch(error => {
    if (error.response && error.response.status === 404) {
      console.log('Recurso não encontrado.')
    } else {
      console.log('Ocorreu um erro ao buscar os dados da API.')
    }
  })
