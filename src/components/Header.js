import Slider from "react-slick";
import HeaderLogin from "ui/HeaderLogin";
import { useWindowWidth } from '@react-hook/window-size'


const Header = () => {
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const onlyWidth = useWindowWidth();

    return (

        <div className="relative md:before:bg-gradient-to-r h-80 md:h-[500px] md:before:from-primary-color md:before:to-transparent md:before:absolute md:before:top-0 md:before:w-full md:before:h-full md:before:z-10">
            {
                onlyWidth >= 768 && <Slider {...settings}>
                    <div>
                        <img className="w-full h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="getir" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="getir" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="getir" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="getir" />
                    </div>
                </Slider>
            }
            <div className="w-full absolute top-1/2 -translate-y-1/2 lg:px-36 md:px-14 sm:px-8 flex justify-between items-center z-20">
                <div className="hidden md:block">
                    <div className="py-6">
                        <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="getir" />
                    </div>
                    <div className="text-white text-2xl md:text-3xl">
                        <h1>Dakikalar içinde <br />kapınızda</h1>
                    </div>
                </div>
                <HeaderLogin />
            </div>
        </div>

    );
};

export default Header;