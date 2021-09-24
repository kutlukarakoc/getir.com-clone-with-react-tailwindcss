
const CategoriesUI = ({ categoriesData }) => {

    return (
        <>
            {
                categoriesData.map((e) => {
                    return (
                        <div key={e.id} className="w-full md:w-28 h-28 flex flex-col justify-center items-center transition-all duration-200 ease-in-out hover:text-primary-color hover:bg-purple-200">
                            <div className="w-12 h-12">
                                <img src={e.picURL} alt="getir" className="border border-solid border-gray-300 rounded-lg" />
                            </div>
                            <h5 className="text-[13px] md:text-sm mt-2 font-semibold whitespace-nowrap">{e.name}</h5>
                        </div>
                    )
                })
            }

        </>
    );
};

export default CategoriesUI;