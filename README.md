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
usePdaScan({
    onEvent(e) {
        console.log(333);
        console.log(e);
    },
    onError(e) {
        console.log(666);
        console.log(e);
    },
    trigger: "always",
  });
```
