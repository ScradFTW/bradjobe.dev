import React from 'react';
import {Chip, Link} from '@heroui/react';
import {Mail, Download} from 'lucide-react';
import {siGithub} from 'simple-icons';

const skills = [
    'TypeScript', 'React', 'Node.js', 'Python', 'GCP',
    'AWS', 'Terraform', 'Docker', 'LangChain/LangGraph', 'Claude Code'
];

const BrandIcon = ({icon, size = 16}) => (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill={`#${icon.hex}`} className="shrink-0">
        <title>{icon.title}</title>
        <path d={icon.path}/>
    </svg>
);

export default () => (
    <section className="py-16">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3 flex-wrap">
            Brad Jobe
            <span className="flex items-center gap-2">
                <img src="/flags/quebec.gif" alt="Flag of Quebec" className="h-6 w-auto rounded-sm shadow-sm"/>
                <img src="/flags/nova-scotia.gif" alt="Flag of Nova Scotia" className="h-6 w-auto rounded-sm shadow-sm"/>
            </span>
        </h1>
        <p className="mt-3 text-lg text-foreground max-w-2xl">
            Senior developer with 8+ years of experience currently building AI production systems for thousands of users across Canada. 
	    My work centers on AI integration: the infrastructure, guardrails, and evaluation processes that let language models operate reliably in healthcare settings.
        </p>
        <p className="mt-1 text-muted">Montreal, QC</p>

        <div className="mt-6 flex flex-wrap gap-4">
            <Link href="mailto:bradjobe.dev@gmail.com" className="inline-flex items-center gap-1.5">
                <Mail size={16}/> Email
            </Link>
            <Link href="https://github.com/ScradFTW" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <BrandIcon icon={siGithub}/> GitHub
            </Link>
            <Link href="https://ca.linkedin.com/in/brad-jobe-36b338b7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <img src="/logos/linkedin.svg" alt="" className="w-4 h-4 rounded-sm shrink-0"/> LinkedIn
            </Link>
            <Link href="/BradJobe-Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <Download size={16}/> Resume
            </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => <Chip key={skill} size="sm">{skill}</Chip>)}
        </div>
    </section>
);
