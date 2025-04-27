// api/contact.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // MongoDB connection URI
    const uri = 'mongodb+srv://anilkumar:9392832240@cluster0.guvwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri);

    try {
      // Connect to the MongoDB client
      await client.connect();
      const db = client.db('Cluster0');
      const collection = db.collection('menu');

      // Get the form data from the request
      const { name, email, message } = req.body;

      // Insert the form data into MongoDB
      const result = await collection.insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });

      res.status(200).json({ success: true, message: 'Data saved successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error saving data!' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
