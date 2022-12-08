
import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';
import Bottom from './components/bottom';

import './App.css';


function App() {
  return (
    <>
      <div className='app--container'>
        <Header />
        <Layout />
        <Footer />
      </div>
      <Bottom />
    </>
  );
}

export default App;
