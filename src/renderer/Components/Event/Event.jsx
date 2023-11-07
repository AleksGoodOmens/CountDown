import { useEffect, useState } from 'react';
import getDateInDigits from '../../../functions/_datetransfer';

import styles from './styles.module.scss';

const { getDays, getHours, getMinutes, getSeconds } = getDateInDigits();

function Event({ itemEvent, deleteItem }) {
  const { eventDate, eventName } = itemEvent;
  const [timeDifference, setTimeDifference] = useState(
    new Date(eventDate) - new Date(),
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeDifference(new Date(eventDate) - new Date());
    }, 1000);
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [eventDate]);

  const days = getDays(timeDifference);
  const hours = getHours(timeDifference);
  const minutes = getMinutes(timeDifference);
  const seconds = getSeconds(timeDifference);

  return (
    <div
      className={
        timeDifference < 0
          ? `${styles.event} ${styles.event__exist}`
          : styles.event
      }
      key={eventName}
    >
      {timeDifference <= 0 ? (
        <h3 className={styles.event__title}> Happy {eventName} : </h3>
      ) : (
        <h3 className={styles.event__title}>To {eventName} left:</h3>
      )}
      <div className={styles.event__counter}>
        <span>{days} days / </span>
        <span>{hours} hours / </span>
        <span>{minutes} minutes / </span>
        <span>{seconds} seconds</span>
      </div>
      <button
        className={styles.event__button}
        onClick={() => deleteItem(eventName)}
      >
        Delete Event
      </button>
    </div>
  );
}

export default Event;
