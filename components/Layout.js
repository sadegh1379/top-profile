import { Sora } from "@next/font/google";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// coomponents
import Nav from "../components/Nav";
import TopLeftImage from "../components/TopLeftImg";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white relative ${sora.variable} bg-cover bg-no-repeat font-sora`}
    >
      <TopLeftImage />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
