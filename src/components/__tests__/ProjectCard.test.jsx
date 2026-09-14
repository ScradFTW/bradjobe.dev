import React from 'react';
import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import ProjectCard from '../ProjectCard';

describe('ProjectCard', () => {
    it('renders a single "github" link when githubLink is set', () => {
        render(
            <ProjectCard
                title="Solo repo project"
                description="desc"
                githubLink="https://github.com/example/solo"
            />
        );

        const link = screen.getByRole('link', {name: 'github'});
        expect(link).toHaveAttribute('href', 'https://github.com/example/solo');
        // Only the one repo link should be present.
        expect(screen.getAllByRole('link')).toHaveLength(1);
    });

    it('renders multiple labeled links when githubLinks is an array', () => {
        render(
            <ProjectCard
                title="Split repo project"
                description="desc"
                githubLinks={[
                    {label: 'github (backend)', href: 'https://github.com/example/backend'},
                    {label: 'github (frontend)', href: 'https://github.com/example/frontend'}
                ]}
            />
        );

        const backendLink = screen.getByRole('link', {name: 'github (backend)'});
        const frontendLink = screen.getByRole('link', {name: 'github (frontend)'});
        expect(backendLink).toHaveAttribute('href', 'https://github.com/example/backend');
        expect(frontendLink).toHaveAttribute('href', 'https://github.com/example/frontend');
        expect(screen.getAllByRole('link')).toHaveLength(2);
    });

    it('prefers githubLinks over githubLink when both are somehow provided', () => {
        render(
            <ProjectCard
                title="Both provided"
                description="desc"
                githubLink="https://github.com/example/single"
                githubLinks={[{label: 'github (only)', href: 'https://github.com/example/only'}]}
            />
        );

        expect(screen.getAllByRole('link')).toHaveLength(1);
        expect(screen.getByRole('link', {name: 'github (only)'})).toHaveAttribute(
            'href',
            'https://github.com/example/only'
        );
        expect(screen.queryByRole('link', {name: 'github'})).not.toBeInTheDocument();
    });

    it('renders no footer links when neither githubLink, githubLinks, nor exampleLink are provided', () => {
        const {container} = render(<ProjectCard title="No links" description="desc"/>);

        expect(screen.queryAllByRole('link')).toHaveLength(0);
        expect(container.querySelector('[data-slot="footer"], .Card-Footer, footer')).toBeFalsy();
    });

    it('renders "View demo" by default when exampleLink is provided without exampleLabel', () => {
        render(<ProjectCard title="Demo project" description="desc" exampleLink="https://example.com/demo"/>);

        const link = screen.getByRole('link', {name: /View demo/});
        expect(link).toHaveAttribute('href', 'https://example.com/demo');
    });

    it('renders a custom exampleLabel when provided', () => {
        render(
            <ProjectCard
                title="Download project"
                description="desc"
                exampleLink="https://example.com/app"
                exampleLabel="Download"
            />
        );

        const link = screen.getByRole('link', {name: /Download/});
        expect(link).toHaveAttribute('href', 'https://example.com/app');
        expect(screen.queryByText('View demo')).not.toBeInTheDocument();
    });

    it('renders both repo links and the example link together when both are provided', () => {
        render(
            <ProjectCard
                title="Full project"
                description="desc"
                githubLink="https://github.com/example/full"
                exampleLink="https://example.com/full"
            />
        );

        expect(screen.getAllByRole('link')).toHaveLength(2);
        expect(screen.getByRole('link', {name: 'github'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /View demo/})).toBeInTheDocument();
    });

    it('renders the description and optional note', () => {
        render(<ProjectCard title="Noted project" description="A description" note="A helpful note"/>);

        expect(screen.getByText('A description')).toBeInTheDocument();
        expect(screen.getByText('A helpful note')).toBeInTheDocument();
    });

    it('omits the note paragraph when none is provided', () => {
        render(<ProjectCard title="Unnoted project" description="A description"/>);

        expect(screen.queryByText('A helpful note')).not.toBeInTheDocument();
    });
});
