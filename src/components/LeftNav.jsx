import { useContext } from "react";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { Context } from "../context/ContextApi";

const LeftNav = () => {
  const {selectedCategories, setSelectedCategories, mobileMenu} = useContext(Context);

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategories(name);
      case "home":
        return setSelectedCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  }
  return(
    <>
      <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all">
        <div className="flex px-5 flex-col">
          {categories.map((item) => {
            return(
              <>
                <LeftNavMenuItem text={item.type === "home"? "Home":item.name}
                icon={item.icon}
                action={() => {clickHandler(item.name, item.type)}}
                className={selectedCategories === item.name ? "bg-white/[0.15]":" "}></LeftNavMenuItem>
                {item.divider && ( <hr className="my-5 border-white/[0.2]" />)}
              </>
            )
          })}
          <hr className="my-5 border-white/[0.2]" />
          <div className="text-white/[0.5] text-[12px]">
            Clone by: Muhammad Fareed
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftNav;