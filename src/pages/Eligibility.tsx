import React from "react";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterTwo from "../layout/footer/footer-two";
import EligibilityCalculator from "../components/calculators/EligibilityCalculator";

const Eligibility: React.FC = () => {
  return (
    <Wrapper>
      <SEOCom
        title="EMI Calculator - Calculate Your Loan EMI"


      />
     <HeaderOne />
      <main className="pt-200">
        <EligibilityCalculator />
      </main>
      <FooterTwo />
    </Wrapper>
  );
};

export default Eligibility;
