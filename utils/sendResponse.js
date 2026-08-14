export function sendResponse(res,statusCode,contentType,payload){
    res.statusCode=statusCode,
    res.setHeader('Content-type',contentType)
    // res.writeHead(200,{'Content-type':'text/html'})
    res.end(payload)
}