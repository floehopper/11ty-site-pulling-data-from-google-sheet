const EleventyFetch = require("@11ty/eleventy-fetch");
const Dotenv = require('dotenv');

Dotenv.config();

const spreadsheetId = "1OFAy4OtJO0Np6ElZPhpj-Hk_0jmy3DbAMjvdpWfYNvE";
const sheetName = "Sheet1";
const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
console.log(apiKey);
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?alt=json&key=${apiKey}`;

module.exports = async function() {
  return EleventyFetch(url, { duration: "1m", type: "json" });
};