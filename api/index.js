import { handleGET, handlePost } from '../handlers/routeHandlers.js';

export default async function handler(req, res) {
  if (req.method === 'GET') return handleGET(res);
  if (req.method === 'POST') return handlePost(req, res);
  res.statusCode = 405;
  res.end('Method Not Allowed');
}