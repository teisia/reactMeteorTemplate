import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'


export const Main = React.createClass({
  displayName: "Main",
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{

    }
  },
  render(){
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
