// constants.js
export const API_KEY = 'AIzaSyDD1D3QpIVKbSXseCjL5nxCaC9xqBbWNSs';
export const URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

if (!API_KEY) {
  console.error('❌ API_KEY is missing.');
}
