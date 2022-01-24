import styles from './styles.module.scss'

export function SubscriptButton() {
  return (
    <button 
        type="button"
        className={styles.subscribeButton}
    >
        Subscribe now
    </button>
  );
}
