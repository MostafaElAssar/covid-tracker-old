import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Routes from './routes/Routes';
import BaseLayout from './components/BaseLayout';

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes />
      </BaseLayout>
    </Router>
  );
}

export default App;
