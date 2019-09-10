import React from 'react';
import {Button, Card, Image, Divider} from 'semantic-ui-react';

export default (props) => (
    <Card
        className={'projectCard'}
        color={'blue'}
        style={{
            cursor: 'pointer'
        }}
    >
        <Image
            src={props.image}
            wrapped
            ui={false}
        />
        <Card.Content>
            <Card.Header
                className={'raleway'}
            >
                {props.title}
            </Card.Header>
            <Divider/>
            <Card.Description>
                {props.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div>
                {props.githubLink &&
                <Button
                    positive
                    onClick={() => window.location.href = props.githubLink}
                >
                    github
                </Button>
                }

                {props.exampleLink &&
                <Button
                    onClick={() => window.location.href = props.exampleLink}
                >
                    example
                </Button>
                }
            </div>
        </Card.Content>
    </Card>
);