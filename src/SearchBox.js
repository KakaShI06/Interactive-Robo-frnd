import React from 'react';

class SearchBox extends React.Component {
	render(){
		return (
			<div className= 'tc' >
				<input 
				type="text" 
				placeholder="Robot"
				onChange= {this.props.searchChange}
				 />
				
			</div>
			);
	}
}

export default SearchBox;