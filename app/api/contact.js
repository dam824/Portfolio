import fs from 'fs';
import path from 'path';


export default function handler (req, res)  {
    const vcfData = `
    
    BEGIN:VCARD
    VERSION:3.0
    FN:Damien Dagory
    TEL:+33631149803
    EMAIL:contact@damiendagory.fr
    ORG:Digital-works
    TITLE:Développeur Web
    URL:https://digital-works.org
    END:VCARD
    
    `.trim();

    const filePath = path.join(process.cwd(), 'public', 'contact.vcf');
  
    // Écrire temporairement le fichier dans public/
    fs.writeFileSync(filePath, vcfContent, 'utf-8');
  
    res.setHeader('Content-Type', 'text/vcard');
    res.setHeader('Content-Disposition', 'attachment; filename=contact.vcf');
    res.status(200).send(vcfContent);
  }