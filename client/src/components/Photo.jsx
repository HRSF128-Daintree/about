import React from 'react';
import styled from 'styled-components';

// console.log('photo');

const Image = styled.img`
  // display: block;
  // position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  // overflow: hidden;
`;

const Photo = (props) => {
  // console.log('photo props', props);
  return (
    <Image
      className="photo"
      src={props.url}
      onClick={ () => props.toggleModal(props.album) }
    />
  );
};

export default Photo;
