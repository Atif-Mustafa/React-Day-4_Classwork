import styles from './Quote.module.css'

const Quote = (props) => {
    console.log(props.quote)
    return (
        <div className={styles.quote_container}>
            <h1 className={styles.h1}>{props.quote}</h1>
            {props.by !== "" ? <p>{props.by}</p> : ""}
        </div>
    )
}

export default Quote;