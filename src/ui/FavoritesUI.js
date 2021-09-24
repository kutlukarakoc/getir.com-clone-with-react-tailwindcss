import { AiOutlinePlus } from 'react-icons/ai';

const FavoritesUI = ({ productDatas }) => {
    return (
        <>
            {
                productDatas.map((e) => {
                    return (
                        <div key={e.id} className="w-full md:w-40 h-60 p-5 text-center flex flex-col items-center">
                            <div className="border border-gray-100 rounded-lg md:border-0 w-28 h-24 md:w-23 md:h-28 relative mb-2 lg:divide">
                                <img src={e.picURL} alt="getir" className="w-28 h-24 md:w-22 md:h-26 p-2" />
                                <div className="absolute w-8 h-8 -top-3 -right-1 lg:-top-1 lg:right-1 md:top-0 md:right-2 bg-white shadow-md rounded-lg">
                                    <button className="text-primary-color w-full h-full flex justify-center items-center">
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                            </div>
                            <div className="text-primary-color text-sm font-semibold text-center">{e.price}</div>
                            <div className="text-sm mt-2 font-semibold text-center tracking-wide">{e.name}</div>
                            <div className="text-xs text-center text-[#697488]">{e.portion}</div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default FavoritesUI;