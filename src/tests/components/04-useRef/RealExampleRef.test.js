import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef'

describe('Pruebas en <RealExampleRef/>', () => {
    
    const wrapper = shallow( < RealExampleRef />)
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    });
    
    test('debe mostrarse el componente  <MultipleCustomHooks/>', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    });
    
})
