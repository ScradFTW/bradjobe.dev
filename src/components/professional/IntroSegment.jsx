import React from 'react';
import FadeIn from '../common/FadeIn';
import scroll from '../../lib/Scroll';

const skills = [
    'React', 'Redux', 'React Native', 'Linux', 'PHP',
    'Python', 'MySQL', 'Java', 'Git', 'Website Performance'
];

const Chip = ({children}) => (
    <span
        style={{
            display: 'inline-block',
            padding: '8px 16px',
            margin: '0 8px 8px 0',
            borderRadius: 999,
            border: 'solid 1px rgba(255, 255, 255, 0.15)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            color: '#CBD5E1',
            fontSize: 14,
            fontWeight: 500
        }}
    >
        {children}
    </span>
);

export default () => (
    <div
        style={{
            background: 'radial-gradient(circle at 15% 20%, #1E293B 0%, #0F172A 55%)',
            paddingTop: 80,
            paddingBottom: 80,
            paddingLeft: '8%',
            paddingRight: '8%'
        }}
    >
        <FadeIn delay={120}>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 48
                }}
            >
                <div style={{flex: '1 1 480px'}}>
                    <h1
                        className={'raleway'}
                        style={{
                            fontSize: 64,
                            fontWeight: 700,
                            color: '#FFFFFF',
                            margin: 0,
                            lineHeight: 1.1
                        }}
                    >
                        BRADJOBE
                        <span
                            style={{
                                display: 'inline-block',
                                background: 'linear-gradient(135deg, #6366F1, #3B82F6)',
                                color: 'white',
                                marginLeft: 10,
                                padding: '2px 14px',
                                borderRadius: 12
                            }}
                        >
                            .DEV
                        </span>
                    </h1>
                    <p
                        style={{
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#818CF8',
                            marginTop: 16,
                            marginBottom: 32
                        }}
                    >
                        Full Stack Web Developer
                    </p>
                    <p
                        style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: '#94A3B8',
                            marginBottom: 12
                        }}
                    >
                        Do you need someone with professional experience in:
                    </p>
                    <div style={{marginBottom: 32}}>
                        {skills.map((skill) => <Chip key={skill}>{skill}</Chip>)}
                    </div>
                    <button
                        onClick={() => scroll('tabBar')}
                        style={{
                            cursor: 'pointer',
                            border: 'none',
                            borderRadius: 10,
                            padding: '14px 28px',
                            fontSize: 16,
                            fontWeight: 600,
                            color: 'white',
                            background: 'linear-gradient(135deg, #6366F1, #3B82F6)',
                            boxShadow: '0 8px 24px -6px rgba(99, 102, 241, 0.6)'
                        }}
                    >
                        Yes, I do &rarr;
                    </button>
                </div>
                <div style={{flex: '0 0 auto'}}>
                    <img
                        alt={'Brad Jobe'}
                        src={'personal.png'}
                        style={{
                            display: 'block',
                            width: 320,
                            height: 320,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            boxShadow: '0 0 0 6px rgba(99, 102, 241, 0.15), 0 20px 60px -15px rgba(0, 0, 0, 0.6)'
                        }}
                    />
                </div>
            </div>
        </FadeIn>
    </div>
);
