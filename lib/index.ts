import { NativeModules, NativeEventEmitter } from "react-native";
import { useEffect, useState } from "react";
const { PdaScan } = NativeModules;

export interface onEventType {
  (code: string): void;
}
export interface onErrorType {
  (error: { message: string }): void;
}
export enum triggerEnum {
  always = "always",
  change = "change",
}
export interface Options {
  onEvent?: onEventType;
  onError?: onErrorType;
  trigger?: triggerEnum;
}
const usePdaScan = ({
  onError,
  onEvent,
  trigger = triggerEnum.always,
}: Options) => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<any | undefined>(undefined);
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(PdaScan);
    var eventHandle = eventEmitter.addListener("onEvent", (event) => {
      if (trigger === triggerEnum.always) {
        setCode(event.code);
        onEvent && onEvent(event.code);
      }
      if (trigger === triggerEnum.change && event.code != code) {
        setCode(event.code);
        onEvent && onEvent(event.code);
      }
    });
    return () => {
      eventHandle.remove();
    };
  }, [onEvent, PdaScan]);
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(PdaScan);
    const eventHandle = eventEmitter.addListener("onError", (event) => {
      setError(event);
      onError && onError(event);
    });
    return () => {
      eventHandle.remove();
    };
  }, [onError, PdaScan]);
  return {
    code,
    error,
  };
};

export default usePdaScan;
