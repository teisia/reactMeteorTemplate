import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { theme } from '../constants/theme'

import {Login}  from './login/login.jsx'

export const Main = React.createClass({
  displayName: "Main",
  mixins: [ReactMeteorData],
  childContextTypes:{
    muiTheme: React.PropTypes.object
  },
  getChildContext(){
    return{
      muiTheme: getMuiTheme(theme)
    }
  },
  getMeteorData(){
    return{
      loggedIn: false
    }
  },
  render(){
    if (!this.data.loggedIn) {
      return <Login/>
    }
    console.log('main is rendering')
    return (
      <Page>
        <Box>
          <h1>This is the page</h1>
        </Box>
      </Page>
    )
  }
})
