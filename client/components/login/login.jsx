import React from 'react'
import { Center, Page, VBox, Box } from 'react-layout-components';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';


export const Login = React.createClass({
  displayName: 'Login',
  render(){
    return(
      <Page>
        <Center>
          <VBox>
            <VBox>
            <RaisedButton
              label='Login with Google'
              style={{
                'margin' : '10px auto',
                'width' : '250px',
              }}/>
            <RaisedButton
              label='Login with Facebook'
              backgroundColor='#415dae'
              style={{
                'margin' : '10px auto',
                'width' : '250px',
                'margin' : '0 auto',
              }}
              facebook/>
            </VBox>
            <Divider style={{
              'backgroundColor' : "#e0e0e0",
              "width" : '75vw',
              'marginTop' : '20px'
            }}/>
            <VBox>
              <TextField
              floatingLabelText='Username'/>
              <TextField
              floatingLabelText='Password'/>
              <RaisedButton
              label='Login'
              primary/>
            </VBox>
          </VBox>
        </Center>
      </Page>

    )
  }
})
