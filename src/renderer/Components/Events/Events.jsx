// import { useEffect, useState } from 'react';
import { useState } from 'react';
import Event from '../Event/Event';
import Agreement from '../Agreement/Agreement';

import styles from './styles.module.scss';

function Events({ events, saveEvents }) {
  const [isOpen, setIsOpen] = useState(false);
  const [needToDeleted, setNeedToDelete] = useState('');
  const deleteItem = (trigger) => {
    setIsOpen(true);
    setNeedToDelete(trigger);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Active events</h2>
      <div className={styles.flex}>
        {events.map((itemEvent) => {
          return (
            <Event
              key={itemEvent.eventName}
              itemEvent={itemEvent}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>

      <div className={isOpen ? 'fade-in layout' : ''}>
        {isOpen && (
          <Agreement
            setIsOpen={setIsOpen}
            saveEvents={saveEvents}
            events={events}
            needToDeleted={needToDeleted}
          />
        )}
      </div>
    </div>
  );
}

export default Events;
