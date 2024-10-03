import * as React from 'react';

import { ReactNativeTiktokOauthViewProps } from './ReactNativeTiktokOauth.types';

export default function ReactNativeTiktokOauthView(props: ReactNativeTiktokOauthViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
