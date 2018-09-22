import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import {mount, shallow} from 'enzyme';
import List from './List';
import React from 'react';
import itemDetails from '../container/itemDetails';



function setup(){
    let props = {
        items: [
            //{title: 'test01', console: 'test01', year: '1999', id: 1},
            {title: 'test02', console: 'test02', year: '1999', id: 2}
        ]
    }

    return shallow(<List {...props}/>);
}


describe('List via enzyme', () => {
    it('render something here', () => {
        const wrapper  = setup();
        expect(wrapper.find('div').length).toBe(1);
    })
});