import React, {useState} from 'react'
import Modal from './main/Modal'
import SwitchDisplay from './main/SwitchDisplay'
import Counter from './main/Counter'
import Button from './main/Button'
import Reset from './main/Reset'
const Main = () => {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState({
    state: false,
    clicked: false,
  })
  const [btnState, setBtnState] = useState({
    value: '説明',
    id: 'explanation',
  })
  const number = 20
  const images = {
    number: 9,
    path: './img/',
    extension: '.png',
  }
  const counter = number - count + 1
  const handleClick = () => {
    setCount(count + 1)
    if(modal.clicked===false){
      setCount(0)
      setModal({
        state: true,
        clicked: true,
      })
    }
    if(count === number){
      setBtnState({
        value: 'もういっかい',
        id: 'restart',
      })
    }
    if(count < number){
      setBtnState({
        value: 'つぎへ',
        id: 'next',
      })
    }
  }
  const handleReset = () => {
    setCount(0)
    setBtnState({
      value: 'スタート',
      id: 'start',
    })
  }
  const handleModal = () => {
    setModal({
      state: false,
      clicked: true,
    })
    setBtnState({
      value: 'スタート',
      id: 'start',
    })
  }
  return(
    <main>
      <Modal
        modal={modal}
        onClick={handleModal}
      />
      <div id="img_box" className="img-box">
        <SwitchDisplay
          count={count}
          number={number}
          images={images}
        />
      </div>
      <Counter
        counter={counter}
        count={count}
      />
      <Button
        btnState={btnState}
        count={count}
        onClick={(count>number)?handleReset:handleClick}
      />
      <Reset
        count={count}
        number={number}
        onClick={handleReset}
      />
    </main>
  )
}
export default Main