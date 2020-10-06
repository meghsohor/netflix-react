import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {/* Need to implement the feature when clicking on one accordion will close all the other accordions */}
      {faqsData.map((faq) => (
        <Accordion.Item key={faq.id}>
          <Accordion.Header>{faq.header}</Accordion.Header>
          <Accordion.Body>{faq.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Break />
        <OptForm.Input type="email" placeholder="Email address" />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
