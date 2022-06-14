import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'We are Developers\n'}
            <span className="text-primary-500">We Develop Applications</span>
          </>
        }
        description="You think you can build a website? We can build a website that is easy to use and easy to maintain."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Build Your Website</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
