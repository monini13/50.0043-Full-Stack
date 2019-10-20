import React from 'react';
import Carousel from 'react-multi-carousel';
import BookCard from './BookCard.js';
import 'react-multi-carousel/lib/styles.css';

const data = {
  imUrl: "https://images-na.ssl-images-amazon.com/images/I/41F5kmyiPsL._SX329_BO1,204,203,200_.jpg",
  title: "Blowout: Corrupted Democracy, Rogue State Russia, and the Richest, Most Destructive Industry on Earth",
  author: "Rachel Maddow",
  rating: 4.5,
  num_ratings: 30
}


function BookCarousel(props) {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 5,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <BookCard
          title={data.title}
          imUrl={data.imUrl}
          author={data.author}
          rating={data.rating}
          num_ratings={data.num_ratings}
        />
        <BookCard
          title={data.title}
          imUrl={data.imUrl}
          author={data.author}
          rating={data.rating}
          num_ratings={data.num_ratings}
        />
        <BookCard
          title={data.title}
          imUrl={data.imUrl}
          author={data.author}
          rating={data.rating}
          num_ratings={data.num_ratings}
        />
        <BookCard
          title={data.title}
          imUrl={data.imUrl}
          author={data.author}
          rating={data.rating}
          num_ratings={data.num_ratings}
        />
        <BookCard
          title={data.title}
          imUrl={data.imUrl}
          author={data.author}
          rating={data.rating}
          num_ratings={data.num_ratings}
        />
        <BookCard
          title={data.title}
          imUrl={data.imUrl}
          author={data.author}
          rating={data.rating}
          num_ratings={data.num_ratings}
        />
      </Carousel>
    </div>
  )
}

export default BookCarousel;