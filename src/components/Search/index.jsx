import { CiSearch } from "react-icons/ci";
import styles from './styles.scss'
import { useState } from "react";

export function Search({ action }){
    const [term, setTerm] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        action(term)
    }

    return (
        <form id="search" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Digite para encontrar uma imagem" value={term} onChange={(e) => setTerm(e.target.value)} />
            <button type="submit">
                <CiSearch />
            </button>
        </form>
    )
}