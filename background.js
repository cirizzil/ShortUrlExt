chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "shortenURL") {
      fetch(`https://api.tinyurl.com/create?api_token=YOUR_API_TOKEN&url=${encodeURIComponent(request.url)}`, {
        method: "POST"
      })
        .then(response => response.json())
        .then(data => sendResponse({ shortURL: data.data.tiny_url }))
        .catch(error => console.error('Error:', error));
  
      return true;
    }
  });
  
