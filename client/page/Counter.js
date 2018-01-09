import React,{ Component } from 'react'
import axios from 'axios'
import person from 'sillyname'

import { makeRequest } from '../utils'
import Item  from './components/Item'
import style from './styles/counter.css'
import _ from 'lodash'

class Counter extends Component {
	constructor(props) {
		super(props)
		this.makeList = this.makeList.bind(this)
		this.handleAction = this.handleAction.bind(this)
		this.handleAddEntry = this.handleAddEntry.bind(this)
		this.handleTotalAndState = this.handleTotalAndState.bind(this)
		this.state = {items: [], total:0}
	}

	async handleAddEntry() {
		const title = person()
		const items = await makeRequest({ route: 'api/v1/counter', body: {title}, method: 'post'})
		this.handleTotalAndState(items)
	}

	async handleAction(id, action) {
		let request = { route: 'api/v1/counter', body: {id}, method: 'delete'}
		if(action == 'inc' || action == 'dec') {
			request = { route: `api/v1/counter/${action}`, body: {id}, method: 'post'}
		}
		const items = await makeRequest(request)
		this.handleTotalAndState(items)
	}

	async componentDidMount() {
		const items = await makeRequest({ route: 'api/v1/counters', method: 'get'})
		this.handleTotalAndState(items)
	}

	handleTotalAndState(items) {
			const { data } = items
			this.setState({ items: data, total: _.sumBy(data, 'count') });
	}

	makeList(opts) {
		return opts.map((item, i) => <Item key={i} item={item} onClick={this.handleAction}/>)
	}

  render() {
    return (
        <div className="counterBox">
					<h1 className="title">Counter App</h1>
					<div className="group">
	          <div className="segment">
							<span>Input</span>
							<div className="action" onClick={this.handleAddEntry}>+</div>
						</div>
					</div>
					<div className="group">
						{this.makeList(this.state.items)}
					</div>
					<div className="group">
	          <div className="segment">
							<span>Total</span>
							<div className="action">{this.state.total}</div>
						</div>
					</div>
        </div>
    )
  }
}
export default Counter;
