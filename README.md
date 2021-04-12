# SignatureAppRN

Simple signature test app using YanYuanFE/react-native-signature-canvas component.

## Requirements

- Node.js

## Libs/Frameworks

- React Native

## Dependencies

- [YanYuanFE/react-native-signature-canvas](https://github.com/YanYuanFE/react-native-signature-canvas#readme)

## Running

1. Clone the repository
```bash
$ git clone https://github.com/deecarneiro/SignatureAppRN.git
```

2. Open the cloned repository folder and install the dependencies
```bash
$ cd SignatureAppRN && npm install
```

3. Emulating...

  3.1 Android
 ```bash
 $ npx react-native run-android
 ````
  3.2 IOS
    3.2.1. Enter the ios folder and run:
     ```bash
     $ pod install
     ```
    3.2.2 Run on the IOS emulator/Device
    ```bash
     $ npx react-native run-ios
     ```
 
![IOS RUNNING](https://user-images.githubusercontent.com/44411176/114476251-451d8f00-9bd0-11eb-8153-78759c6ba01e.png)  

## Explanations


1. Importing Signature Canvas Component

```javascript
import Signature from 'react-native-signature-canvas';
```

2. Signature Component and Basic Parameters:

```javascript
  <Signature
  // handle when you click save button
  onOK={(img) => console.log(img)}
  onEmpty={() => console.log("empty")}
  // description text for signature
  descriptionText="Sign"
  // clear button text
  clearText="Clear"
  // save button text
  confirmText="Save"
  // String, webview style for overwrite default style, all style: https://github.com/YanYuanFE/react-native-signature-canvas/blob/master/h5/css/signature-pad.css
  webStyle={`.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`
  }
  autoClear={true}
  imageType={"image/svg+xml"}
/>
```

## License
[MIT](https://choosealicense.com/licenses/mit/)


