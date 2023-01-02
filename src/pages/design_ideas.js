import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <div className='d-flex flex-column align-items-center p-3' style={{ fontFamily: "verdana", backgroundImage: "linear-gradient(to right, #fbf8f9, #f2d8eb, #dabde8, #afa7ec, #6098ef)" }} >

            <h1>Design Ideas</h1>
            <div className='p-5  d-flex align-items-center justify-content-center m-0' style={{ margin: "0" }}>
                <Carousel fade style={{ width: "70vw", height: "66vh" }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://assets.architecturaldigest.in/photos/60084ce9a8f8397741704c06/4:3/w_1600%2Ch_1200%2Cc_limit/Living-room-design-for-more-space-1366x768.jpg"
                            alt="First slide"
                            style={{ height: "60vh" }}
                            width={100}

                        />
                        <Carousel.Caption>
                            <h3>Living Room</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.decorpot.com/images/kitchen-modular/1%20-%20Modular%20Kitchen%20Interior%20Design-Kitchen-3BHK-Whitefield-Bangalore.jpg"
                            alt="Second slide"
                            style={{ height: "60vh" }}
                            width={100}

                        />
                        <Carousel.Caption>
                            <h3>Modular Kitchen</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://evolveindia.co/wp-content/uploads/2021/07/1_The-Wooden-Rhapsody-Modern-Bedroom-Interior-Design.jpg"
                            alt="Second slide"
                            width={100}
                            style={{ height: "60vh" }}

                        />

                        <Carousel.Caption>
                            <h3>Bedroom</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>


    );
}

export default CarouselFadeExample;