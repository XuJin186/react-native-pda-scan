# react-native-pda-scan

## Getting started

`$ npm install react-native-pda-scan --save`

### Mostly automatic installation

`$ react-native link react-native-pda-scan`

## Supported

- [x] SEUIC(小码哥)-PDA
- [x] IData(盈达聚力)-PDA
- [x] UROVO(优博讯)-PDA
- [x] HONEYWELL(霍尼韦尔)-PDA
- [x] PL(攀凌)-PDA

## Usage

```javascript
import usePdaScan from "react-native-pda-scan";

const { code, error } = usePdaScan(
  {
   (code) => {
    console.log(code);
  },
  (error) => {
    console.log(error);
  },
  trigger:"always"  //always: An event is triggered each time the code is scanned。 change:Events are triggered when changes occur
  }

);
```
