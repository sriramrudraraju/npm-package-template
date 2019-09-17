import React from 'react';
import { shallow } from 'enzyme';

import HelloWorld from './hello-world.component';

describe('Component: HelloWorld', () => {
  it('renders without crashing', () => {
    shallow(<HelloWorld />);
  })
})