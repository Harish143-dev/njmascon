import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetail from "./pages/careers/JobDetail";
import JobApplication from "./pages/careers/JobApplication";
import FamilyOffice from "./pages/services/FamilyOffice";
import PrivateWealth from "./pages/services/PrivateWealth";
import AlternativeInvestments from "./pages/services/AlternativeInvestments";
import AuditingLegal from "./pages/services/AuditingLegal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:jobId" element={<JobDetail />} />
          <Route path="/careers/:jobId/apply" element={<JobApplication />} />
          <Route
            path="/services/our-family-office"
            element={<FamilyOffice />}
          />
          <Route
            path="/services/private-wealth-management"
            element={<PrivateWealth />}
          />
          <Route
            path="/services/alternative-investments"
            element={<AlternativeInvestments />}
          />
          <Route path="/services/auditing-legal" element={<AuditingLegal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
