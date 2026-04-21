import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Routes from "@/components/Routes";
import ReservationForm from "@/components/ReservationForm";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Routes />
      <ReservationForm />
      <Gallery />
      <Footer />
    </>
  );
}
