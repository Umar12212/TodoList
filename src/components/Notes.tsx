import { useState, FC } from 'react'
import listIcon from '../assets/images/list.svg'
import gridIcon from '../assets/images/grid.svg'
import NotesItem from './NotesItem'
import clsx from 'clsx'
import { ITodo } from '../types'

interface INotesProps {
    notes: ITodo[]
}


const Notes:FC<INotesProps> = ({notes}) => {
    
    
    const [view, setView] = useState(true)
    
    const btnIcon = view ? listIcon : gridIcon
    const spanText = view ? 'Список' : 'Сетка'
    

    
    const noteListClass = clsx('notes__list', {'active': !view })
    
    
  return (
    <div className="notes">
        <div className="container">
            <div className="notes__top">
                <h2 className="notes__top-title">
                   { notes.length  ? 'Все заметки' : 'Нет заметок'}
                </h2>
                <button className="notes__top-btn" onClick={() => setView(!view)}>
                    <img src={btnIcon} alt="" />
                    <span>{spanText}</span>
                </button>
            </div>
            <div className={noteListClass}>
                {notes.map((note) => (
                    <NotesItem
                        key={note.id}
                        note={note}
                        view={view}
                    />
                ))}
               
            </div>
        </div>
    </div>
  )
}

export default Notes