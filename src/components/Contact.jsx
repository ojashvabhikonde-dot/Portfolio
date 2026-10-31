import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ojashva.bhikonde@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030308]">
      {/* Background purple blob */}
      <div className="blob-animate w-80 h-80 bottom-0 left-10 opacity-25"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact CTA (as in reference .contact__data) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-titleText leading-tight">
              Contact Me
            </h2>
            <p className="text-bodyText text-base sm:text-lg">
              Tell me about your next project or internship opportunity.
            </p>

            {/* Copy Email Button (Signature reference button) */}
            <div>
              <button
                onClick={handleCopyEmail}
                className="btn-panda"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <p className="text-xs text-primary font-mono mt-3">
                {email}
              </p>
            </div>
          </div>

          {/* Right Side: Contact Grid (as in reference .contact__content) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#0e0e14] border border-white/5 rounded-[2.5rem] p-8 sm:p-10 shadow-xl">
            
            {/* Info Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-medium text-titleText hover:text-primary transition-colors block truncate"
                >
                  {email}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+917879792665"
                  className="text-sm font-medium text-titleText hover:text-primary transition-colors block"
                >
                  +91 7879792665
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Location
                </h3>
                <p className="text-sm font-medium text-titleText">
                  Bhopal, MP, India
                </p>
              </div>
            </div>

            {/* Social Media Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Social Media
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/ojashva-bhikonde-947a48331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#030308] border border-white/5 hover:border-primary text-titleText hover:text-primary transition-all group"
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <FaLinkedin size={18} className="text-primary" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={16} className="text-bodyText group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/ojashvabhikonde-dot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#030308] border border-white/5 hover:border-primary text-titleText hover:text-primary transition-all group"
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <FaGithub size={18} className="text-primary" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight size={16} className="text-bodyText group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
