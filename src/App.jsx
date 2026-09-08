import React from 'react';
import {Link} from '@heroui/react';

import Hero from './components/Hero';
import ExperiencePane from './components/ExperiencePane';
import ProjectsPane from './components/ProjectsPane';

import './App.css';

const navItems = [
    {href: '#experience', label: 'Experience'},
    {href: '#education', label: 'Education'},
    {href: '#technology', label: 'Technology'},
    {href: '#languages', label: 'Languages'},
    {href: '#projects', label: 'Projects'}
];

export default () => (
    <div className="min-h-screen bg-background text-foreground">
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/80 backdrop-blur-lg">
            <div className="mx-auto flex h-14 max-w-4xl items-center gap-6 overflow-x-auto px-6">
                <Link
                    href="/"
                    aria-label="Home"
                    className="text-lg font-bold tracking-tight text-foreground shrink-0 no-underline"
                >
                    brad<span className="text-muted">jobe</span>.dev
                </Link>
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="shrink-0 text-sm font-medium">
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>

        <main className="mx-auto max-w-4xl px-6">
            <Hero/>
            <ExperiencePane/>
            <ProjectsPane/>
        </main>

        <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-muted border-t border-separator mt-16">
            <img src="/brad.jpg" alt="Brad Jobe" className="w-full h-auto rounded-lg mb-4"/>
            <p>Brad Jobe &middot; Montreal, QC</p>
            <p className="mt-2 text-xs">
                Company, product, and technology names and logos are trademarks of their respective owners and are
                used here only to identify past employers and the tools I work with.
            </p>
        </footer>
    </div>
);
