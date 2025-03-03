import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
    ];

    const stream = new SitemapStream({ hostname: 'https://damiendagory.fr' });

    const xmlString = await streamToPromise(Readable.from(links).pipe(stream));

    return new Response(xmlString.toString(), {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
