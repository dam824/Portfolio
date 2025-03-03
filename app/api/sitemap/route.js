import {SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream' ;

export default async function handler (req, res){
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
    ];

    const stream = new SitemapStream({hostname: 'https://damiendagory.fr'});

    res.writeHead(200,{'Content-Type' : 'application/xml'});

    const xmlString = await streamToPromise(Readable.from(links).pipe(stream));
    res.end(xmlString.toString());
}