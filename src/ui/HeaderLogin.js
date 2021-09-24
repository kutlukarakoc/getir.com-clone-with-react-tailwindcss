import ReactFlagsSelect from 'react-flags-select';
import { useState } from "react";


const HeaderLogin = () => {
    const [selected, setSelected] = useState("TR");

    const phoneCodes = {
        TR: "+90",
        EN: "+44",
        US: "+1",
        DE: "+49",
        IT: "+39",
        FR: "+33",
        BE: "+32",
        SE: "+46",
        AT: "+43",
        DK: "+45",
        FI: "+358",
        ES: "+34"
    }
    return (
        <div className="bg-header-ui-color rounded-md w-full md:w-[400px] p-6">
            <h5 className="mb-4 text-primary-color text-center font-semibold">Giriş yap veya kayıt ol</h5>
            <form>
                <div className="flex items-start mb-2 h-14 w-full">
                    <div className="w-max h-full bg-white mr-4">
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            countries={Object.keys(phoneCodes)}
                            customLabels={phoneCodes}
                        />
                    </div>
                    <div className="relative w-full">
                        <input required id="phone-input" type="text" className="w-full h-14 rounded border-2 border-gray-300 hover:border-secondary-color outline-none focus:outline-none focus:border-secondary-color transition-all duration-200 ease-in-out peer caret-secondary-color pl-3 text-sm" />
                        <span className="absolute top-1/2 -translate-y-2/4 left-7 text-gray-400 text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary-color peer-valid:top-2 peer-valid:text-xs peer-valid:text-primary-color transition-all duration-200 ease-in-out">Telefon Numarası</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 divide-y divide-gray-300">
                    <div className="my-2 w-full">
                        <button className="py-3 px-4 rounded-lg bg-[#FFD300] text-primary-color w-full transition-all duration-200 ease-in-out hover:bg-primary-color hover:text-[#FFD300]">Telefon numarası ile devam et</button>
                    </div>
                    <div className="py-2 w-full">
                        <a href="https://www.facebook.com/" className="w-full flex bg-[#e7eaf1] py-3 px-4 rounded-lg">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDEyQzI0IDUuMzcxODggMTguNjI4MSAwIDEyIDBDNS4zNzE4OCAwIDAgNS4zNzE4OCAwIDEyQzAgMTcuOTkwNiA0LjM4NzUgMjIuOTU0NyAxMC4xMjUgMjMuODU0N1YxNS40Njg4SDcuMDc4MTJWMTJIMTAuMTI1VjkuMzU2MjVDMTAuMTI1IDYuMzQ5MjIgMTEuOTE1NiA0LjY4NzUgMTQuNjU3OCA0LjY4NzVDMTUuOTcwMyA0LjY4NzUgMTcuMzQzOCA0LjkyMTg4IDE3LjM0MzggNC45MjE4OFY3Ljg3NUgxNS44Mjk3QzE0LjMzOTEgNy44NzUgMTMuODc1IDguODAwNzggMTMuODc1IDkuNzVWMTJIMTcuMjAzMUwxNi42NzExIDE1LjQ2ODhIMTMuODc1VjIzLjg1NDdDMTkuNjEyNSAyMi45NTQ3IDI0IDE3Ljk5MDYgMjQgMTJaIiBmaWxsPSIjM0M1QTk5Ii8+Cjwvc3ZnPgo=" alt="facebook" />
                            <span className="w-full text-center text-[#4b67a1] font-semibold">Facebook ile devam et</span>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HeaderLogin;