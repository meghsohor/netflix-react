import React from 'react';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqContainer } from '../containers/faq';

import { OptForm, Feature } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Break />
            <OptForm.Input type="email" placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
