import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import About from "../_components/sections/About";
import FAQ from "../_components/sections/FAQ";
import FinalCTA from "../_components/sections/FinalCTA";
import Hero from "../_components/sections/Hero";
import Process from "../_components/sections/Process";
import Services from "../_components/sections/Services";
import Testimonials from "../_components/sections/Testimonials";
import TrustStrip from "../_components/sections/TrustStrip";
import WorkTeaser from "../_components/sections/WorkTeaser";

export default function Home({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <main>
      <Hero locale={locale} />
      <TrustStrip locale={locale} />
      <WorkTeaser locale={locale} />
      <Services locale={locale} />
      <Process locale={locale} />
      <About locale={locale} />
      <Testimonials locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
    </main>
  );
}
