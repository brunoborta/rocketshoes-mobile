import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.configure({ host })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;
  tron.clear();
}
