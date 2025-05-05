import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalProvider = ({ isOpen, onClose, provider }) => {
  if (!provider) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Dados do Cedente">
      <h2>Dados do Cedente</h2>
      <p><strong>Nome:</strong> {provider.name}</p>
      <p><strong>Trading Name:</strong> {provider.tradingName}</p>
      <p><strong>CNPJ:</strong> {provider.cnpj}</p>
      <p><strong>E-mail:</strong> {provider.email}</p>
      <button onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default ModalProvider;
