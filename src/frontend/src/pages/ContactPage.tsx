import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, MapPin, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const RECIPIENT = atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");

const serviceOptions = [
  "Bond / Vacate Cleaning",
  "Carpet Steam Cleaning",
  "Oven & Appliance Cleaning",
  "Window Cleaning",
  "Bathroom Deep Clean",
  "Wall Wash & Spot Cleaning",
  "Full Bond Pack (All Inclusive)",
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Tru Adelaide Bond Cleaners | Get a Free Quote";
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    moveoutDate: "",
    message: "",
  });

  const handleChange = useCallback(
    (field: keyof typeof form) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
      },
    [],
  );

  const handleServiceChange = useCallback((value: string) => {
    setForm((prev) => ({ ...prev, service: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent(
        `Bond Cleaning Enquiry - ${form.name} - ${form.service || "Service TBC"}`,
      );
      const body = encodeURIComponent(
        `Hi Tru Adelaide Bond Cleaners,\n\nI would like to enquire about a bond cleaning service.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Required: ${form.service}\nProperty Address: ${form.address}\nMove-out Date: ${form.moveoutDate}\n\nMessage:\n${form.message}\n\nPlease contact me to confirm the booking and provide a fixed-price quote.\n\nKind regards,\n${form.name}`,
      );
      window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    },
    [form],
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16" aria-label="Contact page hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Get a Free Bond Cleaning Quote
          </h1>
          <p className="text-white/80 font-body text-xl max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll send you a fixed-price quote
            within 2 hours. Or chat with us instantly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-16 bg-secondary/20"
        aria-labelledby="contact-form-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card border-border">
                <CardContent className="p-8">
                  <h2
                    id="contact-form-heading"
                    className="font-display font-bold text-2xl text-brand-navy mb-2"
                  >
                    Book Your Bond Clean
                  </h2>
                  <p className="text-muted-foreground font-body text-sm mb-6">
                    Fill in your details below. Clicking &ldquo;Send
                    Enquiry&rdquo; will open your email app with everything
                    pre-filled \u2014 just hit send!
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="font-body font-medium text-foreground"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          data-ocid="contact.name.input"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange("name")}
                          required
                          className="font-body"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="font-body font-medium text-foreground"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          data-ocid="contact.phone.input"
                          placeholder="04XX XXX XXX"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          required
                          type="tel"
                          className="font-body"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="font-body font-medium text-foreground"
                      >
                        Your Email Address *
                      </Label>
                      <Input
                        id="email"
                        data-ocid="contact.email.input"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        required
                        type="email"
                        className="font-body"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="service"
                        className="font-body font-medium text-foreground"
                      >
                        Service Required
                      </Label>
                      <Select onValueChange={handleServiceChange}>
                        <SelectTrigger
                          data-ocid="contact.service.select"
                          className="font-body"
                          id="service"
                        >
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((s) => (
                            <SelectItem key={s} value={s} className="font-body">
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="address"
                        className="font-body font-medium text-foreground"
                      >
                        Property Address *
                      </Label>
                      <Input
                        id="address"
                        data-ocid="contact.address.input"
                        placeholder="123 Main Street, Norwood SA 5067"
                        value={form.address}
                        onChange={handleChange("address")}
                        required
                        className="font-body"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="moveoutDate"
                        className="font-body font-medium text-foreground"
                      >
                        Move-out Date
                      </Label>
                      <Input
                        id="moveoutDate"
                        type="date"
                        value={form.moveoutDate}
                        onChange={handleChange("moveoutDate")}
                        className="font-body"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="font-body font-medium text-foreground"
                      >
                        Additional Message
                      </Label>
                      <Textarea
                        id="message"
                        data-ocid="contact.message.textarea"
                        placeholder="Tell us about your property \u2014 number of bedrooms, bathrooms, any special requirements..."
                        value={form.message}
                        onChange={handleChange("message")}
                        rows={4}
                        className="font-body resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      size="lg"
                      className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-body font-semibold py-6 text-lg"
                    >
                      Send Enquiry via Email
                    </Button>
                    <p className="text-muted-foreground font-body text-xs text-center">
                      This opens your email app pre-filled with your details.
                      Just press &ldquo;Send&rdquo; to submit your enquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <Card className="bg-brand-green shadow-card border-0">
                <CardContent className="p-6 text-center">
                  <MessageCircle
                    size={36}
                    className="text-white mx-auto mb-3"
                  />
                  <h3 className="font-display font-bold text-white text-xl mb-2">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-white/90 font-body text-sm mb-4">
                    Chat with us directly for instant quotes and fast booking
                    confirmation.
                  </p>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-white text-brand-navy hover:bg-white/90 font-body font-bold">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Business Info */}
              <Card className="shadow-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-brand-navy text-lg">
                    Business Information
                  </h3>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-brand-green flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-body font-semibold text-sm text-foreground">
                        Service Area
                      </div>
                      <div className="text-muted-foreground font-body text-sm">
                        Adelaide & All Surrounding Suburbs, SA
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-brand-green flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-body font-semibold text-sm text-foreground">
                        Business Hours
                      </div>
                      <div className="text-muted-foreground font-body text-sm">
                        Monday \u2013 Saturday: 7:00am \u2013 7:00pm
                        <br />
                        Sunday: 8:00am \u2013 5:00pm
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle
                      size={18}
                      className="text-brand-green flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-body font-semibold text-sm text-foreground">
                        WhatsApp
                      </div>
                      <a
                        href="https://wa.me/61488841883"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-navy hover:text-brand-green font-body text-sm transition-colors"
                      >
                        0488 841 883
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantees */}
              <Card className="shadow-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-brand-navy text-lg mb-4">
                    Our Guarantees
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Fixed-price quote \u2014 no surprises",
                      "100% bond-back guarantee",
                      "Free re-clean if inspection fails",
                      "All equipment & products supplied",
                      "Police-checked, insured team",
                    ].map((g) => (
                      <li key={g} className="flex items-center gap-2">
                        <CheckCircle
                          size={16}
                          className="text-brand-green flex-shrink-0"
                        />
                        <span className="font-body text-sm text-foreground">
                          {g}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
