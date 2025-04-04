import HeroHeader from "./HeroHeader";
import SocialLinks from "./SocialLinks";
import HeroActions from "./HeroActions";
import HeroIllustration from "./HeroIllustration";

export default function HeroSection() {
  return (
    <div className="containe px-2 md:px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="p-8">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <HeroHeader />
              <SocialLinks />
              <HeroActions />
            </div>
            <HeroIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}
