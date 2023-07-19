import './App.css';
import Footer from './components/Footer';
import HideShowToggle from './components/HideShowElement';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import GetDataFromInputBox from './GetData/getDataFromInput';
import State from './Hooks/State';
import StateInClass from './Hooks/StateInClass';
import Props from './Props/Props';

function App() {
  const data = {
    name:'rohit',
    email:'test123@gmail.com',
    address:'pune'
  }
  return (
  <>
      <Navbar />
      <Mainpage />
      {/* <State />
      <StateInClass /> 
      <Props {...data} other={{addre:'delhi', Number:9954}}/>
      <GetDataFromInputBox />

      <HideShowToggle /> */}
      <Footer />
      
    </>
   
  );
}

export default App;
