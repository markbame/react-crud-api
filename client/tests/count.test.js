import React from 'react'
import Item from '../page/components/Item'
import makeRequest from '../utils/'

import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('Counter App', () => {
	const items = [
		{title:'big daddy', count: 4, id: '1afczd'},
		{title:'big', count: 0, id: 'acax00'},
		{title:'daddy', count: -1, id: 'acax11'},
		{title:'111', count: 300, id: 'acax11'},
		{title:'1test name', count: 1111, id: 'acax11'}
	]
	it( `List component renders consistently with various inputs`, () => {
		items.map((item) => {
			let component = renderer.create( <Item item={item} onClick={()=>{}}/> )
			let tree = component.toJSON()
				expect(tree).toMatchSnapshot()
		})
	})
})
