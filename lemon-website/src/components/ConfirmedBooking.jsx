import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./../styles/ConfirmedBooking.module.css";

const ConfirmedBooking = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faCircleCheck} color="#495E57" size="4x" />
      <h2 className={styles.title}>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;