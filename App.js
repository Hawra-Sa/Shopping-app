import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./source/navigation";
import { Provider } from "react-redux"; // Fournisseur Redux
import store from "./source/store"; // Importation du store Redux

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});