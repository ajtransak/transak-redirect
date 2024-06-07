import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Redirect() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

  const walletRedirection = searchParams.get("walletRedirection") === "true";
  const orderId = searchParams.get("orderId");
  const fiatCurrency = searchParams.get("fiatCurrency");
  const cryptoCurrency = searchParams.get("cryptoCurrency");
  const fiatAmount = searchParams.get("fiatAmount");
  const cryptoAmount = searchParams.get("cryptoAmount");
  const isBuyOrSell = searchParams.get("isBuyOrSell");
  const status = searchParams.get("status");
  const walletAddress = searchParams.get("walletAddress");
  const totalFeeInFiat = searchParams.get("totalFeeInFiat");
  const isNFTOrder = searchParams.get("isNFTOrder");
  const network = searchParams.get("network");

  const [missingParams, setMissingParams] = useState<string[]>([]);

  useEffect(() => {
    const params = {
      orderId,
      fiatCurrency,
      cryptoCurrency,
      fiatAmount,
      cryptoAmount,
      isBuyOrSell,
      status,
      walletAddress,
      totalFeeInFiat,
      isNFTOrder,
      network,
    };

    // eslint-disable-next-line
    // @ts-ignore
    const missing = Object.keys(params).filter((key) => params[key] === null);
    setMissingParams(missing);
  }, [
    orderId,
    fiatCurrency,
    cryptoCurrency,
    fiatAmount,
    cryptoAmount,
    isBuyOrSell,
    status,
    walletAddress,
    totalFeeInFiat,
    isNFTOrder,
    network,
  ]);

  const areParamsPresent = missingParams.length === 0;

  return (
    <div className="container">
      {walletAddress && isBuyOrSell === "SELL" && (
        <p className="text">Sell Order. Wallet Redirection enabled.</p>
      )}
      <div className="table-container">
        {areParamsPresent ? (
          <>
            <table className="styled-table">
              <tbody>
                <tr>
                  <td>Order ID</td>
                  <td>{orderId}</td>
                </tr>
                <tr>
                  <td>Fiat Currency</td>
                  <td>{fiatCurrency}</td>
                </tr>
                <tr>
                  <td>Crypto Currency</td>
                  <td>{cryptoCurrency}</td>
                </tr>
                <tr>
                  <td>Fiat Amount</td>
                  <td>{fiatAmount}</td>
                </tr>
                <tr>
                  <td>Crypto Amount</td>
                  <td>{cryptoAmount}</td>
                </tr>
                <tr>
                  <td>Is Buy or Sell</td>
                  <td>{isBuyOrSell}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{status}</td>
                </tr>
                <tr>
                  <td>Wallet Address</td>
                  <td>{walletAddress}</td>
                </tr>
                <tr>
                  <td>Total Fee in Fiat</td>
                  <td>{totalFeeInFiat}</td>
                </tr>
                <tr>
                  <td>Is NFT Order</td>
                  <td>{isNFTOrder !== "undefined" ? isNFTOrder : "No"}</td>
                </tr>
                <tr>
                  <td>Network</td>
                  <td>{network}</td>
                </tr>
              </tbody>
            </table>
            <Button text="Back to home" onClick={() => navigate("/")} />
          </>
        ) : (
          <>
            <p className="text">
              Query parameters missing: {missingParams.join(", ")}
            </p>
            <Button text="Back to home" onClick={() => navigate("/")} />
          </>
        )}
      </div>
    </div>
  );
}

export default Redirect;
