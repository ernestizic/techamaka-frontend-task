import Link from "next/link";
import styles from '../styles/Layout.module.css'

const EventItem = ({event}) => {
  return (
    <>
    <div className={styles.colgrid}>
        <Link href='/event/[id]' as={`/event/${event.id}`}>
            <a>
                <h3 className={styles.eventTitle}>{event.name} &rarr;</h3>
                <p className={styles.eventName}><span>Location:</span> {event.venue}</p>
            </a>
        </Link>
    </div>
    </>
  );
};

export default EventItem;
