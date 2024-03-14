import { useState, useEffect, useRef, useContext, FC } from 'react'
import searchIcon from '../assets/images/search.svg'
import backIcon from '../assets/images/back.svg'
import closeIcon from '../assets/images/close.svg'
import { TodoContext } from '../context/context'

const Navbar:FC = () => {
  
  const { setSearchingHandler } = useContext(TodoContext)
  
  
  const isMounted = useRef(false)
  const [show, setShow] = useState(true)
  const [text, setText] = useState('')
  
  useEffect(() => {
    if(isMounted.current) {
      setSearchingHandler(text)
    }
    isMounted.current = true
 
  },[text])
  
  const reset = () => {
    setText('')
    setShow(true)
  }
  
  return (
    <header className="header">
        { show ? ( <nav className="header__nav">
            <button className="header__nav-lang">Ru</button>
            <h1  className="header__nav-title">Заметки</h1>
            <button className="header__nav-search" onClick={() => setShow(false)}>
                <img src={searchIcon} alt="" />
            </button>
        </nav>) 
        : ( <nav className="header__search">
            <button className="header__search-back" onClick={() => reset()}>
              <img src={backIcon} alt="" />
            </button>
            <input 
              type="text" 
              className="header__search-input"
              placeholder='Поиск...'
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button className="header__search-clear" onClick={() => setText('')}>
              <img src={closeIcon} alt="" />
            </button>
        </nav>) }
       
       
    </header>
  )
}

export default Navbar