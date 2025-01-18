import React from "react";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import FooterTwo from "../layout/footer/footer-two";
import CreditScore from "../components/credit/CreditScore";


const CreditScorePage: React.FC = () => {
  return (
    <Wrapper>
      <SEOCom
        title="Check Your Credit Score"

      />
     <HeaderOne />
      <main className="pt-200">
        <CreditScore />
      </main>
      <FooterTwo />
    </Wrapper>
  );
};

export default CreditScorePage;