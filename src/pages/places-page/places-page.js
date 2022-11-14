import { Meta, Title } from "react-head";
import { Place } from "../../components/place";
import placeOne from "../../images/place1.png";
import placeTwo from "../../images/place2.png";
import placeThree from "../../images/place3.png";
import placeFour from "../../images/place4.png";
import placeFive from "../../images/place5.png";
import placeSix from "../../images/place6.png";
import placeSeven from "../../images/place7.png";
import placeEight from "../../images/place8.png";
import place9 from "../../images/place9.png";
import place10 from "../../images/place10.png";
import place11 from "../../images/place11.png";
import place12 from "../../images/place12.png";
import place13 from "../../images/place13.png";
import place14 from "../../images/place14.png";
import place15 from "../../images/place15.png";
import place16 from "../../images/place16.png";
import settingIcon from "../../images/setting-icon.svg";
import { DefaultLayout } from "../../layouts/default-layout";
import "./places-page.css";

function PlacesPage() {
  const places = [
    placeFive,
    placeSix,
    placeSeven,
    placeEight,
    placeOne,
    placeTwo,
    placeThree,
    placeFour,
    place9,
    place10,
    place11,
    place12,
    place13,
    place14,
    place15,
    place16,
  ];

  return (
    <DefaultLayout>
      <Meta name="description" content="Inspiration for your next adventure" />
      <Title>Places</Title>
      <div className="places-page">
        <div className="container">
          <div className="d-grid" style={{ "--gap": "64px" }}>
            <div
              className="filter-buttons align-items-center d-flex"
              style={{ "--gap": "65px" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ "--gap": "48px" }}
              >
                <button className="filter-button">Resturant</button>
                <button className="filter-button">Cottage</button>
                <button className="filter-button">Castle</button>
                <button className="filter-button">fantast city</button>
                <button className="filter-button">beach</button>
                <button className="filter-button">Carbins</button>
                <button className="filter-button">Off-grid</button>
                <button className="filter-button">Farm</button>
              </div>

              <button
                className="d-flex align-items-center settings-button"
                style={{ "--gap": "40px" }}
              >
                <span>Location</span>

                <img src={settingIcon} alt="" />
              </button>
            </div>

            <div
              className="d-flex flex-wrap justify-content-center"
              style={{ "--gap": "24px" }}
            >
              {places.map((place, i) => {
                return <Place image={place} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default PlacesPage;
