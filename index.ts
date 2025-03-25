import * as dotenv from 'dotenv';
import * as fs from 'fs';
import csv from 'csv-parser'; // ✅ FIXED import
import { Twilio } from 'twilio';

dotenv.config();

// console.log('dotenv', process.env);


// TODO: update as per your need
const CSV_FILE = 'contacts.csv';
const BASE_MESSAGE = 'This is a bulk SMS from TypeScript via Twilio! 💬';

const twilioClient = new Twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

interface Contact {
  name: string;
  phone: string;
}

function readContacts(filePath: string): Promise<Contact[]> {
  return new Promise((resolve, reject) => {
    const results: Contact[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: any) => {
        results.push({
          name: data.name,
          phone: data.phone,
        });
      })
      .on('end', () => resolve(results))
      .on('error', (err: Error) => reject(err)); // ✅ Typed error
  });
}

async function sendBulkSMS() {
  try {
    const contacts = await readContacts(CSV_FILE);

    for (const contact of contacts) {
      const personalized = `Hi ${contact.name}, ${BASE_MESSAGE}`;

      const message = await twilioClient.messages.create({
        body: personalized,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: contact.phone,
      });

      console.log(`✅ Sent to ${contact.phone} | SID: ${message.sid}`);
    }
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

sendBulkSMS();
