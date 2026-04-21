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

  venturesDirect: [
    { name: "Arbe Robotics", logo: "logos/portfolio/ventures/Arbe--logo-gradient-transparent.png", url: "https://arberobotics.com/", desc: "4D Imagining Radar Technology" },
    { name: "Bridgewise", logo: "logos/portfolio/ventures/Bridgewise logo.png", url: "https://bridgewise.com/", desc: "AI powered wealth management" },
    { name: "Elektrofi", logo: "logos/portfolio/ventures/elektrofi-logo.png", url: "https://www.elektrofi.com/", desc: "Biopharmaceutical formulation technology" },
    { name: "Natrx", logo: "logos/portfolio/ventures/Natrx logo.png", url: "https://natrx.io/", desc: "Natrx Adaptive Infrastructure" },
    { name: "NufabRx", logo: "logos/portfolio/ventures/NufabRx logo.png", url: "https://nufabrx.com/", desc: "Medicine infused apparel" },
    { name: "Rabbu", logo: "logos/portfolio/ventures/rabbu-og-image.jpg", url: "https://rabbu.com/", desc: "Airbnb investment marketplace" },
    { name: "Luminous", logo: "logos/portfolio/ventures/Luminous logo.png", url: "https://joinluminous.com/", desc: "ERP Software development" },
  ],

  venturesFunds: [
    { name: "a16z", logo: "logos/portfolio/ventures/AZ16.png", url: "https://a16z.com/", desc: "One of the most prestigious VC funds in the market" },
    { name: "CFV Ventures", logo: "logos/portfolio/ventures/CFV Ventures logo.png", desc: "Venture fund" },
    { name: "Rebel Fund", logo: "logos/portfolio/ventures/Rebel fund logo.png", url: "https://www.rebelfund.vc/", desc: "Invests in the top 10% of startups from Y Combinator" },
  ],

  digitalDirect: [
    { name: "Bitcoin", ticker: "BTC", logo: "logos/portfolio/digital/Select direct holdings/Bitcoin.svg.png", url: "https://bitcoin.org" },
    { name: "Ethereum", ticker: "ETH", logo: "logos/portfolio/digital/Select direct holdings/Ethereum_Logo.png", url: "https://ethereum.org" },
    { name: "Solana", ticker: "SOL", logo: "logos/portfolio/digital/Select direct holdings/Solana Logo PNG SVG Vector-01.png", url: "https://solana.com" },
    { name: "Litecoin", ticker: "LTC", logo: "logos/portfolio/digital/Select direct holdings/Litecoinpng.png", url: "https://litecoin.org" },
    { name: "USDC", ticker: "USDC", logo: "logos/portfolio/digital/Select direct holdings/USDC.svg.png", url: "https://www.circle.com/usdc" },
    { name: "Chainlink", ticker: "LINK", logo: "logos/portfolio/digital/Select direct holdings/Chainlikn.png", url: "https://chain.link" },
    { name: "Avalanche", ticker: "AVAX", logo: "logos/portfolio/digital/Select direct holdings/Avalanche.svg .png", url: "https://www.avax.network" },
    { name: "Chiliz", ticker: "CHZ", logo: "logos/portfolio/digital/Select direct holdings/Chiliz (CHZ) Logo Vector.svg .png", url: "https://www.chiliz.com" },
  ],

  digitalFunds: [
    { name: "a16z crypto", logo: "logos/portfolio/digital/Digital Asset Venture Fund Investments/a16z crypto Logo Vector.svg .png", url: "https://a16zcrypto.com" },
    { name: "CoinFund", logo: "logos/portfolio/digital/Digital Asset Venture Fund Investments/Coinfund.png", url: "https://coinfund.io" },
    { name: "1kx", logo: "logos/portfolio/digital/Digital Asset Venture Fund Investments/1K (x).png", url: "https://1kx.network" },
    { name: "North Island Ventures", logo: "logos/portfolio/digital/Digital Asset Venture Fund Investments/North Island ventures.png", url: "https://northisland.ventures" },
    { name: "Folius Ventures", logo: "logos/portfolio/digital/Digital Asset Venture Fund Investments/Folius ventures.png", url: "https://folius.ventures" },
    { name: "Arca", logo: "logos/portfolio/digital/Digital Asset Venture Fund Investments/arca.png", url: "https://www.ar.ca" },
    { name: "ParaFi Capital", logo: "logos/portfolio/digital/Digital Asset Venture Fund Investments/Parafi Capital Logo Vector.svg .png", url: "https://www.parafi.com" },
  ],

  capital: [
    { name: "Ares Management", logo: "logos/portfolio/capital/Ares_Management_logo.svg.png", url: "https://www.aresmgmt.com/", desc: "Global alternative investment manager" },
    { name: "Blackstone", logo: "logos/portfolio/capital/The_Blackstone_Group_logo.svg", url: "https://www.blackstone.com/", desc: "Global investment firm" },
    { name: "Goldman Sachs", logo: "logos/portfolio/capital/Goldmand.png", url: "https://www.goldmansachs.com/", desc: "Global investment banking and financial services" },
    { name: "Harvest Growth Capital", logo: "logos/portfolio/capital/Harvest_growth.png", desc: "Growth capital investment firm" },
    { name: "Millennium Management", logo: "logos/portfolio/capital/millennium.png", url: "https://www.mlp.com/", desc: "Global alternative investment management firm" },
    { name: "Morgan Stanley", logo: "logos/portfolio/capital/Morgan-Stanley-Logo.png", url: "https://www.morganstanley.com/", desc: "Global financial services firm" },
    { name: "Oaktree Capital", logo: "logos/portfolio/capital/Oaktree-Capital-Management.svg", url: "https://www.oaktreecapital.com/", desc: "Global alternative investment management" },
    { name: "Select Equity", logo: "logos/portfolio/capital/Select-Equity_PrivateEquity.png", desc: "Private equity investments" },
  ],

  realAssets: [
    { name: "Elevation Capital Group", logo: "logos/portfolio/real-assets/Elevation capital group.png", url: "https://www.elevationcapitalgroup.com/", desc: "Real estate investment and development", oversized: true },
    { name: "Equity Residences", logo: "logos/portfolio/real-assets/equity residence.png", url: "https://www.equityresidences.com/", desc: "Residential real estate investments" },
    { name: "Griffin Capital", logo: "logos/portfolio/real-assets/Griffin.png", url: "https://www.griffincapital.com/", desc: "Alternative investment management" },
    { name: "The Perkins Fund", logo: "logos/portfolio/real-assets/Perkins fund.webp", desc: "Real estate investment fund" },
    { name: "Teak Hardwoods", logo: "logos/portfolio/real-assets/Teak hardwoods.png", url: "https://www.teakhardwoods.com/", desc: "Sustainable hardwood investments", oversized: true },
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

    if (company.desc) {
      item.title = company.desc;
    }

    if (company.logo) {
      const img = document.createElement('img');
      img.src = company.logo;
      img.alt = company.desc || company.name;
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

function buildMixedGrid(containerId, companies) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const visible = companies.filter(c => !c.hidden);
  if (visible.length === 0) return;

  grid.innerHTML = '';
  visible.forEach(company => {
    const card = company.url
      ? Object.assign(document.createElement('a'), { href: company.url, target: '_blank', rel: 'noopener', className: 'mixed-card' })
      : Object.assign(document.createElement('div'), { className: 'mixed-card' });

    if (company.desc) card.title = company.desc;

    if (company.logo) {
      const img = document.createElement('img');
      img.src = company.logo;
      img.alt = company.name;
      img.loading = 'lazy';
      if (company.oversized) img.className = 'logo-oversized';
      card.appendChild(img);
    } else {
      const nameEl = document.createElement('span');
      nameEl.className = 'mixed-card-text';
      nameEl.textContent = company.name;
      card.appendChild(nameEl);
    }

    grid.appendChild(card);
  });
}

function buildCardGrid(containerId, companies) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const visible = companies.filter(c => !c.hidden);
  if (visible.length === 0) return;

  grid.innerHTML = '';
  visible.forEach(company => {
    const card = company.url
      ? Object.assign(document.createElement('a'), { href: company.url, target: '_blank', rel: 'noopener', className: 'card-tile' })
      : Object.assign(document.createElement('div'), { className: 'card-tile' });

    if (company.desc) card.title = company.desc;

    if (company.logo) {
      const img = document.createElement('img');
      img.src = company.logo;
      img.alt = company.name;
      img.className = 'card-tile-logo' + (company.oversized ? ' logo-oversized' : '');
      img.loading = 'lazy';
      card.appendChild(img);
    }

    const nameEl = document.createElement('span');
    nameEl.className = 'card-tile-name';
    nameEl.textContent = company.name;
    card.appendChild(nameEl);

    grid.appendChild(card);
  });
}

function buildPillGrid(containerId, tokens) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const visible = tokens.filter(t => !t.hidden);
  if (visible.length === 0) return;

  grid.innerHTML = '';
  visible.forEach(token => {
    const pill = token.url
      ? Object.assign(document.createElement('a'), { href: token.url, target: '_blank', rel: 'noopener', className: 'token-pill' })
      : Object.assign(document.createElement('div'), { className: 'token-pill' });

    if (token.desc) pill.title = token.desc;

    if (token.logo) {
      const img = document.createElement('img');
      img.src = token.logo;
      img.alt = token.name;
      img.className = 'token-pill-icon';
      img.loading = 'lazy';
      pill.appendChild(img);
    }

    const label = document.createElement('span');
    label.className = 'token-pill-label';
    label.textContent = token.ticker || token.name;
    pill.appendChild(label);

    grid.appendChild(pill);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildGrid('ventures-direct-grid', portfolio.venturesDirect);
  buildGrid('ventures-funds-grid',  portfolio.venturesFunds);
  buildPillGrid('digital-direct-grid', portfolio.digitalDirect);
  buildCardGrid('digital-funds-grid', portfolio.digitalFunds);
  buildGrid('capital-grid',        portfolio.capital);
  buildMixedGrid('real-assets-grid', portfolio.realAssets);
});
