import Carousel from "react-bootstrap/Carousel";

function SimpleCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="First slide"
            style={{ height: "500px", width: "100%" }}
          />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
            style={{ height: "500px", width: "100%" }}
          />
        </div>

        
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">

        <img
          src="https://images.unsplash.com/photo-1586173806725-797f4d632f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80"
          alt="Third slide"
          style={{ height: "500px", width: "100%" }}
        />
        </div>

      </Carousel.Item>
    </Carousel>
  );
}

export default SimpleCarousel;
