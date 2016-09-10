import React from 'react'
import { Center, Page, VBox } from 'react-layout-components';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export const Login = React.createClass({
  displayName: 'Login',
  render(){
    return(
      <Page>
        <Center>
          <VBox>
            <TextField
              floatingLabelText='Username'/>
            <TextField
              floatingLabelText='Password'/>
            <RaisedButton
              label='Login'
              primary/>
          </VBox>
        </Center>
      </Page>

    )
  }
})
