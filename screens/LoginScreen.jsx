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
  ImageBackground,
} from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success!", "Successfully logged in!", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    } catch (error) {
      //   console.log(error);
      Alert.alert("Alert", "Login failed, empty fields/no user!", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Images/backGround.jpeg")}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
    >
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
          <View
            style={{
              paddingHorizontal: 18,
              backgroundColor: "#ffffff",
              padding: 10,
              width: "100%",
              borderRadius: 8,
              opacity: 0.8
            }}
          >
            <TextInput
              style={{
                borderWidth: 1,
                padding: 8,
                fontSize: 14,
                borderRadius: 6,
                marginTop: 30,
              }}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                marginTop: 20,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 6
              }}
            >
              <TextInput
                style={{
                  fontSize: 14,
                  flex: 1
                }}
                value={password}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                secureTextEntry={hidePassword}
              />
              <Ionicons
                onPress={() => setHidePassword(false)}
                name="eye-outline"
                size={24}
                color="black"
              />
            </View>

            {loading ? (
              <ActivityIndicator size={"large"} color="#0000ff" />
            ) : (
              <>
                {/* // lOGIN BUTTON  */}
                <TouchableOpacity
                  onPress={signIn}
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
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </>
            )}

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  marginTop: 40,
                  fontSize: 12,
                  color: "gray",
                  textDecorationLine: "underline",
                  alignSelf: "center",
                }}
              >
                Don't have an account? Sign Up!
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
