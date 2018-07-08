import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBooks extends Component {

    render() {
        return ( 
        	<div > 
        	<Link to= '/' > Home </Link> 
        	<p>Search</p>
        	</div>

        )
    }
}
export default SearchBooks