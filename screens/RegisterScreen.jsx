import React, { lazy, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Alert,
  StatusBar,
} from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      Alert.alert("Success!", "Ok!", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert("Alert", "Registration failed!", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    } finally {
      setLoading(false);
      navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 12,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <StatusBar backgroundColor="white" />
      <KeyboardAvoidingView behavior="padding">
        <View style={{ paddingHorizontal: 18 }}>
          <TextInput
            style={{
              borderWidth: 1,
              padding: 8,
              fontSize: 14,
              borderRadius: 6,
            }}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={{
              borderWidth: 1,
              padding: 8,
              marginTop: 20,
              fontSize: 14,
              borderRadius: 6,
            }}
            value={password}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            secureTextEntry={true}
          />

          {loading ? (
            <ActivityIndicator size={"large"} color="#0000ff" />
          ) : (
            <>
              {/* SIGN UP BUTTON  */}
              <TouchableOpacity
                onPress={signUp}
                style={{
                  backgroundColor: "#000000",
                  marginTop: 16,
                  padding: 14,
                  alignItems: "center",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "",
                    fontSize: 16,
                    fontWeight: "bold",
                    letterSpacing: 4,
                  }}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              marginTop: 40,
              fontSize: 12,
              color: "gray",
              textDecorationLine: "underline",
              alignSelf: "center",
            }}
          >
            Already with account? Sign In
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RegisterScreen;
