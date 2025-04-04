import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import SocialMedia from "./SocialMedia";
import MapSection from "./MapSection";
import Availability from "./Availability";

export default function ContactsHero() {
  return (
    <div className="w-full px-4 py-12">
      <div className="mx-auto w-full md:max-w-6xl">
        <ContactHeader />
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="w-full space-y-4 sm:space-y-6">
            <ContactInfo />
            <Education />
            <SocialMedia />
          </div>
          <div className="w-full space-y-4 sm:space-y-6">
            <MapSection />
            <Availability />
          </div>
        </div>
      </div>
    </div>
  );
}
