import { Fragment } from 'react'
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'

function EventsPage() {
  const router = useRouter()
  const events = getAllEvents()

  function findEventsaHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsaHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export default EventsPage