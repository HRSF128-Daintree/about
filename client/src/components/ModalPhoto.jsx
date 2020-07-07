import React from 'react';
import styled from 'styled-components';

// console.log('modal photo');

const Image = styled.img`
  max-height: 100%;
  // max-height: 930px;
  min-height: 200px;
  max-width: 100%;
  box-sizing: border-box;
  object-fit: contain;
  display: block;
  // margin: 0 auto;
  border: 0;
  flex: 0 0 auto;
  margin-left: auto;
  margin-right: auto;
`;

const ModalPhoto = (props) => {
  // console.log('props', props);
  return (
    <div>
      <Image
        className="photo"
        src={props.url}
      />
    </div>

  );
};

export default ModalPhoto;
