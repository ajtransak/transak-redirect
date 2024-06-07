function App() {
  const transakURL = "https://global-stg.transak.com";
  const apiKey = "d79671a4-b021-4a4f-a444-6862a680a94b";
  const redirectURL = "https://transak-redirect.vercel.app/redirect";
  const environment = "STAGING";

  const fullURL = `${transakURL}/?apiKey=${apiKey}&environment=${environment}&redirectURL=${encodeURIComponent(
    redirectURL
  )}`;

  return (
    <div className="container">
      <a
        href={fullURL}
        target="_blank"
        rel="noopener noreferrer"
        className="transak"
      >
        Launch Transak
      </a>
    </div>
  );
}

export default App;
