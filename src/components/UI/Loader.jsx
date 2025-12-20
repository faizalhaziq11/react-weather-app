import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={styles['loader-container']}>
            {/* <p>Loading...</p> */}
            <span className={styles.loader}></span>
        </div>
    )
}

export default Loader