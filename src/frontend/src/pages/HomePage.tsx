import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Brush,
  CheckCircle,
  Clock,
  Droplets,
  Flame,
  Home,
  Layers,
  MapPin,
  MessageCircle,
  Shield,
  Star,
  Wind,
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: Home,
    title: "Bond / Vacate Cleaning",
    desc: "Complete top-to-bottom clean meeting all real estate inspection standards.",
  },
  {
    icon: Layers,
    title: "Carpet Steam Cleaning",
    desc: "Hot water extraction removes deep-set dirt, stains, and allergens.",
  },
  {
    icon: Flame,
    title: "Oven & Appliance Cleaning",
    desc: "We degrease and deep clean ovens, stovetops, rangehoods, and more.",
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    desc: "Crystal-clear internal windows and tracks for that just-moved-in look.",
  },
  {
    icon: Droplets,
    title: "Bathroom Deep Clean",
    desc: "Tiles, grout, toilets, vanities — all scrubbed to shine.",
  },
  {
    icon: Brush,
    title: "Wall Wash & Spot Clean",
    desc: "We remove marks, scuffs, and stains from walls and skirtings.",
  },
];

const trustBadges = [
  { icon: Award, label: "100% Bond Back Guarantee" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Clock, label: "Same Day Available" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Norwood, SA",
    text: "Tru Adelaide Bond Cleaners made my move-out completely stress-free. The team was professional, thorough, and I got my full bond back within a week. Absolutely brilliant service!",
  },
  {
    name: "James R.",
    location: "Glenelg, SA",
    text: "I was worried about passing the inspection after 4 years of living in my unit. These guys are legends — they cleaned every nook and cranny. My real estate agent was genuinely impressed.",
  },
  {
    name: "Priya K.",
    location: "Unley, SA",
    text: "Booked online, got a fixed-price quote, and the cleaners showed up on time with all their own gear. The oven looked brand new! Highly recommend Tru Adelaide Bond Cleaners.",
  },
];

const suburbs = [
  {
    name: "Norwood",
    path: "/bond-cleaning-norwood",
    ocid: "suburbs.norwood.link",
  },
  {
    name: "Glenelg",
    path: "/bond-cleaning-glenelg",
    ocid: "suburbs.glenelg.link",
  },
  { name: "Unley", path: "/bond-cleaning-unley", ocid: "suburbs.unley.link" },
  {
    name: "Prospect",
    path: "/bond-cleaning-prospect",
    ocid: "suburbs.prospect.link",
  },
  {
    name: "Mitcham",
    path: "/bond-cleaning-mitcham",
    ocid: "suburbs.mitcham.link",
  },
  {
    name: "Burnside",
    path: "/bond-cleaning-burnside",
    ocid: "suburbs.burnside.link",
  },
  {
    name: "Marion",
    path: "/bond-cleaning-marion",
    ocid: "suburbs.marion.link",
  },
  {
    name: "Tea Tree Gully",
    path: "/bond-cleaning-tea-tree-gully",
    ocid: "suburbs.tea-tree-gully.link",
  },
  {
    name: "Mawson Lakes",
    path: "/bond-cleaning-mawson-lakes",
    ocid: "suburbs.mawson-lakes.link",
  },
  {
    name: "Salisbury",
    path: "/bond-cleaning-salisbury",
    ocid: "suburbs.salisbury.link",
  },
];

const faqs = [
  {
    q: "What is bond cleaning and why is it required?",
    a: "Bond cleaning (also called end of lease cleaning or vacate cleaning) is a thorough, top-to-bottom clean of your rental property when you move out. Your landlord or real estate agent requires it so the property is returned in the same condition it was when you moved in. If you skip it or do a poor job, you risk losing part or all of your rental bond (security deposit).",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because it directly affects whether you get your full bond back. In South Australia, rental bonds can be hundreds or thousands of dollars. A professional bond clean gives you the best chance of passing the final inspection and getting every dollar returned to you.",
  },
  {
    q: "How much does a bond clean cost?",
    a: "Bond cleaning in Adelaide typically costs between $300 and $800, depending on the size of your property. A 1-bedroom unit may cost around $300\u2013$400, while a 4-bedroom house with carpets and extras can cost $600\u2013$900+. Always ask for a fixed-price quote so there are no surprises.",
  },
  {
    q: "What is full bond cleaning?",
    a: "Full bond cleaning covers every area of your rental property \u2014 kitchen, bathrooms, bedrooms, living areas, laundry, windows (internal), walls (spot clean), skirting boards, light fittings, fans, cupboards inside and out, and more. Some packages also include carpet steam cleaning and oven cleaning as add-ons.",
  },
  {
    q: "Which are the top-rated bond cleaning companies near me?",
    a: "top-rated-list",
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "The best cleaning products for bond cleaning include: White King Bleach (bathrooms and toilets), Easy Off BAM (kitchen grease and oven), Domestos (disinfecting), Selleys Sugar Soap (walls and surfaces), Mr Muscle Glass Cleaner (windows and mirrors), and Goo Gone (sticky residue). Professional cleaners often use commercial-grade versions of these products for better results.",
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: "Professional bond cleaning in Adelaide typically costs: 1 bedroom = $280\u2013$380, 2 bedroom = $350\u2013$480, 3 bedroom = $450\u2013$600, 4 bedroom = $550\u2013$800. Add carpet steam cleaning ($80\u2013$200) and oven cleaning ($50\u2013$80) on top. Prices vary based on property condition and inclusions. Always get a written fixed-price quote.",
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: "carpet-products-list",
  },
  {
    q: "How to choose a reliable bond cleaner?",
    a: "Look for these things when choosing a bond cleaner: (1) Bond-back guarantee in writing, (2) Transparent fixed-price quotes, (3) Verified Google or Facebook reviews, (4) Experience with real estate inspection checklists, (5) Insurance and police-checked staff, (6) Clear communication and responsiveness. Avoid anyone who quotes very cheap prices \u2014 quality bond cleaning takes time and the right products.",
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes! Many professional bond cleaners in Adelaide offer online booking with a satisfaction guarantee. Tru Adelaide Bond Cleaners makes it easy \u2014 fill out our online form, get a fixed-price quote, and if your real estate agent isn\u2019t happy, we come back for a free re-clean. No stress, no hassle.",
  },
  {
    q: "How much is a cleaner per hour in Adelaide?",
    a: "In Adelaide, a general cleaner typically charges $35\u2013$55 per hour. Specialised bond or end of lease cleaners may charge $45\u2013$70 per hour due to the detailed work required. Most bond cleaning companies offer fixed-price packages rather than hourly rates so you know exactly what you\u2019ll pay upfront.",
  },
  {
    q: "How much is an end of lease clean in Australia? How much to pay a cleaner for 3 hours? What is the 20-minute rule in cleaning?",
    a: "End of lease cleaning in Australia costs $280\u2013$900+ depending on property size and location. For 3 hours of general cleaning, expect to pay $105\u2013$165 ($35\u2013$55/hr). The 20-minute rule in cleaning means tackling each room in 20-minute blocks \u2014 focusing on the highest-impact tasks first (toilet, sink, bench tops) before moving on. Professional bond cleaners don\u2019t follow the 20-minute rule \u2014 they spend as long as needed to pass the real estate inspection.",
  },
];

function TopRatedCompanies() {
  return (
    <div className="space-y-4">
      <p>Here are five top-rated bond cleaning companies in Australia:</p>
      <ol className="space-y-3 list-decimal list-inside">
        <li>
          <strong>Fantastic Cleaners</strong> &mdash;{" "}
          <a
            href="https://www.fantasticcleaners.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            fantasticcleaners.com.au
          </a>{" "}
          &mdash; One of Australia&apos;s largest cleaning networks, offering
          end of lease cleaning with a bond-back guarantee. They operate across
          all major cities and have thousands of verified customer reviews.
        </li>
        <li>
          <strong>Jim&apos;s Cleaning</strong> &mdash;{" "}
          <a
            href="https://www.jimscleaning.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            jimscleaning.com.au
          </a>{" "}
          &mdash; A trusted Australian franchise with local cleaners in every
          suburb. Jim&apos;s offers vacate cleaning, carpet cleaning, and window
          cleaning. They back their work with a satisfaction guarantee.
        </li>
        <li>
          <strong>Cleancorp</strong> &mdash;{" "}
          <a
            href="https://www.cleancorp.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            cleancorp.com.au
          </a>{" "}
          &mdash; A national commercial and residential cleaning company with a
          strong reputation for end of lease cleans. Cleancorp uses eco-friendly
          products and trains all staff to meet real estate inspection
          standards.
        </li>
        <li>
          <strong>OzClean</strong> &mdash;{" "}
          <a
            href="https://www.ozclean.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            ozclean.com.au
          </a>{" "}
          &mdash; A specialist end of lease and bond cleaning service operating
          in Adelaide, Brisbane, and Melbourne. OzClean provides detailed
          checklists and a re-clean guarantee.
        </li>
        <li>
          <strong>Tru Bond Cleaning</strong> &mdash;{" "}
          <a
            href="https://trubondcleaningbrisbane.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            trubondcleaningbrisbane.com
          </a>{" "}
          &mdash; A professional bond and vacate cleaning company committed to
          helping tenants get their full bond back. Tru Bond Cleaning delivers
          thorough, checklist-based cleans backed by a satisfaction guarantee.
          Their experienced team covers all areas including kitchens, bathrooms,
          carpets, and windows.
        </li>
      </ol>
    </div>
  );
}

function CarpetProductsList() {
  return (
    <div className="space-y-3">
      <p>
        For carpet bond cleaning, professionals use hot water extraction (steam
        cleaning) with products like:
      </p>
      <ul className="space-y-2 list-disc list-inside">
        <li>
          <a
            href="https://www.amazon.com.au/s?k=bissell+carpet+cleaner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            Bissell Professional Carpet Cleaning Formula
          </a>{" "}
          &mdash; great for deep stains
        </li>
        <li>
          <a
            href="https://www.woolworths.com.au/shop/search/products?searchTerm=preen+carpet+cleaner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            Preen Carpet Cleaner
          </a>{" "}
          &mdash; widely available in Australian supermarkets
        </li>
        <li>
          <a
            href="https://www.amazon.com.au/s?k=carpet+shampoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            Stanley Steemer Carpet Shampoo
          </a>{" "}
          &mdash; commercial grade
        </li>
        <li>
          <a
            href="https://www.amazon.com.au/s?k=resolve+carpet+cleaner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy underline hover:text-brand-green"
          >
            Resolve Carpet Cleaner
          </a>{" "}
          &mdash; effective on pet stains and odours
        </li>
      </ul>
      <p>
        For best results, always hire a professional with a truck-mounted or
        portable steam cleaner.
      </p>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Tru Adelaide Bond Cleaners | #1 Vacate Cleaning Adelaide";
    // Inject JSON-LD schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Tru Adelaide Bond Cleaners",
      description:
        "Professional bond and vacate cleaning services in Adelaide, South Australia. 100% bond-back guarantee.",
      url: "https://truadelaidebondcleaners.com.au",
      telephone: "+61488841883",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Adelaide",
        addressRegion: "SA",
        addressCountry: "AU",
      },
      areaServed: "Adelaide, South Australia",
      priceRange: "$$",
      openingHours: ["Mo-Sa 07:00-19:00", "Su 08:00-17:00"],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" aria-label="Hero section">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
            alt="Professional bond cleaners Adelaide - Tru Adelaide Bond Cleaners team delivering vacate cleaning services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <Badge className="mb-4 bg-brand-green/20 text-brand-green border-brand-green/30 text-sm">
            Adelaide&apos;s Trusted Bond Cleaning Experts
          </Badge>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Adelaide&apos;s Most Trusted Bond Cleaners
            <br />
            <span className="text-brand-green">
              &mdash; Get Your Full Bond Back
            </span>
          </h1>
          <p className="text-white/85 text-lg md:text-xl font-body max-w-3xl mx-auto mb-8">
            We clean every corner of your rental property so you pass the
            inspection and get every dollar of your bond returned. Fixed-price
            quotes. 100% satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold px-8 py-6 text-lg rounded-lg w-full sm:w-auto"
              >
                Get a Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                data-ocid="hero.whatsapp.button"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-body font-semibold px-8 py-6 text-lg rounded-lg w-full sm:w-auto flex items-center gap-2 bg-transparent"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section
        className="bg-white border-b border-border"
        aria-label="Trust indicators"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-brand-navy/10 flex items-center justify-center">
                  <badge.icon size={24} className="text-brand-navy" />
                </div>
                <span className="font-body font-semibold text-sm text-foreground">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section
        className="py-16 bg-secondary/30"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-4"
            >
              Our Bond Cleaning Services
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              We cover everything your real estate agent checks &mdash; from top
              to bottom, inside and out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="shadow-card hover:shadow-lg transition-shadow border-border"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy/10 flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-brand-navy" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-brand-navy hover:bg-brand-navy-dark text-white font-body font-semibold px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="why-heading"
                className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6"
              >
                Why Adelaide Tenants Choose Us
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "100% Bond-Back Guarantee",
                    desc: "We use REISA-approved checklists on every job. If your agent isn\u2019t happy, we come back for a free re-clean \u2014 no arguments, no extra charges.",
                  },
                  {
                    title: "Fixed-Price, No Surprises",
                    desc: "We quote you a fixed price upfront. You\u2019ll never get a nasty invoice at the end. What we quote is what you pay \u2014 full stop.",
                  },
                  {
                    title: "Experienced Local Team",
                    desc: "Our cleaners know exactly what Adelaide real estate agents look for. We\u2019ve helped hundreds of local tenants pass their final inspections.",
                  },
                  {
                    title: "All Equipment Supplied",
                    desc: "We bring every product, tool, and piece of equipment needed. You don\u2019t need to buy a thing \u2014 just hand over the keys.",
                  },
                ].map((point) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <CheckCircle
                      size={22}
                      className="text-brand-green flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="font-display font-semibold text-brand-navy text-lg">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mt-1">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
                alt="Tru Adelaide Bond Cleaners professional team at work in an Adelaide rental property"
                className="rounded-2xl shadow-xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-4 -left-4 bg-brand-green text-white rounded-xl p-4 shadow-lg">
                <div className="font-display font-bold text-3xl">500+</div>
                <div className="font-body text-sm">Happy Adelaide Tenants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-16 bg-brand-navy"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12"
          >
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-white/10 border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    <Star
                      size={16}
                      className="text-brand-green fill-brand-green"
                    />
                    <Star
                      size={16}
                      className="text-brand-green fill-brand-green"
                    />
                    <Star
                      size={16}
                      className="text-brand-green fill-brand-green"
                    />
                    <Star
                      size={16}
                      className="text-brand-green fill-brand-green"
                    />
                    <Star
                      size={16}
                      className="text-brand-green fill-brand-green"
                    />
                  </div>
                  <p className="text-white/90 font-body text-sm leading-relaxed mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-display font-semibold text-white text-sm">
                      {t.name}
                    </div>
                    <div className="text-white/60 font-body text-xs">
                      {t.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section
        className="py-16 bg-secondary/20"
        aria-labelledby="areas-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="areas-heading"
              className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-4"
            >
              Bond Cleaning Across Adelaide&apos;s Best Suburbs
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              We service all major Adelaide suburbs. Click your suburb below to
              find out more about our local bond cleaning service.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.name}
                to={suburb.path as "/"}
                data-ocid={suburb.ocid}
                className="group flex flex-col items-center gap-2 bg-white rounded-xl p-4 border border-border shadow-xs hover:shadow-md hover:border-brand-green transition-all text-center"
              >
                <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center group-hover:bg-brand-green/10 transition-colors">
                  <MapPin
                    size={18}
                    className="text-brand-navy group-hover:text-brand-green transition-colors"
                  />
                </div>
                <span className="font-body font-semibold text-sm text-brand-navy group-hover:text-brand-green transition-colors leading-tight">
                  {suburb.name}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  Bond Cleaning
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground font-body">
              Everything you need to know about bond cleaning in Adelaide.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                // biome-ignore lint/suspicious/noArrayIndexKey: static FAQ list
                key={i}
                value={`item-${i + 1}`}
                data-ocid={`faq.item.${i + 1}`}
                className="bg-secondary/30 rounded-xl border border-border px-4 shadow-xs"
              >
                <AccordionTrigger className="font-display font-semibold text-brand-navy text-left hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-4">
                  {faq.a === "top-rated-list" ? (
                    <TopRatedCompanies />
                  ) : faq.a === "carpet-products-list" ? (
                    <CarpetProductsList />
                  ) : (
                    faq.a
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-14 bg-brand-green" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/90 font-body text-lg mb-8">
            Book your bond clean today. Fixed price, no surprises, and we
            guarantee you pass the inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-brand-navy hover:bg-white/90 font-body font-bold px-10 py-6 text-lg w-full sm:w-auto"
              >
                Get a Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-green font-body font-bold px-10 py-6 text-lg w-full sm:w-auto flex items-center gap-2 bg-transparent"
              >
                <MessageCircle size={20} />
                WhatsApp Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
