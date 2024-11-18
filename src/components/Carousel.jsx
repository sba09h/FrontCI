import React from 'react'


function CustomCarousel() {
  return (
   <section id="home" className='hero-block'>
        <BootstrapCarousel>
            <BootstrapCarousel.Item>
                <ExampleCarouselImage text="First slide" />
                <BootstrapCarousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <BootstrapCarousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <BootstrapCarousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
        </BootstrapCarousel>
   </section>
  )
}
export default CustomCarousel;
