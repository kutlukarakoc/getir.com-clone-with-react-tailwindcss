import FavoritesUI from "ui/FavoritesUI";
import productDatas from "api/products.json";
import { useState, useEffect } from "react";

const Favorites = () => {

    const [products, setProducts] = useState(productDatas);

    useEffect(() => {
        setProducts(productDatas)
    }, []);

    return (
        <div className="container mx-auto pt-10">
            <h6 className="font-semibold text-sm mb-4 mt-10 w-full lg:w-11/12 mx-auto ">Favoriler</h6>
            <div className="container mx-auto md:rounded-md md:px-4 bg-[#ffffff] w-full lg:w-11/12">
                <div className="grid xl:grid-cols-8 md:grid-cols-5 grid-cols-3 mx-auto">
                    <FavoritesUI productDatas={products} />
                </div>
            </div>
        </div>
    );
};

export default Favorites;