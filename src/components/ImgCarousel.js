import Carousel from 'react-bootstrap/Carousel';

const ImgCarousel = () => {
    return (
        <div className='container mt-3'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="img3.png"
                    alt="First slide"
                    height="500px"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="Logo.svg"
                    alt="Second slide"
                    height="500px"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg"
                    alt="Third slide"
                    height="500px"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImgCarousel;