import { SignInButton } from '../SignInButton'
import { ActiveLink } from './ActiveLink'
import { useRouter } from 'next/router'

import styles from '../Header/styles.module.scss'

export function Header() {
    const router = useRouter()
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
            
                <SignInButton />
            </div>
        </header>
    )
}