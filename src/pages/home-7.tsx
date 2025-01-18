import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BlockFeatureThirteen from "../components/block-feature/block-feature-thirteen";
import BlockFeatureFourteen from "../components/block-feature/block-feature-fourteen";
import FeedbackSeven from "../components/feedback/feedback-seven";
import FancyBannerSeven from "../components/fancy-banner/fancy-banner-seven";
import BlockFeatureFifteen from "../components/block-feature/block-feature-fifteen";
import HomeBlogs from "../components/blogs/home-blogs";
import FancyBannerEight from "../components/fancy-banner/fancy-banner-eight";
import FooterTwo from "../layout/footer/footer-two";
import CreditScoreForm from "../components/forms/CreditScoreForm";

export default function HomePageSeven() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Check Credit Score" />
      {/* seo title */}

      <div className="main-page-wrapper">
        <div className="box-layout mb-0 position-relative border-40 overflow-hidden">
          {/* header start */}
          <HeaderOne/>
          {/* header end */}

          {/* hero banner start */}
          <CreditScoreForm />
          {/* hero banner end */}
        </div>

        {/* block feature start */}
        <BlockFeatureThirteen/>
        {/* block feature end */}

        {/* block feature start */}
        <BlockFeatureFourteen/>
        {/* block feature end */}

        {/* feedback start */}
        <FeedbackSeven />
        {/* feedback end */}

        {/* fancy banner start */}
        <FancyBannerSeven />
        {/* fancy banner end */}

        {/* block feature start */}
        <BlockFeatureFifteen />
        {/* block feature end */}

        {/* blog grid area start */}
        <HomeBlogs cls="mt-150 lg-mt-80 pb-130 lg-pb-80" />
        {/* blog grid area end */}

        {/* fancy banner start */}
        <FancyBannerEight/>
        {/* fancy banner end */}
      </div>
      {/* footer start */}
      <FooterTwo bg={false}/>
      {/* footer end */}
    
    </Wrapper>
  );
}
