import React, { useEffect, useState } from "react"
import { google, ics } from "calendar-link"
import Link from "next/link"
import { useRouter } from "next/router"

const fetcher = url => fetch(url).then(res => res.json())

const Bolos = ({}) => {
  const [data, setData] = useState()
  const router = useRouter()
  const { member } = router.query

  useEffect(() => {
    if (member) fetcher(`/api/bolos/${member}`).then(setData)
  }, [member])

  if (!data) return <div>No data!</div>

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem 5rem",
      }}
    >
      <h1>Próximos Bolos {member}</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/bolos">Ver bolos de todos</Link>
      </div>
      {data.map(eventObj => {
        const ev = {
          title: eventObj.title,
          description: eventObj.plain_text,
          location: eventObj.donde,
          start: eventObj.fecha,
          allDay: true,
        }
        // Set event as an object
        const iosEv = {
          title: "My Title",
          description: "My Description",
          startTime: "2018-10-07T10:30:00+10:00",
          location: "10 Carlotta St, Artarmon NSW 2064, Australia",
        }

        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3 style={{ padding: 0, margin: 0 }}>{eventObj.fecha}</h3>
            <h4 style={{ padding: 0, margin: 0 }}>{eventObj.title}</h4>
            <p style={{ padding: 0, margin: 0 }}>{eventObj.hora}</p>
            <a href={google(ev)}>Add to calendar (Google)</a>
            <a href={ics(ev)}>Add to calendar (iOS)</a>
          </div>
        )
      })}
    </div>
  )
}

export default Bolos
