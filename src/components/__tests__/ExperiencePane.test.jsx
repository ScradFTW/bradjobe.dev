import React from 'react';
import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import ExperiencePane from '../ExperiencePane';

describe('ExperiencePane', () => {
    it('links a job title to its company URL when one is known', () => {
        render(<ExperiencePane/>);

        // Telus Health has an entry in COMPANY_URLS, so the title itself
        // should be an anchor rather than plain text.
        const link = screen.getByRole('link', {name: 'Telus Health - RAPIDS'});
        expect(link).toHaveAttribute('href', 'https://www.telus.com/en/health');
        expect(link).toHaveAttribute('target', '_blank');
    });

    it('renders a company logo image for companies with a logoSrc entry', () => {
        render(<ExperiencePane/>);

        // allNovaScotia.com uses a logoSrc (image) badge, not an icon svg.
        expect(screen.getByAltText('allNovaScotia.com logo')).toBeInTheDocument();
    });

    it('renders an svg brand icon badge for companies without a logoSrc entry', () => {
        render(<ExperiencePane/>);

        // CBC/Radio-Canada uses the simple-icons svg badge (siCbc), no <img> logo.
        expect(screen.queryByAltText('CBC/Radio-Canada logo')).not.toBeInTheDocument();
        const cbcHeading = screen.getByRole('link', {name: 'CBC/Radio-Canada'});
        const badge = cbcHeading.closest('.mb-6').querySelector('svg[role="img"]');
        expect(badge).toBeTruthy();
    });

    it('renders each tool as a brand-icon chip when it has a simple-icons entry', () => {
        render(<ExperiencePane/>);

        // Query the label span specifically -- the icon's own <svg><title> also
        // reads "React", so an unscoped text match would be ambiguous.
        const label = screen.getByText('React', {selector: 'span.font-semibold'});
        const reactChip = label.closest('.techCard');
        expect(reactChip.querySelector('svg[role="img"]')).toBeTruthy();
        expect(reactChip.querySelector('img')).toBeFalsy();
    });

    it('renders a logo <img> chip for tools only covered by a logo file (e.g. AWS)', () => {
        render(<ExperiencePane/>);

        const label = screen.getByText('AWS', {selector: 'span.font-semibold'});
        const awsChip = label.closest('.techCard');
        expect(awsChip.querySelector('img')).toBeTruthy();
        expect(awsChip.querySelector('svg')).toBeFalsy();
    });

    it('renders a tool with neither icon nor logo as a plain label chip', () => {
        render(<ExperiencePane/>);

        // Languages aren't in TOOL_ICONS/TOOL_LOGOS, so no icon or img renders.
        const label = screen.getByText('English (native)', {selector: 'span.font-semibold'});
        const chip = label.closest('.techCard');
        expect(chip.querySelector('svg')).toBeFalsy();
        expect(chip.querySelector('img')).toBeFalsy();
    });
});
