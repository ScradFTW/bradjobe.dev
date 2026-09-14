import React from 'react';
import {Card, Link} from '@heroui/react';
import {ArrowUpRight} from 'lucide-react';

const ProjectLogo = ({icon: IconComp, bg, imgSrc, letter}) => {
    if (imgSrc) {
        return (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white shrink-0 overflow-hidden p-1">
                <img src={imgSrc} alt="" className="w-full h-full object-contain"/>
            </span>
        );
    }
    if (IconComp) {
        return (
            <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white shrink-0"
                style={{backgroundColor: bg}}
            >
                <IconComp size={18}/>
            </span>
        );
    }
    if (letter) {
        return (
            <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white font-bold shrink-0"
                style={{backgroundColor: bg}}
            >
                {letter}
            </span>
        );
    }
    return null;
};

// githubLink: single repo (most projects). githubLinks: array of
// {label, href} for projects that split across more than one repo post-
// migration (e.g. a shared frontend repo + a separate backend repo) --
// one plain "github" link would only tell half the story for those.
export default ({title, description, githubLink, githubLinks, exampleLink, exampleLabel = 'View demo', note, logo}) => {
    const repoLinks = githubLinks || (githubLink ? [{label: 'github', href: githubLink}] : []);
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className="flex items-center gap-3">
                    {logo && <ProjectLogo {...logo}/>}
                    <Card.Title>{title}</Card.Title>
                </div>
            </Card.Header>
            <Card.Content>
                <p className="text-foreground">{description}</p>
                {note && <p className="mt-1 text-sm text-muted">{note}</p>}
            </Card.Content>
            {(repoLinks.length > 0 || exampleLink) &&
            <Card.Footer className="flex flex-wrap gap-4">
                {repoLinks.map(({label, href}) => (
                    <Link key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</Link>
                ))}
                {exampleLink &&
                    <Link href={exampleLink} className="inline-flex items-center gap-1">
                        {exampleLabel} <ArrowUpRight size={14}/>
                    </Link>
                }
            </Card.Footer>
            }
        </Card>
    );
};
