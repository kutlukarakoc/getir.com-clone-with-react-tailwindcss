import FooterMenuUI from "ui/FooterMenuUI";
import MobileOptions from "ui/MobileOptions";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="w-full px-3 sm:px-0 bg-white pt-10">
            <div className="container mx-auto w-full lg:w-11/12 grid grid-cols-2 gap-x-4 md:grid-cols-4 md:gap-x-20">
                <div>
                    <h4 className="text-lg text-primary-color mb-4">Getir'i indirin!</h4>
                    <ol className="pb-4">
                        <div className="md:mt-[-12px] mt-4">
                            <MobileOptions />
                        </div>
                    </ol>
                </div>
                <FooterMenuUI />
                <div>
                    <h4 className="text-lg text-primary-color mb-4">İş Ortağımız Olun</h4>
                    <ol>
                        <li className="pb-3">
                            <a href="/" className="text-sm text-[#191919]">Bayimiz Olun</a>
                        </li>
                        <li className="pb-3">
                            <a href="/" className="text-sm text-[#191919]">Deponuzu Kiralayın</a>
                        </li>
                        <li className="pb-3">
                            <a href="/" className="text-sm text-[#191919]">GetirYemek Restoranı Olun</a>
                        </li>
                        <li className="pb-3">
                            <a href="/" className="text-sm text-[#191919]">GetirÇarşı İşletmesi Olun</a>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="flex justify-between items-center py-6 contaienr mx-auto w-full sm:w-10/12 h-20 border-t">
                <div className="flex gap-x-6">
                    <span className="text-[13px]">© 2021 Getir</span>
                    <ol className="list-disc text-primary-color text-[13px]"><li>Bilgi Toplumu Hizmetleri</li></ol>
                </div>
                <div>
                    <ol className="flex gap-x-3 items-center text-footer-icon-color h-8">
                        <li>
                            <div className="w-8 h-8 flex justify-center items-center transition-all duration-200 ease-in-out rounded-lg hover:bg-purple-200 hover:text-purple-500">
                                <a href="/"><FaFacebook size={20} /></a>
                            </div>
                        </li>
                        <li>
                            <div className="w-8 h-8 flex justify-center items-center transition-all duration-200 ease-in-out rounded-lg hover:bg-purple-200 hover:text-purple-500">
                                <a href="/"><FaTwitter size={20} /></a>
                            </div>
                        </li>
                        <li>
                            <div className="w-8 h-8 flex justify-center items-center transition-all duration-200 ease-in-out rounded-lg hover:bg-purple-200 hover:text-purple-500">
                                <a href="/"><FaInstagram size={20} /></a>
                            </div>
                        </li>
                        <li>
                            <div className="border border-gray-30 py-1 px-2 rounded-md transition-all duration-200 ease-in-out hover:bg-purple-200 hover:text-purple-500">
                                <a href="/" className="flex justify-center items-center">
                                    <FiGlobe size={16} />
                                    <span className="pl-2 text-[13px]">Türkçe (TR)</span>
                                </a>
                            </div>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    );
};

export default Footer;