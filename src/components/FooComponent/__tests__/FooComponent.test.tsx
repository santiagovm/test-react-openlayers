import React from 'react'
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FooComponent from '../FooComponent'

configure({ adapter: new Adapter() });

describe('FooComponent', () => {

  it('should display hi', () => {
    expect(() => mount(<FooComponent message={"hey bro"}/>)).not.toThrowError();
  });
})
