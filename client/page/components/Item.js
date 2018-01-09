import React from 'react'
export default ({item, onClick}) =>
<div className="segment">
	<div className="delete" onClick={()=>onClick(item.id, 'del')}>x</div>
	<div>{ item.title }</div>
	<div className="action">
		<span onClick={()=>onClick(item.id, 'dec')}>-</span>
		<span>{ item.count }</span>
		<span onClick={()=>onClick(item.id, 'inc')}>+</span>
	</div>
</div>
