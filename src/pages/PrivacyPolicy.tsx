import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main className="max-w-[960px] mx-auto px-6 md:px-10 py-28 md:py-32">
        <span className="text-sm uppercase tracking-[0.5em] text-primary mb-4 block">Legal</span>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
          <p>
            We respect your privacy and are committed to protecting your personal information.
            This page describes what data we collect, how we use it, and your rights regarding that data.
          </p>
          <p>
            Information submitted through contact or application forms is used only for communication
            and service-related purposes. We do not sell personal data to third parties.
          </p>
          <p>
            If you have questions about this policy or would like your data updated or removed,
            please contact us at writetous@njmacson.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

