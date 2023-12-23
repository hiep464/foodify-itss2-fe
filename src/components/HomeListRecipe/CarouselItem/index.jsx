import React from 'react';
import './carouselItem.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselItem({ data ,title}) {
    const slider = React.useRef(null);

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;

        return <button className={'btn-left'} onClick={() => slider?.current?.slickPrev()} />;
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;

        return <button className={'btn-right'} onClick={() => slider?.current?.slickNext()} />;
    }

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="item-container">
            <div className="text-title"> {title} </div>
            <Slider ref={slider} {...settings}>
                {data.map((item, idx) => {
                    return (
                        <div className="card-item" key={idx}>
                            <Link key={idx} to={`/recipe/${item.id}`}>
                                <img
                                    src={item.thumbnail}
                                    alt={item.name}
                                    style={{ width: '90%', height: '17rem', borderRadius: '10px' }}
                                />
                            </Link>
                            <div className="text-name">{item.name}</div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
export default CarouselItem;
