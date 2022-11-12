import logo from "../images/logo.svg";
import logoLight from "../images/logo-light.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import "./default-layout.css";

export function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <div className="top-bar">
        <img src={logo} alt="" />

        <div className="top-nav">
          <a href="#home">Home</a>
          <a href="#Place">Place to stay</a>
          <a href="#NFTs">NFTs</a>
          <a href="#Community">Community</a>
        </div>

        <button className="button">Connect wallet</button>
      </div>

      <div>{props.children}</div>

      <div className="footer">
        <div className="footer-content">
          <div>
            <img src={logoLight} alt="" />

            <div className="footer-social-links">
              <a href="#facebook">
                <img src={facebook} alt="" />
              </a>
              <a href="#instagram">
                <img src={instagram} alt="" />
              </a>
              <a href="#twitter">
                <img src={twitter} alt="" />
              </a>
            </div>

            <p className="footer-copyright-message">
              <span>&copy;</span> <span>2022 Metabnb</span>
            </p>
          </div>

          <div>
            <p className="footer-links-header">Community</p>

            <ul>
              <li>
                <a href="#nft">NFT</a>
              </li>
              <li>
                <a href="#tokens">Tokens</a>
              </li>
              <li>
                <a href="#landlords">Landlords</a>
              </li>
              <li>
                <a href="#discord">Discord</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-links-header">Community</p>

            <ul>
              <li>
                <a href="#nft">NFT</a>
              </li>
              <li>
                <a href="#tokens">Tokens</a>
              </li>
              <li>
                <a href="#landlords">Landlords</a>
              </li>
              <li>
                <a href="#discord">Discord</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-links-header">Community</p>

            <ul>
              <li>
                <a href="#nft">NFT</a>
              </li>
              <li>
                <a href="#tokens">Tokens</a>
              </li>
              <li>
                <a href="#landlords">Landlords</a>
              </li>
              <li>
                <a href="#discord">Discord</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
