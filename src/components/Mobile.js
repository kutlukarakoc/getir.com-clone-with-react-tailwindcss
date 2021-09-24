import MobileOptions from "ui/MobileOptions";

const Mobile = () => {
    return (
        <div className="container mx-auto w-full lg:w-11/12 pt-7 pb-3 sm:pb-0 mt-10 h-80 bg-primary-color rounded-lg relative" style={{ backgroundImage: "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)" }}>
            <div className="ml-12 h-full max-w-md flex flex-col items-start justify-center pb-3">
                <div className="text-white">
                    <h2 className="text-4xl font-bold">Getir'i indirin!</h2>
                    <h5 className="text-base mt-3 font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</h5>
                </div>
                <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
                    <MobileOptions/>
                </ol>
            </div>
            <div className="absolute hidden xl:block xl:right-0 xl:bottom-0">
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="getir" />
            </div>
        </div>
    );
};

export default Mobile;
