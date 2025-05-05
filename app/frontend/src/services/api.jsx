const URL = 'http://localhost:3001/orders';

async function fetchOrdersApi() {

  try {
    const response = await fetch(URL);

    const data = await response.json();

    if (response.ok) {
      return { data, erro: undefined }; // Sucesso
    } else {
      return { data: undefined, erro: data }; // Erro
    }
  } catch (error) {
    console.error(error);

    // Retorna um objeto do tipo ResponseApi com informações de erro
    return {
      data: undefined,
      erro: {
        error_code: "FETCH_ERROR",
        error_description: "Não foi possível buscar a lista de orders.",
      },
    };
  }
}

export default fetchOrdersApi;