import React from 'react';
import {Image} from 'semantic-ui-react';

export default (props) => (
    <div
        className={'projectCard'}
        style={{
            cursor: 'default',
            borderRadius: 14,
            border: 'solid 1px #E5E7EB',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
            boxShadow: '0 4px 12px -6px rgba(15, 23, 42, 0.12)'
        }}
    >
        <Image
            src={props.image}
            wrapped
            ui={false}
        />
        <div style={{padding: 20}}>
            <h3 className={'raleway'} style={{fontSize: 18, fontWeight: 600, color: '#0F172A', margin: 0}}>
                {props.title}
            </h3>
            <div style={{height: 1, backgroundColor: '#F1F5F9', margin: '12px 0'}}/>
            <p style={{fontSize: 14, color: '#64748B', margin: 0}}>
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
                        color: '#FFFFFF',
                        backgroundColor: '#16A34A'
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
                        color: '#0F172A',
                        border: 'solid 1px #E5E7EB'
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
