import Header from "../src/components/Header";
import Main from "../src/components/Main";
import HomeSection from "../src/components/HomeSection";
import Footer from "../src/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <HomeSection />
      </Main>
      <Footer />
    </>
  );
}
