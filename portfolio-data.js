/**
 * ASYMMETRIX — portfolio-data.js
 * ============================================================
 * THIS IS THE FILE YOU EDIT TO UPDATE THE PORTFOLIO.
 *
 * To add a new company:
 *   1. Find the correct strategy array below
 *   2. Add a new object inside the array, following the same format
 *   3. Save the file — the website updates automatically
 *
 * Each company entry looks like this:
 *   {
 *     name: "Company Name",         // Required — shown as text if no logo
 *     logo: "logos/company.png",    // Optional — path to logo image file
 *     url:  "https://company.com",  // Optional — makes the logo a link
 *   }
 *
 * Logo files: save them into the /logos/ folder.
 * Recommended size: at least 300px wide, PNG or SVG, transparent background.
 *
 * To REMOVE a company: delete its entire { ... } block.
 * To HIDE a company temporarily: add  hidden: true  to its entry.
 * ============================================================
 */

const portfolio = {

  ventures: [
    // Add your AX Ventures portfolio companies here.
    // Example (remove the // to activate):
    // { name: "Acme Corp", logo: "logos/acme.png", url: "https://acme.com" },
  ],

  digital: [
    // Add your AX Digital portfolio companies here.
    // { name: "Protocol XYZ", logo: "logos/protocolxyz.svg", url: "https://protocolxyz.io" },
  ],

  capital: [
    // Add your AX Capital portfolio companies here.
    // { name: "Holdco Ltd", logo: "logos/holdco.png", url: "https://holdco.com" },
  ],

  realAssets: [
    // Add your AX Real Assets holdings here.
    // { name: "The Monroe Building", logo: "logos/monroe.png" },
  ],

};

/* ============================================================
   DO NOT EDIT BELOW THIS LINE
   The code below reads the data above and builds the page.
   ============================================================ */

function buildGrid(containerId, companies) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const visible = companies.filter(c => !c.hidden);
  if (visible.length === 0) return; // keep placeholder note visible

  grid.innerHTML = '';
  visible.forEach(company => {
    const item = document.createElement('div');
    item.className = 'logo-item';

    const inner = company.url
      ? Object.assign(document.createElement('a'), { href: company.url, target: '_blank', rel: 'noopener' })
      : document.createElement('div');
    inner.style.display = 'flex';
    inner.style.alignItems = 'center';
    inner.style.justifyContent = 'center';
    inner.style.width = '100%';
    inner.style.height = '100%';

    if (company.logo) {
      const img = document.createElement('img');
      img.src = company.logo;
      img.alt = company.name;
      img.loading = 'lazy';
      inner.appendChild(img);
    } else {
      const nameEl = document.createElement('span');
      nameEl.className = 'logo-item-name';
      nameEl.textContent = company.name;
      inner.appendChild(nameEl);
    }

    item.appendChild(inner);
    grid.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildGrid('ventures-grid',    portfolio.ventures);
  buildGrid('digital-grid',     portfolio.digital);
  buildGrid('capital-grid',     portfolio.capital);
  buildGrid('real-assets-grid', portfolio.realAssets);
});
