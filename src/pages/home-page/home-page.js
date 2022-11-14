import { Title } from "react-head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Place } from "../../components/place";
import heroImageOne from "../../images/hero-image1.png";
import heroImageTwo from "../../images/hero-image2.png";
import heroImageThree from "../../images/hero-image3.png";
import heroImageFour from "../../images/hero-image4.png";
import nftOne from "../../images/nft1.png";
import nftTwo from "../../images/nft2.png";
import nftThree from "../../images/nft3.png";
import partnerOne from "../../images/partner1.svg";
import partnerTwo from "../../images/partner2.svg";
import partnerThree from "../../images/partner3.svg";
import placeOne from "../../images/place1.png";
import placeTwo from "../../images/place2.png";
import placeThree from "../../images/place3.png";
import placeFour from "../../images/place4.png";
import placeFive from "../../images/place5.png";
import placeSix from "../../images/place6.png";
import placeSeven from "../../images/place7.png";
import placeEight from "../../images/place8.png";
import { DefaultLayout } from "../../layouts/default-layout";
import "./home-page.css";

function HomePage() {
  const places = [
    placeOne,
    placeTwo,
    placeThree,
    placeFour,
    placeFive,
    placeSix,
    placeSeven,
    placeEight,
  ];

  return (
    <DefaultLayout>
      <Title>Metabnb</Title>
      <div className="home-page">
        <div className="hero">
          <div className="container">
            <div className="d-flex justify-content-space-between align-items-center">
              <div className="d-grid hero-text" style={{ "--gap": "48px" }}>
                <h2 className="hero-title">
                  Rent a <span>Place</span> away from <span>Home</span> in the{" "}
                  <span>Metaverse</span>
                </h2>

                <p className="hero-subtitle">
                  we provide you access to luxury and affordable houses in the
                  metaverse, get a chance to turn your imagination to reality at
                  your comfort zone
                </p>

                <form action="#hero-form" className="hero-form">
                  <input type="text" placeholder="Search for location" />
                  <button type="submit" className="button">
                    Search
                  </button>
                </form>
              </div>

              <div
                className="d-none lg-d-flex align-items-flex-start"
                style={{ "--gap": "8px" }}
              >
                <div
                  className="d-grid"
                  style={{
                    "--gap": "8px",
                    marginTop: "100px",
                  }}
                >
                  <img src={heroImageOne} alt="" />
                  <img src={heroImageThree} alt="" />
                </div>
                <div className="d-grid" style={{ "--gap": "8px" }}>
                  <img src={heroImageTwo} alt="" />
                  <img src={heroImageFour} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners">
          <div className="container">
            <div
              className="d-none xl-d-flex align-items-center"
              style={{ "--gap": "264px" }}
            >
              <img src={partnerOne} alt="" />
              <img src={partnerTwo} alt="" />
              <img src={partnerThree} alt="" />
            </div>

            <div className="d-none md-d-flex align-items-center xl-d-none justify-content-space-between">
              <img src={partnerOne} alt="" />
              <img src={partnerTwo} alt="" />
              <img src={partnerThree} alt="" />
            </div>

            <div className="md-d-none">
              <Carousel
                autoPlay
                centerMode
                infiniteLoop
                renderIndicator={false}
                renderThumbs={() => false}
                renderArrowNext={() => false}
                renderArrowPrev={() => false}
                dynamicHeight
                showStatus={false}
                thumbWidth={null}
              >
                <img style={{ maxHeight: "37.56px" }} src={partnerOne} alt="" />
                <img style={{ maxHeight: "37.56px" }} src={partnerTwo} alt="" />
                <img
                  style={{ maxHeight: "37.56px" }}
                  src={partnerThree}
                  alt=""
                />
              </Carousel>
            </div>
          </div>
        </div>

        <div className="inspiration">
          <div className="container">
            <div className="d-grid" style={{ "--gap": "43px" }}>
              <h3>Inspiration for your next adventure</h3>

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

        <div className="metabnb">
          <div className="container">
            <div className="d-flex justify-content-space-between align-items-center">
              <div className="d-grid text" style={{ "--gap": "57.5px" }}>
                <div className="d-grid" style={{ "--gap": "35px" }}>
                  <h3>Metabnb NFTs</h3>

                  <p>
                    Discover our NFT gift cards collection. Loyal customers gets
                    amazing gift cards which are traded as NFTs. These NFTs
                    gives our cutomer access to loads of our exclusive services.
                  </p>
                </div>

                <div>
                  <button className="button button--light">Learn more</button>
                </div>
              </div>

              <div className="d-none xl-d-block images">
                <img src={nftOne} alt="" />
                <img src={nftTwo} alt="" />
                <img src={nftThree} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default HomePage;
