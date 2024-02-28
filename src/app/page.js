import Business from "@/components/Business Goals/Business";
import BusinessGoal from "@/components/Business Goals/BusinessGoal";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import Stats from "@/components/Stats/Stats";
import StepsSection from "@/components/Steps/StepsSection";
import TeamSection from "@/components/Team/TeamSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import Image from "next/image";
import DropDown from "./utils/DropDownMenu/DropDown";
import SubMenu from "@/components/SubMenu/SubMenu";

export default function Home() {
  return (
    <main className="">
      <div>
        <Carousel />
        <Testimonial />
        <TeamSection />
        <StepsSection />
        <Business />
        <BusinessGoal />
        <Stats />
        <div className=" w-fit mx-auto">
          <DropDown />
        </div>
        <div className="w-full">
          <SubMenu />
        </div>
        <Footer />


      </div>
    </main>
  );
}
