import React from 'react';
import { mount, shallow, render } from 'enzyme';
import ArrowButton from '../Carousel.jsx';

describe ('Arrow', () => {
  xit('should render correctly', () => {
    const ArrowButton = shallow(<ArrowButton />);
    expect(ArrowButton).toMatchSnapshot();
  });

  xit('should trigger onClick prop when clicked', () => {
    const mock = jest.fn();
    const ArrowButton = shallow(<ArrowButton onClick={mock} />);
    ArrowButton.find('.arrow').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
