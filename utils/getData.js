// import path from 'node:path'
// import fs from 'node:fs/promises'
// import { json } from 'node:stream/consumers'

// const __dirname=import.meta.dirname

// export async function getData(){
//     try{
//         const pathJSON=path.join(__dirname,'../data/data.json')
//         const data=await fs.readFile(pathJSON,'utf8')
//         const parsedData=JSON.parse(data)
//         return parsedData
//     }
//     catch(err){
//         console.log(err)
//         return[]
//     }
// }



import { neon } from '@neondatabase/serverless'

export async function getData() {
  try {
    const sql = neon(process.env.DATABASE_URL)
    return await sql`
      SELECT title, location, text, time_stamp AS "timeStamp"
      FROM sightings ORDER BY id ASC`
  } catch (err) {
    console.log(err)
    return []
  }
}