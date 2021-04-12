import React, { Component } from "react";
import {View, Text} from 'react-native'
import { SignatureScreen } from "./ui/Signature";
import Sign from "./ui/SignatureCustomButton";
import SignInScroll from "./ui/SignatureScroll";


class App extends Component {
  constructor(props) {
    super(props);

  }

  async componentDidMount() {
    
  }


  render() {
    return (
      <Sign
      onOK={()=>{console.log("SAVED")}}
      onClear={() =>{console.log("SAVED")}}/>
        // <SignatureScreen/>
        // <SignInScroll
        // scrollEnabled/>
   );
  }
}


export default App;
