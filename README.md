# URL Shortener Chrome Extension

URL Shortener is a simple Chrome extension that allows users to quickly shorten URLs using the TinyURL API. With just a click, you can generate a short URL and copy it to your clipboard for easy sharing.

## Features

- **Shorten URLs**: Enter a URL, and the extension will generate a shortened version using TinyURL.
- **Copy to Clipboard**: Easily copy the shortened URL to your clipboard with a single click.
- **User-Friendly Interface**: A simple and intuitive interface to make URL shortening a breeze.

## Installation

Follow these steps to install the URL Shortener extension:

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the actual URL of your repository.

2. **Open Chrome Extensions**: 
   Navigate to `chrome://extensions` in your Chrome browser.

3. **Enable Developer Mode**: 
   Toggle the "Developer mode" switch located in the top right corner.

4. **Load Unpacked Extension**: 
   Click on the "Load unpacked" button and select the folder where you cloned the repository.

5. **Use the Extension**: 
   The URL Shortener extension should now be visible in your Chrome toolbar.

## Usage

1. Click on the URL Shortener icon in the Chrome toolbar to open the popup.

2. Enter the URL you want to shorten in the input field.

3. Click the **"Shorten URL"** button.

4. The shortened URL will be displayed in the result field. Click **"Copy"** to copy the shortened URL to your clipboard.

## Files Overview

- **manifest.json**: Contains the extension metadata and permissions.
  ```json
  {
      "manifest_version": 3,
      "name": "URL Shortener",
      "version": "1.0",
      "description": "A simple extension to shorten URLs using TinyURL",
      "background": {
        "service_worker": "background.js"
      },
      "permissions": [
        "activeTab",
        "clipboardWrite"
      ],
      "action": {
        "default_popup": "popup.html",
        "default_icon": "icon.png"
      },
      "icons": {
        "128": "icon.png"
      }
    }
  ```
  
- **background.js**: Handles the background process of sending requests to the TinyURL API.
  ```javascript
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "shortenURL") {
        fetch(`https://api.tinyurl.com/create?api_token=ZDvAbqgLMumMSpSdVZ8AYq7uDudG8Ryw9oVY4JJqT1fqt8tvlu8d41xhBnjm&url=${encodeURIComponent(request.url)}`, {
          method: "POST"
        })
          .then(response => response.json())
          .then(data => sendResponse({ shortURL: data.data.tiny_url }))
          .catch(error => console.error('Error:', error));
    
        return true;
      }
    });
  ```

- **popup.html**: The HTML file for the extension's popup interface.
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>URL Shortener</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <input type="text" id="urlInput" placeholder="Enter URL to shorten">
      <button id="shortenButton">Shorten URL</button>
      <div id="resultContainer" class="result-container">
        <input type="text" id="result" readonly>
        <button id="copyButton">Copy</button>
      </div>
    </div>
    <script src="popup.js"></script>
  </body>
  </html>
  ```

- **popup.js**: JavaScript file for handling user interactions in the popup.
  ```javascript
  document.getElementById('shortenButton').addEventListener('click', () => {
      const url = document.getElementById('urlInput').value;
      if (url) {
        chrome.runtime.sendMessage({ action: "shortenURL", url: url }, response => {
          const resultElement = document.getElementById('result');
          resultElement.value = response.shortURL;
          resultElement.parentElement.style.display = 'flex';
        });
      }
    });
    
    document.getElementById('copyButton').addEventListener('click', () => {
      const resultElement = document.getElementById('result');
      resultElement.select();
      document.execCommand('copy');
      alert('Shortened URL copied to clipboard!');
    });
  ```

- **styles.css**: CSS file for styling the popup interface.
  ```css
  body {
      font-family: Arial, sans-serif;
      padding: 20px;
      width: 250px;
      background-color: #f4f4f9;
      color: #333;
    }
    
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    #urlInput {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    #shortenButton {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    #shortenButton:hover {
      background-color: #0056b3;
    }
    
    .result-container {
      display: none;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }
    
    #result {
      width: 100%;
      padding: 10px;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 4px;
      text-align: center;
    }
    
    #copyButton {
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    #copyButton:hover {
      background-color: #218838;
    }
  ```

## Permissions

This extension requires the following permissions:

- `activeTab`: To access the URL of the current tab.
- `clipboardWrite`: To copy the shortened URL to the clipboard.

## API

The extension uses the TinyURL API to shorten URLs. Ensure you have a valid API token to use the service.

## Contributing

Feel free to fork this repository, open issues, and submit pull requests.


