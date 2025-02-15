document.getElementById('summarize').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: summarize
      });
    });
  });
  
  function summarize() {
    document.body.style.backgroundColor = "yellow";
  }
  