import Business from "@/components/Business Goals/Business";
import BusinessGoal from "@/components/Business Goals/BusinessGoal";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import Stats from "@/components/Stats/Stats";
import StepsSection from "@/components/Steps/StepsSection";
import TeamSection from "@/components/Team/TeamSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import Image from "next/image";
import SubMenu from "@/components/SubMenu/SubMenu";
import StepsFull from "@/components/Steps/StepsFull";

export default function Home() {
  return (
    <main className="">
      <div>
        <Carousel />
        <Testimonial />
        <StepsSection />
        <TeamSection />
        <Business />
        <BusinessGoal />
        <Stats />
        <StepsFull />
      </div>
    </main>
  );
}
