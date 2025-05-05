// src/components/Order.jsx
import React from 'react';

const Invoice = ({ order }) => {
  const formatCurrency = (value) =>
    Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const formatDate = (date) =>
    new Date(date).toLocaleDateString('pt-BR');

  const getStatusLabel = (code) => {
    const map = { '0': 'Pendente', '1': 'Confirmado', '7': 'Recebido' };
    return map[code] || 'Desconhecido';
  };

  console.log('eu sou os dados do provider', order.provider, order.cnpj)

  return (
    <tr>
      <td>{order.nNF}</td>
      <td>{order.buyer?.name}</td>
      <td>{order.provider?.name}</td>
      <td>{formatCurrency(order.value)}</td>
      <td>{formatDate(order.emissionDate)}</td>
      <td>{getStatusLabel(order.orderStatusBuyer)}</td>
      <button>Dados do cedente</button>
    </tr>
  );
};

export default Invoice;

