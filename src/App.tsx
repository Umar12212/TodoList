import { useState, useEffect } from 'react'
import './assets/styles/main.scss'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import editIcon from './assets/images/edit.svg'
import Modal from './components/Modal'
import { TodoContext } from './context/context'
import { ITodo} from './types'



function App() {
  
  const getLS = (): ITodo[] => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const setLS = () => localStorage.notes = JSON.stringify(notes)
  
  const [isModalOpen, setModalOpen] = useState(false)
  const [notes, setNotes] = useState(getLS)
  const [isEdit, setEdit] = useState(false)
  const [editNote, setEditNote] = useState<ITodo | null>(null)
  const [searchValue, setSearchValue] = useState('')
  
  useEffect(() => {
    setLS()
  }, [notes])
  
  
  const filteredNotes = notes.filter((note: ITodo) => note.title.toLowerCase().includes(searchValue.toLowerCase())) 
  
  
  const openModalHandler = () => {
    setEditNote(null)
    setModalOpen(true)
    setEdit(false)
  }
  
  const closeModalHandler = () => {
    setModalOpen(false)
  }
  
  const addOrChangeHandler = (note: ITodo) => {
    if(editNote?.id) {
      const updatedNotes = notes.map(item => {
        if(item.id == note.id) {
          return note
        }
        return item
      })
      setNotes(updatedNotes)
    }else {
      setNotes([...notes, note])
    }
    
  }
  
  const deleteNoteHandler = (id: string) => {
    setNotes(notes.filter(note => note.id != id))
  }
  
  const changeHandler = (note: ITodo) => {
    setEditNote(note)
    setModalOpen(true)
    setEdit(true)
    
  }
  
  const setSearchingHandler = (val: string) => {
    setSearchValue(val)
  }
  

  return (
    <TodoContext.Provider value={{
      setSearchingHandler,
      changeHandler,
      deleteNoteHandler,
      addOrChangeHandler,
      closeModalHandler
    }}>
       <> 
      <div className="wrapper">
        <Navbar/>
        <Notes notes={filteredNotes} />
        {isModalOpen &&  
          <Modal editNote={editNote} edit={isEdit}/> 
        }
        { !isModalOpen && 
          <button className="add" onClick={() => openModalHandler()}>
            <img src={editIcon} alt="" />
          </button>
        }
       
      </div>
      
      </>
    </TodoContext.Provider>
   
  )
}

export default App
