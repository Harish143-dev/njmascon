import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-10">
        <motion.div 
          className="col-span-12 md:col-span-4 self-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-10 leading-tight">
            The <br />Portfolio
          </h2>
          <p className="text-sm font-light text-muted-foreground leading-relaxed mb-8">
            Our managed estates are more than investments; they are cultural landmarks of private history.
          </p>
          <motion.button 
            className="flex items-center gap-4 group"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] font-medium">View Collections</span>
            <span className="size-8 rounded-full bg-stone flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
        
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-4">
          <motion.div 
            className="aspect-square bg-stone rounded-lg overflow-hidden translate-y-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD0rNjNSuG1mSFOT9kBOi5HE5puGFUB1FLBfeYxEwF8qy5F6EoFemfaY8hebB7ycqWT4mILVOwDHFMP0NgV5qGHs3qxsIO5hdByx2qJsk74FZ_nsIshspaa-2Czf-Mb-33f3VwUsgSpTBAKjbdFmQ_oJghAxW7RjlwA5qEzAYKShiYglLTHR2TSmm9cn1Z9PlbgbXy9-PeZ0VCwBY6Fbem8Guy3z0_gpL0S9Vzd6Jy_CiSI0KfagfqVFGNB_or07VNjteHIakDPLT4")`
              }}
            />
          </motion.div>
          <motion.div 
            className="aspect-[3/4] bg-stone rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div 
              className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4YO-E5ie79UkaTyXct3Fjuh7D1bJUVHjJFyP7xE-Dd89n4OkoAux8FfSWrpqeOY-UjGEaeI4K5n3x2-jiHF6juaTNvx5PhMa6EWflG_-3o2knDSZrQLCecBxxEZ5aZg_q-t5Tp16GNZtiOYvwqkhWbsNTRh2aR0HwvJMSEQPx6BEyHVD0tt3v1wByYtS-OZf3kSKe-fhSQcd3P1JrHIyz7WriA-nXkHZys7pg9IDsKu7-dxEfrj5GAu65YWlNJa_n27vKOo9uXEiB")`
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

