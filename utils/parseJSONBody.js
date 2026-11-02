// export async function parseJSONBody(req){
//     let body=""
//     for await(const chunk of req){
//         body+=chunk
//     }
//     try{
//         return JSON.parse(body)
//     }catch(err){
//         throw new Error(`Invalid JSON format: ${err}`)
//     }
// }


export async function parseJSONBody(req) {
  if (req.body && typeof req.body === 'object') return req.body

  let body = ""
  for await (const chunk of req) body += chunk
  try {
    return JSON.parse(body)
  } catch (err) {
    throw new Error(`Invalid JSON format: ${err}`)
  }
}