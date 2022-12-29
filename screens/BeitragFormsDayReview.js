import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function RevieForm2({ addJourney }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", days: "", zusammenfassung: "", pic: "" }}
        onSubmit={(values, actions) => {
          addJourney(values);
          actions.resetForm();
          console.log(values);
        }}
      >
        {(probs) => (
          <View style={styles.inputWrapper}>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Titel" onChangeText={probs.handleChange("title")} value={probs.values.title} />
            </View>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Wohin gings" onChangeText={probs.handleChange("body")} value={probs.values.body} />
            </View>
            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Was hast du erlebt?" onChangeText={probs.handleChange("zusammenfassung")} value={probs.values.zusammenfassung} />
            </View>

            <View style={styles.input}>
              <TextInput style={globalStyles.input} placeholder="Foto hinzufügen" onChangeText={probs.handleChange("pic")} value={probs.values.pic} />
            </View>
            <View style={styles.Buttonv}>
              <Button title="erstellen" color={"green"} onPress={probs.handleSubmit}></Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  Buttonv: {
    paddingTop: 60,
  },
  input: {
    padding: 10,
  },
});
