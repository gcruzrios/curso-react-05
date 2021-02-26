import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-UseContext/AppRouter';
import { UserContext } from '../../../components/09-UseContext/UserContext';

describe('Pruebas en AppRouter', () => {
    
    const user = {
        id: 1,
        name:'Greivin',
        email: 'gcruzr@gmail.com'
    }
   
   
    const wrapper = mount (
    <UserContext.Provider value={{

        user
    }}>
         <AppRouter/>);
    </UserContext.Provider>
   );
       
   test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
       
   })
   
})
