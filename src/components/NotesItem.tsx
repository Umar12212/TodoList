import { useContext, FC } from 'react'
import editIcon from '../assets/images/edit.svg'
import delIcon from '../assets/images/del.svg'
import clsx from 'clsx'
import { TodoContext } from '../context/context'
import { ITodo } from '../types'

interface INotesItemProps {
    note:ITodo
    view: boolean
}

const NotesItem:FC<INotesItemProps> = ({note, view}) => {
    
    const { deleteNoteHandler, changeHandler } = useContext(TodoContext)
    
    const notesItemTopClass = clsx('notes__item-top', {'active': !view})
    
  return (
    <div className="notes__item">
        <div className={notesItemTopClass}>
            <h2 className="notes__item-top-title">{note.title}</h2>
            <span className="notes__item-top-date">{note.date}</span>
        </div>
        <p className="notes__item-text">{note.text}</p>
        <div className="notes__item-btns">
            <button className="notes__item-btn  purple" onClick={() => changeHandler(note)}>
                <img src={editIcon} alt="" />
                <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button className="notes__item-btn  red" onClick={() => deleteNoteHandler(note.id)}>
                <img src={delIcon} alt="" />
                <span>Удалить</span>
            </button>
        </div>
    </div>
  )
}

export default NotesItem