
import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';

import './App.css';


function App() {
  return (
    <>
      <div className='app--container'>
        <Header />
        <Layout />
      </div>
      <Footer />
    </>
  );
}

export default App;
