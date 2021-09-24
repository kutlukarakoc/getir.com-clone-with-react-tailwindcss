

const MobileOptions = () => {
    const mobileOptions = [
        { picURL: "https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" },
        { picURL: "https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" },
        { picURL: "https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" }
    ]
    return (
        mobileOptions.map((e, index) => {
            return (
                <li key={index} className="pt-3">
                    <a href="/" >
                        <img src={e.picURL} alt="getir" />
                    </a>
                </li>
            )
        })
    );
};

export default MobileOptions;