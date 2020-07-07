import React from 'react';
import styled from 'styled-components';

// console.log('album toggle');

const Image = styled.img`
  flex: 1;
  width: 100%;
  min-width: 0;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  padding: ${(props) => {
    if (props.index === 0) {
      return '2px 2px 2px 0px';
     } else if (props.index === 6) {
        return '2px 0px 2px 2px';
      } else {
        return '2px';
      }
  }};
  opacity: ${(props) => (props.index === props.displayedPhotoIndex ? '1.0' : '50%')};
  &:hover {
    opacity: 1.0;
  }
  // position: relative;
`;

const CarouselPhotostrip = (props) => {
  // console.log('photostrip url', props.photo)
  return (
    <Image
      className="photostrip"
      index={props.index}
      displayedPhotoIndex={props.displayedPhotoIndex}
      alt={props.caption}
      src={props.photo}
      onClick={() => props.onClick(props.index)}
    />
  );
};

export default CarouselPhotostrip;
