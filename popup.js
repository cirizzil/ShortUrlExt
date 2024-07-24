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
  