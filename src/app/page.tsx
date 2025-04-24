'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";
import ScrollArrow from "./components/ScrollArrow";
import Footer from "./components/Footer";
import MottoSection from "./components/MottoSection";
import FloatingMenu from "./components/FloatingMenu";

// Definicje ikon SVG dla mediów społecznościowych
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
);

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/1Hk2hePRHu/?mibextid=wwXIfr', Icon: FacebookIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/tworczyni_sukcesu', Icon: InstagramIcon },
  { name: 'LinkedIn', url: 'https://pl.linkedin.com/in/karolina-matuszewska-józefiak-37a059273', Icon: LinkedInIcon }
];

const services = [
  {
    title: "SZKOLENIA",
    description: "INDYWIDUALNIE DOPASOWANE SZKOLENIE, ZGODNE Z ZAPOTRZEBOWANIEM AGENCJI"
  },
  {
    title: "WPROWADZENIE SYSTEMU DO REJESTRACJI CZASU PRACY",
    description: "SYSTEM POZWALA NA REJESTRACJĘ CZASU PRACY PRACOWNIKÓW, PLANOWANIE URLOPÓW, TWORZENIE HARMONOGRAMÓW ORAZ WERYFIKACJĘ ZGODNOŚCI ZAPISÓW Z PRAWEM PRACY"
  },
  {
    title: "UMOWY AGENCYJNE",
    description: "WSPARCIE W PEŁNYM PROCESIE REJESTRACJI AGENCJI, PRZYGOTOWANIE DOKUMENTACJI I WNIOSKÓW"
  },
  {
    title: "REJESTRACJA OFWCA",
    description: "WSPARCIE W PEŁNYM PROCESIE REJESTRACJI OFWCA, PRZYGOTOWANIE DOKUMENTACJI I WNIOSKÓW"
  },
  {
    title: "SIATKA PROWIZYJNA AGENCJI",
    description: "STWORZENIE SIATKI PROWIZYJNEJ AGENCJI UWZGLĘDNIAJĄCEJ WSZYSTKIE TOWARZYSTWA UBEZPIECZENIOWE W PORTFOLIO"
  },
  {
    title: "PLAN SPRZEDAŻOWY",
    description: "STWORZENIE SZCZEGÓŁOWEGO PLANU SPRZEDAŻOWEGO AGENCJI, MAKSYMALIZUJĄCEGO ZYSKI"
  },
  {
    title: "MOTYWACJA PRACOWNIKÓW",
    description: "STWORZENIE SYSTEMU MOTYWACYJNEGO DLA PRACOWNIKÓW"
  },
  {
    title: "CRM",
    description: "WSPARCIE W PROCESIE ZMIANY SYSTEMU NA INNY LUB AUDYT ZAKOŃCZONY ODPOWIEDNIM USTAWIENIEM FUNKCJONALNOŚCI OBECNIE WYKORZYSTYWANEGO ROZWIĄZANIA"
  },
  {
    title: "STRONA INTERNETOWA",
    description: "STWORZENIE STRONY INTERNETOWEJ AGENCJI ORAZ PROFILÓW NA SOCIAL MEDIACH"
  },
  {
    title: "REBRANDING",
    description: "WSPARCIE PODCZAS PEŁNEGO PROCESU, NADZÓR NAD PROCESEM ORAZ WPROWADZENIE WSZYSTKICH WYMAGANYCH ZMIAN"
  },
  {
    title: "AUDYT",
    description: "WERYFIKACJA ZAPOTRZEBOWANIA AGENCJI NA RÓŻNE ROZWIĄZANIA TECHNOLOGICZNE ORAZ DOBÓR ODPOWIEDNICH NARZĘDZI I WSPARCIE W ICH WPROWADZENIU"
  },
  {
    title: "COACHING",
    description: "INDYWIDUALNE SESJE COACHINGOWE CASE STUDY W AGENCJI"
  },
  {
    title: "COACHING KRYZYSOWY",
    description: "SESJA POKAZUJACA MOŻLIWOŚCI ROZWIĄZANIA DANEGO PROBLEMU"
  },
  {
    title: "COMPLIANCE",
    description: "DORADZTWO I POMOC W DOSTOSOWANIU DZIAŁAŃ AGENCJI DO OBOWIĄZUJĄCYCH NORM"
  },
  {
    title: "DZIAŁANIA SPRZEDAŻOWE",
    description: "ANALIZA EFEKTYWNOŚCI I IDENTYFIKACJA OBSZARÓW DO POPRAWY, WSPARCIE PRZY WPROWADZANIU WYPRACOWANYCH ROZWIĄZAŃ"
  },
  {
    title: "MARKETING",
    description: "OPRACOWANIE PLANU MARKETINGOWEGO DLA AGENCJI"
  },
  {
    title: "INTEGRACJE",
    description: "ORGANIZACJA SPOTKAŃ PODSUMOWUJĄCYCH, INTEGRACJI DLA PRACOWNIKÓW, SPOTKAŃ OKOLICZNOŚCIOWYCH"
  },
  {
    title: "KREATYWNA INTERWENCJA",
    description: "BORYKASZ SIĘ Z PROBLEMEM I NIE ZNALAZŁEŚ DLA SIEBIE ROZWIĄZANIA W MOJEJ OFERCIE? SKONTAKTUJ SIĘ ZE MNĄ! RAZEM STAWIMY CZOŁA KAŻDEMU WYZWANIU!"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/film_tlo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center px-4">
            <Image
              src="/Logo.png"
              alt="Twórczyni Sukcesu Logo"
              width={200}
              height={200}
              className="mx-auto mb-8"
            />
            <h1 className="hero-title text-4xl md:text-6xl text-white mb-6">
              Stwórzmy razem Twój sukces
            </h1>
            <p className="body-text text-xl text-white/90 max-w-2xl mx-auto">
              Profesjonalne doradztwo biznesowe i personalne, które pomoże Ci osiągnąć Twoje cele
            </p>
          </div>
          
          <ScrollArrow />
        </section>

        {/* O mnie Section */}
        <section id="o-mnie" className="py-20 px-4 md:px-8 bg-[#e6ddd7]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/foto2.png"
                alt="Karolina Matuszewska-Józefiak"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="heading text-3xl md:text-4xl text-[#000000]">
                O mnie
              </h2>
              <div className="body-text space-y-4 text-[#000000]">
                <p>
                  Nazywam się Karolina Matuszewska-Józefiak i jestem pasjonatką ubezpieczeń 
                  z ponad 15-letnim doświadczeniem w branży. Przez lata zdobywałam wiedzę 
                  i umiejętności, pracując jako specjalistka sprzedaży w multiagencji, 
                  manager w Towarzystwie Ubezpieczeniowym oraz dyrektor operacyjna 
                  w multiagencji. Dzięki tym doświadczeniom, żaden aspekt sektora ubezpieczeń 
                  nie jest mi obcy.
                </p>
                <p>
                  Moja prawdziwa supermoc to prowadzenie zespołów do sukcesu. 
                  Ukończyłam studia podyplomowe z zakresu przywództwa, ponieważ wierzę, 
                  że siła tkwi w ludziach.
                </p>
                <p>
                  Z entuzjazmem dzielę się swoją wiedzą i doświadczeniem, aby wspierać innych w osiąganiu ich celów.
                </p>
                <p className="font-semibold">
                  Stwórzmy razem Twój sukces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta Section */}
        <section id="oferta" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#e6ddd7]/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading text-3xl md:text-4xl text-[#000000] mb-4">
                Oferta
              </h2>
              <p className="body-text text-[#000000]/70 max-w-2xl mx-auto">
                Kompleksowe rozwiązania dla Twojej agencji ubezpieczeniowej
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#e6ddd7]/30 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading text-3xl md:text-4xl text-[#000000] text-center mb-16">
              Skontaktuj się ze mną
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center bg-white/50 p-8 rounded-xl shadow-lg border border-[#8b5a2b]/10"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#000000]">Zacznijmy współpracę</h3>
                <p className="body-text text-[#000000]/80">
                  Masz pytania lub chcesz omówić projekt? Skontaktuj się bezpośrednio lub znajdź mnie w mediach społecznościowych.
                </p>
                <div className="space-y-4">
                  <a href="tel:668620042" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 flex items-center justify-center bg-[#8b5a2b]/10 rounded-full text-[#8b5a2b] group-hover:bg-[#8b5a2b]/20 transition-colors">
                      📞
                    </span>
                    <span className="text-[#000000] group-hover:text-[#8b5a2b] transition-colors">
                      668 620 042
                    </span>
                  </a>
                  <a href="mailto:kontakt@tworczynisukcesu.pl" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 flex items-center justify-center bg-[#8b5a2b]/10 rounded-full text-[#8b5a2b] group-hover:bg-[#8b5a2b]/20 transition-colors">
                      ✉️
                    </span>
                    <span className="text-[#000000] group-hover:text-[#8b5a2b] transition-colors">
                      kontakt@tworczynisukcesu.pl
                    </span>
                  </a>
                  <a href="https://tworczynisukcesu.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 flex items-center justify-center bg-[#8b5a2b]/10 rounded-full text-[#8b5a2b] group-hover:bg-[#8b5a2b]/20 transition-colors">
                      🌐
                    </span>
                    <span className="text-[#000000] group-hover:text-[#8b5a2b] transition-colors">
                      tworczynisukcesu.pl
                    </span>
                  </a>
                </div>
                
                <div className="pt-4 border-t border-[#8b5a2b]/10">
                  <h4 className="text-lg font-medium text-[#000000] mb-3">Znajdź mnie na:</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ name, url, Icon }) => (
                      <a 
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-[#8b5a2b]/10 rounded-full text-[#8b5a2b] hover:bg-[#8b5a2b]/20 hover:text-[#7a4f24] transition-colors"
                        aria-label={name}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/foto4.png"
                  alt="Kontakt"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Motto Section */}
        <MottoSection />

      </main>
      
      <Footer />
      <FloatingMenu />
    </div>
  );
}
