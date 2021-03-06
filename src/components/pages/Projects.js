import React from 'react';
import Hero from '../../components/Hero';
import Carousel from '../Carousel';

function Projects(props) {
    return(
        <div className="justify-content-center">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    )
}

export default Projects
