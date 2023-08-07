import styles from '../Section/Section.module.css';

type NotificationProps = {
  message: string;
};

const Notification = ({ message }: NotificationProps) => {
  return (
    <div>
      <h2 className={styles.title}>{message}</h2>
    </div>
  );
};

export default Notification;
