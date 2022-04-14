import { google, ics } from "calendar-link"
import { Google, Apple, Location, Clock } from "grommet-icons"

const BolosCard = ({ ev }) => {
  const calendarEvent = {
    title: ev.title,
    description: ev.plain_text,
    location: ev.donde,
    start: new Date(ev.fecha),
    allDay: true,
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        minHeight: '200px',
        width: '100%',
        maxWidth: '400px',
        padding: '1rem',
        boxShadow: "0 0.1rem 1rem rgb(0 0 0 / 10%)",
        borderRadius: "1em",
        background: "linear-gradient(to right, #FFFFFF, #ECE9E6)",
      }}
    >
      <h4 style={{ padding: 0, margin: 0 }}>{ev.fecha}</h4>
      <h3 style={{ padding: 0, margin: 0 }}>{ev.title}</h3>
      <div style={{marginTop: '0.5rem'}}>
        <div style={{display: "flex", flexDirection: 'row', gap: '0.5rem', alignItems: 'center'}}><Location /><span>{ev.donde}</span></div>
        <div style={{display: "flex", marginTop: '0.3rem', flexDirection: 'row', gap: '0.5rem', alignItems: 'center'}}><Clock /><p style={{ padding: 0, margin: 0 }}>{ev.hora}</p></div>
      </div>
      <div style={{display:'flex', marginTop: '1rem', gap: '0.5rem', alignItems: 'center', justifyContent: 'center'}}>
        <span>Add To Calendar</span>
        <a href={google(calendarEvent)}>
          <Google width="24px"/>
        </a>
        <a href={ics(calendarEvent)}>
          <Apple width="32px"/>
        </a>
      </div>
    </div>
  )
}

export default BolosCard
