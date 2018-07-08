import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListBooks extends Component {

    render() {
        return ( 
        	<div > 
        	<p>Home </p>
        	<Link to= '/search' > Search </Link> 
        	</div>

        )
    }
}
export default ListBooks