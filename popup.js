const dashboardKey = 'reg_dashboard_enabled';
const shelvesKey = 'reg_shelves_enabled';

function setStatus(tab) {
  const isRoblox = Boolean(tab?.url && /^https:\/\/([^.]+\.)?roblox\.com\//.test(tab.url));
  document.querySelector('#page-status').textContent = isRoblox ? 'Roblox page detected' : 'Open Roblox to use the GUI';
  document.querySelector('#page-detail').textContent = isRoblox ? 'Enhanced Home is ready in this tab' : 'The dashboard runs on roblox.com pages';
  document.querySelector('.status-dot').style.background = isRoblox ? '#48c875' : '#e0a523';
}

function sendSetting(tabId, setting, value) {
  chrome.tabs.sendMessage(tabId, { type: 'reg-setting', setting, value }).catch(() => {});
}

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  setStatus(tab);
  const dashboardToggle = document.querySelector('#dashboard-toggle');
  const shelvesToggle = document.querySelector('#shelves-toggle');
  chrome.storage.local.get([dashboardKey, shelvesKey], (values) => {
    dashboardToggle.checked = values[dashboardKey] !== false;
    shelvesToggle.checked = values[shelvesKey] !== false;
  });
  dashboardToggle.addEventListener('change', () => {
    chrome.storage.local.set({ [dashboardKey]: dashboardToggle.checked });
    sendSetting(tab.id, 'dashboard', dashboardToggle.checked);
  });
  shelvesToggle.addEventListener('change', () => {
    chrome.storage.local.set({ [shelvesKey]: shelvesToggle.checked });
    sendSetting(tab.id, 'shelves', shelvesToggle.checked);
  });
  document.querySelector('#open-dashboard').addEventListener('click', () => {
    if (tab.id) sendSetting(tab.id, 'dashboard', true);
    window.close();
  });
});
