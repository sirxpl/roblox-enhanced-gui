(() => {
  const dashboardId = 'reg-dashboard';

  function findAvatar() {
    const image = document.querySelector('.profile-avatar-image img, .avatar-card-image img, img[src*="avatar"]');
    return image?.src || 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-420E7B67E7B94E7A0D3E3F1D9AF2C7A1-Png/150/150/AvatarHeadshot/Webp/noFilter';
  }

  function createDashboard() {
    if (document.getElementById(dashboardId) || !location.pathname.startsWith('/home')) return;

    const dashboard = document.createElement('section');
    dashboard.id = dashboardId;
    dashboard.innerHTML = `
      <aside class="reg-sidebar">
        <div class="reg-brand"><span class="reg-brand-mark">R</span><strong>Roblox</strong></div>
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
              <span class="reg-icon reg-icon-${icon}" aria-hidden="true"></span><span>${label}</span>
              ${count ? `<em>${count}</em>` : ''}
            </button>`).join('')}
        </nav>
        <div class="reg-sidebar-bottom">
          <button class="reg-nav-item"><span class="reg-icon reg-icon-palette"></span><span>Themes</span></button>
          <button class="reg-nav-item"><span class="reg-icon reg-icon-tag"></span><span>Deals</span></button>
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
            <div class="reg-friends">${['vi_vinn', 'Void', 'bacon', 'Prime Calamity', 'qdw2', 'Sky', 'LoreleiJ1234', 'Erza', 'DNDavidTYT'].map((name, index) => `
              <article class="reg-friend"><div class="reg-friend-avatar tone-${index % 4}"><img src="${index === 0 ? findAvatar() : `https://tr.rbxcdn.com/30DAY-AvatarHeadshot-${['420E7B67E7B94E7A0D3E3F1D9AF2C7A1','8A7A1A74B99C9A887B1C15E9B6A21F04','0C7A19B8E44A2CF2A7A3D112D0C4E8A2','7A1F4B18C7E42DA4F6E2D0B1E53A77F0'][index % 4]}-Png/150/150/AvatarHeadshot/Webp/noFilter`}" alt=""></div><strong>${name}</strong><span>${['Vi_vinn Subjects','generic roleplay game...','Fisch 🍉 [SKYCREST]','Anime Vanguards: H...','[UPDATE] Stavevi...','[ARCADE] Pet Si...','[UPDATE] Stavevi...','Flee the Facility','[LEGACY] Toilet To...'][index]}</span></article>`).join('')}</div>
          </section>
          <section class="reg-section">
            <div class="reg-section-title"><h2>Continue</h2><button class="reg-see-all">See All ›</button></div>
            <div class="reg-games">${['Brookhaven 🏡RP', 'Murder Mystery 2', 'Adopt Me!', 'Driving Empire', 'My Prison'].map((game, index) => `<article class="reg-game"><div class="reg-game-art game-${index}"><span>${index === 0 ? 'LIVE' : 'PLAY'}</span></div><strong>${game}</strong><small>▶ ${(12 + index * 7)}K playing</small></article>`).join('')}</div>
          </section>
        </div>
      </main>
      <button class="reg-close" aria-label="Close enhanced dashboard">×</button>
    `;

    document.body.appendChild(dashboard);
    dashboard.querySelector('.reg-close').addEventListener('click', () => dashboard.classList.toggle('is-minimized'));
    dashboard.querySelectorAll('.reg-nav-item[data-reg-view]').forEach((item) => item.addEventListener('click', () => {
      dashboard.querySelectorAll('.reg-nav-item').forEach((nav) => nav.classList.remove('is-active'));
      item.classList.add('is-active');
    }));
  }

  function applyCustomAvatar(dataUrl) {
    document.querySelectorAll('#reg-dashboard img').forEach((image) => {
      if (image.classList.contains('reg-account-avatar') || image.closest('.reg-profile-picture') || image.closest('.reg-friend:first-child')) {
        image.src = dataUrl;
      }
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
    input.addEventListener('change', () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        localStorage.setItem('custom_roblox_pfp', dataUrl);
        applyCustomAvatar(dataUrl);
      };
      reader.readAsDataURL(file);
    });
    const savedPfp = localStorage.getItem('custom_roblox_pfp');
    if (savedPfp) applyCustomAvatar(savedPfp);
  }

  function boot() {
    createDashboard();
    setupAvatarPicker();
  }

  window.addEventListener('load', boot);
  new MutationObserver(boot).observe(document.documentElement, { childList: true, subtree: true });
})();
