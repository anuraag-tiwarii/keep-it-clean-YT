// Adds a "Comments" toggle button above the comments section on watch pages.
(function () {
  const BTN_ID = "ytfm-comments-toggle";

  function ensureButton() {
    const comments = document.querySelector("ytd-watch-flexy ytd-comments#comments");
    if (!comments || !comments.parentElement) return;
    if (document.getElementById(BTN_ID)) return;

    const btn = document.createElement("button");
    btn.id = BTN_ID;
    btn.type = "button";
    btn.innerHTML = '<span class="ytfm-label"></span><span class="ytfm-arrow">&#9660;</span>';

    const update = () => {
      const open = document.documentElement.classList.contains("ytfm-comments-open");
      btn.querySelector(".ytfm-label").textContent = open ? "Hide comments" : "Show comments";
    };

    btn.addEventListener("click", () => {
      document.documentElement.classList.toggle("ytfm-comments-open");
      update();
      // Nudge YouTube to lazy-load comments once they're visible
      setTimeout(() => window.dispatchEvent(new Event("scroll")), 100);
    });

    update();
    comments.parentElement.insertBefore(btn, comments);
  }

  // Mark the page when a playlist is playing, so CSS can show the playlist panel on the right.
  function updatePlaylistFlag() {
    const hasPlaylist =
      location.pathname === "/watch" && new URLSearchParams(location.search).has("list");
    document.documentElement.classList.toggle("ytfm-playlist", hasPlaylist);
  }
  updatePlaylistFlag();

  // YouTube is a single-page app: re-check on navigation and DOM changes.
  document.addEventListener("yt-navigate-finish", () => {
    updatePlaylistFlag();
    document.documentElement.classList.remove("ytfm-comments-open");
    const old = document.getElementById(BTN_ID);
    if (old) old.remove();
    ensureButton();
  });

  new MutationObserver(ensureButton).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  ensureButton();
})();
