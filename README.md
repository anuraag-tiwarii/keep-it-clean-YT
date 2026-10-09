# Keep it Clean for YT

A small browser extension that declutters YouTube video pages.

- Hides the recommended-videos sidebar and end-screen suggestions
- Collapses comments behind a **Show comments** button
- Keeps the description, title and action buttons in place
- Keeps the playlist panel on the right when a playlist is playing
- Hides the Create / notifications buttons in the top bar

No data is collected or sent anywhere. It only runs on `youtube.com`.

## Install (Chrome, Edge, Brave, other Chromium browsers)

1. Download [`downloads/keep-it-clean.zip`](downloads/keep-it-clean.zip) and unzip it into a folder you will keep.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and choose the unzipped folder.

To install from the source instead, choose the `extension/` folder in this repo.

## Updating

Download the new zip, replace the files in your folder, then click the reload icon on the extension in `chrome://extensions`.

## If YouTube changes its layout

Some elements may reappear after a YouTube update. Edit `extension/focus.css` and add the element's selector with `display: none !important;`. Issues and pull requests are welcome.

## Files

| Path | Purpose |
| --- | --- |
| `extension/manifest.json` | Extension manifest (Manifest V3) |
| `extension/focus.css` | Hides page elements |
| `extension/content.js` | Comments toggle and playlist detection |
| `index.html` | Landing page for GitHub Pages |
| `downloads/keep-it-clean.zip` | Ready-to-install package |

---

Not affiliated with or endorsed by YouTube or Google.
