import React from 'react';
import {Header, Image, Button} from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import scroll from '../../lib/Scroll';

export default () => (
    <div
        style={{
            paddingBottom: 65,
            borderBottom: 'solid rgb(164, 210, 185) 1px',
            background: `linear-gradient(
                            45deg,
                            rgb(164, 210, 185) 0%,
                            rgb(164, 210, 185) 13%,
                            rgb(140, 185, 176) 13%,
                            rgb(140, 185, 176) 18%,
                            rgb(116, 160, 167) 18%,
                            rgb(116, 160, 167) 22%,
                            rgb(92, 135, 158) 22%,
                            rgb(92, 135, 158) 23%,
                            rgb(67, 109, 148) 23%,
                            rgb(67, 109, 148) 26%,
                            rgb(43, 84, 139) 26%,
                            rgb(43, 84, 139) 31%,
                            rgb(255, 255, 255) 31%,
                            rgb(255, 255, 255) 100%
                        )`
        }}
    >
        <FadeIn
            delay={150}
        >
            <Header
                as={'h1'}
                className={'raleway'}
                style={{
                    fontSize: 100,
                    paddingTop: 20,
                    marginBottom: 80,
                    marginLeft: 120,
                    textShadow: '5px 4px #E0E1E2'
                }}
            >
                BRADJOBE
                <span
                    className={'raleway'}
                    style={{
                        backgroundColor: '#2944FF',
                        color: 'white',
                        marginLeft: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 15,
                        textShadow: 'none'
                    }}>
                .DEV
            </span>
            </Header>
            <p
                style={{
                    float: 'right',
                    fontSize: 52,
                    fontWeight: 700,
                    color: 'rgb(41, 68, 255)',
                    width: '40%',
                    marginRight: 50
                }}
            >
                Welcome to my
                <br/>
                personal website
                <p
                    style={{
                        fontSize: 20,
                        fontWeight: 500,
                        padding: 0,
                        marginBottom: 0,
                        marginTop: 50
                    }}
                >
                    Do you need someone with professional experience in:
                </p>
                <Button content='React'/>
                <Button content='Redux'/>
                <Button content='React-Native'/>
                <Button content='Linux'/>
                <Button content='PHP'/>
                <Button content='Python'/>
                <Button content='MySQL'/>
                <Button content='Java'/>
                <Button content='Git'/>
                <Button content='and Website Performance'/>
                <Button primary content='?'/>
                <br/>
                <br/>
                <Button
                    fluid
                    positive
                    style={{
                        fontSize: 18,
                    }}
                    onClick={() => scroll('tabBar')}
                    content={<i>Yes, I do!</i>}
                />
            </p>
            <Image
                style={{
                    opacity: 0.9,
                    marginLeft: 50,
                    width: 470,
                    height: 470,
                    border: 'solid rgb(41, 68, 255) 1px',
                    boxShadow: '10px 10px 60px -5px rgb(41, 68, 255)'
                }}
                src='personal.png'
                circular
            />
        </FadeIn>
    </div>
);
