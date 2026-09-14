import React from 'react';
import {Link} from '@heroui/react';
import {MessageCircle, Workflow, Tag, Image as ImageIcon, Activity, Terminal, PersonStanding} from 'lucide-react';

import ProjectCard from './ProjectCard';

const SectionHeading = ({id, children}) => (
    <h2 id={id} className="scroll-mt-16 text-2xl font-bold border-l-4 border-accent pl-3 mt-14 mb-6">
        {children}
    </h2>
);

const SubHeading = ({children}) => (
    <h3 className="text-lg font-semibold mt-10 mb-3">{children}</h3>
);

// Each "AI Infra Lab" logo reuses that demo's own accent color from its live
// page, so the homepage card visually matches what you land on.
export default () => (
    <>
        <SectionHeading id="projects">Projects</SectionHeading>

        <SubHeading>AI Infra Lab</SubHeading>
        <p className="text-muted mb-4">
            A small self-hosted platform running on this same server. Production-serving patterns like rate
            limiting, observability, and agent guardrails, built hands-on rather than just read about. All demos
            below are public; see the <Link href="/ai/">AI hub</Link> for a full walkthrough.
        </p>

        <ProjectCard
            title="LLM Testing Demo"
            description="A chat window for a small language model (Qwen2.5-0.5B) running on llama.cpp across a small Kubernetes cluster. No GPU, no external API, just llama.cpp doing the work."
            exampleLink="/llm-testing/"
            githubLink="https://github.com/ScradFTW/qwen-llm-gke"
            logo={{icon: MessageCircle, bg: '#df911a'}}
        />
        <ProjectCard
            title="Agent Orchestrator Demo"
            description="Ask it something and it decides on its own whether the question needs a tool, in this case the genre classifier. A separate guardrail double-checks that decision before anything actually runs."
            exampleLink="/agent-demo/"
            githubLinks={[
                {label: 'github (backend)', href: 'https://github.com/ScradFTW/llm-testing-deploy/tree/main/agent-orchestrator'},
                {label: 'github (frontend)', href: 'https://github.com/ScradFTW/demos-ui/tree/main/packages/ai-tools'},
            ]}
            logo={{icon: Workflow, bg: '#38853e'}}
        />
        <ProjectCard
            title="Genre Classifier"
            description="Type in a song title and it guesses the genre. Uses a classic TF-IDF + Logistic Regression model instead of a neural net, trained and served with no GPU involved."
            exampleLink="/genre-classifier/"
            githubLinks={[
                {label: 'github (backend)', href: 'https://github.com/ScradFTW/llm-testing-deploy/tree/main/genre-classifier'},
                {label: 'github (frontend)', href: 'https://github.com/ScradFTW/demos-ui/tree/main/packages/ai-tools'},
            ]}
            logo={{icon: Tag, bg: '#97549b'}}
        />
        <ProjectCard
            title="Image Classifier"
            description="Upload a photo and a small CNN, trained from scratch on CIFAR-10, guesses what's in it. Served with ONNX Runtime; no PyTorch or GPU needed to run it."
            exampleLink="/image-classifier/"
            githubLinks={[
                {label: 'github (backend)', href: 'https://github.com/ScradFTW/llm-testing-deploy/tree/main/image-classifier'},
                {label: 'github (frontend)', href: 'https://github.com/ScradFTW/demos-ui/tree/main/packages/ai-tools'},
            ]}
            logo={{icon: ImageIcon, bg: '#d35d31'}}
        />
        <ProjectCard
            title="Status Dashboard"
            description="Live request counts, latency, and error rates for every demo above, pulled straight from each service's own /stats endpoint. Same idea as Grafana, just small enough to hand-build."
            exampleLink="/status/"
            githubLink="https://github.com/ScradFTW/demos-ui/tree/main/packages/ai-tools"
            logo={{icon: Activity, bg: '#258998'}}
        />
        <ProjectCard
            title="AI Coding Sandbox"
            description="Runs an AI coding agent in its own sandboxed container per session, with an egress proxy locking down which domains it can reach so it can't touch anything outside its box."
            exampleLink="/ccaas/"
            githubLink="https://github.com/ScradFTW/ccaas"
            logo={{icon: Terminal, bg: '#d9525a'}}
        />
        <ProjectCard
            title="Motion Tracker"
            description="Real-time skeletal tracking off your webcam using a ResNet18-shaped CNN I trained from scratch on COCO keypoints -- no pretrained backbone, no library. Runs fully client-side via WebAssembly."
            exampleLink="/pose-tracker/"
            githubLink="https://github.com/ScradFTW/pose-tracker"
            logo={{icon: PersonStanding, bg: '#4fd1c5'}}
        />

        <SubHeading>Other Projects</SubHeading>

        <ProjectCard
            title="My personal website"
            description="The site you're reading right now. React and HeroUI, hand-built rather than templated, and where I host the experiments above."
            githubLink="https://github.com/ScradFTW/bradjobe.dev"
            logo={{letter: 'B', bg: '#008474'}}
        />
        <ProjectCard
            title="allAtlanticCanada React-Native App"
            description="A mobile news reader for allNovaScotia's network of Atlantic Canada business sites, with search built to handle specific, multi-part queries rather than just keyword matching."
            exampleLink="https://allatlanticcanada.com"
            exampleLabel="Download"
            logo={{imgSrc: '/logos/allnovascotia.svg'}}
        />
    </>
);
