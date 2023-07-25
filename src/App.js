import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Footer from './components/Footer';
import HideShowToggle from './components/HideShowElement';
import Login from './components/LoginPage';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import Forms from './Formm/Forms';
import User from './Formm/User';
import GetDataFromInputBox from './GetData/getDataFromInput';
import State from './Hooks/State';
import StateInClass from './Hooks/StateInClass';
import Props from './Props/Props';
import ConditinalRendering from './Rendering/ConditonalRendering';

function App() {

  function setDataToChild() {
    alert("helo from app");
  }

  const data = {
    name: 'rohit',
    email: 'test123@gmail.com',
    address: 'pune'
  }
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />

          {/* <Navbar />
              <Mainpage />
              <State />
              <StateInClass />
              <Props {...data} other={{ addre: 'delhi', Number: 9954 }} />
              <GetDataFromInputBox />
              <HideShowToggle />
              <Footer />
              <Forms />
              <User dataToChild={setDataToChild} />
              <Counter />
              <ConditinalRendering />
              <Login /> 
              <div className='App'>   </div>   
          */}

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
