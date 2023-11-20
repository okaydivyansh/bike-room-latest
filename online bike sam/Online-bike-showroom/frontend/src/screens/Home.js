import React,{useEffect, useState} from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
const Home = () => {

  const[search, setSearch]=useState('');
  const[bike_type, set_bike_type]=useState([]);
  const[bikes, set_bikes]=useState([]);

  const loadData= async()=>{
    let response = await fetch("http://localhost:3000/api/bikeData",{
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      }
    });

    response= await response.json();
    set_bikes(response[0]);
    set_bike_type(response[1]);
    //console.log(response[0], response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search} onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-dark text-white" type="submit">
                Search
              </button> */}
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?RoyalEnfield"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?motorbikes"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?motorbike"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className="container">
        {
          bike_type !== []
          ? bike_type.map((data)=>{
            return( <div className='row mb-3'>
              <div key={data._id} className="fs-3 m-3">
                {data.typeName}
                </div>
                <hr />

                {bikes !==[]
                ?
                bikes.filter((bike)=>(bike.typeName===data.typeName) && (bike.name.toLowerCase().includes(search.toLowerCase()))) 
                .map(filterItems=>{
                  return(
                   <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                   <Card bikeItem={filterItems}
                   imageSrc={filterItems.image}
                   amount={filterItems.price}
                   bikeName={filterItems.name}
                   colors={filterItems.colors[0]}
                   

                   ></Card> 
                   </div> 
                  )
                })
                :<div>No such data found</div>}
                </div>

            )


          })
          :""
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;