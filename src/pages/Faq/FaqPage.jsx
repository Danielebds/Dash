import React from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import Header from '../../components/Header.jsx';
import Faq from '../../components/Faq.jsx';

const FAQPage = () => {
  return (
    <div className="flex bg-slate-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-4">
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
