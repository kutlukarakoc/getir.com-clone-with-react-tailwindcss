import { v4 as uuidv4 } from 'uuid';

const CardsCardUI = () => {

    const cards = [
        {
            id: uuidv4(),
            picURL: "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
            title: "Her siparişinize bir kampanya",
            subTitle: "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz."
        },
        {
            id: uuidv4(),
            picURL: "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
            title: "Dakikalar içinde kapınızda",
            subTitle: "Getir’le siparişiniz dakikalar içinde kapınıza gelir."
        },
        {
            id: uuidv4(),
            picURL: "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
            title: "Binlerce çeşit mutluluk",
            subTitle: "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz."
        }
    ]
    return (
        <>
            {
                cards.map((e) => {
                    return (
                        <div key={e.id} className="bg-white flex flex-col pt-12 pb-5 rounded-lg mt-10">
                            <div className="flex flex-col text-center items-center">
                                <img src={e.picURL} alt="getir" className="h-36 w-36"/>
                            </div>
                            <div className="text-center w-11/12 mt-6 tracking-tight mx-auto">
                                <h4 className="text-primary-color text-lg font-semibold">{e.title}</h4>
                                <h5 className="text-gray-500 text-base mt-2">{e.subTitle}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default CardsCardUI;