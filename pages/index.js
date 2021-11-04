import Head from "next/head";
import EventList from "../components/EventList";
import styles from '../styles/Layout.module.css'

export default function Home({data}) {

  return (
    <div>
      <Head>
        <title>Techamaka Events</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Get latest events to attend'
        />
      </Head>

      <div className={styles.container}>
        <EventList events={data}/>
      </div>
    </div>
  );
}

const eventQuery = `
{
  events{
    id
    name
    venue
  }
}
`

export const getStaticProps = async ()=> {
  const res = await fetch('https://dev.peddlesoft.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: eventQuery})
  })
  const data = await res.json();
  
  return {
    props: {
      data: data.data.events
    }
  }
}
