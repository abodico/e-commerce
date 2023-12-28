import Categories from "./components/Categories";
import Header from "./components/Header";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="w-full min-h-screen container mx-auto">
      <Header />
      <Hero />
      <Categories />
    </div>
  );
}
