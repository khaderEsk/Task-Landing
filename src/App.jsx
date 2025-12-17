import { useEffect, useState } from "react";
import "./styles/global.css";


import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";


export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading />;
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </>
  );
}