import React, { useEffect, useState } from 'react';
import fetchOrdersApi from '../../services/api';
import Invoice from './Invoice';
import ModalProvider from '../Providers/ModalProvider';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProvider, setselectedProvider] = useState(null);

  function handleOpenModal(provider, cnpj) {
    setselectedProvider({...provider, cnpj});
    setModalIsOpen(true);

  }

  function handleCloseModal() {
    setModalIsOpen(false);
    setselectedProvider(null)
  }


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
      {/* <h2>Notas Fiscais</h2>
      <br></br>
      <p>Visualize as notas fiscais que você tem:</p> */}
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
            <Invoice
              key={id}
              order={order}
              onClickProvider={() => handleOpenModal(order.provider, order.cnpj.cnpj)}
            />
          ))}
        </tbody>
      </table>
      <ModalProvider
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        provider={selectedProvider}
      />
    </div>
  );
};

export default InvoiceList;
