import React, { useEffect, useState } from 'react';
import fetchOrdersApi from '../services/api';
import Invoice from './Orders/Invoice';

const ListInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  //const [dataProviders, setDataProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, erro } = await fetchOrdersApi();

      if (erro) {
        setErro(erro.error_description || 'Erro ao carregar notas fiscais');
        return;
      }

      setInvoices(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Notas Fiscais</h2>
      <br></br>
      <p>Visualize as notas fiscais que você tem:</p>
      <table>
        <thead>
          <tr>
            <th>Nota Fiscal</th>
            <th>Sacado</th>
            <th>Cedente</th>
            <th>Valor</th>
            <th>Emissão</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((order, id) => (
            <Invoice key={id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListInvoice;
