"use client";

import React from "react";

export default function Page() {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted — connect this to Formspree or your email handler.");
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Steel & Talon logo"
              className="h-8 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-black tracking-tight text-lg">
                Steel & Talon
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                Train Hard, Stay Sharp
              </span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-white/90">
              Home
            </a>
            <a href="#training" className="hover:text-white/90">
              Training
            </a>
            <a href="#apparel" className="hover:text-white/90">
              Apparel
            </a>
            <a href="#schedule" className="hover:text-white/90">
              Schedule
            </a>
            <a href="#about" className="hover:text-white/90">
              About
            </a>
            <a href="#gallery" className="hover:text-white/90">
              Gallery
            </a>
            <a href="#contact" className="hover:text-white/90">
              Contact
            </a>
          </nav>
          <a
            href="https://steel-talon.myshopify.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold rounded-full border border-zinc-700 px-3 py-1 hover:bg-zinc-900"
          >
            <span>Shop</span>
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900"
        >
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-3">
                Inland Empire • California
              </p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Firearms Training &amp;
                <br />
                Range-Ready Apparel
              </h1>
              <p className="mt-4 text-zinc-300 max-w-prose text-sm md:text-base">
                Steel &amp; Talon delivers professional firearms instruction and
                hard-use apparel built for the range, the street, and the shop.
                No ego. No shortcuts. Just safe reps and gear that earns its
                keep.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#training"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-zinc-100 text-black text-sm font-semibold hover:bg-white"
                >
                  View Training Courses
                </a>
                <a
                  href="#apparel"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-zinc-600 text-sm font-semibold hover:bg-zinc-900"
                >
                  Shop Apparel
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zinc-800 relative">
                <img
                  src="/images/hero-training.jpg"
                  alt="Steel & Talon firearms training on the range"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex flex-col bg-black/70 backdrop-blur px-4 py-3 rounded-xl border border-zinc-700/60">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-amber-400 mb-1">
                      Slogan
                    </span>
                    <span className="text-xl md:text-2xl font-extrabold tracking-wide text-zinc-50">
                      Train Hard, Stay Sharp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="py-16 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-2">
                Courses
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                Training Courses
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-xl">
                Built for real people with real lives. From first-time shooters
                to seasoned gun owners, we focus on safe reps, clear standards,
                and skills that carry over off the range.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <article className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Firearm Essentials</h3>
                  <span className="text-xs text-zinc-400">
                    Beginner • $150
                  </span>
                </div>
                <ul className="list-disc pl-5 text-zinc-300 text-xs space-y-1">
                  <li>Safety rules &amp; range etiquette</li>
                  <li>Grip, stance, sight picture</li>
                  <li>Trigger control &amp; follow-through</li>
                  <li>Live-fire fundamentals</li>
                </ul>
              </article>

              <article className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Defensive Pistol</h3>
                  <span className="text-xs text-zinc-400">
                    Intermediate • $200
                  </span>
                </div>
                <ul className="list-disc pl-5 text-zinc-300 text-xs space-y-1">
                  <li>Drawstroke &amp; presentation</li>
                  <li>Reloads &amp; malfunction clears</li>
                  <li>Movement &amp; use of cover</li>
                  <li>Timed drills &amp; standards</li>
                </ul>
              </article>

              <article className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">In-Home Defense</h3>
                  <span className="text-xs text-zinc-400">
                    Intermediate • $300
                  </span>
                </div>
                <ul className="list-disc pl-5 text-zinc-300 text-xs space-y-1">
                  <li>Safety rules &amp; home planning</li>
                  <li>In-home defense training</li>
                  <li>Gun storage &amp; accessibility</li>
                  <li>Timed drills with intruders</li>
                </ul>
              </article>

              <article className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Carbine Fundamentals</h3>
                  <span className="text-xs text-zinc-400">
                    Intermediate • $250
                  </span>
                </div>
                <ul className="list-disc pl-5 text-zinc-300 text-xs space-y-1">
                  <li>Zeroing &amp; holds</li>
                  <li>Recoil management</li>
                  <li>Positional shooting</li>
                  <li>Partner drills</li>
                </ul>
              </article>

              <article className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5 md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">CCW Certification (CA)</h3>
                  <span className="text-xs text-zinc-400">
                    All Levels • $200
                  </span>
                </div>
                <ul className="list-disc pl-5 text-zinc-300 text-xs space-y-1">
                  <li>State requirements</li>
                  <li>Legal use of force</li>
                  <li>Live-fire qual</li>
                  <li>Scenario discussion</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        
 {/* SCHEDULE */}
        <section id="schedule" className="py-16 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6">
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-2">
                Schedule
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                Schedule &amp; Booking
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-xl">
                Use the booking link below to pick your course, date, and time.
                Private and agency training available on request.
              </p>
            </div>
            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 text-sm text-zinc-300">
              <ol className="list-decimal pl-5 space-y-1 text-xs md:text-sm mb-4">
                <li>
                  Select your desired course (Essentials, Defensive, Carbine,
                  etc.).
                </li>
                <li>
                  Choose an available date and time that fits your schedule.
                </li>
                <li>Submit your info and payment to lock in your seat.</li>
              </ol>
              <p className="text-xs md:text-sm mb-3">
                This button should link to your live Calendly (or other
                booking) page. Right now it uses a placeholder URL you can
                replace.
              </p>
              <a
                href="https://calendly.com/YOUR-BOOKING-LINK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-zinc-100 text-black text-sm font-semibold hover:bg-white"
              >
                Open Booking Page
              </a>
            </div>
          </div>
        </section>
        
        {/* APPAREL */}
        <section id="apparel" className="py-16 bg-[#1c1914]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-2">
                  Apparel
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Steel &amp; Talon Apparel
                </h2>
                <p className="text-zinc-300 text-sm md:text-base max-w-xl">
                  Shirts, hoodies, and hats built to take carbon, sweat, and
                  shop dust. Wear it on the range, in the garage, or out in
                  town.
                </p>
              </div>
              <a
                href="https://steel-talon.myshopify.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/60 text-amber-200 hover:bg-amber-500/10"
              >
                View Full Store
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <article className="bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
                <img
                  src="/images/hat-trucker.jpg"
                  alt="Steel & Talon Trucker Hat"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm">
                        Steel &amp; Talon Trucker Hat
                      </h3>
                      <span className="text-[10px] uppercase rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-200">
                        New
                      </span>
                    </div>
                    <div className="text-sm text-zinc-200">$15.00</div>
                  </div>
                  <a
                    href="https://steel-talon.myshopify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-zinc-100 text-black text-xs font-semibold hover:bg-white"
                  >
                    Buy on Shopify
                  </a>
                </div>
              </article>

              <article className="bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
                <img
                  src="/images/tee-firearms-training.jpg"
                  alt="Skull & Two Snakes Tee"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm">
                        Skull &amp; Two Snakes Tee
                      </h3>
                      <span className="text-[10px] uppercase rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-200">
                        Featured
                      </span>
                    </div>
                    <div className="text-sm text-zinc-200">$35.00</div>
                  </div>
                  <a
                    href="https://steel-talon.myshopify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-zinc-100 text-black text-xs font-semibold hover:bg-white"
                  >
                    Buy on Shopify
                  </a>
                </div>
              </article>

              <article className="bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
                <img
                  src="/images/tee-train-hard.jpg"
                  alt="Train Hard, Stay Sharp Tee"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm">
                        Train Hard, Stay Sharp Tee
                      </h3>
                      <span className="text-[10px] uppercase rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-200">
                        Limited
                      </span>
                    </div>
                    <div className="text-sm text-zinc-200">$35.00</div>
                  </div>
                  <a
                    href="https://steel-talon.myshopify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-zinc-100 text-black text-xs font-semibold hover:bg-white"
                  >
                    Buy on Shopify
                  </a>
                </div>
              </article>

              <article className="bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
                <img
                  src="/images/hoodie-front-logo.jpg"
                  alt="Logo Hoodie"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm">Logo Hoodie</h3>
                      <span className="text-[10px] uppercase rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-200">
                        Classic
                      </span>
                    </div>
                    <div className="text-sm text-zinc-200">$55.00</div>
                  </div>
                  <a
                    href="https://steel-talon.myshopify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-zinc-100 text-black text-xs font-semibold hover:bg-white"
                  >
                    Buy on Shopify
                  </a>
                </div>
              </article>

              <article className="bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
                <img
                  src="/images/hoodie-moto-skull.jpg"
                  alt="Moto Skull Hoodie"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm">Moto Skull Hoodie</h3>
                      <span className="text-[10px] uppercase rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-200">
                        New
                      </span>
                    </div>
                    <div className="text-sm text-zinc-200">$55.00</div>
                  </div>
                  <a
                    href="https://steel-talon.myshopify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-zinc-100 text-black text-xs font-semibold hover:bg-white"
                  >
                    Buy on Shopify
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm text-zinc-300">
            <article className="md:col-span-2 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-2">
                About
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                About Steel &amp; Talon
              </h2>
              <p className="mb-3">
                Built in the Inland Empire, Steel &amp; Talon is a
                professional training group focused on turning fundamentals
                into performance. Our curriculum scales from first shots to
                defensive standards and CCW quals. No ego, no shortcuts — just
                safe, efficient reps with measurable progress.
              </p>
              <p className="mb-3">
                Our apparel line reflects the same mindset: durable, honest
                gear you’ll actually wear. Inspired by motorsport, fabrication,
                and the tools that build real life.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-zinc-200 mt-4">
                <li>• Insured &amp; permitted</li>
                <li>• CPR / Stop-the-Bleed trained</li>
                <li>• Range Safety Officer on every line</li>
                <li>• LE / Mil friendly environment</li>
              </ul>
            </article>
            <article className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-2 text-zinc-100">
                Region &amp; Contact
              </h3>
              <p>Inland Empire, CA (training locations vary)</p>
              <p className="mt-2">
                Phone:{" "}
                <a href="tel:19515341987" className="text-zinc-100">
                  951-534-1987
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@steelandtalon.com"
                  className="text-zinc-100"
                >
                  info@steelandtalon.com
                </a>
              </p>
            </article>
          </div>
        </section>
        
        {/* GALLERY */}
        <section id="gallery" className="py-16 bg-[#181818]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-2">
                Gallery
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                Gallery
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-xl">
                A look at some of the range work, drills, and Steel &amp; Talon
                gear in the wild.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/images/hero-training.jpg"
                alt="Range instruction"
                className="rounded-xl border border-zinc-800 bg-zinc-900 object-cover w-full h-full"
              />
              <img
                src="/images/training-essentials.jpg"
                alt="Handgun work"
                className="rounded-xl border border-zinc-800 bg-zinc-900 object-cover w-full h-full"
              />
              <img
                src="/images/training-defensive.jpg"
                alt="Defensive shooting"
                className="rounded-xl border border-zinc-800 bg-zinc-900 object-cover w-full h-full"
              />
              <img
                src="/images/training-home-defense.jpg"
                alt="Home defense training"
                className="rounded-xl border border-zinc-800 bg-zinc-900 object-cover w-full h-full"
              />
              <img
                src="/images/training-carbine.jpg"
                alt="Carbine course"
                className="rounded-xl border border-zinc-800 bg-zinc-900 object-cover w-full h-full"
              />
              <img
                src="/images/hoodie-front-logo.jpg"
                alt="Steel & Talon hoodie"
                className="rounded-xl border border-zinc-800 bg-zinc-900 object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
            <form
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-4"
              onSubmit={handleContactSubmit}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-1">
                Contact
              </p>
              <h2 className="text-2xl font-bold mb-1">Get in Touch</h2>
              <p className="text-sm text-zinc-300 mb-2">
                Book training, ask a question, or request wholesale info on
                apparel.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
                  placeholder="Full name"
                />
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
                  placeholder="Email"
                />
              </div>
              <input
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
                placeholder="Phone (optional)"
              />
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
                placeholder="How can we help?"
              />
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-zinc-100 text-black text-sm font-semibold hover:bg-white"
              >
                Send
              </button>
            </form>

            <div className="space-y-4 text-sm text-zinc-300">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
                <h3 className="font-semibold mb-2 text-zinc-100">
                  Direct Contact
                </h3>
                <p>
                  Phone:{" "}
                  <a href="tel:19515341987" className="text-zinc-100">
                    951-534-1987
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@steelandtalon.com"
                    className="text-zinc-100"
                  >
                    info@steelandtalon.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8 text-sm text-zinc-400 bg-black">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div>
            <div className="font-black text-zinc-100">Steel &amp; Talon</div>
            <div className="text-xs text-zinc-400">Train Hard, Stay Sharp</div>
            <div className="mt-2">
              © {new Date().getFullYear()} Steel &amp; Talon. All rights
              reserved.
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-zinc-200 font-semibold mb-1">Company</div>
              <a href="#about" className="block hover:text-zinc-200">
                About
              </a>
              <a href="#training" className="block hover:text-zinc-200">
                Training
              </a>
              <a href="#apparel" className="block hover:text-zinc-200">
                Apparel
              </a>
            </div>
            <div>
              <div className="text-zinc-200 font-semibold mb-1">Support</div>
              <a href="#schedule" className="block hover:text-zinc-200">
                Schedule
              </a>
              <a href="#gallery" className="block hover:text-zinc-200">
                Gallery
              </a>
              <a href="#contact" className="block hover:text-zinc-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
