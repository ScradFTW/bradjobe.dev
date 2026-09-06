import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';

const SectionHeader = ({children}) => (
    <Grid.Row style={{paddingBottom: 8, paddingTop: 32}}>
        <h2
            className={'raleway'}
            style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#0F172A',
                borderLeft: 'solid 4px #6366F1',
                paddingLeft: 12,
                margin: 0
            }}
        >
            {children}
        </h2>
    </Grid.Row>
);

const Tech = (props) => (
    <span
        className={'techCard'}
        style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: 8,
            padding: '10px 16px',
            margin: '0 10px 10px 0',
            borderRadius: 10,
            border: 'solid 1px #E5E7EB',
            backgroundColor: '#F8FAFC',
            transition: 'transform 150ms ease, box-shadow 150ms ease'
        }}
    >
        <span style={{fontWeight: 600, fontSize: 15, color: '#0F172A'}}>{props.title}</span>
        <span style={{fontSize: 13, color: '#94A3B8'}}>
            {props.exp} year{props.exp === 1 ? '' : 's'}
        </span>
    </span>
);

const Job = (props) => (
    <Grid.Row
        style={{
            marginLeft: 4,
            marginBottom: 8,
            paddingBottom: 20,
            borderBottom: 'solid 1px #F1F5F9'
        }}
    >
        <Grid.Column width={16}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline'}}>
                <div>
                    <span style={{fontWeight: 700, fontSize: 17, color: '#0F172A'}}>{props.title}</span>
                    <span style={{fontSize: 15, color: '#475569', marginLeft: 10}}>{props.position}</span>
                </div>
                <span style={{fontSize: 13, color: '#94A3B8', fontStyle: 'italic'}}>
                    {props.startDate} &ndash; {props.endDate}
                </span>
            </div>
            <ul style={{marginTop: 10, marginBottom: 0, paddingLeft: 20, color: '#334155', fontSize: 15, lineHeight: 1.7}}>
                {props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </Grid.Column>
    </Grid.Row>
);

export default () => (
    <Grid style={{paddingLeft: '4%', paddingRight: '4%', paddingBottom: 60}}>
        <Grid.Row style={{paddingTop: 40}}>
            <div>
                <h1 className={'raleway'} style={{fontSize: 34, fontWeight: 700, color: '#0F172A', margin: 0}}>
                    Brad Jobe
                </h1>
                <p style={{fontSize: 17, color: '#64748B', marginTop: 6}}>Full Stack Web Developer</p>
            </div>
        </Grid.Row>
        <Grid.Row>
            <a
                href={'/resume.pdf'}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: 10,
                    padding: '12px 22px',
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'white',
                    background: 'linear-gradient(135deg, #6366F1, #3B82F6)',
                    boxShadow: '0 8px 20px -8px rgba(99, 102, 241, 0.6)'
                }}
            >
                <Icon name={'download'}/> Download Resume
            </a>
        </Grid.Row>

        <SectionHeader>Education</SectionHeader>
        <Grid.Row style={{marginLeft: 4}}>
            <Grid.Column width={1}>
                <Icon name='graduation cap' size='big' style={{color: '#6366F1'}}/>
            </Grid.Column>
            <Grid.Column width={15}>
                <p style={{fontSize: 15, color: '#334155'}}>
                    <b>Acadia University</b> &mdash; Bachelor of Computer Science, specialization in Software Development
                    {' '}
                    <i style={{color: '#94A3B8'}}>(2012 - 2017)</i>
                </p>
            </Grid.Column>
        </Grid.Row>

        <SectionHeader>Work Experience</SectionHeader>
        <Job
            title={'allNovaScotia.com'}
            position={'Full Stack Developer'}
            startDate={'May 2018'}
            endDate={<b>Present</b>}
            items={[
                'Introduced Unit Testing and Selenium Testing to legacy software projects.',
                'Introduced agile software methodologies to analyze and develop various web projects.',
                'Developed client-facing web API to legacy PHP back-end.',
                'Continuing development of new projects using React and Next.js.'
            ]}
        />
        <Job
            title={'Lockheed Martin Canada'}
            position={'Java Software Developer'}
            startDate={'May 2017'}
            endDate={'May 2018'}
            items={[
                'Worked in an agile team to develop 3D Naval simulations for military personnel.',
                'Used the Java Spring Framework to achieve the completion of customer projects.',
                'Developed and integrated Unit Testing for a legacy Java system.',
                'Participated in requirements analysis with customers and naval engineers.'
            ]}
        />
        <Job
            title={'Acadia University'}
            position={'Research Assistant'}
            startDate={'September 2016'}
            endDate={'April 2017'}
            items={[
                'Developed web-apps with Dr. Danny Silver (Acadia U, Dean of Computer Science) and Nova Scotia Health Authority (NSHA).',
                'Used PHP and Javascript to gather statistical information on user topic interest.',
                'Hosted multiple NSHA projects using AWS.',
                'Integrated CI system with live Linux server to ease in future development.',
                'Developed software to convert Word (.docx) files to HTML to be used on NSHA websites.'
            ]}
        />
        <Job
            title={'Pratt & Whitney Canada'}
            position={'PHP Developer (co-op)'}
            startDate={'May 2016'}
            endDate={'September 2016'}
            items={[
                'Provided assistance in developing software in reduce workplace injuries.',
                'Developed CRUD web system in PHP for aerospace chemical engineers.',
                'Wrote official documentation for legacy systems'
            ]}
        />

        <SectionHeader>Technology</SectionHeader>
        <Grid.Row style={{marginLeft: 4}}>
            <Tech title={'React/Redux/Next.js'} exp={2}/>
            <Tech title={'React Native'} exp={1}/>
            <Tech title={'PHP'} exp={5}/>
            <Tech title={'Debian Linux'} exp={6}/>
            <Tech title={'Semantic UI'} exp={1}/>
            <Tech title={'Java'} exp={4}/>
            <Tech title={'Python'} exp={2}/>
            <Tech title={'MySQL'} exp={4}/>
            <Tech title={'Apache'} exp={4}/>
            <Tech title={'Linux'} exp={6}/>
        </Grid.Row>
    </Grid>
);
