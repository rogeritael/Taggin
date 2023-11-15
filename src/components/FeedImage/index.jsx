import { useEffect, useState } from 'react';
import styles from './styles.scss'
import { HiHeart } from "react-icons/hi2";
import { markAsFavorite } from '../../functions/markAsFavorite';
import { images } from '../../db/images';

export function FeedImage({ url, name }){
    const [isLiked, setIsLiked] = useState(false)

    function handleLike(){
        setIsLiked(true)

        const image = images.find((image) => image.path === url)
        if(!image){
            alert('imagem não encontrada')
            return
        }

        markAsFavorite(image)
    }

    return (
        <figure id="feed_image">
            <img src={url} alt={name} />
            <div className={`mask ${isLiked && 'isLiked'}`}>
                <div className='like_button' onClick={() => handleLike()}>
                    <HiHeart />
                </div>
                <p>{name}</p>
                <span className="background" />
            </div>
        </figure>
    )
}