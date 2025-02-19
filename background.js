chrome.webNavigation.onHistoryStateUpdated.addListener(
  (details) => {
    if (details.url.includes("/shorts/")) {
      // Redirect the tab to YouTube homepage
      chrome.tabs.update(details.tabId, { url: "https://www.youtube.com" });
    }
  },
  { url: [{ hostContains: "youtube.com" }] }
);
