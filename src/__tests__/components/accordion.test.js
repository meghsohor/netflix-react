import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs';
import { Accordion } from '../../components';

describe('<Accordion />', () => {
  it('renders the <Accordion /> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((faq) => (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Netflix?')).toBeTruthy();
    expect(getByText('How much does Netflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Netflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <Accordion /> component', () => {
    const { container, queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion>
          <Accordion.Title>Frequently Asked Questions</Accordion.Title>
          {faqsData.map((faq) => (
            <Accordion.Item key={faq.id}>
              <Accordion.Header>{faq.header}</Accordion.Header>
              <Accordion.Body>{faq.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Accordion>
    );

    expect(container.querySelector('.closed')).toBeTruthy();

    fireEvent.click(queryByText('What is Netflix?'));
    expect(container.querySelector('.open')).toBeTruthy();

    fireEvent.click(queryByText('What is Netflix?'));
    expect(container.querySelector('.closed')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
