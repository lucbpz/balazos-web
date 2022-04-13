// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client")


const capitalize = (str) => {
    let strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
}

export default async (req, res) => {
  const { member } = req.query
  const notion = new Client({ auth: process.env.NOTION_API_TOKEN })
  const calendarDatabaseId = process.env.CALENDAR_DB_ID


  try {
    const { results } = await notion.databases.query({
      database_id: calendarDatabaseId,
      filter: {
        and: [
          {
            property: 'Archivada',
            checkbox: {
              equals: false
            }
          },
          {
              property: 'Quiénes van',
              multi_select: {
                contains: capitalize(member)
              }
          }
        ]
      },
      sorts: [
        {
          property: 'Fecha',
          direction: 'ascending'
        }
      ]
    })
    console.table(results.map(result => (JSON.stringify(result.properties))));
    
    const allEvents = results.map(page => {
      return {
        pageId: page.id,
        title: page.properties.Name.title[0].plain_text,
        hora: page.properties.Hora.select?.name,
        quienesVan: page.properties['Quiénes van'].multi_select,
        totalBruto: page.properties.number,
        extras: page.properties.Extras.multi_select,
        fecha: page.properties.Fecha.date.start,
        plain_text: page.plain_textm,
        donde: page.properties['Dónde'].select?.name

      }
    })
    res.status(200).json(allEvents)
  } catch (error) {
    console.error(error)
  }
}
