# URL Shortener Chrome Extension

A simple Chrome extension to shorten URLs using TinyURL. This extension allows you to quickly shorten URLs and copy them to your clipboard, making it easy to share links on social media or via email.

## Features

- Shorten URLs using TinyURL API
- Clean and elegant popup interface
- Copy shortened URL to clipboard

## Installation

1. **Clone or download the repository:**

    ```bash
    git clone https://github.com/cirizzil/SimpleShortUrlExt.git
    ```

    Alternatively, you can download the ZIP file and extract it.

2. **Open Chrome and navigate to the Extensions page:**

    ```text
    chrome://extensions/
    ```

3. **Enable Developer mode:**
   - Toggle the switch in the top right corner to enable Developer mode.

4. **Load the unpacked extension:**
   - Click on the "Load unpacked" button.
   - Select the `URL_shortener` folder.

5. **The extension is now installed and ready to use.**

## Usage

1. Click on the URL Shortener extension icon in the Chrome toolbar.
2. Enter the URL you want to shorten in the input field.
3. Click the "Shorten URL" button.
4. The shortened URL will be displayed in a box below, along with a "Copy" button.
5. Click the "Copy" button to copy the shortened URL to your clipboard.

## Files

- `manifest.json` - Defines the extension's configuration and permissions.
- `background.js` - Handles background tasks such as interacting with the TinyURL API.
- `popup.html` - The HTML structure of the popup interface.
- `popup.js` - The JavaScript logic for the popup interface.
- `styles.css` - The CSS styles for the popup interface.
- `icon.png` - The icon for the extension.

## Demo
![image](https://github.com/user-attachments/assets/ac163cb9-2973-4cd1-ae30-289ecf5241e2)
![image](https://github.com/user-attachments/assets/8e96d922-31b1-4f27-b1fe-6f2a4ef0270b)






## Acknowledgments

- [TinyURL](https://tinyurl.com/) for their API service.
