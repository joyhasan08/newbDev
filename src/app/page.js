import Business from "@/components/Business Goals/Business";
import BusinessGoal from "@/components/Business Goals/BusinessGoal";
import Carousel from "@/components/Carousel/Carousel";

import Stats from "@/components/Stats/Stats";
import StepsSection from "@/components/Steps/StepsSection";
import TeamSection from "@/components/Team/TeamSection";
import Testimonial from "@/components/Testimonial/Testimonial";

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
