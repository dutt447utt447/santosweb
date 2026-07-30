import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

import About from "./Components/About/About";
import DevelopmentJourney from "./Components/DevelopmentJourney/DevelopmentJourney";
import Technology from "./Components/Technology/Technology";
import EngineeringScale from "./Components/EngineeringScale/EngineeringScale";

import Leadership from "./Components/Leadership/Leadership";
import QuickStats from "./Components/QuickStats/QuickStats";
import Achievements from "./Components/Achievements/Achievements";
import FeaturedIn from "./Components/FeaturedIn/FeaturedIn";
import Footer from "./Components/Footer/Footer";
function App() {

  return (
    <>
    <Navbar />
      <Hero />
      <About />
      <DevelopmentJourney />
      <Technology />
      <EngineeringScale />
      <Leadership/>
      <QuickStats />
      <Achievements />
      <FeaturedIn />
      <Footer />
    </>
  );
}

export default App;