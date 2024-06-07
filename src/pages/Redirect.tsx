import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Redirect() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

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

  const areParamsPresent = [
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
  ].every((param) => param !== null);

  return (
    <div className="container">
      {areParamsPresent ? (
        <>
          <table>
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
                <td>{isNFTOrder}</td>
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
          <p>Query parameters missing</p>
          <Button text="Back to home" onClick={() => navigate("/")} />
        </>
      )}
    </div>
  );
}

export default Redirect;
