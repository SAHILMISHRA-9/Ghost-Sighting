export function getContentType(ext){
    const types = {
        ".html": "text/html",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".ttf": "font/ttf",
        ".otf": "font/otf"
    }
    return types[ext.toLowerCase()] || "text/html"
}