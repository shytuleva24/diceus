import { render, screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';

import { Accordion } from './accordion';

describe('AccordionComponent', () => {
  it('should render accordion sections', async () => {
    await render(Accordion);

    // Check if all section titles are rendered
    expect(screen.getByText('DECISION SUPPORT')).toBeTruthy();
    expect(screen.getByText('RISK ASSESSMENT')).toBeTruthy();
    expect(screen.getByText('DOCUMENTS & COMPLIANCE')).toBeTruthy();

    // Check if badges with counts are rendered
    expect(screen.getByText('4')).toBeTruthy();
    expect(screen.getByText('6')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
  });

  it('should toggle sections when clicked', async () => {
    await render(Accordion);
    const user = userEvent.setup();

    // Find the Risk Assessment button
    const riskAssessmentButton = screen.getByRole('button', { name: /risk assessment/i });

    // Initially, Risk Assessment should be closed (aria-expanded="false")
    expect(riskAssessmentButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    await user.click(riskAssessmentButton);

    // Should now be open (aria-expanded="true")
    expect(riskAssessmentButton).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    await user.click(riskAssessmentButton);

    // Should be closed again
    expect(riskAssessmentButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should show items when section is open', async () => {
    await render(Accordion);

    // Decision Support is open by default, so its items should be visible
    expect(screen.getByText('Winnability')).toBeTruthy();
    expect(screen.getByText('Exposure Review & Suggested Coverage')).toBeTruthy();
    expect(screen.getByText('Portfolio Strategy Alignment')).toBeTruthy();
    expect(screen.getByText('Broker Analytics')).toBeTruthy();
  });

  it('should have proper accessibility attributes', async () => {
    await render(Accordion);

    const decisionSupportButton = screen.getByRole('button', { name: /decision support/i });
    const decisionSupportPanel = screen.getByRole('region');

    // Check aria attributes
    expect(decisionSupportButton).toHaveAttribute('aria-expanded', 'true');
    expect(decisionSupportButton).toHaveAttribute('aria-controls', 'decision-support-panel');
    expect(decisionSupportPanel).toHaveAttribute('aria-labelledby', 'decision-support-button');
    expect(decisionSupportPanel).toHaveAttribute('id', 'decision-support-panel');
  });
});
