import { Meta } from "../layout/Meta";
import BlogTemplate from "../templates/Blogs";
import ContactForm from "../templates/ContactForm";
import ContactUs from "../templates/ContactUs";
import { Footer } from "../templates/Footer";
import { Navigation } from "../templates/Navigation";
import { AppConfig } from "../utils/AppConfig";

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navigation />
    <BlogTemplate />
    <Footer />
  </div>
);

export default Base;
