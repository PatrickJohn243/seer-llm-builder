import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request received:', req.method);  // Log the request method

  if (req.method === 'POST') {
    const { email } = req.body;

    console.log('Email received:', email);  // Log the email received

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'Invalid email' });
    }

    try {
      const filePath = path.join(process.cwd(), 'email_list.txt');
      
      await fs.appendFile(filePath, `${email}\n`);
      console.log('Email appended to file:', filePath);  // Log when the file is written
      
      return res.status(200).json({ message: 'Email appended successfully' });
    } catch (error) {
      console.error('Error saving email:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
