import Button from "../components/Button";

function Home() {
  const transakURL = "https://global-stg.transak.com";
  const apiKey = "d79671a4-b021-4a4f-a444-6862a680a94b";
  const redirectURL = "https://transak-redirect.vercel.app/redirect";
  const environment = "STAGING";
  const themeColor = "FDC809";

  const hrefURL = `${transakURL}/?apiKey=${apiKey}&environment=${environment}&redirectURL=${encodeURIComponent(
    redirectURL
  )}&themeColor=${themeColor}`;

  return (
    <div className="container">
      <Button hrefURL={hrefURL} text="Launch Transak" />
    </div>
  );
}

export default Home;
