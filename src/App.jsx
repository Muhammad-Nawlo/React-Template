import "normalize.css";
import Articles from "./components/Articles/Articles";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Galleries from "./components/Galleries/Galleries";
import Features from "./components/Features/Features";
import "./App.css";
import Testimonials from "./components/Testimonials/Testimonials";
import Teams from "./components/Teams/Teams";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import WorkSteps from "./components/WorkSteps/WorkSteps.jsx";
import Events from "./components/Events/Events.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Videos from "./components/Videos/Videos.jsx";
import Statistics from "./components/Stats/Statistics.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Articles />
      <Galleries />
      <Features />
      <Testimonials />
      <Teams />
      <Services />
      <Skills />
      <WorkSteps />
      <Events />
      <Pricing />
      <Videos />
      <Statistics />
      <Discounts />
      <Footer />
    </>
  );
}

export default App;
