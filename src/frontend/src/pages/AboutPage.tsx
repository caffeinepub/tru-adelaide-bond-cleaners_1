import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Heart,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title =
      "About Tru Adelaide Bond Cleaners | Trusted Vacate Cleaning Adelaide";
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        aria-label="About page hero"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
            alt="Tru Adelaide Bond Cleaners professional team ready to deliver outstanding vacate cleaning services in Adelaide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            About Tru Adelaide Bond Cleaners
          </h1>
          <p className="text-white/85 font-body text-xl max-w-3xl mx-auto">
            We\u2019re a local Adelaide cleaning company on a mission to help
            every tenant get their full bond back \u2014 stress-free, every
            single time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="story-heading"
                className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6"
              >
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Tru Adelaide Bond Cleaners started with a simple idea: moving
                  out of a rental property should not be one of the most
                  stressful experiences of your life. We started cleaning for
                  friends and family who were moving out, and quickly realised
                  just how many tenants were losing their hard-earned bond money
                  \u2014 not because they were bad tenants, but because
                  end-of-lease cleaning is genuinely hard to get right without
                  experience.
                </p>
                <p>
                  We studied exactly what real estate agents and property
                  managers look for during final inspections across Adelaide. We
                  built a comprehensive, REISA-aligned checklist. We invested in
                  professional equipment and commercial-grade cleaning products.
                  And we developed a system that gets the same outstanding
                  result every single time \u2014 no matter the size or
                  condition of the property.
                </p>
                <p>
                  Today, we\u2019ve helped over 500 Adelaide tenants get their
                  full bond back. Our team is made up of experienced, trained,
                  and police-checked cleaners who genuinely care about
                  delivering an exceptional result. We\u2019re proud of what we
                  do, and it shows in our reviews.
                </p>
                <p>
                  We\u2019re 100% locally owned and operated in Adelaide, South
                  Australia. When you call us, you speak to a real person who
                  knows your suburb and understands your situation. We treat
                  every property like it\u2019s our own.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
                alt="Tru Adelaide Bond Cleaners professional cleaning team inside an Adelaide rental property"
                className="rounded-2xl shadow-xl w-full object-cover h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 bg-secondary/20"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="font-display font-bold text-3xl md:text-4xl text-brand-navy text-center mb-12"
          >
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "We don\u2019t cut corners. Every clean is thorough, professional, and meets the highest standards.",
              },
              {
                icon: Heart,
                title: "Care",
                desc: "We genuinely care about helping you get your bond back. Your stress is our problem to solve.",
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Fixed prices, honest advice, and a guarantee we actually honour. No excuses, no surprises.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "We\u2019re proudly local. We live and work in Adelaide and we\u2019re invested in our community.",
              },
            ].map((value) => (
              <Card
                key={value.title}
                className="shadow-card border-border text-center"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-brand-navy/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-brand-navy" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-white" aria-labelledby="trust-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="trust-heading"
            className="font-display font-bold text-3xl text-brand-navy mb-8"
          >
            Why You Can Trust Tru Adelaide Bond Cleaners
          </h2>
          <ul className="space-y-4">
            {[
              "Police-checked and fully insured cleaning team",
              "REISA-aligned inspection checklists used on every job",
              "100% bond-back guarantee \u2014 we return for free if needed",
              "Fixed-price quotes with no hidden extras",
              "Over 500 successful bond cleans completed in Adelaide",
              "All equipment, products, and supplies provided by us",
              "Same-day and next-day bookings available",
              "Transparent communication from quote to completion",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-brand-green flex-shrink-0 mt-1"
                />
                <span className="font-body text-foreground leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-navy" aria-label="About page CTA">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 font-body text-lg mb-8">
            Get in touch today for a fast, fixed-price quote on your bond clean.
            We service all Adelaide suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold px-8 py-3 w-full sm:w-auto"
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
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-body font-semibold px-8 py-3 w-full sm:w-auto flex items-center gap-2 bg-transparent"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
