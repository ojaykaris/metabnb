import heart from "../images/heart.svg";
import star from "../images/star.svg";
import "./place.css";

export function Place(props) {
  return (
    <div className="place">
      <div className="d-grid" style={{ "--gap": "16px" }}>
        <div className="image">
          <img src={props.image} alt="" />
          <button className="heart">
            <img src={heart} alt="" />
          </button>
        </div>

        <div className="d-grid" style={{ "--gap": "10px" }}>
          <div className="d-flex justify-content-space-between">
            <h4>Desert king</h4>

            <p>
              <span>1MBT per night</span>
            </p>
          </div>
          <div className="d-flex justify-content-space-between">
            <p>2345km away</p>

            <p>available for 2weeks stay</p>
          </div>
          <div className="d-flex justify-content-space-between">
            <div className="d-flex" style={{ "--gap": "8px" }}>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
