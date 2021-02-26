import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-UseContext/HomeScreen';
import { UserContext } from '../../../components/09-UseContext/UserContext';

describe('Pruebas en HomeScreen', () => {
 
    const user = {
        name:'Greivin',
        email: 'gcruzr@gmail.com'
    }

    const wrapper = mount (
    <UserContext.Provider value={{
        user
    }}>
        < HomeScreen />);
    </UserContext.Provider>
    
    ); 
    test('debe de mostrarse correctamente ', () => {

    expect(wrapper).toMatchSnapshot();    

        
    })
    

})
