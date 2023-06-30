import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  Image,
} from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <StatusBar backgroundColor={"white"} />
      <Text>{FIREBASE_AUTH.currentUser?.email}</Text>
      <Text>{FIREBASE_AUTH.currentUser?.displayName}</Text>
   

      <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
