import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../App';
import axios from 'axios';
import sampleData from '../../sampleData.js';

jest.mock('axios');

describe('App', () => {
  xit('should pass App snapshot test', async () => {
    const flushPromises = () => new Promise((resolve) => setImmediate(resolve));
    const AppComponent = shallow(<App />);
    await flushPromises();
    AppComponent.update();
    expect(AppComponent).toMatchSnapshot();
  });

  xit('should test axios call', async () => {
    const res = {data: sampleData};
    axios.get.mockImplementationOnce( () => Promise.resolve(res));
    const AppComponent = shallow(<App />);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

//  it('returns first hotel', async () => {
//    const hotel = App.getData();
//    expect(hotel[0]._id).toEqual("5eed5e121b81ed33e65a8b90")
//  })

  // it('should display loading text', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('div').text()).toBe('Loading...');
  // });

  // it('should fetch data from the API', async () => {
  //   const testData = sampleData;
  //   const response = {data: testData};
  //   mockAxios.get.mockImplementationOnce( () => Promise.resolve(response) );
  //   const mock = shallow(<App />);
  //   const test = await mock.componentDidMount();
  //   expect(test).toEqual(testData);
  //   expect(mockAxios.get).toHaveBeenCalledTimes(1);

    // App.getData().then(response => expect(response.data).toEqual(testData));

    // mockAxios.get.mockImplementationOnce( () =>
    //   Promise.resolve({
    //     data: {sampleData}
    //   });
    // );
    // const images = await
    // await expect()
  // });