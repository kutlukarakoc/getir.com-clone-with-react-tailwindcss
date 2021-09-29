import CategoriesUI from "ui/CategoriesUI";
import categoriesDatas from "api/categories.json";
import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        setCategories(categoriesDatas)
    }, [])

    return (
        <div className="w-full lg:bg-white md:bg-[#f5f5f5]">
            <div className="container mx-auto pt-10 pb-10 w-full lg:w-11/12">
                <h6 className="font-semibold text-sm mb-4 ml-1">Kategoriler</h6>
                <div className="grid lg:grid-cols-10 lg:gap-x-2 md:grid-cols-5 grid-cols-4 w-full lg:w-11/12 mx-auto">
                    <CategoriesUI categoriesData={categories}/>
                </div>
            </div>
        </div>
    );
};

export default Categories;
