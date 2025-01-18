import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import EMIPage from "../pages/EMIPage";
import EMIPage2 from "../pages/EMIPage2";
import Eligibility from "../pages/Eligibility";
import PartPayment from "../pages/PartPayment";

import Dashboard from "../pages/Dashboard";
import Settings  from "../pages/Settings";
import Property  from "../pages/PropertyLoan";
import Contact  from "../pages/ContactData";
import CreditScore  from "../pages/CreditScore";


import Home from "../pages/home";
import HomePageTwo from "../pages/home-2";
import HomePageThree from "../pages/home-3";
import HomePageFour from "../pages/home-4";
import HomePageFive from "../pages/home-5";
import HomePageSix from "../pages/home-6";
import HomePageSeven from "../pages/home-7";
import ContactPage from "../pages/contact";
import BlogPage from "../pages/blog";
import BlogGridPage from "../pages/blog-grid";
import BlogDetailsPage from "../pages/blog-details";
import ShopPage from "../pages/shop";
import ShopDetailsPage from "../pages/shop-details";
import CartPage from "../pages/cart";
import WishlistPage from "../pages/wishlist";
import CheckoutPage from "../pages/checkout";
import ProjectV1Page from "../pages/project-v1";
import ProjectV2Page from "../pages/project-v2";
import ProjectV3Page from "../pages/project-v3";
import ProjectDetailsV1Page from "../pages/project-details-v1";
import ProjectDetailsV2Page from "../pages/project-details-v2";
import AboutUsPage from "../pages/about-us";
import AboutUsTwoPage from "../pages/about-us-2";
import TestimonialPage from "../pages/testimonial";
import PricingPage from "../pages/pricing";
import FaqPage from "../pages/faq";
import NotFoundPage from "../pages/not-found";
import ServiceV1Page from "../pages/service-v1";
import ServiceV2Page from "../pages/service-v2";
import ServiceDetailsPage from "../pages/service-details";
import TeamV1Page from "../pages/team-v1";
import TeamV2Page from "../pages/team-v2";
import TeamDetailsPage from "../pages/team-details";
import HomeLoanPage from "../pages/home-loan";








export default function AppNavigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan" element={<Settings />} />
        <Route path="/property" element={<Property />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/credit-data" element={<CreditScore />} />

        <Route path="/home-6" element={<Home />} />
        <Route path="/home-2" element={<HomePageTwo />} />
        <Route path="/home-3" element={<HomePageThree />} />
        <Route path="/home-4" element={<HomePageFour />} />
        <Route path="/home-5" element={<HomePageFive />} />
        <Route path="/" element={<HomePageSix />} />
        <Route path="/credit-score" element={<HomePageSeven />} />
        <Route path="/service-v1" element={<ServiceV1Page />} />
        <Route path="/service-v2" element={<ServiceV2Page />} />
        <Route path="/service-details" element={<ServiceDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/about-us-2" element={<AboutUsTwoPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/team-v1" element={<TeamV1Page />} />
        <Route path="/team-v2" element={<TeamV2Page />} />
        <Route path="/team-details" element={<TeamDetailsPage/>} />
        <Route path="/project-v1" element={<ProjectV1Page />} />
        <Route path="/project-v2" element={<ProjectV2Page />} />
        <Route path="/project-v3" element={<ProjectV3Page/>} />
        <Route path="/project-details-v1" element={<ProjectDetailsV1Page/>} />
        <Route path="/project-details-v2" element={<ProjectDetailsV2Page/>} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details/:id" element={<ShopDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-grid" element={<BlogGridPage />} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/calculators/emi-calculator" element={<EMIPage />} />
        <Route path="/calculators/emi-calculator-2" element={<EMIPage2 />} />
        <Route path="/calculators/home-loan-eligibility-calculator" element={<Eligibility />} />
        <Route path="/calculators/home-loan-prepayment-calculator" element={<PartPayment />} />

        <Route path="/home-loan" element={<HomeLoanPage />} />
        <Route path="*" element={<NotFoundPage />} />


      </Routes>
    </BrowserRouter>
  )
}