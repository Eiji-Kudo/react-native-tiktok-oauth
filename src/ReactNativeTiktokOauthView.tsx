import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeTiktokOauthViewProps } from './ReactNativeTiktokOauth.types';

const NativeView: React.ComponentType<ReactNativeTiktokOauthViewProps> =
  requireNativeViewManager('ReactNativeTiktokOauth');

export default function ReactNativeTiktokOauthView(props: ReactNativeTiktokOauthViewProps) {
  return <NativeView {...props} />;
}
