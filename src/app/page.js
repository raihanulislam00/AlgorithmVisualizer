"use client";
import Navbar from "@/components/navbar";
import { AlgorithmCards } from "./components/algorithm-cards";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ScrollToTop from "@/components/scroll-to-top";

   
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" suppressHydrationWarning={true}>
      <Navbar title="Algorithm Visualizer"/>
      <Hero/>
      <main className="container mx-auto py-16 px-4">
        <AlgorithmCards />
      </main>
      <Footer/>
      <ScrollToTop />
    </div>
  )
}