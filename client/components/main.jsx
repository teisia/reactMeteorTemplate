import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'
import { Action, Dispatch, Register, State } from 'meteor/meteorflux:meteorflux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { theme } from '../constants/theme'

import { Login }  from './login/login.jsx'

import { Footer } from './footer.jsx'

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
      loggedIn: State.get(App.Constants.State.loggedIn)
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
          <Footer />
        </Box>
      </Page>
    )
  }
})
