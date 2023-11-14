import { CiSearch } from "react-icons/ci";
import styles from './styles.scss'

export function Search(){
    return (
        <form id="search">
            <input type="text" placeholder="Digite para encontrar uma imagem" />
            <button type="submit">
                <CiSearch />
            </button>
        </form>
    )
}