import React from "react";
import { CheckBox, Icon, ButtonGroup } from "react-native-elements";
import {
  StatusBar,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import colors from "../assets/colors";
import Touchable from "../components/Touchable";

export default class OcorrenciaScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    temVitimas: false,
    qtdVitimas: null
  };

  _updateField(name, value) {}

  _renderHeader() {
    return (
      <View style={styles.header}>
        <StatusBar
          backgroundColor={styles.primaryCOlor}
          barStyle="dark-content"
        />
        <View style={styles.headerTile} />
        <View style={styles.headerTile}>
          <Text> Nova Ocorrencia </Text>
        </View>
        <View style={[styles.headerTile, styles.headerTileLeft]}>
          <Touchable>
            <Icon
              size={30}
              name="ios-close"
              type="ionicon"
              onPress={() => this.props.navigation.goBack()}
            />
          </Touchable>
        </View>
      </View>
    );
  }

  _maybeRenderVitimas() {
    const { qtdVitimas, temVitimas } = this.state;

    const buttons = ["1", "2", "3", "4", "5", " Mais "];

    if (!temVitimas) return null;

    return (
      <View>
        <Text style={styles.label}> Quantidade de Vitimas </Text>
        <ButtonGroup
          onPress={qtdVitimas => this.setState({ qtdVitimas: qtdVitimas + 1 })}
          selectedIndex={qtdVitimas !== null ? qtdVitimas - 1 : null}
          buttons={buttons}
        />
      </View>
    );
  }

  render() {
    const { temVitimas } = this.state;

    return (
      <View style={styles.container}>
        {this._renderHeader()}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <CheckBox
            checked={temVitimas}
            checkedColor={colors.dangerColor}
            onPress={() => this.setState({ temVitimas: !temVitimas })}
            title="Tem vitimas?"
          />

          {this._maybeRenderVitimas()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTile: {
    padding: 8
  },
  headerTileLeft: {
    paddingRight: 16,
    paddingTop: 0
  },

  headerTileIcon: {
    fontSize: 30
  },
  contentContainer: {
    paddingTop: 30
  },
  orangeBackground: {
    backgroundColor: colors.warningColor
  },
  greenBackground: {
    backgroundColor: colors.successColor
  },
  label: {
    padding: 8,
    fontSize: 14
  },
  tileSetContainer: {
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 8
  },
  tileButton: {
    margin: 0,
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.primaryCOlor,
    height: 120,
    minWidth: "40%",
    flex: 1
  },
  tileTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 14
  },
  tileAccent: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  }
});
