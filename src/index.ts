import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeTiktokOauth.web.ts
// and on native platforms to ReactNativeTiktokOauth.ts
import ReactNativeTiktokOauthModule from './ReactNativeTiktokOauthModule';
import ReactNativeTiktokOauthView from './ReactNativeTiktokOauthView';
import { ChangeEventPayload, ReactNativeTiktokOauthViewProps } from './ReactNativeTiktokOauth.types';

// Get the native constant value.
export const PI = ReactNativeTiktokOauthModule.PI;

export function hello(): string {
  return ReactNativeTiktokOauthModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeTiktokOauthModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeTiktokOauthModule ?? NativeModulesProxy.ReactNativeTiktokOauth);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeTiktokOauthView, ReactNativeTiktokOauthViewProps, ChangeEventPayload };
