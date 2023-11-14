import styles from './styles.scss'

export function Category({ title, clickAction }){
    return (
        <figure id="category" onClick={() => clickAction()}>
            <figure className="cover">
                #
            </figure>
            <p>{title}</p>
        </figure>
    )
}