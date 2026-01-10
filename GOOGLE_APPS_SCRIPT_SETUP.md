# Google Apps Script Setup Instructions

Follow these steps to connect your contact form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" (or any name you prefer)
4. In the first row, add these column headers:
   - **A1**: Timestamp
   - **B1**: Name
   - **C1**: Email
   - **D1**: Phone
   - **E1**: Subject
   - **F1**: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.subject || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon) and give your project a name like "Contact Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Set the following:
   - **Description**: Contact Form Web App (or any description)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web App URL** - you'll need this for the next step
6. Click **Done**

## Step 4: Configure Your Next.js App

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line with your Web App URL:

```
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your Web App URL.

3. Restart your Next.js development server:
   ```bash
   npm run dev
   ```

## Step 5: Test the Form

1. Go to your contact page
2. Fill out and submit the form
3. Check your Google Sheet - you should see the submission appear!

## Troubleshooting

- **Form not submitting**: Check that the `GOOGLE_APPS_SCRIPT_URL` is correct in `.env.local`
- **Data not appearing in sheet**: Make sure the Web App is deployed with "Anyone" access
- **CORS errors**: Google Apps Script web apps handle CORS automatically, but make sure the deployment is set to "Anyone"

## Security Note

For production, consider:
- Adding validation in the Google Apps Script
- Implementing rate limiting
- Adding authentication if needed
