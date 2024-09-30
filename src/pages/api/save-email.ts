import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: { method: string; body: { email: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const filePath = path.join(process.cwd(), 'email_list.txt');
    
    try {
      await fs.appendFile(filePath, `${email}\n`);
      return res.status(200).json({ message: 'Email added to waitlist' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to add email' });
    }
  }
  
  res.status(405).json({ message: 'Method not allowed' });
}