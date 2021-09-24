import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const Campaigns = () => {


    const settings = {
        arrows: true,
        nextArrow: <GrFormNext />,
        prevArrow: <GrFormPrevious />,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, arrows: false }
            }
        ]
    };
    return (
        <div className="container mx-auto pt-10">
            <div className="w-full lg:w-11/12 mx-auto">
                <h6 className="font-semibold text-sm mb-4 ml-1">Kampanyalar</h6>
                <Slider {...settings}>
                    <div className="px-2 h-60 md:h-48 flex justify-center items-center">
                        <img className="w-full md:w-[400px] h-full rounded-lg" src="https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg" alt="getir" />
                    </div>
                    <div className="px-2 h-60 md:h-48 flex justify-center items-center">
                        <img className="w-full md:w-[400px] h-full rounded-lg" src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg" alt="getir" />
                    </div>
                    <div className="px-2 h-60 md:h-48 flex justify-center items-center">
                        <img className="w-full md:w-[400px] h-full rounded-lg" src="https://cdn.getir.com/promos/6117ddb00536373660359720_banner_tr_1628954096460.jpeg" alt="getir" />
                    </div>
                    <div className="px-2 h-60 md:h-48 flex justify-center items-center">
                        <img className="w-full md:w-[400px] h-full rounded-lg" src="https://cdn.getir.com/misc/613eeb121c62c06e0ba23148_banner_tr_1631528076404.jpeg" alt="getir" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Campaigns;