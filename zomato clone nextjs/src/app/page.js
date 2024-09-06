'use client'
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeaderCard from "./Component/Card/page";
import Collections from "./Component/Collection/page";
import { IoMdArrowDropright } from "react-icons/io";
import Places from "./Component/Places/page";
import GetZomato from "./Component/GetApp/page";
import Explore from "./Component/Explore/page";
import Footer from "./Component/Footer/page";






export default function Home() {
  const collectionArr = [
    {
      title: "Sweet Tooth",
      bg: "https://b.zmtcdn.com/data/collections/8475397d26a71d08e02b03c00eb7934c_1615540920.jpg?output-format=webp",
      places: "12 PLaces"
    },
    {
      title: "Royal Rajasthani Cuisine",
      bg: "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png?output-format=webp",
      places: "7 PLaces"
    },
    {
      title: "Must visit Jodhpur restaurants",
      bg: "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png?output-format=webp",
      places: "8 PLaces"
    },
    {
      title: "Meat Cravings",
      bg: "https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810183.png?output-format=webp",
      places: "7 PLaces"
    }
  ]
  const ImpPlaces = [
    {
      place: "Sardarpura",
      qyt: "308 places"
    },
    {
      place: "Paota",
      qyt: "308 places"
    },
    {
      place: "Mandore",
      qyt: "308 places"
    },
    {
      place: "Ratanada",
      qyt: "200 places"
    },
    {
      place: "Chaupasni Housing Board",
      qyt: "195 places"
    },
    {
      place: "Shastri Nagar",
      qyt: "500 places"
    },
    {
      place: "Air Force Area",
      qyt: "100 places"
    },
    {
      place: "Basani",
      qyt: "777 places"
    },
    {
      place: "See More",
      qyt: ""
    }
  ]
  return (
    <>
      <div className="slider">
        <div className="background w-100  ">
          <div className=" m-auto zom_login d-flex justify-content-between">
            <div className="text-light fw-medium text " >Get the App</div>
            <div className="navbar ">
              <ul className="d-flex justify-content-between text-light fs-4 ulSlider p-3 ">
                <li className="liin">Invester Relation</li>
                <li>Add reastaurant</li>
                <li>Log in</li>
                <li>Sign up</li>
              </ul>
            </div>
          </div>
          <div className="LogoPart  text-light m-auto">
            <h1 className="fw-bold zomatatext d-flex pt-5 ">zomato</h1>
            <h1 className="zomatatext2 p-1 pt-4">Discover the best food & drinks in Jodhpur</h1>
            <div className="formDetail m-auto d-flex  mt-5 p-1 ">
              <i class="sc-rbbb40-1 iFnyeo" color="#FF7E8B" size="20"><svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg></i>
              <input className="location p-3 " placeholder="Jodhpur">
              </input>
              <i class="sc-rbbb40-1 iFnyeo sc-fyjYeE eMcxwz " color="#4F4F4F" size="12"><svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg></i>
              <div className="border-end border-1 border-black m-3  ">|</div>
              <i class="sc-rbbb40-1 iFnyeo" color="#828282" size="18"><svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg></i>
              <input placeholder="Search for restaurant, cuisine or a dish" class="sc-TuwoP egIwfr" value=""></input>
            </div>
          </div>

        </div>
      </div>
      <div>
        <HeaderCard />
      </div>
      <div>
        <section style={{ width: "85%" }} className="m-auto my-5 border">
          <h1>Collections</h1>
          <div className="d-flex justify-content-between align-items-center curser" style={{ fontSize: "22px" }}>
            Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends
            <div style={{ fontSize: "22px", color: "#FF7E8B" }} className="me-2" role='button' >
              All collections in Jodhpur <IoMdArrowDropright />
            </div>
          </div>
          <div className="row row-cols-4 m-4 " >
            {
              collectionArr.map((value, index) => {
                return <Collections title={value.title} bg={value.bg} places={value.places} key={index} />
              })
            }
          </div>
        </section>
      </div>
      <div>
        <section style={{ width: "85%" }} className="m-auto ">
          <h1>Popular localities in and around Jodhpur</h1>
          <div className="row row-cols-3 d-flex justify-content-evenly " >
            {
              ImpPlaces.map((value, index) => {
                return <Places place={value.place} qyt={value.qyt} key={index} />
              })
            }
          </div>
        </section>
      </div>
      <div>
        <GetZomato />
      </div>
      <div>
        <Explore />
      </div>
      <Footer/>





    </>
  );
}