import { useState, useContext,FC } from 'react'
import { v4 } from 'uuid';
import { TodoContext } from '../context/context';
import { ITodo } from '../types';

interface IModalProps {
    edit: boolean;
    editNote: ITodo | null
}


const Modal:FC<IModalProps> = ({ edit, editNote }) => {
    
    const { addOrChangeHandler: addOrChangeNote, closeModalHandler: closeModal } = useContext(TodoContext)
    
    const [title, setTitle] = useState(editNote?.title ?? '')
    const [text, setText] = useState(editNote?.text ?? '')
    
    const addOrChange = () => {
        if(title.length > 2 && text.length > 2) {
            const note: ITodo = {
                id: editNote?.id ?? v4(),
                title: title,
                text: text,
                date: new Date().toLocaleDateString(),
            }
            addOrChangeNote(note)
            closeModal()
        }
       
    }
    
  return (
    <div className="modal" onClick={() => closeModal()}>
        <div className="modal__block" onClick={(event) => event.stopPropagation()}>
            <h2 className="modal__block-title">
               { edit ? 'Изменить заметку' : ' Добавить заметку'}
            </h2>
            <div className="modal__block-inputs">
                <label>
                    <input 
                        type="text" 
                        placeholder='Title'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <span>Title</span>
                </label>
                <label>
                    <input 
                        type="text" 
                        placeholder='Content'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <span>Content</span>
                </label>
            </div>
            <div className="modal__block-btns">
            <button className="modal__block-btn  red" onClick={() => closeModal()}>Отмена</button>
            { !edit &&  <button className="modal__block-btn  purple" onClick={() => addOrChange()}>Добавить</button> }
            { edit &&  <button className="modal__block-btn  purple"  onClick={() => addOrChange()}>Изменить</button> }
            </div>
        </div>
    </div>
  )
}

export default Modal