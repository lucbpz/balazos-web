import React, { useEffect, useState } from "react"
import BolosCard from "../../components/BolosCard"
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
        padding: "1rem 2rem",
      }}
    >
      <h1>Próximos Bolos</h1>

      <span>Ver bolos de:</span>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: '1rem' }}>
        <Link href="/bolos/lucas">Lucas</Link>
        <Link href="/bolos/acacio">Acacio</Link>
        <Link href="/bolos/juan">Juan</Link>
        <Link href="/bolos/carlos">Carlos</Link>
        <Link href="/bolos/fran">Fran</Link>
        <Link href="/bolos/yeyo">Yeyo</Link>
        <Link href="/bolos/Luis">Luis</Link>
      </div>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", gap: "2rem" }}>
        {data.map(eventObj => (
          <BolosCard ev={eventObj} />
        ))}
      </div>
    </div>
  )
}

export default Bolos
