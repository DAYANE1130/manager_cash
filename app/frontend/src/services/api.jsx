const URL = 'http://localhost:3001/orders';

async function fetchOrdersApi() {

  try {
    const response = await fetch(URL);

    const data = await response.json();
    
    if (response.ok) {
      return { data, erro: undefined }; // Sucesso
    } else {
      return { data: undefined, erro: data.message }; // Erro
    }
  } catch (error) {
    console.error(error);

    // Retorna um objeto do tipo ResponseApi com informações de erro
    return {
      data: undefined,
      erro: {
        error_code: "FETCH_ERROR",
        error_description: data.message || 'Erro ao buscar dados.',
      },
    };
  }
}

export default fetchOrdersApi;