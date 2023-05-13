import React, {useState} from "react"
import './App.css';
import FirstComponent from './components/FirstComponent';
import FourthComponent from "./components/FourthComponent";
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import Modal from './components/Modal';

let ComponentNumber = 0


function App() {
  const functionShow = sth => {
    console.log('App.js ' + sth)
  }

  const [add, setAdd] = useState([])

  const addFourthComponent = () => {
    ComponentNumber+=1
    setAdd(prevLi => {
    return [ ...prevLi, <FourthComponent number={ComponentNumber}/>] 
      } 
    )
  }

  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    console.log('lol')
    setModal(false)
  }

  return (
    <div>
      <ul className="App">
        <FirstComponent value='one' />
        <FirstComponent value='two' />
        <SecondComponent showSth={functionShow}/>
        <ThirdComponent />
        {add}
      </ul>
      {modal && <Modal onClose={closeModal}/>}
      <button onClick={addFourthComponent}>Add Fourth</button>
      <button onClick={showModal}>Show Modal</button>
    </div>
  );
}

export default App;