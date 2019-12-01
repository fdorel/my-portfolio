import React from 'react';

import Card from '../components/Card';

import a1 from '../components/images/port1.jpg';
import a2 from '../components/images/port2.jpg';
import a3 from '../components/images/port3.jpg';
import a4 from '../components/images/port4.jpg';
import a5 from '../components/images/port8.jpg';
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
                    title: 'Ping Pong Game',
                    subTitle: 'Javascript Gam made in Canvas',
                    imgSrc: a5,
                    link: 'http://en.fdorel.ca/Javascript/Game/game.html',
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
                    title: 'Mole CSS game',
                    subTitle: 'HTML and CSS game',
                    imgSrc: a7,
                    link: 'http://en.fdorel.ca/HTML_CSS/moles/mole.html',
                    selected: false
                },
                {
                    id: 7,
                    title: 'College Group Project',
                    subTitle: 'Bootstrap and PHP website',
                    imgSrc: a8,
                    link: 'http://df.fdorel.ca/Team/DW_Final_7/index.html',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Beekeeper',
                    subTitle: 'A Beekeeper Demo Website',
                    imgSrc: a9,
                    link: 'http://df.fdorel.ca/igor/index.html',
                    selected: false
                },
                {
                    id: 9,
                    title: 'Calculator in Javascript',
                    subTitle: 'Javascript calculator app with HTML and CSS',
                    imgSrc: a10,
                    link: 'http://en.fdorel.ca/Javascript/Calculator/calculator.html',
                    selected: false
                },
                {
                    id: 10,
                    title: 'Time and Date',
                    subTitle: 'Javascript time and date',
                    imgSrc: a11,
                    link: 'http://en.fdorel.ca/Javascript/Clock/clock.html',
                    selected: false
                },
                {
                    id: 11,
                    title: 'To Come ...',
                    subTitle: 'Something new to come...',
                    imgSrc: a12,
                    link: 'http://en.fdorel.ca',
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
