import React from 'react'
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {fromLonLat} from 'ol/proj'

import FooComponent from '../FooComponent'

configure({ adapter: new Adapter() });

describe('FooComponent', () => {

  it('should display hi', () => {
    expect(() => mount(<FooComponent message={"hey bro"}/>)).not.toThrowError();
  });

  it('should center on birmingham', () => {
    const wrapper = mount<FooComponent>(<FooComponent message={"hola hola"}/>)

    const map = wrapper.instance().getMap()
    expect(map).not.toBeNull()

    const center = map.getView().getCenter()
    expect(center).toStrictEqual(fromLonLat([-1.81185, 52.44314]))
  })
})
