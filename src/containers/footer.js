import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            FAQ
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Investor Relations
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Ways to Watch
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Corporate Information
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Netflix Originals
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Help Centre
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Jobs
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Terms of Use
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Contact Us
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Account
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Redeem gift cards
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Privacy
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Speed Test
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Media Centre
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Buy gift cards
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Cookie Preferences
          </Footer.Link>
          <Footer.Link href="#" onClick={(e) => e.preventDefault()}>
            Legal Notices
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>

      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
