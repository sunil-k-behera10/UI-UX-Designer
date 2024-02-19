
import './App.css';
import Category from './components/Category';
import Hero from './components/Hero';
import Imagecontainer from './components/Imagecontainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>

      <div className='grid grid-cols-2 w-[92%] mx-20'>
        <Imagecontainer/>
        <Imagecontainer/>
        <Imagecontainer/>
        <Imagecontainer/>
        <Imagecontainer/>
        <Imagecontainer/>
      </div>
      
    </>
  );
}

export default App;
