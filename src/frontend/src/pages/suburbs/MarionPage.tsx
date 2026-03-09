import SuburbPage from "./SuburbPage";

export default function MarionPage() {
  return (
    <SuburbPage
      title="Bond Cleaning Marion | Tru Adelaide Bond Cleaners"
      metaDescription="Affordable bond cleaning in Marion, SA. Tru Adelaide Bond Cleaners offers fixed-price vacate cleans with a 100% bond-back guarantee. Book your free quote."
      h1="Bond Cleaning Marion – Affordable, Reliable Vacate Cleaning"
      suburb="Marion"
      content={`Marion is a busy and popular suburb in Adelaide's south. It's home to the huge Marion Shopping Centre, great schools, parks, and lots of families. It's also a popular area for rental properties, which means lots of people need bond cleaning services every year.

When you move out of a rental in Marion, your landlord will inspect the property carefully. If it's not clean enough, they can keep some or all of your bond. That could be hundreds — or even thousands — of dollars. It's always worth getting a professional bond clean to protect that money.

Tru Adelaide Bond Cleaners helps Marion tenants get their full bond back. We offer fair, fixed prices and a bond-back guarantee that means we come back for free if your agent isn't happy. It's as simple as that.

Our team cleans everything from top to bottom. In the kitchen, we deep clean the oven, wipe out all the cupboards, scrub the sink, and degrease the stovetop and rangehood. In the bathroom, we scrub the tiles and grout, clean the toilet, wipe down the vanity, and polish the mirrors.

We vacuum all carpets and mop all hard floors. We clean the laundry, including the inside of the washing machine tub if needed. We wipe down all the walls, clean the light switches and power points, and make sure the garage or outdoor areas are tidy too.

Marion properties come in all shapes and sizes — from small units near the shops to large family homes. We've cleaned them all, and we give every job the same careful attention.

We know that moving house is expensive. That's why we keep our prices competitive and honest. We give you a fixed-price quote upfront — no hidden charges, no surprises at the end.

Whether you're in a one-bedroom unit or a four-bedroom house, we have a package that suits you. Same-week bookings are often available. Send us a WhatsApp message or fill in our contact form to get started.`}
      suburbFacts={[
        "Home to the large Marion Shopping Centre",
        "Busy family suburb in Adelaide's south",
        "Wide variety of rental property types",
        "Strong demand for bond cleaning services",
      ]}
      faqs={[
        {
          q: "Do you clean small units as well as large homes in Marion?",
          a: "Yes, we clean all types of Marion rentals — from small 1-bedroom units near the shopping centre to large 4-bedroom family homes. Every job gets the same careful attention.",
        },
        {
          q: "Do you clean garages and outdoor areas in Marion?",
          a: "Yes, we tidy garages and outdoor areas as part of our bond clean. We make sure every area your real estate agent checks is left clean and presentable.",
        },
        {
          q: "What is the bond-back guarantee for Marion tenants?",
          a: "If your real estate agent finds anything we missed after our clean, we come back to Marion and fix it for free. Your bond is protected and you pay nothing extra.",
        },
      ]}
    />
  );
}
