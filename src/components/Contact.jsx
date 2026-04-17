import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Email</h4>
                <a href="mailto:ojashva.bhikonde@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">ojashva.bhikonde@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Location</h4>
                <span className="text-lg font-medium">India</span>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="https://github.com/ojashvabhikonde-dot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary/50 transition-all hover:scale-110">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ojashva-bhikonde-947a48331" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#0077b5]/50 transition-all hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#1DA1F2]/50 transition-all hover:scale-110">
                <FaTwitter size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <textarea placeholder="Your Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-white shadow-lg hover:shadow-primary/25 transition-all active:scale-[0.98]">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
