
/* 
Author : Jeffrey E. Uvero
Date: July 9,2018
*/

import React from 'react'

// Material Design=
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Portal from '@material-ui/core/Portal';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import logo from '../logo.svg';

const style = () => {
	link: {
		textDecoration:'none',
	},
}

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render ()	{
		return (
		     <div style={{padding:20}} >
			     <Grid lg={12} container>
			     	<Grid item lg={3} md={12} hidden-sm={12} xs={12} style={{border:'red',paddingLeft: 100}} >
	     	     		<img src={logo} style={{height:100, width:100}}/>
		     	    </Grid>
		     		<Grid item lg={9} md={12} sm={12} xs={12}>
		     			<Paper style={{padding:25}}>
		     				<Grid container>
		     					<Grid item lg={3} md={3} sm={3} xs={3}>
			     					<a href="#" style={style.link} >Home</a>
			     				</Grid>
			     				<Grid item lg={3} md={3} sm={3} xs={3}>
			     					<a href="#" >About Me</a>
			     				</Grid>
			     				<Grid item lg={3} md={3} sm={3} xs={3}>
			     					<a href="#" >Portfolio</a>
			     				</Grid>
			     				<Grid item lg={3} md={3} sm={3} xs={3}>
			     					<a href="#" >Blog</a>
			     				</Grid>
		     				</Grid>
		     			</Paper>
		     		</Grid>
			     </Grid>
		     </div>
		    );
	}	
}


export default Header; 

