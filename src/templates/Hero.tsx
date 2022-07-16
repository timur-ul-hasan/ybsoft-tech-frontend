import styled from '@emotion/styled';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const ImageWrapper = styled.div`
  width: 600px;
  height: 600px;
`;

const StyledImage = styled.img`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  margin: -60px 0 0 -60px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  -webkit-animation: spin 4s linear infinite;
  animation: spin 200s linear infinite;
`;

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/contact">
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
    <div className="flex">
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'HI\n'}
              <span className="text-primary-500">WE ARE YBTECH</span>
            </>
          }
          description="AND WE ARE ABOUT: CLEAN CODE, SMART CODE, AND SMART PEOPLE."
          button={
            <Link href="https://creativedesignsguru.com/category/nextjs/">
              <a>
                <Button xl>Build Your Website</Button>
              </a>
            </Link>
          }
        />
      </Section>
      <Section yPadding="pt-20 pb-32">
        <ImageWrapper>
          <StyledImage
            src="/assets/images/banner-wheel.png"
            alt="/assets/images/banner-wheel.png"
          />
        </ImageWrapper>
      </Section>
    </div>
  </Background>
);

export { Hero };
