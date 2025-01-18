import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "../utils/utils";
import BackToTopCom from "../components/common/back-to-top-com";
import Footer from "./footer/Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
 
  useEffect(() => {
    animationCreate();
  }, []);

  return (
    <>
      {children} 
      <BackToTopCom/>
      <ToastContainer/>
      <Footer />
    </>
  );
};

export default Wrapper;