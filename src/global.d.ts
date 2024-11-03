declare global {
  type React = typeof import('react');

  // ReactNative/Hermes globals
  var globalEvalWithSourceUrl: (script: string, sourceURL: string) => any;
  var nativePerformanceNow: typeof performance.now;
  var nativeModuleProxy: Record<string, any>;

  interface Window {
    [key: string]: any;
    vendetta: any;
  }
}

export {};
