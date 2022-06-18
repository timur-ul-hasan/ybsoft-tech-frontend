import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Artificial Intelligence"
    description="We are a team of developers who love to build great products."
  >
    <VerticalFeatureRow
      title="Databases"
      description="At YB Tech we love to build databases. We use PostgreSQL, MySQL, and MongoDB."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Web Development [Frontend]"
      description="We love to build web applications. We use React, Next.js, and Node.js."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Web Development [Backend]"
      description="We love to build web applications. We use Django, Laravel and Ruby on Rails."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
