import Business from "@/components/Business Goals/Business";
import BusinessGoal from "@/components/Business Goals/BusinessGoal";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import Stats from "@/components/Stats/Stats";
import StepsSection from "@/components/Steps/StepsSection";
import TeamSection from "@/components/Team/TeamSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <Carousel />
        <TeamSection />
        <StepsSection />
        <Business />
        <BusinessGoal />
        <Stats />
        <Footer />


      </div>
    </main>
  );
}
