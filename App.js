
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "./Styles.js"
import Word from "./components/Word/Word";
import AddWord from "./components/AddWord/AddWord";
import Header from "./components/Header/Header.js";
import { Provider } from "react-redux";
import { Store } from "./components/Context/Store.js";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {







  const [modal, setModal] = useState(false);

  return (

    <Provider store={Store}>

      <View
        style={[
          Style.container,
          { backgroundColor: !modal ? "white" : "rgba(37, 37, 37, 0.4)" },
        ]}
      >
        <View style={Style.headerContainer}>

          <Header />
        </View>
        <StatusBar style="auto" />
        <Word original={"Word"} translation={"Kelime"} />
        <AddWord modal={{ modal, setModal }} />
      </View>
    </Provider>

  );
}





