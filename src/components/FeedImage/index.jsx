import styles from './styles.scss'

export function FeedImage({ url, name }){
    return (
        <figure id="feed_image">
            <img src={url} alt={name} />
        </figure>
    )
}