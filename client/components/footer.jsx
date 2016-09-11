import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';
import Divider from 'material-ui/Divider';

export const Footer = React.createClass({
  displayName: "Footer",
  tabStyle: {
    box: {
      width: '20vw',
      textAlign: 'center'
    },
    text: {
      margin : '0 auto'
    }
  },
  render(){
    return (
        <VBox style={{
          'position' : 'absolute',
          'bottom' : '0',
          'height' : '60px'
        }}
        justifyContent='space-between'>
          <Divider style={{
            'backgroundColor' : "#e0e0e0",
            'width' : '100vw'
          }}/>
          <Box>
            <Box style={this.tabStyle.box}>
            <p style={this.tabStyle.text}>My Picks</p>
            </Box>
            <Box style={this.tabStyle.box}>
            <p style={this.tabStyle.text}>League Picks</p>
            </Box>
            <Box style={this.tabStyle.box}>
            <p style={this.tabStyle.text}>Standings</p>
            </Box>
            <Box style={this.tabStyle.box}>
            <p style={this.tabStyle.text}>Weekly Scores</p>
            </Box>
            <Box style={this.tabStyle.box}>
            <p style={this.tabStyle.text}>My Account</p>
            </Box>
          </Box>
        </VBox>
    )
  }
})
