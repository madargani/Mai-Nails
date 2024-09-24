# Mai Nails

A website for a nail salon business. It is fairly simple only containing a landing page and a page for booking appointments.

## Installation

1. Clone the repository
2. cd into the repository directory
3. Copy the google sheet template [HERE](https://docs.google.com/spreadsheets/d/1dYXSfW0Ctu4fEYY96E5C8JQF8UEP8zl0H4jfOmqFP6c/edit?usp=sharing)
4. Set up a Private key from your Google service account
5. Add a `.env.local` file with the following content:

```
PRIVATE_KEY={YOUR_PRIVATE_KEY}
CLIENT_EMAIL={YOUR_CLIENT_EMAIL}
SHEET_ID={YOUR_SHEET_ID}
```

  YOUR_SHEET_ID can be found in the URL of your GoogleSheet

5. Run `npm install`
6. Run `npm run dev`
7. Open your browser and go to `http://localhost:3000`

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Google Sheets API

## Features

- Landing page
- Booking page
- Multi-step form
- Easy access to appointments for store owner in Google Sheets
- Google Sheets integration
- Next.js server actions
