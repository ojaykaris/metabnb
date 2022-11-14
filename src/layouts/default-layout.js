import logo from "../images/logo.svg";
import logoLight from "../images/logo-light.svg";
import horizontalLines from "../images/horizontal-lines.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import "./default-layout.css";
import NiceModal from "@ebay/nice-modal-react";
import { ConnectWalletModal } from "../modals/connect-wallet/connect-wallet";
import { Link, NavLink } from "react-router-dom";
import { MobileMenu } from "../modals/mobile-menu/mobile-menu";

export function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <div className="top-bar">
        <div className="container">
          <div className="d-flex justify-content-space-between align-items-center">
            <Link to="/metabnb">
              <img src={logo} alt="" />
            </Link>

            <div
              className="top-nav d-none lg-d-flex"
              style={{ "--gap": "48px" }}
            >
              <NavLink className="nav-link" to="/metabnb">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/metabnb/places">
                Place to stay
              </NavLink>
              <a className="nav-link" href="#NFTs">
                NFTs
              </a>
              <a className="nav-link" href="#Community">
                Community
              </a>
            </div>

            <button
              className="button d-none lg-d-block"
              onClick={() => NiceModal.show(ConnectWalletModal)}
            >
              Connect wallet
            </button>

            <button
              onClick={() => NiceModal.show(MobileMenu)}
              className="lg-d-none mobile-menu-button"
            >
              <img src={horizontalLines} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div>{props.children}</div>

      <div className="footer">
        <div className="container">
          <div
            className="d-grid md-d-flex md-justify-content-space-between"
            style={{ "--gap": "50px" }}
          >
            <div className="d-grid" style={{ "--gap": "23px" }}>
              <img src={logoLight} alt="" />

              <div
                className="footer-social-links d-flex"
                style={{ "--gap": "41px" }}
              >
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

              <p
                className="footer-copyright-message d-flex"
                style={{ "--gap": "10px" }}
              >
                <span>&copy;</span> <span>2022 Metabnb</span>
              </p>
            </div>

            <div className="d-grid" style={{ "--gap": "23px" }}>
              <p className="footer-links-header">Community</p>

              <ul className="d-grid" style={{ "--gap": "16px" }}>
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

            <div className="d-grid" style={{ "--gap": "23px" }}>
              <p className="footer-links-header">Places</p>

              <ul className="d-grid" style={{ "--gap": "16px" }}>
                <li>
                  <a href="#nft">Castle</a>
                </li>
                <li>
                  <a href="#tokens">Farms </a>
                </li>
                <li>
                  <a href="#landlords">Beach</a>
                </li>
                <li>
                  <a href="#discord">Learn more</a>
                </li>
              </ul>
            </div>

            <div className="d-grid" style={{ "--gap": "23px" }}>
              <p className="footer-links-header">About us</p>

              <ul className="d-grid" style={{ "--gap": "16px" }}>
                <li>
                  <a href="#nft">Road map</a>
                </li>
                <li>
                  <a href="#tokens">Creators </a>
                </li>
                <li>
                  <a href="#landlords">Career</a>
                </li>
                <li>
                  <a href="#discord">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
