import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

export default function Modal({ title, message, onCloseModal }) {
  return (
    <div className={styles.backdrop} onClick={onCloseModal}>
      <Card className={styles.modal} onClick={() => ({})}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onCloseModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
