import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MapPin, MessageCircle } from "lucide-react";
import { useEffect } from "react";

interface SuburbFAQ {
  q: string;
  a: string;
}

interface SuburbPageProps {
  title: string;
  metaDescription: string;
  h1: string;
  suburb: string;
  content: string;
  suburbFacts: string[];
  faqs: SuburbFAQ[];
  heroImageAlt?: string;
  kitchenImageAlt?: string;
}

export default function SuburbPage({
  title,
  metaDescription,
  h1,
  suburb,
  content,
  suburbFacts,
  faqs,
  heroImageAlt,
  kitchenImageAlt,
}: SuburbPageProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (property) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", metaDescription);
    setMeta("og:title", title, true);
    setMeta("og:description", metaDescription, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", metaDescription);

    return () => {
      document.title =
        "Tru Adelaide Bond Cleaners | #1 Vacate Cleaning Adelaide";
    };
  }, [title, metaDescription]);

  const whatsappUrl = "https://wa.me/61488841883";
  const paragraphs = content.split("\n\n");

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        aria-label={`Bond cleaning ${suburb} hero section`}
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/adelaide-suburb-street.dim_800x400.jpg"
            alt={
              heroImageAlt ??
              `Clean Adelaide suburban street — Tru Adelaide Bond Cleaners services ${suburb} and all Adelaide suburbs`
            }
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/82" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green border border-brand-green/30 rounded-full px-4 py-1.5 text-sm font-body font-semibold mb-5">
            <MapPin size={14} />
            {suburb}, South Australia
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white leading-tight mb-5">
            {h1}
          </h1>
          <p className="text-white/85 text-lg font-body max-w-2xl mx-auto mb-8">
            Professional vacate cleaning in {suburb}. Fixed prices, 100%
            bond-back guarantee, and fast bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-ocid="suburb.primary_button"
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold px-8 py-6 text-lg rounded-lg w-full sm:w-auto"
              >
                Get a Free Quote
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                data-ocid="suburb.whatsapp.button"
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

      {/* SUBURB FACTS */}
      <section
        className="bg-white border-b border-border py-8"
        aria-label={`${suburb} suburb facts`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suburbFacts.map((fact) => (
              <div key={fact} className="flex items-start gap-2">
                <CheckCircle
                  size={16}
                  className="text-brand-green flex-shrink-0 mt-0.5"
                />
                <span className="font-body text-sm text-foreground">
                  {fact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section
        className="py-14 bg-secondary/20"
        aria-labelledby={`suburb-content-${suburb.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <article className="prose prose-base max-w-none">
              <h2
                id={`suburb-content-${suburb.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-display font-bold text-2xl text-brand-navy mb-6"
              >
                Bond Cleaning in {suburb} — What You Need to Know
              </h2>
              {paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="font-body text-foreground/85 leading-relaxed mb-4 text-base"
                >
                  {para}
                </p>
              ))}
            </article>
            <div className="space-y-6">
              <img
                src="/assets/generated/suburb-cleaning-kitchen.dim_800x500.jpg"
                alt={
                  kitchenImageAlt ??
                  `Professional bond cleaner from Tru Adelaide Bond Cleaners cleaning a kitchen in a ${suburb} rental home`
                }
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              {/* WHY CHOOSE US */}
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-xl mb-4">
                  Why Choose Us for {suburb} Bond Cleaning
                </h3>
                <ul className="space-y-3">
                  {[
                    "100% bond-back guarantee — we fix it free if needed",
                    "Fixed prices with no hidden fees",
                    "All equipment and products supplied",
                    "Experienced team familiar with local real estate agents",
                    "Fast bookings — often available same week",
                    "REISA-approved cleaning checklist used on every job",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-brand-green flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-white/90">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-14 bg-white"
        aria-labelledby={`faq-heading-${suburb.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id={`faq-heading-${suburb.toLowerCase().replace(/\s+/g, "-")}`}
            className="font-display font-bold text-2xl md:text-3xl text-brand-navy text-center mb-10"
          >
            Frequently Asked Questions — Bond Cleaning {suburb}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card
                key={faq.q}
                data-ocid={`suburb.faq.item.${i + 1}`}
                className="border-border shadow-xs"
              >
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-brand-navy text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-green" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Book Your {suburb} Bond Clean?
          </h2>
          <p className="text-white/90 font-body text-lg mb-8">
            Get a free, fixed-price quote today. We guarantee you pass the
            inspection or we come back for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-ocid="suburb.cta.primary_button"
                size="lg"
                className="bg-white text-brand-navy hover:bg-white/90 font-body font-bold px-10 py-6 text-lg w-full sm:w-auto"
              >
                Get a Free Quote
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                data-ocid="suburb.cta.whatsapp.button"
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

      {/* BACK TO HOME */}
      <section className="py-6 bg-secondary/20 text-center">
        <Link
          to="/"
          data-ocid="suburb.home.link"
          className="font-body text-brand-navy underline hover:text-brand-green text-sm"
        >
          ← Back to Tru Adelaide Bond Cleaners Home
        </Link>
      </section>
    </>
  );
}
