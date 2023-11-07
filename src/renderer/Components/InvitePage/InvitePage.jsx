import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';

import Events from '../Events/Events';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import styles from './styles.module.scss';

function InvitePage() {
  const [events, saveEvents] = useLocalStorage('events', []);
  const [toDayDate, setToDayDate] = useState('');
  const [date, setDate] = useState('');
  const [event, setEvent] = useState('');

  useEffect(() => {
    setDate(new Date());
    setToDayDate(new Date());
  }, []);

  const handleChange = (e) => {
    setDate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !event) {
      console.log('none');
    } else {
      saveEvents((prev) => {
        const data = [...prev, { eventName: event, eventDate: date }];

        return data.sort(
          (a, b) => new Date(a.eventDate) - new Date(b.eventDate),
        );
      });
    }
    // const data = events.filter((item) => {
    //   return item.eventName === event;
    // });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>Welcome to count down</h1>

      <form className={styles.form}>
        <div>
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) => setEvent(e.target.value)}
            value={event}
            placeholder="Name of Your Event"
          />
        </div>
        <DatePicker
          // isOpen="true"
          className={styles.date}
          onChange={(e) => handleChange(e)}
          value={date}
        />
        <button
          className={styles.form__button}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          add event
        </button>
      </form>

      <Events events={events} saveEvents={saveEvents} />
    </div>
  );
}

export default InvitePage;
