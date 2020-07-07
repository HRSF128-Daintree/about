import React from 'react';
import ModalPhoto from './ModalPhoto.jsx';
import styled from 'styled-components';
import Gallery from '../icons/Gallery.jsx';
import Thumb from '../icons/Thumb.jsx';
import Like from '../icons/Like.jsx';
import Share from '../icons/Share.jsx';
import Report from '../icons/Report.jsx';
import Pin from '../icons/Pin.jsx';
import LeftArrow from '../icons/LeftArrow.jsx';
import RightArrow from '../icons/RightArrow.jsx';
import Bubble from '../icons/Bubble.jsx';
import HalfBubble from '../icons/HalfBubble.jsx';

// console.log('modal carousel');

const ModalCarouselWrapper = styled.div`
  display: block;
  // position: relative;
  background-color: #fff;
  box-shadow: 2px 2px 9px rgba(0,0,0,.5);
  transition: opacity .4s ease-in-out;
  z-index: 10;
  border-radius: 2px;
  // min-height: 504px;
  box-sizing: border-box;
  // overflow: auto;
  top: 0;
  left: 0;
  // width: auto !important;
  // height: inherit;
  // width: inherit;
  border-color: #777779;
  background-color: #000000;
`;

// const ModalInnerContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
// `;

const IndexInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${props => props.theme.font};
  color: #ffffff;
  // position: absolute;
  height: 56px;
  width: 100%;
  // top: 0;
  // span:last-child {
  //   // position: absolute;
  //   font-size: 12px;
  //   top: 1em;
  //   right: 16px;
  // }
`;

const IndexCount = styled.span`
  font-size: 12px;
  // top: 1em;
  margin: 15px;
  // right: 16px;
`;

const GalleryButton = styled.button`
  z-index: 2000;
  // align-items: center;
  top: 1em;
  background-color: #ffffff;
  font-family: ${props => props.theme.font};
  font-size: 13.33px;
  line-height: 20px;
  border-radius: 2px;
  text-align: center;
  padding: 8px 16px;
  margin: 10px;
  cursor: pointer;
  border: 0;
  > svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

const DetailsWrapper = styled.div`
  background-image: linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.53) 10%,rgba(0,0,0,.8));
  border-radius: 0 0 2px 2px;
  position: absolute;
  color: #fff;
  bottom: 0;
  font-size: 12px
  transition: opacity 333ms linear;
  width: calc(100% - 16px);
  padding-left: 16px;
  padding-top: 16px;
  // padding-right: 32px;
  padding-bottom: 16px;
`;

const PhotoDetailsSection = styled.div`
  display: flex;
  font-family: ${props => props.theme.font};
  // border-radius: 0 0 2px 2px;
  // padding: 16px 16px 16px 0px;
  .
`;

const Avatar = styled.div`
  display: inline-block;
  border: 2px solid #ffffff;
  border-radius: 42px;
  height: 40px;
  width: 40px;
  padding: 2px 4px 0 0;
  background-image: ${(props) => `url( ${props.avatar} )`};
  background-size: cover;
  vertical-align: middle;
`;

const PhotoDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  line-height: 16px;
  min-height: 50px;
  font-family: ${props => props.theme.font};
  color: #ffffff;
  border-radius: 0 0 2px 2px;
  color: #fff;
  bottom: 0;
  transition: opacity 333ms linear;
  padding-left: 13px;
  vertical-align: middle;
  padding-bottom: 0;
  // > span {
  //   margin: 0;
  //   padding: 0;
  //   display: block;
  //   vertical-align: middle;
  //   font-size: 12px;
  // }
`;

const ActionButtonsContainer = styled.div`
  font-family: ${props => props.theme.font};
  color: #ffffff;
  font-size: 12px;
  border-top: 1px solid #ffffff;
  margin-right: 32px;
  border-radius: 0 0 2px 2px;
  .helpful-button {
    display: inline-block;
    padding: 16px 0;
    cursor: pointer;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 700;
    cursor: pointer;
  }
  .like-button {
    padding: 16px 0;
    display: inline-block;
    position: absolute;
    right: 96px;
    font-size: 20px;
    cursor: pointer;
  }
  .share-button {
    padding: 16px 0;
    right: 64px;
    display: inline-block;
    position: absolute;
    font-size: 20px;
    cursor: pointer;
  }
  .report-button {
    padding: 16px 0;
    display: inline-block;
    position: absolute;
    right: 32px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ReviewWrapper = styled.div`
  font-family: ${props => props.theme.font};
  color: #ffffff;
  font-size: 12px;
  padding-top: 12px;
  padding-bottom: 16px;
  padding-right: 32px;
`;

const ArrowButton = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(0,0,0, .40);
  border: 0;
  margin: 0;
  padding: 0;
  top: 50%;
  transition: opacity .3s linear;
  z-index: 1;
  // text-align: center;
  ${(props) => (props.direction === 'right' ? 'right: 0' : 'left: 0')};
  pointer-events: ${props => (props.clickable ? 'auto' : 'none')}
  cursor: ${props => (props.clickable ? 'pointer' : 'default')}
  .icon {
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.2em;
    width: 2.5em;
    height: 2.5em;
    font-weight: bold;
    overflow: hidden;
  }
  .icon-chevron-left {
    transform: rotate(180deg);
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(44,44,44, .50);
  }
`;

class ModalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0,
    };
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  previousPhoto() {
    console.log('previous photo');
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== 0 ? currentPhotoIndex - 1 : currentPhotoIndex;
    this.setState({
      currentPhotoIndex: index,
    });
  }

  nextPhoto() {
    console.log('next photo');
    const lastIndex = this.props.album.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== lastIndex ? currentPhotoIndex + 1 : currentPhotoIndex;
    this.setState({
      currentPhotoIndex: index,
    });
  }

  render() {

    return (

      <ModalCarouselWrapper>
        <IndexInfo>
          <span>
            <GalleryButton>
              <Gallery/>
              &nbsp;
              Gallery
            </GalleryButton>
          </span>
          <IndexCount>{this.state.currentPhotoIndex + 1} of {this.props.album.length}</IndexCount>
        </IndexInfo>

        <ArrowButton
          direction="left"
          photoIndex={this.state.currentPhotoIndex}
          clickable={this.state.currentPhotoIndex - 1 >= 0 ? true : false}
          onClick={this.previousPhoto}
        >
          <LeftArrow />
        </ArrowButton>

        <ArrowButton
          direction="right"
          photoIndex={this.state.currentPhotoIndex}
          clickable={(this.state.currentPhotoIndex + 1 <= this.props.album.length - 1) ? true : false}
          onClick={this.nextPhoto}
        >
          <RightArrow />
        </ArrowButton>

        <ModalPhoto
          user={this.props.album[this.state.currentPhotoIndex].user}
          userAvatar={this.props.album[this.state.currentPhotoIndex].userAvatarUrl}
          caption={this.props.album[this.state.currentPhotoIndex].caption}
          url={this.props.album[this.state.currentPhotoIndex].imageUrl}
          helpfulVotes={this.props.album[this.state.currentPhotoIndex].helpfulVotes}
          date={this.props.album[this.state.currentPhotoIndex].datePosted}
        />
        <DetailsWrapper>

        <PhotoDetailsSection>
          <Avatar
            className="avatar"
            avatar={this.props.album[this.state.currentPhotoIndex].userAvatarUrl}
          />

          <PhotoDetails>
            <span>
              {this.props.album[this.state.currentPhotoIndex].user}
              &nbsp;&#8226;&nbsp;
              {this.props.album[this.state.currentPhotoIndex].datePosted}
            </span>
            <span>
              <Pin />
              &nbsp;
              {this.props.album[this.state.currentPhotoIndex].location}
              &nbsp;
              &#8226;
              &nbsp;
              {this.props.album[this.state.currentPhotoIndex].contributions}
              &nbsp;
              contributions
              </span>
          </PhotoDetails>
        </PhotoDetailsSection>

        <ReviewWrapper>
          <div>
            <span>
              <Bubble/>
              &nbsp;
              <Bubble/>
              &nbsp;
              <Bubble/>
              &nbsp;
              <Bubble/>
              &nbsp;
              <HalfBubble/>
              &nbsp;
              &nbsp;
            </span>
            {this.props.album[this.state.currentPhotoIndex].caption}
          </div>
          <div>Read review</div>
        </ReviewWrapper>

        <div></div>

        <ActionButtonsContainer>
          <div className="helpful-button">
            <span className="thumb-icon">
              <Thumb />
              &nbsp;
              Helpful
              ({this.props.album[this.state.currentPhotoIndex].helpfulVotes})
            </span>
          </div>

          <div className="like-button">
            <Like />
          </div>

          <div className="share-button">
            <Share />
          </div>

          <div className="report-button">
            <Report />
          </div>
        </ActionButtonsContainer>
        </DetailsWrapper>
      </ModalCarouselWrapper>
    );
  }
}

export default ModalCarousel;
