import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "react-modal";
import arrowIcon from "../../images/arrow.svg";
import closeIcon from "../../images/close-icon.svg";
import metaLogo from "../../images/meta-logo.svg";
import walletConnectLogo from "../../images/wallet-connect-logo.svg";
import "./connect-wallet.css";

export const ConnectWalletModal = NiceModal.create(
  function ConnectWalletModal() {
    const modal = useModal();

    return (
      <Modal
        isOpen={modal.visible}
        onRequestClose={modal.hide}
        ariaHideApp={false}
      >
        <div className="modal connect-wallet-modal">
          <div className="header d-flex justify-content-space-between align-items-center">
            <h4 className="modal-title">Connect Wallet</h4>

            <button className="close-button" onClick={modal.hide}>
              <img src={closeIcon} alt="" />
            </button>
          </div>

          <div className="body">
            <div className="d-grid" style={{ "--gap": "16px" }}>
              <p className="title">Choose your preferred wallet:</p>

              <button className="d-flex justify-content-space-between align-items-center">
                <div
                  className="d-flex align-items-center"
                  style={{ "--gap": "16px" }}
                >
                  <img src={metaLogo} alt="" />

                  <p>Metamask</p>
                </div>

                <img src={arrowIcon} alt="" />
              </button>

              <button className="d-flex justify-content-space-between align-items-center">
                <div
                  className="d-flex align-items-center"
                  style={{ "--gap": "16px" }}
                >
                  <img src={walletConnectLogo} alt="" />

                  <p>WalletConnect</p>
                </div>

                <img src={arrowIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
);
