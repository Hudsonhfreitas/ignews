import styles from '../Header/styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
            </div>
            <nav>
                <a href="">Home</a>
                <a href="">Posts</a>
            </nav>
        </header>
    )
}