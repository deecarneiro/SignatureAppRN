import React, {useRef} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

const Sign = ({onOK, onClear}) => {
  const ref = useRef();

  const handleSignature = signature => {
    console.log(signature);
    onOK(signature);
  };

  const handleClear = signature => {
    ref.current.clearSignature();
  }

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  }

  const style = `.m-signature-pad--footer {display: none; margin: 0px;} 
  body {
      background: url("");
  }
  .m-signature-pad {
    position: absolute;
    font-size: 10px;
    width: 80%;
    height: 100%;
    border: 1px black solid;
    bottom: 0;
    left: 10%
  }
  
  .m-signature-pad:before, .m-signature-pad:after {
      position: absolute;
    z-index: -1;
    content: "";
      width: 40%;
      height: 10px;
      left: 20px;
      bottom: 10px;
  }
  .m-signature-pad:after {
	left: auto;
	right: 20px;
}
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
`;

  return (
    <View style={styles.container}>
      <SignatureScreen
          ref={ref}
          onOK={handleSignature} 
          onClear={handleClear}
          webStyle={style}
          rotated
      />
      <View style={styles.row}>
        <Button
            title="Clear"
            onPress={handleClear}
        />
        <Button
          title="Confirm"
          onPress={handleConfirm}
        />
      </View>
     </View>
  );
}

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'flex-start',
    height: 250,
    padding: 10,
    
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    transform: [{ rotate: '-90deg'}],
    marginTop: "100%",
    width: "25%",

  }
});