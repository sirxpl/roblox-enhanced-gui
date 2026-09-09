chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'friend-avatars') {
    resolveFriendAvatars(message.usernames).then((data) => sendResponse({ data }));
    return true;
  }
  if (message.type === 'game-thumbnails') {
    resolveGameThumbnails(message.placeIds).then((data) => sendResponse({ data }));
    return true;
  }
  if (message.type === 'private-servers') {
    resolvePrivateServers(message.placeId).then((data) => sendResponse({ data }));
    return true;
  }
  return false;
});

async function resolveFriendAvatars(usernames) {
  try {
    const userResponse = await fetch('https://users.roblox.com/v1/usernames/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usernames, excludeBannedUsers: false })
    });
    if (!userResponse.ok) return {};
    const users = await userResponse.json();
    const userIds = users.data.map((user) => user.id);
    if (!userIds.length) return {};
    const thumbnailResponse = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userIds.join(',')}&size=150x150&format=Png&isCircular=false`);
    if (!thumbnailResponse.ok) return {};
    const thumbnails = await thumbnailResponse.json();
    const avatars = new Map(thumbnails.data.map((thumbnail) => [String(thumbnail.targetId), thumbnail.imageUrl]));
    return Object.fromEntries(users.data.map((user) => [user.name.toLowerCase(), avatars.get(String(user.id))]).filter(([, url]) => url));
  } catch {
    return {};
  }

  async function resolvePrivateServers(placeId) {
    try {
      const response = await fetch(`https://games.roblox.com/v1/games/${placeId}/private-servers?limit=10&sortOrder=Asc`);
      if (!response.ok) return [];
      const result = await response.json();
      return (result.data || []).map((server) => ({
        name: server.name || 'Private server',
        owner: server.owner?.name || 'Roblox player',
        players: server.playing || 0,
        link: server.privateServerLinkCode ? `https://www.roblox.com/games/${placeId}?privateServerLinkCode=${server.privateServerLinkCode}` : ''
      }));
    } catch {
      return [];
    }
  }
}

async function resolveGameThumbnails(placeIds) {
  try {
    const response = await fetch(`https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${placeIds.join(',')}&size=512x512&format=Png&isCircular=false`);
    if (!response.ok) return {};
    const result = await response.json();
    return Object.fromEntries(result.data.map((thumbnail) => [String(thumbnail.targetId), thumbnail.imageUrl]));
  } catch {
    return {};
  }
}
