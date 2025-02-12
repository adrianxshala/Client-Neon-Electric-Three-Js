import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, CloudLightning as Lightning } from "lucide-react";
const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center glow">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-black/40 card-glow border-white/10">
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Neon Electric"
                    className="bg-black/60 border-white/10"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="neon.sb@hotmail.com"
                    className="bg-black/60 border-white/10"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-black/60 border-white/10"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-white hover:bg-gray-200 text-black">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-8 bg-black/40 card-glow border-white/10 hidden lg:block">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-white w-6 h-6" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-white w-6 h-6" />
                  <p>contact@electrotech.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-white w-6 h-6" />
                  <p>123 Electric Avenue, Tech City, TC 12345</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-black/40 card-glow border-white/10 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.979473801697!2d20.81830567666618!3d42.35747807122627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13539bc2d857e063%3A0x8eeb689a4e30e23e!2sNEON%20N.T.P.%20(Material%20Elektrik)!5e0!3m2!1sen!2s!4v1706918441234!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
