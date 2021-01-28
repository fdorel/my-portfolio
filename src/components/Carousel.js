import React from 'react';

import Card from '../components/Card';

import a1 from '../components/images/port1.jpg';
import a2 from '../components/images/port2.jpg';
import a3 from '../components/images/port3.jpg';
import a4 from '../components/images/port4.jpg';
import a5 from '../components/images/port9.jpg';
import a6 from '../components/images/port11.jpg';
import a7 from '../components/images/port10.jpg';
import a8 from '../components/images/port8.jpg';
import a9 from '../components/images/port12.jpg';
import a10 from '../components/images/port7.jpg';
import a11 from '../components/images/port6.jpg';
import a12 from '../components/images/port5.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Social Network',
                    subTitle: 'App made with React,but not finished yet...',
                    imgSrc: a1,
                    link: 'https://sn2v.netlify.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Drones Online Store',
                    subTitle: 'App made with React and hosted on Netlify',
                    imgSrc: a2,
                    link: 'https://react-drone.netlify.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather',
                    subTitle: 'Weather app made with React',
                    imgSrc: a3,
                    link: 'https://clockweather.netlify.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'React Notes',
                    subTitle: 'Notes App made with React and Firebase',
                    imgSrc: a4,
                    link: 'https://react-new-notes.netlify.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Portfolio Web Development',
                    subTitle: 'Portfolio made during my studies at the college',
                    imgSrc: a5,
                    link: 'http://fdorel.info/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'CoddPix Studio',
                    subTitle: 'Web Development Agency',
                    imgSrc: a6,
                    link: 'https://coddpix.com/en',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Login & Register',
                    subTitle: 'MERN project',
                    imgSrc: a7,
                    link: 'https://login-signup-six.vercel.app/login',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-sm-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
