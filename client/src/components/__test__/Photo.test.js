import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Photo from '../Photo.jsx';

describe ('Photo', () => {
  xit('should render correctly', () => {
    const PhotoComponent = shallow(<Photo />);
    expect(PhotoComponent).toMatchSnapshot();
  });

  xit('should render a photo', () => {
    const url = "http://example.com";
    const PhotoComponent = shallow(<Photo url={url} />);
    expect(PhotoComponent.find('.photo').exists()).toBe(true);
  });
});
