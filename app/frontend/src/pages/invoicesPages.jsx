import React from 'react';
import Sidebar from '../components/SideBar';
import HeaderPage from '../components/HeaderPage';
import InvoiceList from '../components/Orders/InvoiceList';

const InvoicesPage = () => {
  return (
    <>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />


      </head>
      <body>
        <main className="app-layout" style={{ display: 'flex' }}>
          <aside className='sidebar'>
            <Sidebar />
          </aside>

          <section className='section' style={{ flex: 1, padding: '24px' }}>
            <HeaderPage />
            <div className="frame">
              <InvoiceList />
            </div>
          </section>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>

    </>

  );
};

export default InvoicesPage;
