import styles from './styles.scss'
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";

export function Header(){
    return (
        <header id="Header">
            <div className="icons">
                <Link to='/'>
                    <GoHomeFill />
                </Link>
                <Link to='/favoritos'>
                    <FaRegHeart />
                </Link>
            </div>
        </header>
    )
}