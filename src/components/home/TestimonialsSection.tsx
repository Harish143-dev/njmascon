import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Thank God, I changed my old mutual fund manager and chose NJMACSON. Got around 12% return rates. Planning to go for hybrid mutual funds.",
    author: "Bharath T T"
  },
  {
    quote: "I got stuck in Bangalore during covid lockdown and couldn't focus on my property management. Got NJ Macson referral from my friend and I don't worry about it anymore.",
    author: "Sharath Chandran"
  },
  {
    quote: "I Started my 1st DEMAT account here and bought stocks during quarantine. I'm amazed how easy it is to invest and gain profit.",
    author: "Anand Raj"
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            What Our <span className="italic">Clients</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed">
            Our happy clients share how our guidance, from essential finance to comprehensive family office services, has made a meaningful impact on securing their family's future.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            key={currentIndex}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <svg className="w-12 h-12 mx-auto text-primary/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl font-light italic leading-relaxed mb-8 text-foreground/80">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-primary font-medium">
              {testimonials[currentIndex].author}
            </div>
          </motion.div>
          
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-stone"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
