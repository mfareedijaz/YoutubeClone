import { useContext, useState } from "react";
import { Context } from "../context/ContextApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import ytLogo from '../images/yt-logo.png';
import ytLogoMobile from '../images/yt-logo-mobile.png';
import { IoIosSearch } from "react-icons/io";
import { RiFileVideoLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const {loading, mobileMenu, setMobileMenu} = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if((event?.key === "Enter" || event === "searchButton") && searchQuery.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  }

  const {pathName} = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.(0);

  return(<>
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
    {loading && <Loader></Loader>}
      
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]" onClick={mobileMenuToggle}>
            {mobileMenu ? (<CgClose className="text-white text-xl"></CgClose>):(<SlMenu className="text-white text-xl"></SlMenu>)}
          </div>
        )}
        <Link to="/" className="flex items-center h-5">
          <img className="h-full hidden dark:md:block" src={ytLogo} alt="Youtube" />
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>

      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl"></IoIosSearch>
          </div>
          <input type="text" className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center bordwe border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
          <IoIosSearch className="text-white text-xl"></IoIosSearch>
        </button>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-600">
            <RiFileVideoLine className="text-white text-xl cursor-pointer"></RiFileVideoLine>
          </div>
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-600">
            <FiBell className="text-white text-xl cursor-pointer"></FiBell>
          </div>
          <div className="flex items-center justify-center h-8 w-8 overflow-hidden rounded-full md:ml-1">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Wayfarers&hatColor=Heather&hairColor=Auburn&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=Overall&clotheColor=PastelBlue&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Grimace&skinColor=Tanned'
            />
          </div>
        </div>
      </div>

    </div>
  </>);
}

export default Header;