import TopHeader from "../top_header/page";
import BottomHeader from "../bottom_header/page";
import Navbar from "../navbar/page";
const Header = () => {
  return (
    <div>
      <TopHeader/>
      <BottomHeader/>
      <Navbar/>
      <div className="w-full h-[2px] bg-[#F0F2F3]"/>
    </div>
  );
}

export default Header;
