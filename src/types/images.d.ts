// Allow image imports to compile

declare module '*.jpg' {
    const value: any;
    export = value;
}