import './App.css';
import { Route, Routes } from 'react-router-dom';
import InvoicesPage from './pages/invoicesPages';

function App() {
  return (
      <Routes>
        <Route path="/invoices" element={<InvoicesPage />} />
      </Routes>
  )
}

export default App
