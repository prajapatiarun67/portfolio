"use client";

import { FormEvent, useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personalDetails } from "@/data/portfolioData";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <>
      <section id="contact" className="section container contact">
        <SectionLabel number="05">CONTACT</SectionLabel>
        <h2>
          Let&apos;s work together<span>.</span>
        </h2>

        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <label>YOUR NAME</label>
            <input required name="name" placeholder="Full name" />
            <label>YOUR EMAIL</label>
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
            />
            <label>MESSAGE</label>
            <textarea
              required
              name="message"
              placeholder="Role you're hiring for, or how you'd like to connect..."
            />
            <button className="button primary" type="submit">
              <Send size={14} /> SEND MESSAGE
            </button>
          </form>

          <div className="contact-details">
            <a href={`tel:${personalDetails.phoneRaw}`}>
              <Phone />
              <span>
                <small>PHONE</small>
                {personalDetails.phone}
              </span>
            </a>
            <a href={`mailto:${personalDetails.email}`}>
              <Mail />
              <span>
                <small>EMAIL</small>
                {personalDetails.email}
              </span>
            </a>
            <a
              href={personalDetails.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
              <span>
                <small>LINKEDIN</small>
                {personalDetails.linkedinHandle}
              </span>
            </a>
            <div>
              <MapPin />
              <span>
                <small>LOCATION</small>
                {personalDetails.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {sent && (
        <div className="toast">
          ✓ &nbsp; Message sent! Arun will get back to you soon.
        </div>
      )}
    </>
  );
}
