import React, { useEffect, useState } from "react"
import { google, ics } from "calendar-link"
import Link from "next/link"
const fetcher = url => fetch(url).then(res => res.json())

const Bolos = ({}) => {
  const [data, setData] = useState()

  useEffect(() => {
    fetcher("/api/bolos").then(setData)
  }, [])

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
      <h1>Próximos Bolos</h1>

      <div style={{display: 'flex', gap: '1rem'}}>
        <p>Ver bolos de:</p>
        <Link href="/bolos/lucas">Lucas</Link>
        <Link href="/bolos/acacio">Acacio</Link>
        <Link href="/bolos/juan">Juan</Link>
        <Link href="/bolos/carlos">Carlos</Link>
        <Link href="/bolos/fran">Fran</Link>
        <Link href="/bolos/yeyo">Yeyo</Link>
        <Link href="/bolos/Luis">Luis</Link>
      </div>
      {data.map(eventObj => {
        const ev = {
          title: eventObj.title,
          description: eventObj.plain_text,
          location: eventObj.donde,
          start: eventObj.fecha,
          allDay: true,
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
            <h3 style={{padding: 0, margin: 0}}>{eventObj.fecha}</h3>
            <h4 style={{padding: 0, margin: 0}}>{eventObj.title}</h4>
            <p style={{padding: 0, margin: 0}}>{eventObj.hora}</p>
            <a href={google(ev)} >Add to calendar (Google)</a>
            {/* <a href={ics(ev)}>Add to calendar (iOS)</a> */}
          </div>
        )
      })}
    </div>
  )
}

export default Bolos
