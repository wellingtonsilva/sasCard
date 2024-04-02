import { Navbar } from "./components/navbar/Navbar"
import { Hero } from "./components/hero/Hero"
import { CompanySection } from "./components/companySection/CompanySection"
import { FeatureSection } from "./components/featureSection/FeatureSection"
import { PaymentSection } from "./components/paymentSection/PaymentSection"
import { CtaSection } from "./components/ctaSection/CtaSection"
import { PlansSetion } from "./components/plansSection/PlansSetion"
function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <CompanySection />
      <FeatureSection />
      <PaymentSection />
      <CtaSection />
      <PlansSetion />
    </>
  )
}

export default App
