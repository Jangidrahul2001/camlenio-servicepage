import Hero from "@/app/components/Mobappdev/Hero/page";
import ContactUs from "@/app/components/Contactus/page";
import AppDevServices from "@/app/components/Mobappdev/Appdevservices/page";
import HireAppDev from "@/app/components/Mobappdev/Hireappdev/page";
import MobAppIntegration from "@/app/components/Mobappdev/Mobappintegration/page";
import LogoSlider from "@/app/components/Homepage/Logoslider/page";


export const metadata = {
  title: "Camlenio|Android App Development",
  description: "This is my website description.",
};
export default function AndroidAppDevelopment() {
  return (
    <div className="relative">
      <Hero />
      <MobAppIntegration />
      <HireAppDev />
      <AppDevServices />
      <ContactUs />
      <LogoSlider />/
    </div>
  );
}
