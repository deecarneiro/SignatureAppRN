import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Signature from 'react-native-signature-canvas';

const SignInScroll = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <View style={{height: 600}}>
        <Signature
          onOK={(img) => console.log(img)}
          onBegin={() => setScrollEnabled(false)}
          onEnd={() => setScrollEnabled(true)}
          descriptionText="Sign"
          clearText="Clear"
          confirmText="Save"
          imageType="image/jpeg"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScroll;