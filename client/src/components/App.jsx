import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Modal from './Modal.jsx';
import Description from '../hotelDescription.js';
import styled from 'styled-components';
import HalfBubble from '../icons/HalfBubble.jsx';
import Bubble from '../icons/Bubble.jsx';

console.log('hello app');

const PageContainer = styled.div`
  background-color: #f2f2f2;
`;

const AppWrapper = styled.div`
  background-color: white;
  height: 1030px;
  width: 765px;
  margin: 12px;
  padding: 24px;
  position: relative;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.charcoal};
  .title {
    font-size: 28px;
    line-height: 30px;
    color: rgb(0, 10, 18);
    font-family: ${props => props.theme.font};
    font-weight: 600;
    padding: 0 0 18px;
    border-bottom: 1px solid #e0e0e0;
  }
  .description {
    border-top: 1px solid #e0e0e0;
    font-size: 14px;
    line-height: 22px;
    padding-top: 20px;
    color: ${props => props.theme.charcoal};
    // font-weight: 300;
    margin-top: 20px;
    margin-bottom: 16px;
  }
  .index-rating {
    color: #4a4a4a;
    display: block;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  > table {
    font-size: 14px;
  }
`;

const CarouselWrapper = styled.div`
  // position: relative;
  cursor: pointer;
  height: 340px;
  width: 370px;
  // background-color: #f5dcdc;
`;

const ReviewsWrapper = styled.div`
  font-size: 18px;
  line-height: 22px;
  // font-weight: 700;
  margin: 14px 0;
  height: auto;
  color: #000;
  display: flex;
  align-self: center;
  .overall-rating {
    align-self: center;
    font-size: 48px;
    font-weight: 500;
    margin-right: 8px;
  }
  a:link, a:visited {
    font-size: 16px;
    color: #000;
    font-weight: 500;
    text-decoration: none;
  }
  .all-reviews {
    color: ${(props) => props.theme.charcoal};
    font-size: 14px;
    border-bottom: 1px dotted #d6d6d6;
    max-width: 124px;
    white-space: nowrap;
    text-align: right;
    margin-left: 5px;
    box-sizing: border-box;
    font-weight: 400;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      preview: [],
      isLoaded: false,
      showModal: false,
      modalAlbum: '',
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    return (
      this.getData()
    );
  }

  // GET
  getData() {
    const hotelId = `${window.location.pathname.slice(1)}` || '1';
    axios({
      method: 'get',
      url: `/api/photos/${hotelId}`,
    })
      .then((response) => {
        const hotel = response.data[0];
        console.log(hotel);
        const preview = [
          // hotel.roomAlbum[0],
          // hotel.diningAlbum[0],
          // hotel.poolAlbum[0],
          // hotel.gymAlbum[0],
          // hotel.bathroomAlbum[0],
          // hotel.eventRoomAlbum[0],
          // hotel.roomViewAlbum[0],
        ];
        if (hotel.roomAlbum.length > 0) {
          preview.push(hotel.roomAlbum[0]);
        }
        if (hotel.diningAlbum.length > 0) {
          preview.push(hotel.diningAlbum[0]);
        }
        if (hotel.poolAlbum.length > 0) {
          preview.push(hotel.poolAlbum[0]);
        }
        if (hotel.gymAlbum.length > 0) {
          preview.push(hotel.gymAlbum[0]);
        }
        if (hotel.amenitiesAlbum.length > 0) {
          preview.push(hotel.amenitiesAlbum[0]);
        }
        if (hotel.bathroomAlbum.length > 0) {
          preview.push(hotel.bathroomAlbum[0]);
        }
        if (hotel.eventRoomAlbum.length > 0) {
          preview.push(hotel.eventRoomAlbum[0]);
        }
        if (hotel.roomViewAlbum.length > 0) {
          preview.push(hotel.roomViewAlbum[0]);
        }
        // console.log('res data', response.data);
        // console.log('1st hotel record', hotel);
        this.setState({
          hotel,
          preview,
          isLoaded: true,
        });
        (error) => {
          this.setState({ isLoaded: true });
          console.log(error);
        };
        // console.log('current state', this.state);
    })
  }

  toggleModal(modalAlbum) {
    // console.log('toggle modal', modalAlbum);
    this.setState({
      showModal: !this.state.showModal,
      modalAlbum,
    });
  }

  render() {

    // refactor later ...
    const modalAlbum = this.state.modalAlbum === 'Room & Suite' ? 'roomAlbum' : this.state.modalAlbum === 'Dining' ? 'diningAlbum' : this.state.modalAlbum === 'Pool & Beach' ? 'poolAlbum' : this.state.modalAlbum === 'Gym' ? 'gymAlbum' : this.state.modalAlbum === 'Bathroom' ? 'bathroomAlbum' : this.state.modalAlbum === 'Business Center & Event Rooms' ? 'eventRoomAlbum' : 'roomViewAlbum';

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <PageContainer>
      <AppWrapper>

        <div className="about-header">
          <h2 className="title">About</h2>
        </div>

        <ReviewsWrapper>
          <span className="overall-rating">4.5</span>
          <a className="reviews-bubble-rating" href="#">
            <div className="rating-label">Excellent</div>
            <span className="bubbles">
              <Bubble/>
              &nbsp;
              <Bubble/>
              &nbsp;
              <Bubble/>
              &nbsp;
              <Bubble/>
              &nbsp;
              <HalfBubble/>
            </span>
            <span className="all-reviews">{this.state.hotel.numReviews} reviews</span>
          </a>
        </ReviewsWrapper>
          <span className="index-rating">#20 of 500 hotels in {this.state.hotel.hotelCity}</span>

        <table>
          <tbody>
            <tr>
              <td>
                <span className="bubbles">
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <HalfBubble/>
                </span>
              </td>
              <td>&nbsp;&nbsp;Location</td>
            </tr>
            <tr>
              <td>
              <span className="bubbles">
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                </span>
              </td>
              <td>&nbsp;&nbsp;Cleanliness</td>
            </tr>
            <tr>
              <td>
              <span className="bubbles">
              <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <Bubble/>
                  &nbsp;
                  <HalfBubble/>
                </span>
              </td>
              <td>&nbsp;&nbsp;Service</td>
            </tr>
            <tr>
              <td>
              <span className="bubbles">
                <Bubble/>
                &nbsp;
                <Bubble/>
                &nbsp;
                <Bubble/>
                &nbsp;
                <Bubble/>
                &nbsp;
                <HalfBubble/>
                </span>
              </td>
              <td>&nbsp;&nbsp;Value</td>
            </tr>
          </tbody>
        </table>

        <p className="description">{Description}</p>

        <CarouselWrapper>
          <Carousel
            hotel={this.state.hotel}
            preview={this.state.preview}
            toggleModal={this.toggleModal}
          />
        </CarouselWrapper>

        <div className="modal">
          {
          this.state.showModal && (
            <Modal
              hotel={this.state.hotel}
              album={this.state.hotel[modalAlbum]}
              toggleModal={this.toggleModal}
              showModal={this.state.showModal}
            />
          )
          }
        </div>

      </AppWrapper>
    </PageContainer>
    );
  }
}

export default App;
