import React from 'react';

function CompanySection() {
  const logos = [
    { name: 'Perplexity', href: 'https://perplexity.ai', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/Perplexity-Logo.jpg?raw=true' },
    { name: 'Volkswagen', href: 'https://www.vw.com', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/volksawagen.jpg?raw=true' },
    { name: 'Siemens', href: 'https://www.siemens.com', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/1200px-Siemens_logo_rgb.jpg?raw=true' },
    { name: 'Audi', href: 'https://www.audi.com', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/Logo_audi.jpg?raw=true' },
    { name: 'Dentsu Creative', href: 'https://www.dentsucreative.com/', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/densu.jpg?raw=true' },
    { name: 'LookDeep', href: 'https://lookdeep.health', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/look_deep_logo.jpg?raw=true' },
    { name: 'LunaFit', href: 'https://www.lunafitapp.com', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/lunafit.jpeg?raw=true' },
    { name: 'Relyon.ai', href: 'https://www.relyon.ai', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/relyon_new.png?raw=true', style: { backgroundColor: '#f5f5f5' } },
    // { name: 'Sier', href: 'https://www.siertech.com', src: 'https://raw.githubusercontent.com/assafch/davoice_webwake/refs/heads/main/logos/Siernewlogo.avif?raw=true', style: { backgroundColor: '#ffffff' } },
    // { name: 'Hotel Genie', href: 'https://www.hotelgenie.app', src: 'https://github.com/assafch/davoice_webwake/blob/main/logos/hotel_ginie_logo.png?raw=true' },
  ];

  // Adjust MIN_CARD_PX to influence how many columns/rows you get at a given width.
  const MIN_CARD_PX = 220;

  return (
    <section className="bg-white dark:bg-gray-800 py-16 lg:py-20" aria-label="Companies using DaVoice">
      <div className="container mx-auto max-w-7xl px-6">
        <p className="text-center text-gray-200 md:text-gray-100 dark:text-gray-100 text-xl md:text-2xl font-semibold">
          Chosen by leaders in AI and automotive<br /> Including <span className="font-extrabold">Perplexity.ai</span> and <span className="font-extrabold">Volkswagen</span> — after rigorous benchmarking.
        </p>

        {/* Dynamic multi-row grid */}
        <div
          className="mt-10 grid gap-8 md:gap-10"
          style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${MIN_CARD_PX}px, 1fr))` }}
        >
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              title={logo.name}
              className="group flex items-center justify-center rounded-2xl bg-white/95 dark:bg-gray-900/50 ring-1 ring-gray-200/60 dark:ring-white/10 p-5 md:p-6 h-32 md:h-36 lg:h-40 transition"
              aria-label={logo.name}
            >
              <img
                loading="lazy"
                src={logo.src}
                alt={`${logo.name} — DaVoice Voice AI`}
                className="max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100"
                style={logo.style}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanySection;
