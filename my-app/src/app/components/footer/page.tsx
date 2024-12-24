import MainFooter from "../mainFooter/page";
import EndFooter from "../end_footer/page";
const Footer = () => {
  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#F0F2F3]"/>
      <MainFooter/>
      <div className="h-[0.5px] w-full bg-[#F0F2F3]"/>
      <EndFooter/>
    </div>
  )
}

export default Footer
