import styles from './styles.module.scss';

function Agreement({ setIsOpen, saveEvents, events, needToDeleted }) {
  const handleDelete = (trigger) => {
    if (trigger) {
      const newArray = events.filter(
        (item) => item.eventName !== needToDeleted,
      );
      saveEvents(newArray);
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.box}>
      <h2>Delete this event?</h2>
      <button onClick={() => handleDelete('yes')}>Yes</button>
      <button onClick={() => handleDelete(false)}>no</button>
    </div>
  );
}

export default Agreement;
