import { createContext } from "react";
import { ITodo } from "../types";

interface ITodoContext {
    setSearchingHandler:(val: string) => void;
    changeHandler: (note: ITodo) => void;
    deleteNoteHandler: (id: string) => void;
    addOrChangeHandler: (note: ITodo) => void;
    closeModalHandler: () => void;
}


export const TodoContext = createContext<ITodoContext>({} as ITodoContext)