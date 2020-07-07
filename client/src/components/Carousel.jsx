import React from 'react';
import Photo from './Photo.jsx';
import CarouselPhotostrip from './CarouselPhotostrip.jsx';
import styled from 'styled-components';

// console.log('carousel');

const PhotoContainer = styled.div`
  // display: flex;
  position: relative;
  height: 270px;
  width: 370px;
  overflow: hidden;
`;

const ArrowButton = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: rgba(0,0,0, .32);
  border: 0;
  top: 40%;
  ${(props) => (props.direction === 'right' ? 'right: 0%' : 'left: 0%')};
  ${(props) => (props.visible ? 'visibility: visible' : 'visibility: hidden')};
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
    // background-color: yellow;
    background-color: rgba(44,44,44, .50);
  }
`;

const PhotostripWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  // justify-content: space-evenly;
  height: 50px;
  width: 370px;
  padding: 2px 0px 2px 0px;
  // margin: 1px -1px -1px;
  // padding: 0;
  // overflow: hidden;
`;

const AlbumPhotoCount = styled.div`
  padding: 16px;
  background: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.8) 100%);
  color: #fff;
  font-size: 15px;
  text-align: left;
  position: absolute;
  bottom: 0;
  width: 100%;
  // z-index: 5;
  box-sizing: border-box;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIndex: 0,
    };
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.photostripClick = this.photostripClick.bind(this);
  }

  previousPhoto() {
    // console.log('previous photo');
    const lastIndex = this.props.preview.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== 0 ? currentPhotoIndex - 1 : null;
    this.setState({
      currentPhotoIndex: index,
    });
  }

  nextPhoto() {
    // console.log('next photo', 'currentIndex', this.state.currentPhotoIndex);
    const lastIndex = this.props.preview.length - 1;
    const currentPhotoIndex = this.state.currentPhotoIndex;
    const index = currentPhotoIndex !== lastIndex ? currentPhotoIndex + 1 : null;
    this.setState({
      currentPhotoIndex: index
    });
  }

  photostripClick(index) {
    this.setState({ currentPhotoIndex: index });
  }

  render() {
    // refactor ...
    const modalAlbum = this.state.currentPhotoIndex === 0 ? 'roomAlbum' : this.state.currentPhotoIndex === 1 ? 'diningAlbum' : this.state.currentPhotoIndex === 2 ? 'poolAlbum' : this.state.currentPhotoIndex === 3 ? 'gymAlbum' : this.state.currentPhotoIndex === 4 ? 'bathroomAlbum' : this.state.currentPhotoIndex === 5 ? 'eventRoomAlbum' : 'roomViewAlbum';

    // this.props.preview.length && console.log('image', this.props.hotel[0]);

    return (
      <div>
        <PhotoContainer>

          <ArrowButton
            direction="left"
            photoIndex={this.state.currentPhotoIndex}
            visible={this.state.currentPhotoIndex - 1 >= 0 ? true : false}
            onClick={this.previousPhoto}
          >
            <svg viewBox="0 0 32 32" className="icon icon-chevron-left" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
          </ArrowButton>

          <ArrowButton
            direction="right"
            photoIndex={this.state.currentPhotoIndex}
            visible={(this.state.currentPhotoIndex + 1 <= this.props.preview.length - 1) ? true : false}
            onClick={this.nextPhoto}
          >
            <svg viewBox="0 0 32 32" className="icon icon-chevron-right" fill="white" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
          </ArrowButton>

          <Photo
            index={this.state.currentPhotoIndex}
            url={this.props.preview[this.state.currentPhotoIndex].imageUrl}
            album={this.props.preview[this.state.currentPhotoIndex].category}
            toggleModal={this.props.toggleModal}
          />

          <AlbumPhotoCount
            hotel={this.props.hotel}
            currentAlbumIndex={this.state.currentPhotoIndex}
          >
            <div>
              <span>{this.props.preview[this.state.currentPhotoIndex].category}</span>
              &nbsp;
              <span>({this.props.hotel[modalAlbum].length})</span>
            </div>
          </AlbumPhotoCount>

        </PhotoContainer>


        <PhotostripWrapper>
          {this.props.preview.map((one, index) => (
            <CarouselPhotostrip
              className="photostrip"
              key={one._id}
              index={index}
              displayedPhotoIndex={this.state.currentPhotoIndex}
              photo={one.imageUrl}
              caption={one.caption}
              onClick={this.photostripClick}
              toggleModal={this.props.toggleModal}
            />
          ))}
        </PhotostripWrapper>
      </div>
    );
  }
}

export default Carousel;
