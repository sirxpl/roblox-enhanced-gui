window.addEventListener('load', () => {
  // Wait for the profile avatar container to appear
  const avatarContainer = document.querySelector('.profile-avatar-image');

  if (avatarContainer) {
    // Create a hidden file input element for selecting local images
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Style avatar container to show it is clickable
    avatarContainer.style.cursor = 'pointer';
    avatarContainer.title = 'Click to change profile picture (Right-click to remove)';

    // Handle left click: Open file selector
    avatarContainer.addEventListener('click', (e) => {
      e.preventDefault();
      fileInput.click();
    });

    // Handle right click: Remove/reset profile picture
    avatarContainer.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const confirmRemove = confirm("Do you want to remove your custom profile picture?");
      if (confirmRemove) {
        localStorage.removeItem('custom_roblox_pfp');
        location.reload();
      }
    });

    // Save selected image to LocalStorage and update page
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageDataUrl = event.target.result;
          localStorage.setItem('custom_roblox_pfp', imageDataUrl);
          applyCustomAvatar(imageDataUrl);
        };
        reader.readAsDataURL(file);
      }
    });

    // Apply saved image on page load if one exists
    const savedPfp = localStorage.getItem('custom_roblox_pfp');
    if (savedPfp) {
      applyCustomAvatar(savedPfp);
    }
  }
});

// Helper function to update image sources
function applyCustomAvatar(dataUrl) {
  const avatarImgs = document.querySelectorAll('.profile-avatar-image img, .avatar-card-image img');
  avatarImgs.forEach(img => {
    img.src = dataUrl;
    img.srcset = dataUrl;
  });
}
