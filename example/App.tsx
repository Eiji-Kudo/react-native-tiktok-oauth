import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeTiktokOauth from 'react-native-tiktok-oauth';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeTiktokOauth.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
