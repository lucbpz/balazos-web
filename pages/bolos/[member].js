import React, { useEffect, useState } from "react"
import BolosCard from "../../components/BolosCard"
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
      <div style={{ display: "flex", gap: "1rem", marginBottom: '1rem' }}>
        <Link href="/bolos">Ver bolos de todos</Link>
      </div>
      <ul style={{display: 'flex', flexWrap: "wrap", gap: '2rem'}}>
        {data.map(eventObj => <BolosCard ev={eventObj} />)}
      </ul>
    </div>
  )
}

export default Bolos
