import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().max(2000).optional(),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Your message has been sent. We will respond shortly.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        {/* Hero Section with Video */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Contact</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-4">Begin a <span className="italic">Conversation</span></h1>
              <p className="text-xl font-light text-muted-foreground max-w-xl">We'd love to hear from you. Reach out to start your journey with NJ Macson.</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
          <div className="grid grid-cols-12 gap-12">
            <motion.div className="col-span-12 lg:col-span-5" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Contact</span>
              <h1 className="font-serif text-5xl font-light mb-8">Contact & <span className="italic">Reach Us</span></h1>
              <p className="text-muted-foreground font-light mb-8">Better yet, see us in person! We love our customers who are on the path to financial freedom.</p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary text-sm mb-2">Address</h4>
                  <p className="text-sm font-light text-muted-foreground">Door No:43 Navarathna Garden 2nd Cross street, Defence Colony, Ekkaduthangal, Chennai 600032.</p>
                </div>
                <div>
                  <h4 className="text-primary text-sm mb-2">Phone / Mobile</h4>
                  <p className="text-sm font-light">044 43570713 / +91 739 59 11123</p>
                </div>
                <div>
                  <h4 className="text-primary text-sm mb-2">Email</h4>
                  <p className="text-sm font-light">writetous@njmacson.com</p>
                </div>
                <div>
                  <h4 className="text-primary text-sm mb-2">Working Hours</h4>
                  <p className="text-sm font-light text-muted-foreground">Mon – Fri: 9am – 6pm<br/>Saturday: By Appointment<br/>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-span-12 lg:col-span-6 lg:col-start-7" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="font-serif text-2xl font-light italic text-muted-foreground mb-8">"With NJ Macson, Turn your dreams into Reality"</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent border-b border-foreground/10 py-4 text-lg font-light focus:ring-0 focus:border-primary transition-colors placeholder:text-muted-foreground/50" />
                  {errors.name && <p className="text-destructive text-sm mt-2">{errors.name}</p>}
                </div>
                <div>
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent border-b border-foreground/10 py-4 text-lg font-light focus:ring-0 focus:border-primary transition-colors placeholder:text-muted-foreground/50" />
                  {errors.email && <p className="text-destructive text-sm mt-2">{errors.email}</p>}
                </div>
                <div>
                  <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent border-b border-foreground/10 py-4 text-lg font-light focus:ring-0 focus:border-primary transition-colors placeholder:text-muted-foreground/50 resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
