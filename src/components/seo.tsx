import { Helmet } from "react-helmet-async";

// prop type 
type IProps = {
  title: string;
}
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - QuickHomeLoan` : 'QuickHOmeLoan - Home Loan Advisor'}</title>
      <meta name="description" content="QuickHOmeLoan - Home Loan Advisor" />
      <meta name="keywords" content="QuickHOmeLoan - Home Loan Advisor" />
      <meta name="robots" content="INDEX,FOLLOW" />
    </Helmet>
  );
};

export default SEOCom;