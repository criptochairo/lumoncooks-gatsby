import React from 'react';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import FullWidthImage from './FullWidthImage';
import heroImage from "../img/contact-lens-cover.jpg";


class Pictures extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
      var carousels = bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1
      });
    }
    render() {
        return (
            <div>
                <div class='carousel carousel-animated carousel-animate-slide'>
                    <div class='carousel-container'>
                        <div class='carousel-item has-background is-active'>
                            <FullWidthImage img={heroImage} title="Lentes de contacto esclerales" />
                        </div>
                        <div class='carousel-item has-background'>
                            <FullWidthImage img={heroImage} title="Lentes de contacto esclerales" />
                        </div>
                        <div class='carousel-item has-background'>
                        <FullWidthImage img={heroImage} title="Lentes de contacto esclerales" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pictures