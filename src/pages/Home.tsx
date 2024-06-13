import { useState } from "react";
import Button from "../components/Button";

function Home() {
  const [walletRedirection, setWalletRedirection] = useState(false);

  const transakURL = "https://global-stg.transak.com";
  const apiKey = "d79671a4-b021-4a4f-a444-6862a680a94b";
  const redirectURL = "https://transak-redirect.vercel.app/redirect";
  const environment = "STAGING";
  const themeColor = "FDC809";

  let hrefURL = `${transakURL}/?apiKey=${apiKey}&environment=${environment}&redirectURL=${encodeURIComponent(
    redirectURL
  )}&themeColor=${themeColor}`;

  if (walletRedirection) {
    hrefURL += `&walletRedirection=true`;
  }

  return (
    <div className="container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={walletRedirection}
          onChange={(e) => setWalletRedirection(e.target.checked)}
        />
        Enable Wallet Redirection
      </label>
      <p className="info-text">
        Wallet Redirection works only with the <strong>Sell</strong> Flow. For
        more details{" "}
        <a
          href="https://docs.transak.com/docs/query-parameters-examples#walletredirection"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>
        .
      </p>
      <Button hrefURL={hrefURL} text="Launch Transak" target="_self" />
    </div>
  );
}

export default Home;
