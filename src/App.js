import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './approuter';
import { Payment } from './components/payments/payment';

function App() {
  return (
    
    <div style={{overflowX:'hidden'}}>
      <BrowserRouter>
      {/* <Payment></Payment> */}
      <AppRouter></AppRouter>
      </BrowserRouter>

    </div>
  );
}

export default App;
