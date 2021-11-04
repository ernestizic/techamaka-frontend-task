import Link from "next/link";
import styles from '../../../styles/Layout.module.css'

const event = ({ data }) => {
  if (!data) return <h1>Not Found</h1>
  return (
    <div className={styles.detailContainer}>
      <span className={styles.goback}>
        <Link href='/'> Go Back</Link>
      </span>
      <div className={styles.details}>
        <h4><span>Event name:</span> {data.name}</h4>
        <p><span>Event Desc:</span> {data.description}</p>
        <p><span>Event Venue:</span> {data.venue}</p>
        <p><span>Event Theme:</span> {data.theme}</p>
        <p><span>Event attendance:</span> {data.attendance}</p>
      </div>
    </div>
  );
};



export const getServerSideProps = async (context) => {
  const eventid = context.params.id
  const eventDetailQuery = `
{
    eventById(id: ${eventid}){
      id
      name
      theme
      description
      venue
      attendance
      flyer
    }
  }
`
  const res = await fetch('https://dev.peddlesoft.com/graphql',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: eventDetailQuery }),
    }
  );
  const data = await res.json();

  return {
    props: {
      data: data.data.eventById,
    },
  };
};

export default event;
