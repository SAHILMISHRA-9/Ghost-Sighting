import http from 'http';
import { severStatic } from './utils/serveStatic.js';
import { handleGET, handlePost } from './handlers/routeHandlers.js';

const PORT = 9000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {

    if (req.url === '/api' && req.method === "GET") {
        return await handleGET(res);
    }

    if (req.url === '/api' && req.method === "POST") {
        console.log("POST ROUTE HIT"); // debug
        return handlePost(req, res);
    }

    if (!req.url.startsWith('/api')) {
        return await severStatic(req, res, __dirname);
    }

});

server.listen(PORT, () => console.log(`Server running at ${PORT}`));