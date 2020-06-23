import React, { useState } from "react";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";
import store from "./src/store";

export default function App() {
  enableScreens();
  const [isReady, setIsReady] = useState(false);
  if (isReady == false) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
