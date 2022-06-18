import { Meta } from '../layout/Meta';
import ContactForm from '../templates/ContactForm';
import { Footer } from '../templates/Footer';
import { Navigation } from '../templates/Navigation';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navigation />
    <ContactForm />
    <Footer />
  </div>
);

export default Base;
