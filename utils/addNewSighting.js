// import { getData } from "./getData.js";
// import fs from 'node:fs/promises'
// import path from 'node:path'


// export async function addNewSighting(newSighting){
//     try{
//         const sighting=await getData()
//         sighting.push(newSighting)
//         const pathJSON= path.join('data','data.json')
//         await fs.writeFile(
//             pathJSON,
//             JSON.stringify(sighting,null,2),
//             'utf8'
//         )

//     }catch(err){
//         throw new Error(err)
//     }
// }


import { neon } from '@neondatabase/serverless'

export async function addNewSighting(s) {
  const sql = neon(process.env.DATABASE_URL)
  await sql`
    INSERT INTO sightings (title, location, text, time_stamp)
    VALUES (${s.title}, ${s.location}, ${s.text}, ${s.timeStamp})`
}