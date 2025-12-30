import HeroSection from "@/components/HeroSection";
import { TabId } from "@/constants/navigation";

interface HomePageProps {
  onNavigate: (tab: TabId) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return <HeroSection onNavigate={onNavigate} />;
};

export default HomePage;
