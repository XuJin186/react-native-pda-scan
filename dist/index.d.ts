export interface onEventType {
    (code: string): void;
}
export interface onErrorType {
    (error: {
        message: string;
    }): void;
}
export declare enum triggerEnum {
    always = "always",
    change = "change"
}
export interface Options {
    onEvent?: onEventType;
    onError?: onErrorType;
    trigger?: triggerEnum;
}
declare const usePdaScan: ({ onError, onEvent, trigger, }: Options) => {
    code: string;
    error: any;
};
export default usePdaScan;
