import React from 'react';
import {Image} from 'semantic-ui-react';

import useTheme from '../lib/useTheme';

export default (props) => {
    const {isHacker, fontClass, colours} = useTheme();

    return (
        <div
            className={'projectCard'}
            style={{
                cursor: 'default',
                borderRadius: 14,
                border: `solid 1px ${colours.border}`,
                backgroundColor: colours.cardBackground,
                overflow: 'hidden',
                boxShadow: isHacker ? 'none' : '0 4px 12px -6px rgba(15, 23, 42, 0.12)'
            }}
        >
            <Image
                src={props.image}
                wrapped
                ui={false}
                style={{opacity: isHacker ? 0.85 : 1}}
            />
            <div style={{padding: 20}}>
                <h3 className={fontClass} style={{fontSize: 18, fontWeight: 600, color: colours.text, textShadow: colours.glow, margin: 0}}>
                    {props.title}
                </h3>
                <div style={{height: 1, backgroundColor: colours.divider, margin: '12px 0'}}/>
                <p style={{fontSize: 14, color: colours.muted, margin: 0}}>
                    {props.description}
                </p>
                {(props.githubLink || props.exampleLink) &&
                <div style={{display: 'flex', gap: 10, marginTop: 16}}>
                    {props.githubLink &&
                    <a
                        href={props.githubLink}
                        style={{
                            textDecoration: 'none',
                            fontSize: 13,
                            fontWeight: 600,
                            padding: '8px 14px',
                            borderRadius: 8,
                            color: isHacker ? '#000000' : '#FFFFFF',
                            backgroundColor: isHacker ? colours.accent : '#16A34A'
                        }}
                    >
                        github
                    </a>
                    }
                    {props.exampleLink &&
                    <a
                        href={props.exampleLink}
                        style={{
                            textDecoration: 'none',
                            fontSize: 13,
                            fontWeight: 600,
                            padding: '8px 14px',
                            borderRadius: 8,
                            color: colours.text,
                            border: `solid 1px ${colours.border}`
                        }}
                    >
                        example
                    </a>
                    }
                </div>
                }
            </div>
        </div>
    );
};
