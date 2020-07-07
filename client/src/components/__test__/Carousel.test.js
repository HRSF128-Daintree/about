import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Carousel from '../Carousel.jsx';

describe ('Carousel', () => {
  xit('should render correctly', () => {
    const propsData = { preview: [{id: 1}] };
    const CarouselComponent = shallow(<Carousel {...propsData}/>);
    expect(CarouselComponent).toMatchSnapshot();
  });

  // it('should update state', () => {
  //   const propsData = { preview: [{id: 1}] };
  //   const CarouselComponent = shallow(<Carousel {...propsData}/>);
  //   expect(CarouselComponent.state('currentPhotoIndex')).toEqual(0);
  //   const arrow = CarouselComponent.find(".arrow");
  //   arrow.simulate('click');
  //   expect(arrow.props().currentPhotoIndex).toEqual(1);
  // });

  xit('should render 4 photostrip photos', () => {
    const propsData = { preview: [{id: 1}, {id: 2}, {id: 3}, {id: 4}] };
    const CarouselComponent = shallow(<Carousel {...propsData} />);
    expect(CarouselComponent.find('.photostrip').length).toEqual(propsData.preview.length);
  });
});
