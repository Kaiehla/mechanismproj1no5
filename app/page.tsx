import Hero from "@/components/Hero";
import Header from "@/components/Header";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Testimonial />
      <PhotoGallery />
      <Footer />
    </main>
  );
}
