import React from 'react';
import {Card, Link} from '@heroui/react';
import ReactMarkdown from 'react-markdown';
import {
    siTypescript, siReact, siHtml5, siNodedotjs, siPython, siPostgresql, siSpring,
    siDocker, siGooglecloud, siElasticsearch, siAuth0, siRedis, siTerraform,
    siAnthropic, siLangchain, siClaude, siGooglegemini,
    siGit, siJest, siCypress, siApachemaven, siCbc
} from 'simple-icons';

// The prose for each job lives in its own Markdown file under
// src/content/experience/ so it's easy to edit without touching JSX.
import telusHealthContent from '../content/experience/telus-health.md?raw';
import cbcContent from '../content/experience/cbc.md?raw';
import allNovaScotiaContent from '../content/experience/allnovascotia.md?raw';
import lockheedMartinContent from '../content/experience/lockheed-martin.md?raw';

const BrandIcon = ({icon, size = 16}) => (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill={`#${icon.hex}`} className="shrink-0">
        <title>{icon.title}</title>
        <path d={icon.path}/>
    </svg>
);

// Most tools have a mark in simple-icons (MIT-licensed for exactly this
// use). AWS doesn't (Amazon's own guidelines require the logo be sourced
// from their official brand assets, not a third-party pack), so it uses
// the real logo file in /public/logos instead — see TOOL_LOGOS below.
const TOOL_ICONS = {
    'TypeScript': siTypescript,
    'React': siReact,
    'React Native': siReact,
    'Semantic HTML': siHtml5,
    'Node (Next.js)': siNodedotjs,
    'Python (FastAPI)': siPython,
    'PostgreSQL': siPostgresql,
    'Java (Spring)': siSpring,
    'Docker': siDocker,
    'GCP': siGooglecloud,
    'GCP Healthcare': siGooglecloud,
    'ElasticSearch': siElasticsearch,
    'Auth0': siAuth0,
    'Redis': siRedis,
    'Terraform': siTerraform,
    'Anthropic': siAnthropic,
    'LangChain/LangGraph': siLangchain,
    'Claude Code': siClaude,
    'GCP Vertex AI/Gemini': siGooglegemini,
    'Git': siGit,
    'Jest': siJest,
    'Cypress': siCypress,
    'Maven': siApachemaven
};

// Full-color logo files for brands not covered by simple-icons. Sourced
// from official/Wikimedia-hosted assets, used unmodified at small scale
// for factual identification only (see the trademark note under Technology).
const TOOL_LOGOS = {
    'AWS': '/logos/aws.svg'
};

const COMPANY_URLS = {
    'Telus Health - RAPIDS': 'https://www.telus.com/en/health',
    'CBC/Radio-Canada': 'https://www.cbc.ca',
    'allNovaScotia.com': 'https://www.allnovascotia.com',
    'Lockheed Martin Canada': 'https://www.lockheedmartin.com/en-ca/index.html'
};

const COMPANY_ICONS = {
    'Telus Health - RAPIDS': {icon: null, logoSrc: '/logos/telus-health.svg'},
    'CBC/Radio-Canada': {icon: siCbc, logoSrc: null},
    'allNovaScotia.com': {icon: null, logoSrc: '/logos/allnovascotia.svg'},
    'Lockheed Martin Canada': {icon: null, logoSrc: '/logos/lockheed-martin.svg'}
};

const SectionHeading = ({id, children}) => (
    <h2 id={id} className="scroll-mt-16 text-2xl font-bold border-l-4 border-accent pl-3 mt-14 mb-6">
        {children}
    </h2>
);

const CompanyBadge = ({title}) => {
    const entry = COMPANY_ICONS[title];
    if (!entry) return null;

    if (entry.logoSrc) {
        return (
            <span className="inline-flex items-center h-9 px-2 rounded-lg bg-white shrink-0">
                <img src={entry.logoSrc} alt={`${title} logo`} className="h-6 w-auto max-w-[100px] object-contain"/>
            </span>
        );
    }

    return (
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-surface-secondary shrink-0">
            <BrandIcon icon={entry.icon} size={20}/>
        </span>
    );
};

const ExtLink = (props) => <Link target="_blank" rel="noopener noreferrer" {...props}/>;

// Markdown links always mean "external" here (job prose only links out to
// companies/products), so every link opens in a new tab via the same
// HeroUI-styled Link used everywhere else on the page.
const markdownComponents = {
    a: ({href, children}) => <ExtLink href={href}>{children}</ExtLink>
};

const Job = ({title, position, startDate, endDate, content}) => {
    const url = COMPANY_URLS[title];
    return (
    <Card className="mb-6">
        <Card.Header>
            <div className="flex items-center gap-3 w-full">
                <CompanyBadge title={title}/>
                <div className="flex flex-wrap items-baseline justify-between gap-2 flex-1 min-w-0">
                    <Card.Title>
                        {url ? <ExtLink href={url}>{title}</ExtLink> : title} <span className="font-normal text-muted">{position}</span>
                    </Card.Title>
                    <span className="text-sm text-muted italic whitespace-nowrap">{startDate} &ndash; {endDate}</span>
                </div>
            </div>
        </Card.Header>
        <Card.Content>
            <div className="text-foreground leading-relaxed space-y-3">
                <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
            </div>
        </Card.Content>
    </Card>
    );
};

const Tech = ({title}) => {
    const icon = TOOL_ICONS[title];
    const logoSrc = TOOL_LOGOS[title];
    return (
        <span
            className="techCard inline-flex items-center gap-1 px-2 py-1 rounded-md border border-border bg-surface-secondary whitespace-nowrap"
        >
            {icon && <BrandIcon icon={icon} size={13}/>}
            {logoSrc && <img src={logoSrc} alt={`${title} logo`} className="h-3 w-auto"/>}
            <span className="font-semibold text-xs">{title}</span>
        </span>
    );
};

const TechGroup = ({label, items, stack}) => (
    <div className="flex flex-wrap items-start gap-3 py-2">
        <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-wide text-muted pt-1">{label}</span>
        <div className={stack ? 'flex flex-col items-start gap-1.5' : 'flex flex-wrap gap-1.5'}>
            {items.map((item) => <Tech key={item} title={item}/>)}
        </div>
    </div>
);

export default () => (
    <>
        <SectionHeading id="experience">Work Experience</SectionHeading>

        <Job
            title="Telus Health - RAPIDS"
            position="Senior Developer"
            startDate="Dec. 2021"
            endDate="Present"
            content={telusHealthContent}
        />
        <Job
            title="CBC/Radio-Canada"
            position="Senior Software Developer"
            startDate="Nov. 2019"
            endDate="Dec. 2021"
            content={cbcContent}
        />
        <Job
            title="allNovaScotia.com"
            position="Full Stack Developer"
            startDate="May 2018"
            endDate="Nov. 2019"
            content={allNovaScotiaContent}
        />
        <Job
            title="Lockheed Martin Canada"
            position="Java Software Engineer"
            startDate="May 2017"
            endDate="May 2018"
            content={lockheedMartinContent}
        />

        <SectionHeading id="education">Education</SectionHeading>
        <p className="text-foreground">
            <span className="font-semibold">Acadia University</span> &mdash; Bachelor of Computer Science Co-op,
            specialization in Software Development <span className="text-muted italic">(2012 - 2017)</span>
        </p>

        <SectionHeading id="technology">Technology</SectionHeading>
        <TechGroup label="Front-end" items={['TypeScript', 'React', 'React Native', 'Semantic HTML']}/>
        <TechGroup label="Back-end" items={['Node (Next.js)', 'Python (FastAPI)', 'PostgreSQL', 'Java (Spring)']}/>
        <TechGroup label="Dev-ops" items={['Docker', 'GCP', 'AWS', 'ElasticSearch', 'Auth0', 'Redis', 'Terraform', 'GCP Healthcare']}/>
        <TechGroup label="AI" items={['Anthropic', 'LangChain/LangGraph', 'Claude Code', 'GCP Vertex AI/Gemini']}/>
        <TechGroup label="Tools" items={['Git', 'Jest', 'Cypress', 'Maven']}/>
        <TechGroup label="Standards" items={['FHIR / HL7', 'PIPEDA', 'HIPAA']}/>

        <SectionHeading id="languages">Languages</SectionHeading>
        <div className="flex flex-col items-start gap-1.5">
            <Tech title="English (native)"/>
            <Tech title="French (A2, pursuing B-level)"/>
        </div>
    </>
);
