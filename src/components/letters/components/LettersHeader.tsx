"use client";

function LettersHeader() {
  return (
    <section className="py-[6.4rem] px-[2.4rem] md:px-[4.8rem] bg-gradient-to-b from-mahogany-light to-mahogany">
      <div className="max-w-480 mx-auto text-center">
        <p
          className="text-gold text-[1.1rem] md:text-[1.2rem] tracking-[0.3em] uppercase font-medium mb-[1.6rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Birthday Tributes
        </p>
        <h1
          className="text-cream text-[3.2rem] md:text-[5.6rem] font-bold leading-tight mb-[1.6rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Share Your Message
        </h1>
        <p className="text-cream/70 text-[1.6rem] max-w-240 mx-auto leading-relaxed">
          Write a heartfelt message for this special occasion. Your words will
          be part of this digital celebration.
        </p>
      </div>
    </section>
  );
}

export default LettersHeader;
