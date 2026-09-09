(() => {
  const dashboardId = 'reg-dashboard';

  const icons = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/></svg>',
    profile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.5 3.1-5.2 7-5.2s6.2 1.7 7 5.2"/></svg>',
    message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="M7 10h.01M12 10h.01M17 10h.01"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.6-3.4 2.5-5 6-5s5.4 1.6 6 5M15 15c3.2-.2 5 1.5 5.5 4"/></svg>',
    avatar: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3"/><path d="M5 20c.5-3.5 2.8-5 7-5s6.5 1.5 7 5M7 20h10"/></svg>',
    bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 12H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    trade: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h13l-3-3M20 17H7l3 3M17 4l3 3-3 3M7 14l-3 3 3 3"/></svg>',
    community: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H8l-4 3V5Z"/><path d="M8 9h8M8 12h5"/></svg>',
    palette: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 0 16h1.5a1.5 1.5 0 0 0 0-3H12a1.5 1.5 0 0 1 0-3h2.5A5.5 5.5 0 0 0 20 8.5 8 8 0 0 0 12 4Z"/><path d="M8 9h.01M12 7h.01M16 9h.01"/></svg>',
    tag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 5 8-1 8 8-7 7-8-8 1-6Z"/><circle cx="9" cy="9" r="1"/></svg>'
  };

  function findAvatar() {
    const image = document.querySelector('.profile-avatar-image img, .avatar-card-image img, img[src*="avatar"]');
    return image?.src || 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-EDFE687966E145B9251D1B28BB0BBB53-Png/150/150/AvatarHeadshot/Png/isCircular';
  }

  function friendAvatar(name, index) {
    const colors = ['#d88954', '#5a9bd5', '#a96ed1', '#58b87d'];
    const initials = name.slice(0, 2).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><rect width="150" height="150" rx="75" fill="${colors[index % colors.length]}"/><circle cx="75" cy="58" r="28" fill="#f4d2b8"/><path d="M30 145c5-36 25-52 45-52s40 16 45 52" fill="#20242a"/><text x="75" y="135" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="20" font-weight="700">${initials}</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }
  const thumbnailPlaceIds = [
    '920587237', '4924922222', '2753915549', '6516141723', '142823291',
    '8737899170', '1537690962', '537413528', '9872472334', '286090429',
    '3260590327', '16732694052'
  ];
  const friendList = [
    ['vi_vinn', 'Vi_vinn Subjects', true],
    ['Soulless', 'HOURS', true],
    ['Void', 'generic roleplay game...', true],
    ['臭虫', '⭐ X2 XP + 🧪 Alliance...', true],
    ['Sky', '🕹️ [ARCADE] Pet Simulator', true],
    ['LoreleiJ1234', '[UPDATE] ⚔️ Stateview Prison', true],
    ['Erza', '🎂 Flee the Facility 🎂', true],
    ['DNDavidTYT', '[LEGACY] Toilet Tower Defense', true],
    ['Tempo Playz', '[THERMAL] War Tycoon', true],
    ['Kube', '[🍎] Blox Fruits', true]
  ];
  const knownFriendAvatars = {
    vi_vinn: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-EDFE687966E145B9251D1B28BB0BBB53-Png/150/150/AvatarHeadshot/Png/noFilter',
    soulless: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-A6FAB23FFE9F0A627F3FE3683F60E1F1-Png/150/150/AvatarHeadshot/Png/noFilter',
    loreleij1234: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-98AFE271596DE738EC4E0DEFBC93DFAF-Png/150/150/AvatarHeadshot/Png/noFilter',
    erza: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-1D6664C2E9169CCCF329BAB69C9936EE-Png/150/150/AvatarHeadshot/Png/noFilter',
    kube: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E2B8C31ADADEBB4D7F095B5283D1E5E7-Png/150/150/AvatarHeadshot/Png/noFilter'
  };

  const gameGroups = [
    {
      title: 'Recommended For You',
      metric: 'rating',
      games: [
        ['Anime Stars Card Collection', '90%', '982', 'game-anime'],
        ['RUNAWAYS [beta]', '96%', '26.3K+', 'game-runaways'],
        ['Tank VS Train', '91%', '1.2K+', 'game-tank'],
        ['San Diego Roleplay', '86%', '11.4K+', 'game-bus'],
        ['Project 12 [BODY CAM!]', '69%', '7.8K+', 'game-project'],
        ['[UPD!] My Toll Farm!', '98%', '1.4K+', 'game-toll']
      ]
    },
    {
      title: 'Favorites',
      metric: 'rating',
      games: [
        ['Wanted [🏍️UPDATE]', '97%', '7.8K+', 'game-wanted'],
        ['Verity [HORROR]', '51%', '675', 'game-verity'],
        ['[UPD] Zombie Stories', '91%', '91', 'game-zombie'],
        ['[EXTENDED] Buy All Free T-Shirts', '97%', '30', 'game-shirts'],
        ['[UPD!] Ride A Cart Down A Slide', '97%', '195', 'game-cart'],
        ['Xbox UI Launcher', '97%', '38', 'game-xbox']
      ]
    },
    {
      title: 'Standout Games',
      metric: 'rating',
      games: [
        ['Empire', '95%', '4.4K+', 'game-empire'],
        ['Creatures of Sonaria', '94%', '18K+', 'game-creatures'],
        ['Build Base to Survive', '93%', '2.1K+', 'game-base'],
        ['Forsaken', '92%', '9.2K+', 'game-forsaken']
      ]
    },
    {
      title: 'Global Most Played',
      metric: 'time',
      games: [
        ["Sol's RNG [Summer Event ☀️]", '16y', '', 'game-sol'],
        ['[ARCADE] Pet Simulator 99! 💰', '10y', '', 'game-pets'],
        ['Fisch 🍉 [SKYCREST]', '8y 9mo', '', 'game-fisch'],
        ['The Strongest Battlegrounds', '6y', '', 'game-battlegrounds'],
        ['Bee Swarm Simulator', '6y', '', 'game-bees'],
        ['Catalog Avatar Creator', '6y 8mo', '', 'game-catalog']
      ]
    },
    {
      title: 'Community Picks',
      metric: 'votes',
      games: [
        ['Combat Initiation', '18 community votes', '', 'game-combat'],
        ['dingus', '11 community votes', '', 'game-dingus'],
        ['Build A Boat For Treasure', '16 community votes', '', 'game-boat'],
        ['Evade', '9 community votes', '', 'game-evade'],
        ['Regretavator [ELEVATOR SIMULATOR]', '9 community votes', '', 'game-regret'],
        ['LOCOfficial!', '8 community votes', '', 'game-loc']
      ]
    },
    {
      title: 'Developer Games',
      metric: 'time',
      games: [
        ["skell's super testing hub", '1h 53m', '', 'game-dev-house'],
        ["SkellKing's Community Hub", '12m', '', 'game-dev-hub'],
        ['BCF testing', '5m', '', 'game-dev-rock'],
        ['*Fix bugs* MTA: Q17', '2m', '', 'game-dev-roblox'],
        ['the sillys hub v2', '2m', '', 'game-dev-arch'],
        ['Noob Destroyer', '2m', '', 'game-dev-city']
      ]
    },
    {
      title: 'Your Most Played Games',
      metric: 'time',
      games: [
        ['Wanted [🏍️UPDATE]', '8h 1m', '', 'game-wanted'],
        ['[📦] Tower Defense Simulator', '5h 31m', '', 'game-tds'],
        ['Critical Tower Defense', '4h 10m', '', 'game-ctd'],
        ['IRT Subway | Mainline', '3h 40m', '', 'game-subway'],
        ['Seal A Driveway [RELEASE]', '1h 37m', '', 'game-driveway'],
        ['[WEEK 2 🍉] Forsaken', '56m', '', 'game-forsaken']
      ]
    }
  ];

  function renderGameGroup(group, index) {
    return `<section class="reg-section reg-game-section">
      <div class="reg-section-title"><h2>${group.title}</h2><div><button class="reg-see-all">See All ›</button></div></div>
      <div class="reg-game-shelf" data-shelf="${index}">
        <button class="reg-carousel-arrow reg-carousel-prev" aria-label="Previous ${group.title}">‹</button>
        <div class="reg-game-track">${group.games.map(([name, primary, secondary, art], gameIndex) => `
          <article class="reg-discovery-card" data-place-id="${thumbnailPlaceIds[(index * 3 + gameIndex) % thumbnailPlaceIds.length]}" data-game-name="${name}">
            <div class="reg-discovery-art ${art}"><span class="reg-art-mark">ROBLOX</span><div class="reg-game-actions"><button class="reg-game-action" aria-label="Game options">☷</button><button class="reg-game-action reg-server-trigger">▦</button><button class="reg-game-action" aria-label="Play ${name}">▶</button><button class="reg-server-label">View Servers</button></div></div>
            <strong title="${name}">${name}</strong>
            <div class="reg-game-meta"><span>${group.metric === 'rating' ? '♥' : group.metric === 'votes' ? '●' : '◷'} ${primary}</span>${secondary ? `<span>♟ ${secondary}</span>` : ''}</div>
          </article>`).join('')}</div>
        <button class="reg-carousel-arrow reg-carousel-next" aria-label="Next ${group.title}">›</button>
      </div>
    </section>`;
  }

  function renderPlaytime() {
    return `<section class="reg-section reg-playtime-section"><div class="reg-section-title"><h2>Your Playtime</h2></div>
      <div class="reg-playtime"><div class="reg-playtime-header"><strong>◉ &nbsp; Playtime Overview</strong><div><button class="reg-chart-arrow">‹</button><button class="reg-time-range">Last 7 Days⌄</button><button class="reg-chart-arrow">›</button></div></div>
      <div class="reg-chart"><div class="reg-chart-grid"></div><svg viewBox="0 0 900 280" preserveAspectRatio="none" aria-label="Playtime chart"><polyline class="chart-green" points="0,220 150,260 300,260 450,210 600,260 750,250 900,260"/><polyline class="chart-pink" points="0,220 150,155 300,260 450,260 600,220 750,25 900,120"/><polyline class="chart-blue" points="0,260 150,255 300,260 450,255 600,260 750,225 900,235"/></svg><div class="reg-chart-labels"><span>Tue, Sep 1</span><span>Wed, Sep 2</span><span>Thu, Sep 3</span><span>Fri, Sep 4</span><span>Sat, Sep 5</span><span>Sun, Sep 6</span><span>Mon, Sep 7</span></div></div>
      <p class="reg-chart-note">Data provided by Roblox Enhanced GUI, not affiliated with Roblox.</p></div></section>`;
  }

  function createDashboard() {
    if (document.getElementById(dashboardId) || !location.pathname.startsWith('/home')) return;

    const dashboard = document.createElement('section');
    dashboard.id = dashboardId;
    dashboard.innerHTML = `
      <aside class="reg-sidebar">
        <div class="reg-brand"><span class="reg-brand-mark">R</span><strong>ROBLOX</strong></div>
        <div class="reg-account">
          <img class="reg-account-avatar" src="${findAvatar()}" alt="">
          <div><strong class="reg-display-name">Welcome back</strong><span>@robloxplayer</span></div>
        </div>
        <nav class="reg-nav" aria-label="Enhanced navigation">
          ${[
            ['home', 'Home'],
            ['profile', 'Profile'],
            ['message', 'Messages', '12'],
            ['users', 'Friends', '38'],
            ['avatar', 'Avatar'],
            ['bag', 'Inventory'],
            ['trade', 'Trade'],
            ['community', 'Communities']
          ].map(([icon, label, count], index) => `
            <button class="reg-nav-item${index === 0 ? ' is-active' : ''}" data-reg-view="${label}">
              <span class="reg-icon reg-icon-${icon}">${icons[icon]}</span><span>${label}</span>
              ${count ? `<em>${count}</em>` : ''}
            </button>`).join('')}
        </nav>
        <div class="reg-sidebar-bottom">
          <button class="reg-nav-item"><span class="reg-icon reg-icon-palette">${icons.palette}</span><span>Themes</span></button>
          <button class="reg-nav-item"><span class="reg-icon reg-icon-tag">${icons.tag}</span><span>Deals</span></button>
          <div class="reg-version">Roblox Enhanced GUI <small>v1.0</small></div>
        </div>
      </aside>
      <main class="reg-main">
        <header class="reg-topbar">
          <div class="reg-breadcrumb">Home</div>
          <label class="reg-search"><span class="reg-search-icon"></span><input placeholder="Search Roblox" aria-label="Search Roblox"><kbd>Ctrl K</kbd></label>
          <div class="reg-top-actions"><span class="reg-level">Next Level: <strong>144 EXP</strong><i></i></span><button aria-label="Messages">✉</button><button aria-label="Notifications">●</button><button aria-label="Settings">⚙</button></div>
        </header>
        <div class="reg-content">
          <section class="reg-hero">
            <div class="reg-hero-art"></div>
            <div class="reg-hero-heading">Looking good, <span class="reg-hero-name">Robloxian</span>!</div>
            <div class="reg-profile-row">
              <div class="reg-profile-picture"><img src="${findAvatar()}" alt="Profile avatar"><b>16</b></div>
              <div class="reg-profile-name"><h2>Robloxian</h2><p>@robloxplayer</p></div>
              <div class="reg-profile-stats"><strong>Level: 16 <small>Total Exp: 6,656</small></strong><button>View Leaderboard</button><button>View Rewards</button></div>
            </div>
          </section>
          <section class="reg-section">
            <div class="reg-section-title"><h2>Friends <span>(322)</span></h2><div><button class="reg-filter">All Types <b>⌄</b></button><button class="reg-see-all">See All</button></div></div>
            <div class="reg-friends">${friendList.map(([name, activity, online], index) => `
              <article class="reg-friend" data-username="${name}"><div class="reg-friend-avatar tone-${index % 4}"><img src="${knownFriendAvatars[name.toLowerCase()] || friendAvatar(name, index)}" data-fallback="${friendAvatar(name, index)}" alt="${name} avatar">${online ? '<b class="reg-online-badge">●</b>' : ''}</div><strong>${name}</strong><span>${activity}</span></article>`).join('')}</div>
          </section>
          ${gameGroups.map(renderGameGroup).join('')}
          ${renderPlaytime()}
        </div>
      </main>
      <button class="reg-close" aria-label="Close enhanced dashboard">×</button>
    `;

    document.body.appendChild(dashboard);
    dashboard.querySelector('.reg-close').addEventListener('click', () => dashboard.classList.toggle('is-minimized'));
    dashboard.querySelectorAll('.reg-server-trigger, .reg-server-label').forEach((button) => button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const card = button.closest('.reg-discovery-card');
      openServerPanel(card.dataset.placeId, card.dataset.gameName);
    }));
    dashboard.querySelectorAll('.reg-friend-avatar img').forEach((image) => image.addEventListener('error', () => {
      if (image.src !== image.dataset.fallback) image.src = image.dataset.fallback;
    }));
    loadGameThumbnails(dashboard);
    loadFriendAvatars(dashboard);
    dashboard.querySelectorAll('.reg-game-shelf').forEach((shelf) => {
      const track = shelf.querySelector('.reg-game-track');
      shelf.querySelector('.reg-carousel-prev').addEventListener('click', () => track.scrollBy({ left: -620, behavior: 'smooth' }));
      shelf.querySelector('.reg-carousel-next').addEventListener('click', () => track.scrollBy({ left: 620, behavior: 'smooth' }));
    });
    dashboard.querySelectorAll('.reg-nav-item[data-reg-view]').forEach((item) => item.addEventListener('click', () => {
      dashboard.querySelectorAll('.reg-nav-item').forEach((nav) => nav.classList.remove('is-active'));
      item.classList.add('is-active');
    }));
  }

  function openServerPanel(placeId, gameName) {
    document.getElementById('reg-server-panel')?.remove();
    const panel = document.createElement('div');
    panel.id = 'reg-server-panel';
    panel.innerHTML = `<div class="reg-server-backdrop"></div><section class="reg-server-dialog" role="dialog" aria-label="${gameName} private servers"><button class="reg-server-close" aria-label="Close">×</button><h2>${gameName}</h2><p class="reg-server-subtitle">Private servers</p><div class="reg-server-list"><div class="reg-server-loading">Loading servers...</div></div><button class="reg-server-all">View all</button></section>`;
    document.getElementById(dashboardId).appendChild(panel);
    panel.querySelector('.reg-server-close').addEventListener('click', () => panel.remove());
    panel.querySelector('.reg-server-backdrop').addEventListener('click', () => panel.remove());
    requestExtensionData('private-servers', { placeId }).then((servers) => {
      const list = panel.querySelector('.reg-server-list');
      const entries = servers.length ? servers : [
        { name: `${gameName}'s server`, owner: 'Roblox player', players: 0 },
        { name: 'Community private server', owner: 'Roblox player', players: 0 },
        { name: 'Friends only server', owner: 'Roblox player', players: 0 }
      ];
      list.innerHTML = entries.map((server) => `<article class="reg-server-entry"><div><strong>${server.name}</strong><span>by ${server.owner}</span><small>${server.players} players</small></div><button aria-label="Join ${server.name}">▶</button></article>`).join('');
    });
  }

  async function loadGameThumbnails(dashboard) {
    const cards = [...dashboard.querySelectorAll('.reg-discovery-card')];
    const placeIds = cards.map((card) => card.dataset.placeId).filter(Boolean);
    if (!placeIds.length) return;
    try {
      const thumbnails = await requestExtensionData('game-thumbnails', { placeIds });
      cards.forEach((card) => {
        const imageUrl = thumbnails[card.dataset.placeId];
        if (imageUrl) {
          const art = card.querySelector('.reg-discovery-art');
          art.style.backgroundImage = `url("${imageUrl}")`;
          art.classList.add('has-thumbnail');
        }

      });
    } catch {
      // CSS artwork remains in place when Roblox thumbnails are unavailable.
    }
  }

  async function loadFriendAvatars(dashboard) {
    const cards = [...dashboard.querySelectorAll('.reg-friend[data-username]')];
    const usernames = cards.map((card) => card.dataset.username);
    const avatars = await requestExtensionData('friend-avatars', { usernames });
    cards.forEach((card) => {
      const imageUrl = avatars[card.dataset.username.toLowerCase()];
      if (imageUrl) card.querySelector('.reg-friend-avatar img').src = imageUrl;
    });
  }

  function requestExtensionData(type, payload) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ type, ...payload }, (response) => resolve(response?.data || {}));
    });
  }

  function applyCustomAvatar(dataUrl) {
    document.querySelectorAll('#reg-dashboard img').forEach((image) => {
      if (image.classList.contains('reg-account-avatar') || image.closest('.reg-profile-picture')) {
        image.src = dataUrl;
      }
    });
  }

  function avatarDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('roblox-enhanced-gui', 1);
      request.onupgradeneeded = () => request.result.createObjectStore('settings');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function saveAvatar(dataUrl) {
    const database = await avatarDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction('settings', 'readwrite');
      transaction.objectStore('settings').put(dataUrl, 'custom_roblox_pfp');
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  }

  async function loadAvatar() {
    const database = await avatarDatabase();
    const savedAvatar = await new Promise((resolve, reject) => {
      const request = database.transaction('settings').objectStore('settings').get('custom_roblox_pfp');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    database.close();
    return savedAvatar;
  }

  function compressAvatar(file) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 256;
        canvas.width = size;
        canvas.height = size;
        canvas.getContext('2d').drawImage(image, 0, 0, size, size);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      image.onerror = () => reject(new Error('The selected profile image could not be read.'));
      image.src = URL.createObjectURL(file);
    });
  }

  function setupAvatarPicker() {
    const avatar = document.querySelector('#reg-dashboard .reg-profile-picture');
    if (!avatar || avatar.dataset.pickerReady) return;
    avatar.dataset.pickerReady = 'true';
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.hidden = true;
    document.body.appendChild(input);
    avatar.title = 'Click to change profile picture';
    avatar.addEventListener('click', () => input.click());
    input.addEventListener('change', async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const dataUrl = await compressAvatar(file);
        await saveAvatar(dataUrl);
        applyCustomAvatar(dataUrl);
      } catch (error) {
        console.error('Roblox Enhanced GUI could not save the profile image.', error);
        alert('The profile image could not be saved. Please choose a smaller image and try again.');
      }
    });
    loadAvatar().then((savedPfp) => {
      if (savedPfp) applyCustomAvatar(savedPfp);
    }).catch(() => {
      // The default Roblox CDN avatar remains active when IndexedDB is unavailable.
    });
  }

  function boot() {
    createDashboard();
    setupAvatarPicker();
  }

  chrome.runtime?.onMessage?.addListener((message) => {
    const dashboard = document.getElementById(dashboardId);
    if (message.type !== 'reg-setting') return;
    if (message.setting === 'dashboard' && message.value === true) {
      if (dashboard) dashboard.classList.remove('is-minimized');
      else createDashboard();
    }
    if (message.setting === 'dashboard' && message.value === false && dashboard) dashboard.remove();
    if (message.setting === 'shelves' && dashboard) {
      dashboard.querySelectorAll('.reg-game-section, .reg-playtime-section').forEach((section) => {
        section.hidden = !message.value;
      });
    }
  });

  window.addEventListener('load', boot);
  new MutationObserver(boot).observe(document.documentElement, { childList: true, subtree: true });
})();
