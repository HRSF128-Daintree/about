import React from 'react';
import ModalCarousel from './ModalCarousel.jsx';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import DiagonalUpArrow from '../icons/DiagonalUpArrow.jsx';

// console.log('modal');

const ModalContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,.6);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10000;
  display: block;
`;

const ModalWrapper = styled.div`
  // position: absolute;
  // // display: block;
  top: 48px;
  bottom: 48px;
  left: 48px;
  right: 48px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 2px 2px 9px rgba(0,0,0,.5);
  transition: opacity .4s ease-in-out;
  border-radius: 2px;
  position: fixed;
  // display: flexbox;
  // flex-direction: column;
  transition: opacity .2s linear;
  z-index: 1;
  min-height: 504px;
  max-height: 90.49%;
  max-width: 93.36%;
  margin: auto;
`;

const Header = styled.div`
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid #e5e5e5;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #ffffff;
  transition: opacity 333ms linear;
`;

const HeaderLeft = styled.div`
  text-align: left;
  box-sizing: border-box;
  > span {
    font-family: ${props => props.theme.font};
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #000a12;
    margin-left: 24px;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const HeaderRight = styled.div`
  font-family: ${props => props.theme.font};
  box-sizing: border-box;
  border-radius: 2px;
  > ul li {
    display: inline;
    vertical-align: middle;
    list-style: none;
    padding: 5px;
  }
`;

const HeaderItemLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  display: inline-block;
  line-height: 16px;
  white-space: nowrap;
  color: ${props => props.theme.charcoal};
  cursor: pointer;
  &:visited {
    text-decoration: none; color: ${props => props.theme.charcoal};
  }
`;
const HeaderItem = styled.span`
  .price {
    color: #000a12;
    font-family: ${props => props.theme.font};
    font-size: 16px;
    font-weight: 700;
  }
`;

const HeaderDealButton = styled.button`
  border-radius: 12px;
  display: inline-block
  font-family: ${props => props.theme.font};
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #000a12;
  background-color: ${props => props.theme.mustard};
  border: 0;
  padding: 6px 10px;
  line-height: 16px;
  cursor: pointer;
  text-decoration-style: solid;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #fee190;
  }
`;

const HeaderCloseButton = styled.button`
  cursor: pointer;
  padding: 0 12px;
  height: 44px;
  line-height: 12px;
  display: inline-block;
  border: none;
  border-left: 1px solid #e5e5e5;
  margin: 0em;
  box-sizing: border-box;
  background-color: #ffffff;
  text-align: center;
  flex: 0 0 auto;
  > span {
    font-weight: 300;
    font-size: 36px;
    line-height: 1;
  }
  &:focus {
    outline: none;
  }
`;

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.body.style.overflow = 'unset';
  }

  render () {
    return (ReactDOM.createPortal(
      <ModalContainer>
      <ModalWrapper>
        <Header>
          <HeaderLeft><span>Photos of {this.props.hotel.hotelName}</span></HeaderLeft>
          <HeaderRight>
            <ul>
              <li>
                <HeaderItemLink href="#">
                  {this.props.hotel.hotelName.split(" ").join("")}.com
                   <DiagonalUpArrow />
                  </HeaderItemLink>
                </li>
              <li><HeaderItem className="price">${this.props.hotel.hotelPrice}</HeaderItem></li>
              <li><HeaderDealButton className="view-deal" href="#">View Deal</HeaderDealButton></li>
              <li>
                <HeaderCloseButton onClick={() => {this.props.toggleModal()}}>
                <span>&#215;</span>
                </HeaderCloseButton>
              </li>
            </ul>
          </HeaderRight>
        </Header>
        <div>
          <ModalCarousel
            album={this.props.album}
          />
        </div>
      </ModalWrapper>
      </ModalContainer>,

      modalRoot,
    ));
  }
}

export default Modal;
