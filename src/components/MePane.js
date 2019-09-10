import React from 'react';
import {Grid, Button, Header, Divider, Icon, List, Card} from 'semantic-ui-react';

const randomColour = () => {
    const rand = Math.floor(Math.random() * 10);

    let colour = 'purple';
    switch (rand) {
        case 1:
        case 3:
        case 4:
            colour = 'blue';
            break;

        case 5:
        case 6:
        case 7:
            colour = 'green';
            break;

        case 8:
        case 9:
        case 0:
            colour = 'orange';
            break;
    }

    return colour;
};

const Tech = (props) => (
    <Grid.Column
        className={'techCard'}
        width={4}
        style={{
            marginBottom: 20
        }}
    >
        <Card
            color={randomColour()}
        >
            <Card.Content>
                <Card.Header
                    style={{
                        fontSize: 16
                    }}
                >
                    {props.title}
                </Card.Header>
                <Card.Meta>{props.exp} year{props.exp === 1 ? '' : 's'} of experience</Card.Meta>
            </Card.Content>
        </Card>
    </Grid.Column>
);

const Job = (props) => (
    <>
        <Grid.Row
            style={{
                marginLeft: 20,
                fontWeight: 700
            }}
        >
            <Grid.Column width={3}>
                {props.title}
            </Grid.Column>
            <Grid.Column width={5}>
                {props.position}
            </Grid.Column>
            <Grid.Column width={6}>
                <i>({props.startDate} - {props.endDate})</i>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row
            style={{
                marginLeft: 20,
                marginBottom: 20
            }}
        >
            <List bulleted>
                {props.items.map((item) => <List.Item>{item}</List.Item>)}
            </List>
        </Grid.Row>
    </>
);

export default () => (
    <Grid
        style={{
            fontSize: 16
        }}
    >
        <Grid.Row>
            <Header
                as={'h1'}
            >
                Brad Jobe, <span style={{color: '#A1A1A1'}}>Full Stack Web Developer</span>
            </Header>
        </Grid.Row>
        <Grid.Row>
            <Button
                primary
                onClick={() => window.location.href = '/resume.pdf'}
            >
                Download Resume
            </Button>
        </Grid.Row>
        <Grid.Row
            style={{
                marginTop: 20,
                marginLeft: 20
            }}
        >
            <Header
                as={'h2'}
                style={{
                    fontWeight: 400
                }}
            >
                Education
            </Header>
        </Grid.Row>
        <Divider style={{margin: 0, padding: 0}}/>
        <Grid.Row
            style={{
                marginLeft: 20
            }}
        >
            <Grid.Column width={1}>
                <Icon name='graduation cap' size='big'/>
            </Grid.Column>
            <Grid.Column width={15}>
                <p>
                    <b>Acadia University</b> - Bachelor of Computer Science, specialization in Software Development
                    {' '}
                    <i>(2012 - 2017)</i>
                </p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row
            style={{
                marginTop: 20,
                marginLeft: 20
            }}
        >
            <Header
                as={'h2'}
                style={{
                    fontWeight: 400
                }}
            >
                Work Experience
            </Header>
        </Grid.Row>
        <Divider style={{margin: 0, padding: 0}}/>
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
        <Grid.Row
            style={{
                marginTop: 20,
                marginLeft: 20
            }}
        >
            <Header
                as={'h2'}
                style={{
                    fontWeight: 400
                }}
            >
                Technology
            </Header>
        </Grid.Row>
        <Divider/>
        <Grid.Row>
            <Tech
                title={'React/Redux/Next.js'}
                exp={2}
            />
            <Tech
                title={'React-Native'}
                exp={1}
            />
            <Tech
                title={'PHP'}
                exp={5}
            />
            <Tech
                title={'Debian Linux'}
                exp={6}
            />
            <Tech
                title={'Semantic UI'}
                exp={1}
            />
            <Tech
                title={'Java'}
                exp={4}
            />
            <Tech
                title={'Python'}
                exp={2}
            />
            <Tech
                title={'MySQL'}
                exp={4}
            />
            <Tech
                title={'Apache'}
                exp={4}
            />
            <Tech
                title={'Linux'}
                exp={6}
            />
        </Grid.Row>
    </Grid>
);