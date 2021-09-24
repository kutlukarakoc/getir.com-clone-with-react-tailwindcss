import CardsCardUI from "ui/CardsCardUI";

const Cards = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 mb-10 w-full lg:w-11/12">
            <CardsCardUI/>
        </div>
    );
};

export default Cards;