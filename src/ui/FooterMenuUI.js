
const FooterMenuUI = () => {

    const menu = [
        {
            title: "Getir'i keşfedin",
            firstItem: "Hakkımızda",
            secondItem: "Kariyer",
            thirdItem: "İletişim",
            forthItem: "COVID-19 Duyuru",
            fifthItem: "Sosyal Sorumluluk Projeleri",
        },
        {
            title: "Yardıma mı ihtiyacınız var?",
            firstItem: "Sıkça Sorulan Sorular",
            secondItem: "Kişisel Verilerin Korunması",
            thirdItem: "Gizlilik Politikası",
            forthItem: "Kullanım Koşulları",
            fifthItem: "Çerez Politikası",
        },
    ]
    return (
        <>
            {
                menu.map((e, index) => {
                    return (
                        <div key={index}>
                            <h4 className="text-lg text-primary-color mb-4">{e.title}</h4>
                            <ol>
                                <li className="pb-3">
                                    <a href="/" className="text-sm text-[#191919]">{e.firstItem}</a>
                                </li>
                                <li className="pb-3">
                                    <a href="/" className="text-sm text-[#191919]">{e.secondItem}</a>
                                </li>
                                <li className="pb-3">
                                    <a href="/" className="text-sm text-[#191919]">{e.thirdItem}</a>
                                </li>
                                <li className="pb-3">
                                    <a href="/" className="text-sm text-[#191919]">{e.forthItem}</a>
                                </li>
                                <li className="pb-3">
                                    <a href="/" className="text-sm text-[#191919]">{e.fifthItem}</a>
                                </li>
                            </ol>
                        </div>
                    )
                })
            }
        </>
    );
};

export default FooterMenuUI;

