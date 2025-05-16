import AboutMe from "./components/about-me";
import ArticleCards from "./components/articleCards";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Page() {
  return <main>
    <Hero/>
    <AboutMe/>
    <Services/>
    <ArticleCards/>
  </main>;
}