import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    id: "bond-vacate",
    title: "Bond / Vacate Cleaning",
    subtitle: "Adelaide's Most Thorough End of Lease Clean",
    image: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    imageAlt:
      "Professional bond cleaning service Adelaide - Tru Adelaide Bond Cleaners team completing a full vacate clean",
    content: [
      "Moving out of a rental property in Adelaide is stressful enough without worrying about the final clean. That\u2019s exactly why Tru Adelaide Bond Cleaners offers a comprehensive bond cleaning service designed to tick every single box on your real estate agent\u2019s inspection checklist.",
      "Our bond cleaning service covers every room and every surface in your property. We clean kitchens from top to bottom \u2014 including the oven, stovetop, rangehood, splashback, cupboards inside and out, drawers, sink, and bench tops. We scrub every bathroom until the tiles, grout, mirrors, vanity, toilet, and shower screen are sparkling. We clean all bedrooms, living areas, and dining rooms, including built-in wardrobes, skirting boards, light switches, power points, and ceiling fans.",
      "We also wash all internal windows, clean window tracks and sills, mop all hard floors, vacuum carpeted areas, and wipe down all doors and door frames. Our team carries a real estate inspection checklist on every job to make absolutely sure we don\u2019t miss a thing.",
      "What makes Tru Adelaide Bond Cleaners different is our 100% Bond-Back Guarantee. If your real estate agent or property manager identifies anything we missed during the final inspection, we come back and re-clean that area at absolutely no extra cost. We stand behind every job we do.",
      "Our bond cleaning prices are fixed \u2014 not hourly. A 1-bedroom unit starts from around $280, a 2-bedroom home from $350, a 3-bedroom property from $450, and a 4-bedroom house from $550. These prices include all labour, cleaning products, and equipment. Carpet steam cleaning and oven deep cleaning can be added on at extra cost.",
      "We service all suburbs across Adelaide and surrounding areas, including the eastern suburbs, western suburbs, northern suburbs, and southern coastal areas like Glenelg and Brighton. Book online today or message us on WhatsApp for a fast, fixed-price quote within 2 hours.",
    ],
    checklist: [
      "Full kitchen clean including oven, stovetop, and rangehood",
      "All bathrooms scrubbed and disinfected",
      "Internal windows cleaned",
      "All floors vacuumed and mopped",
      "Built-in wardrobes wiped inside and out",
      "Skirting boards, light fittings, and fans dusted",
      "Real estate inspection checklist used on every job",
    ],
  },
  {
    id: "carpet-steam",
    title: "Carpet Steam Cleaning",
    subtitle: "Deep Clean That Removes Even the Toughest Stains",
    image: "/assets/generated/carpet-cleaning.dim_800x500.jpg",
    imageAlt:
      "Professional carpet steam cleaning Adelaide - Tru Adelaide Bond Cleaners using hot water extraction on carpets",
    content: [
      "Carpets are one of the most heavily scrutinised areas during a rental inspection in Adelaide. Even if they look clean to the naked eye, a real estate agent can spot embedded dirt, pet hair, stains, and odours instantly. That\u2019s why professional carpet steam cleaning is so important for getting your full bond back.",
      "Tru Adelaide Bond Cleaners uses professional hot water extraction (also called steam cleaning) to deep clean all carpeted areas of your property. This method injects hot water mixed with a professional cleaning solution deep into the carpet fibres, then extracts it along with all the dirt, allergens, dust mites, and bacteria that have built up over your tenancy.",
      "Unlike a basic vacuum or rental carpet cleaner, our truck-mounted and portable steam cleaning equipment generates much higher water temperatures and suction pressures. This means we can remove stains that cheaper methods leave behind \u2014 including pet stains, coffee, wine, food spills, and muddy footprints.",
      "Most carpets are dry within 3\u20136 hours after our steam clean, making it easy to fit into your move-out schedule. We recommend booking the carpet clean on the same day as your bond clean so the entire property is ready for inspection in a single visit.",
      "Our carpet cleaning service covers all room types \u2014 bedrooms, living rooms, hallways, stairs, and walk-in wardrobes. We pre-treat high-traffic areas and stubborn stains before the main clean to maximise the result. We also apply a deodorising treatment to eliminate pet and other odours, leaving carpets smelling fresh.",
      "Carpet steam cleaning costs between $80 and $200 depending on the number of rooms and the condition of the carpets. We offer discounts when you book carpet cleaning together with a full bond clean package. Get in touch for a fast, accurate, fixed-price quote today.",
    ],
    checklist: [
      "Hot water extraction (steam clean) method",
      "Pre-treatment of stains and high-traffic areas",
      "Odour and deodorising treatment",
      "All room types including stairs and wardrobes",
      "Professional commercial-grade equipment",
      "Carpets dry within 3\u20136 hours",
      "Discounts available with full bond clean",
    ],
  },
  {
    id: "oven-appliance",
    title: "Oven & Appliance Cleaning",
    subtitle: "Get Your Kitchen Appliances Sparkling Again",
    image: "/assets/generated/oven-cleaning.dim_800x500.jpg",
    imageAlt:
      "Professional oven cleaning service Adelaide - clean stainless steel oven interior after Tru Adelaide Bond Cleaners service",
    content: [
      "The oven is one of the areas most likely to cause you to lose part of your bond in Adelaide. Landlords and real estate agents expect ovens to be returned in a clean, grease-free condition \u2014 and if yours has months or years of baked-on grease, it can take hours to clean properly without the right products and techniques.",
      "Tru Adelaide Bond Cleaners provides a professional oven and appliance cleaning service that makes your kitchen look brand new. Our team uses commercial-grade, non-toxic degreasers that break down even the most stubborn burnt-on grease and carbon deposits. We dismantle oven racks, trays, and the glass door panel to clean every surface separately before reassembling the oven.",
      "We clean the inside cavity walls, the oven door glass (inside and out), the oven racks and trays, the grill, the stovetop burners and rings, the drip trays, and the control knobs. We also clean the rangehood filter, fan, and exterior surfaces to remove grease build-up and cooking residue.",
      "In addition to the oven, we can clean other kitchen appliances as part of your bond package \u2014 including the microwave (inside and out), dishwasher (interior, seals, and filter), and refrigerator (if requested). These add-ons are available at a small additional cost.",
      "One of the most common reasons tenants lose bond money in South Australia is a dirty oven. Don\u2019t risk it. Our oven clean typically takes 45\u201390 minutes depending on the condition of the appliance, and we guarantee it will pass the real estate inspection.",
      "Oven cleaning starts from $50 for a standard oven. A combined oven, stovetop, and rangehood clean starts from $120. Add it to your full bond clean package and save.",
    ],
    checklist: [
      "Full oven interior including cavity, door, and glass",
      "Oven racks, trays, and grill cleaned separately",
      "Stovetop burners, rings, and drip trays",
      "Rangehood filter, fan, and exterior",
      "Microwave and dishwasher available as add-ons",
      "Commercial-grade, non-toxic degreasers used",
      "Satisfaction guaranteed or free re-clean",
    ],
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    subtitle: "Crystal-Clear Windows That Impress Inspectors",
    image: "/assets/generated/window-cleaning.dim_800x500.jpg",
    imageAlt:
      "Professional window cleaning service Adelaide - streak-free windows after Tru Adelaide Bond Cleaners visit",
    content: [
      "Clean windows make an enormous difference to the overall impression your rental property leaves during the final inspection. Streaky, dirty windows are one of the first things property managers notice \u2014 and they\u2019re a sure way to fail the inspection and lose part of your bond.",
      "Tru Adelaide Bond Cleaners provides thorough internal window cleaning as part of our bond cleaning service. We clean all glass panes to a streak-free finish using professional squeegees, microfibre cloths, and a pure water cleaning solution that leaves no residue or smears.",
      "We clean the glass on all internal windows, sliding glass doors, and French doors. We also clean all window frames, tracks, and sills \u2014 removing built-up dust, dead insects, and dirt from the tracks using detailing brushes and a vacuum. This is the detail that most DIY cleaners miss, and it\u2019s exactly what real estate agents check.",
      "Window cleaning is included as a standard part of our full bond cleaning packages, or it can be booked as a standalone service. If you\u2019re on a tight budget, we can prioritise the key rooms first and provide a discounted rate for partial window cleaning.",
      "For ground-floor external windows, we can also provide an external window clean as an optional add-on. We use extension squeegees and bucket-and-squeegee technique to clean external glass without ladders where possible.",
      "Our window cleaning is fast and efficient \u2014 we typically clean all windows in a standard 3-bedroom home in under 45 minutes. Combined with our full bond clean, we\u2019ll have your entire property ready for inspection in a single visit. Message us on WhatsApp today for a quick quote.",
    ],
    checklist: [
      "All internal window glass cleaned streak-free",
      "Window frames, tracks, and sills detailed",
      "Sliding doors and French doors included",
      "Professional squeegees and pure water solution",
      "External ground-floor windows available as add-on",
      "Included in all bond clean packages",
      "Fast \u2014 all windows done in under 45 minutes",
    ],
  },
  {
    id: "bathroom-deep-clean",
    title: "Bathroom & Toilet Deep Clean",
    subtitle: "Spotless Bathrooms That Pass Every Inspection",
    image: "/assets/generated/bathroom-cleaning.dim_800x500.jpg",
    imageAlt:
      "Sparkling clean bathroom after professional deep cleaning by Tru Adelaide Bond Cleaners in Adelaide SA",
    content: [
      "Bathrooms are put under the microscope during every rental inspection in Adelaide. Soap scum, mould, lime scale, grout staining, and dirty toilets are all instant red flags for property managers. A thorough bathroom deep clean is absolutely essential for getting your full bond returned.",
      "Tru Adelaide Bond Cleaners uses professional-grade cleaning products and techniques to restore your bathrooms to a like-new condition. We scrub every surface \u2014 tiles on the walls and floor, grout lines, shower screens and seals, bath tubs, vanity tops and basins, mirrors, toilet bowls and cisterns, exhaust fans, towel rails, and soap holders.",
      "We use specific products for each surface type: acid-based cleaners for lime scale and mineral deposits on shower screens and tapware, bleach-based products for mould and mildew in grout lines, and enzyme-based cleaners for toilet bowl stains and odours.",
      "Soap scum on shower screens is one of the most stubborn cleaning challenges in rental properties. Our team uses commercial-grade soap scum removers combined with a scrubbing pad technique to restore glass shower screens to a clear, streak-free finish.",
      "We clean all bathrooms, ensuites, and separate toilets in the property. If your rental has multiple bathrooms, each one gets the same thorough treatment. We also clean the laundry as part of our standard bond clean.",
      "Our bathroom deep clean service is included in all bond cleaning packages. As a standalone service, a single bathroom starts from $80. We guarantee our bathroom cleans will pass the real estate inspection or we come back to fix it at no charge.",
    ],
    checklist: [
      "Tiles, grout, and shower screens scrubbed",
      "Toilet, cistern, and seat disinfected",
      "Vanity, basin, and mirror polished",
      "Exhaust fans and ventilation cleaned",
      "Mould and mildew treatment for grout",
      "Laundry included in bond packages",
      "Acid descaler for lime scale on tapware",
    ],
  },
  {
    id: "wall-spot-clean",
    title: "Wall Wash & Spot Cleaning",
    subtitle: "Remove Marks, Scuffs, and Stains From Every Wall",
    image: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    imageAlt:
      "Professional wall washing and spot cleaning service for rental properties in Adelaide by Tru Adelaide Bond Cleaners",
    content: [
      "Walls take a beating over the course of a tenancy. Scuff marks from furniture, fingerprints around light switches, crayon from young kids, and general grime all add up \u2014 and real estate agents notice every single one. A proper wall wash and spot clean is the finishing touch that makes a bond clean truly complete.",
      "Tru Adelaide Bond Cleaners uses Selleys Sugar Soap and professional-grade spot removers to clean walls throughout your rental property. We spot-treat individual marks and stains, and wash down entire wall surfaces in high-traffic areas like hallways, kitchens, and near doorways.",
      "We also clean all skirting boards \u2014 vacuuming first to remove dust, then wiping them down with a damp cloth. Skirting boards are another area real estate agents specifically check, and they can quickly accumulate dust, dirt, and scuff marks at floor level.",
      "Light switches and power points are wiped clean, removing fingerprint marks and grime that builds up around them. Door frames and architraves are also cleaned on both sides. We pay attention to the details that most people overlook when doing a DIY clean.",
      "Our wall wash service is included as part of our comprehensive bond cleaning packages. If you need an intensive wall wash due to significant marking or staining, we can provide a more detailed wall clean at an additional cost.",
      "Keep in mind that wall washing removes marks and grime but does not repair damage such as holes, deep scratches in the paint, or water damage. For significant wall damage, you may need to arrange separate repairs with a painter or handyman.",
    ],
    checklist: [
      "Spot cleaning of marks, scuffs, and fingerprints",
      "Sugar Soap wall wash for high-traffic areas",
      "Skirting boards vacuumed and wiped",
      "Light switches and power points cleaned",
      "Door frames and architraves both sides",
      "Included in all bond clean packages",
      "Intensive wall wash available for additional cost",
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title =
      "Bond Cleaning Services Adelaide | Tru Adelaide Bond Cleaners";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16" aria-label="Services page hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Our Bond Cleaning Services
          </h1>
          <p className="text-white/80 font-body text-xl max-w-3xl mx-auto mb-8">
            Six specialised cleaning services designed to help Adelaide tenants
            pass their final inspection and get their full bond back.
          </p>
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-brand-green hover:bg-brand-green-dark text-white font-body font-semibold px-8 py-3 flex items-center gap-2 mx-auto">
              <MessageCircle size={18} />
              Get a Quote on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, idx) => (
        <article
          key={service.id}
          className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-secondary/20"}`}
          aria-labelledby={`service-${service.id}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="rounded-2xl shadow-xl w-full object-cover h-72 lg:h-96"
                  loading="lazy"
                />
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2
                  id={`service-${service.id}`}
                  className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-2"
                >
                  {service.title}
                </h2>
                <p className="text-brand-green font-body font-semibold text-lg mb-6">
                  {service.subtitle}
                </p>
                <div className="space-y-3 mb-6">
                  {service.content.map((para, i) => (
                    <p
                      // biome-ignore lint/suspicious/noArrayIndexKey: static ordered content
                      key={i}
                      className="font-body text-muted-foreground leading-relaxed text-sm"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="bg-secondary/40 rounded-xl p-5 mb-6">
                  <h3 className="font-display font-semibold text-brand-navy text-sm uppercase tracking-wider mb-3">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {service.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle
                          size={16}
                          className="text-brand-green flex-shrink-0"
                        />
                        <span className="font-body text-sm text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <Link to="/contact">
                    <Button className="bg-brand-navy hover:bg-brand-navy-dark text-white font-body font-semibold">
                      Get a Quote
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-body font-semibold flex items-center gap-2"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
