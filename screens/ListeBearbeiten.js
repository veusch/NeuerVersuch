import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, StyleSheet, AppRegistry, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView } from "react-native";
import BeitragForms from "./BeitragForms";
import RevieForm from "./BeitragForms";
import ReiseCard from "../Shared/ReiseCard";
import ListenForms from "./ListenForms";
import ReviewEintraege from "./reviewEintraege";
import ListenCard from "../Shared/ListenCard";

const ReisenScreen = ({ navigation }) => {
  const [eintraege, setEintraege] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState();

  const addJourney = (review) => {
    review.key = Math.random().toString();
    setEintraege((currentEintraeg) => {
      return [review, ...currentEintraeg];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons name="close" style={{ ...styles.modalToggle, ...styles.modalClose }} size={24} onPress={() => setModalOpen(false)} />
              <ListenForms addJourney={addJourney}> </ListenForms>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

        <FlatList
          data={eintraege}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("ListeNeu", item)}>
              <ListenCard>
                <Text>{item.title}</Text>
              </ListenCard>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <View style={styles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.Home}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reisen")}>
          <Text style={styles.Reisen}>Reisen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          <Text style={styles.Listen}>Listen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          <Text style={styles.Settings}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReisenScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  listenn: {
    flexDirection: "row",
  },

  Listen: {
    color: "lightgrey",
  },

  Footer: {
    backgroundColor: "grey",
    alignSelf: "stretch",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "lightgrey",
    marginTop: 20,
  },
  modalClose: {
    marginBottom: 0,
    marginClose: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 64,
    margin: 32,
    alignSelf: "stretch",
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    backgroundColor: "white",
  },

  text: {
    marginTop: 32,
  },

  button: {
    marginTop: 32,
    backgroundColor: "white",
    marginHorizontal: 32,
    alignSelf: "stretch",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 6,
  },
});
