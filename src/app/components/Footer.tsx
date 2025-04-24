export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 md:px-8 bg-white border-t border-[#e6ddd7]/50">
      <div className="max-w-6xl mx-auto text-center text-sm text-[#000000]/60 space-y-2">
        {/* Nazwa firmy */}
        <p className="font-semibold">INVICTUS KAROLINA MATUSZEWSKA-JÓZEFIAK</p>
        
        {/* REGON i NIP w jednej linii */}
        <p>
          <span className="mr-2">REGON: 364621740</span>
          <span className="hidden sm:inline">|</span> {/* Ukryty separator na małych ekranach */}
          <span className="sm:ml-2">NIP: 6972228113</span>
        </p>
        
        {/* Copyright */}
        <p>
          &copy; {currentYear} Twórczyni Sukcesu. Wszelkie prawa zastrzeżone.
        </p>
        
        {/* Wykonawca */}
        <p>
          Projekt i wykonanie: <a href="https://tworczynisukcesu.pl" target="_blank" rel="noopener noreferrer" className="hover:text-[#8b5a2b] transition-colors">tworczynisukcesu.pl</a>
        </p>
      </div>
    </footer>
  );
} 