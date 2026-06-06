"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Briefcase, FileText, Globe, Mail, Scale, ShieldCheck, Tag, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="blurBottom"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Warum Türkei",
          id: "#why-invest",
        },
        {
          name: "Immobilien",
          id: "#properties",
        },
        {
          name: "Expertise",
          id: "#expertise",
        },
        {
          name: "Referenzen",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Kontakt",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2lz2eo"
      logoAlt="TÜRK ESTATE logo"
      brandName="TÜRK ESTATE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "plain",
      }}
      title="Ihr Traumimmobilie in der Türkei"
      description="Exklusive Immobilien & Investmentberatung für Deutschland, Österreich & die Schweiz. Entdecken Sie handverlesene Luxusobjekte und sichern Sie sich Top-Renditen."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/germany-flag_1398-153.jpg",
          alt: "German Flag",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hands-waving-flags-austria_53876-25319.jpg",
          alt: "Austrian Flag",
        },
        {
          src: "http://img.b2bpic.net/free-photo/person-waving-flag-switzerland_53876-15411.jpg",
          alt: "Swiss Flag",
        },
        {
          src: "http://img.b2bpic.net/free-photo/netherlands-globe_187299-32794.jpg",
          alt: "Luxembourg Flag",
        },
        {
          src: "http://img.b2bpic.net/free-photo/flag-liechtenstein_1401-157.jpg",
          alt: "Liechtenstein Flag",
        },
      ]}
      avatarText="Deutschsprachige Beratung"
      buttons={[
        {
          text: "Immobilien entdecken",
          href: "#properties",
        },
        {
          text: "Beratung anfragen",
          href: "#contact",
        },
      ]}
      buttonAnimation="blur-reveal"
      marqueeItems={[
        {
          type: "text",
          text: "Hohe Renditechancen",
        },
        {
          type: "text-icon",
          text: "Rechtssicher",
          icon: Scale,
        },
        {
          type: "text",
          text: "Professionelle Beratung",
        },
        {
          type: "text-icon",
          text: "Steueroptimiert",
          icon: FileText,
        },
        {
          type: "text",
          text: "Exklusive Objekte",
        },
      ]}
      showMarqueeCard={true}
      marqueeSpeed={30}
    />
  </div>

  <div id="why-invest" data-section="why-invest">
      <AboutMetric
      useInvertedBackground={false}
      title="Warum in der Türkei investieren?"
      metrics={[
        {
          icon: TrendingUp,
          label: "Mietrendite p.a.",
          value: "Bis zu 8%",
        },
        {
          icon: Tag,
          label: "Günstigere Preise",
          value: "Bis zu 50%",
        },
        {
          icon: Briefcase,
          label: "Türkische Staatsbürgerschaft",
          value: "ab 400.000 USD",
        },
        {
          icon: Globe,
          label: "Wachsender Tourismusmarkt",
          value: "Stark & Stabil",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="properties" data-section="properties">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Luxusvilla Istanbul",
          price: "ab €1.2M",
          imageSrc: "http://img.b2bpic.net/free-photo/tropical-reflection-poolside-palm-tree-paradise-generated-by-ai_188544-30998.jpg",
          imageAlt: "Luxury Villa Istanbul Bosphorus View",
        },
        {
          id: "p2",
          name: "Meerblick-Apartment Bodrum",
          price: "ab €450K",
          imageSrc: "http://img.b2bpic.net/free-photo/contemporary-house-interior-design_23-2151050935.jpg",
          imageAlt: "Sea View Apartment Bodrum",
        },
        {
          id: "p3",
          name: "Residenz am Strand Antalya",
          price: "ab €780K",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-kitchen-interior-design_23-2150976621.jpg",
          imageAlt: "Beachfront Residence Antalya",
        },
        {
          id: "p4",
          name: "Penthouse mit Stadtblick Izmir",
          price: "ab €620K",
          imageSrc: "http://img.b2bpic.net/free-photo/man-black-wooden-jetty-maldives_505751-5531.jpg",
          imageAlt: "City View Penthouse Izmir",
        },
        {
          id: "p5",
          name: "Moderne Villa Fethiye",
          price: "ab €950K",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-coastal-villa-sunset-with-palm-trees-balcony-view_23-2151986118.jpg",
          imageAlt: "Modern Villa Fethiye",
        },
        {
          id: "p6",
          name: "Exklusives Apartment Kappadokien",
          price: "ab €350K",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-urban-space-with-building-close-up_23-2148287770.jpg",
          imageAlt: "Exclusive Apartment Cappadocia",
        },
      ]}
      title="Exklusive Immobilien in der Türkei"
      description="Entdecken Sie unsere handverlesenen Luxusimmobilien an den schönsten Standorten der Türkei. Von modernen Apartments in Istanbul bis zu Villen an der Ägäisküste – Ihr Traumobjekt wartet."
    />
  </div>

  <div id="expertise" data-section="expertise">
      <FeatureCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Komplexe Rechtslage",
          "Sprachbarrieren",
          "Unsicherheit beim Kauf",
          "Fremde Bürokratie",
        ],
      }}
      positiveCard={{
        items: [
          "Rechtssichere Abwicklung",
          "Deutschsprachige Beratung",
          "Transparenter Kaufprozess",
          "Effiziente Behördengänge",
        ],
      }}
      title="Unsere Expertise: Ihr Vorteil"
      description="Profitieren Sie von unserer tiefgehenden Marktkenntnis und einem Netzwerk, das Ihre Investitionsziele in der Türkei optimal unterstützt."
      tag="Ihr vertrauensvoller Partner"
      tagIcon={ShieldCheck}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Anna Schmidt",
          handle: "@AnnaS_Invest",
          testimonial: "TÜRK ESTATE hat meine Erwartungen übertroffen! Exzellente Beratung, perfekte Abwicklung. Ich bin begeistert von meiner neuen Immobilie in Alanya.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-sofa-waiting-area_107420-95816.jpg",
          imageAlt: "Anna Schmidt",
        },
        {
          id: "2",
          name: "Michael Huber",
          handle: "@HuberImmoAT",
          testimonial: "Als Österreicher war ich unsicher, aber TÜRK ESTATE nahm mir jede Sorge. Die Unterstützung war durchweg professionell und persönlich. Klare Empfehlung!",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-looking-camera-near-building_23-2148308527.jpg",
          imageAlt: "Michael Huber",
        },
        {
          id: "3",
          name: "Sophie Müller",
          handle: "@SophieM_CH",
          testimonial: "Dank TÜRK ESTATE habe ich mein Investment in Istanbul gefunden. Die Marktkenntnisse und der Service sind unübertroffen. Absolut top!",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-handsome-male-suit-putting-hands-near-ears-standing-white-background_179666-31701.jpg",
          imageAlt: "Sophie Müller",
        },
        {
          id: "4",
          name: "Thomas Wagner",
          handle: "@WagnerInvestDE",
          testimonial: "Einwandfreie Beratung vom ersten Kontakt bis zum Abschluss. Meine Familie und ich genießen unser neues Feriendomizil in Bodrum. Herzlichen Dank!",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-using-tablet-table-outside_23-2148053643.jpg",
          imageAlt: "Thomas Wagner",
        },
        {
          id: "5",
          name: "Julia Klein",
          handle: "@JuliaK_Realty",
          testimonial: "Ich war beeindruckt von der Effizienz und dem Fachwissen. TÜRK ESTATE ist der ideale Partner für Immobilieninvestitionen in der Türkei.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-outdoors_23-2151038668.jpg",
          imageAlt: "Julia Klein",
        },
        {
          id: "6",
          name: "Peter Fischer",
          handle: "@FischerProperty",
          testimonial: "Ein reibungsloser Prozess und eine fantastische Immobilie in Antalya. Das Team von TÜRK ESTATE hat meine Erwartungen übertroffen.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",
          imageAlt: "Smiling businessman standing in the airport terminal",
        },
      ]}
      title="Was unsere Kunden sagen"
      description="Erfahren Sie aus erster Hand, wie wir Investoren aus Deutschland, Österreich und der Schweiz erfolgreich in den türkischen Immobilienmarkt begleitet haben."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Ist der Immobilienkauf für Ausländer in der Türkei sicher?",
          content: "Ja, der Immobilienkauf in der Türkei ist für ausländische Investoren sicher und durch klare Gesetze geregelt. Wir begleiten Sie durch den gesamten rechtlichen Prozess, um maximale Sicherheit zu gewährleisten.",
        },
        {
          id: "faq2",
          title: "Welche Kosten fallen beim Kauf einer Immobilie an?",
          content: "Neben dem Kaufpreis fallen Notarkosten, Grundbuchgebühren und Maklerprovision an. Wir erstellen Ihnen eine transparente Aufstellung aller voraussichtlichen Kosten.",
        },
        {
          id: "faq3",
          title: "Wie lange dauert der Kaufprozess in der Regel?",
          content: "Der Kaufprozess kann je nach Komplexität der Immobilie und Behörden zwischen 2 Wochen und 2 Monaten dauern. Wir sind darauf spezialisiert, diesen Prozess für Sie zu beschleunigen.",
        },
        {
          id: "faq4",
          title: "Kann ich die türkische Staatsbürgerschaft durch Immobilienkauf erwerben?",
          content: "Ja, der Erwerb der türkischen Staatsbürgerschaft ist ab einem Immobilienwert von 400.000 USD möglich. Wir beraten Sie umfassend zu den Voraussetzungen und begleiten Sie bei der Antragstellung.",
        },
        {
          id: "faq5",
          title: "Welche Regionen in der Türkei eignen sich am besten für Investitionen?",
          content: "Istanbul, Bodrum, Antalya und Alanya sind aufgrund ihrer hohen Mietrenditen, touristischen Attraktivität und Wertsteigerungspotenziale besonders empfehlenswert. Wir helfen Ihnen, die passende Region für Ihre Ziele zu finden.",
        },
      ]}
      title="Häufig gestellte Fragen"
      description="Finden Sie Antworten auf die wichtigsten Fragen rund um den Immobilienkauf und Investments in der Türkei."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Kontaktieren Sie uns"
      title="Ihre Traumimmobilie ist nur einen Klick entfernt."
      description="Haben Sie Fragen oder möchten Sie eine persönliche Beratung? Füllen Sie das Formular aus und wir melden uns umgehend bei Ihnen."
      tagIcon={Mail}
      inputPlaceholder="Ihre E-Mail-Adresse"
      buttonText="Beratung anfragen"
      termsText="Mit dem Absenden stimmen Sie unseren Datenschutzbestimmungen zu."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Immobilien",
          items: [
            {
              label: "Istanbul",
              href: "/#properties",
            },
            {
              label: "Bodrum",
              href: "/#properties",
            },
            {
              label: "Antalya",
              href: "/#properties",
            },
            {
              label: "Weitere Regionen",
              href: "/#properties",
            },
          ],
        },
        {
          title: "Unternehmen",
          items: [
            {
              label: "Über uns",
              href: "/#why-invest",
            },
            {
              label: "Unsere Expertise",
              href: "/#expertise",
            },
            {
              label: "Referenzen",
              href: "/#testimonials",
            },
            {
              label: "Kontakt",
              href: "/#contact",
            },
          ],
        },
        {
          title: "Ressourcen",
          items: [
            {
              label: "FAQ",
              href: "/#faq",
            },
            {
              label: "Investment-Guide",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
      ]}
      logoText="TÜRK ESTATE"
      copyrightText="© 2024 TÜRK ESTATE. Alle Rechte vorbehalten."
      logoSrc="http://img.b2bpic.net/free-photo/isolated-white-house-silhouette-minimal-black-landscape_1194-641505.jpg"
      logoAlt="TÜRK ESTATE logo"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
