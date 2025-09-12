import axios from "axios";

export const sendSMS = async ({ to, message }) => {
  // Example using Twilio API
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
  const data = new URLSearchParams({
    To: to,
    From: TWILIO_PHONE_NUMBER,
    Body: message,
  });

  const auth = {
    username: TWILIO_ACCOUNT_SID,
    password: TWILIO_AUTH_TOKEN,
  };

  try {
    await axios.post(url, data, { auth });
  } catch (error) {
    console.error("SMS sending error:", error);
    throw error;
  }
};
