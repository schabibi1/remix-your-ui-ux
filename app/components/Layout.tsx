import Navigation from "./Navigation";
import Footer from "./Footer";

interface Blok {
  children: any;
  // locale: string;
}

// const Layout = ({ children, locale }: Blok) => (
const Layout = ({ children }: Blok) => (
  <div className="bg-gray-300">
    {/* <Navigation locale={locale} /> */}
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;