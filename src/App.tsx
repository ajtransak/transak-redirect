function App() {
  const url = "https://global-stg.transak.com";

  return (
    <div className="container">
      <a
        href={url}
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
