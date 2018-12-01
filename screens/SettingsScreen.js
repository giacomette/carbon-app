import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import colors from "../assets/colors";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <>
        <Header
          backgroundColor={colors.primaryCOlor}
          statusBarProps={{ barStyle: "light-content" }}
          centerComponent={{
            text: "Configurações",
            style: { color: "#fff" }
          }}
        />
        <ScrollView style={styles.container}>
          {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          <View />
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
