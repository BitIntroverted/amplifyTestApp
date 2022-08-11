import React from 'react'
import Carousel from 'better-react-carousel'

function Gallery() {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={require("./photos/cake1.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require("./photos/cake2.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require("./photos/cake3.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require("./photos/cake4.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require("./photos/bar1.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require("./photos/cookie1.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={require("./photos/cupcake1.png")} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height= "75%" src={require("./photos/tart1.png")} />
      </Carousel.Item>
    </Carousel>
  )
}
export default Gallery