# 📲 SMS Integration with Twilio using TypeScript

Send personalized bulk SMS messages using Twilio and TypeScript.

## 🛠️ Setup Instructions

### 1. Clone the Repo
```bash
git clone <url-comes-here>
cd sms-integration-with-twilio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=your_twilio_number_here
```

### 4. Add Your Contacts

Update the `contacts.csv` file with the people you want to send SMS to.

**Sample Format:**

```csv
name,phone
Alice,+15551234567
Bob,+15559876543
```

Replace this with your actual contacts.

### 5. Update the Message

In `index.ts`, you can change the default message text:

```ts
const BASE_MESSAGE = 'Your custom SMS message goes here ✨';
```

### 6. Run the Script

```bash
npm run start
```

This will read the contacts, personalize messages, and send them via Twilio.

---

## 📀 Scripts

| Script           | Purpose              |
|------------------|----------------------|
| `npm run start`  | Run the SMS sender   |

---

## 📌 Notes
- Twilio trial accounts can only send messages to **verified phone numbers**.
- For production use, ensure you’ve upgraded and follow Twilio’s messaging regulations per country.

Happy Messaging 🚀
