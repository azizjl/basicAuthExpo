import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { supabase } from "../initSupabase";

const Home = () => {
  const auth = useContext(AuthContext);
  const session = auth.session;
  console.log(session?.user);
  return (
    <View>
      <Text>{`id: ${session?.user?.id}`}</Text>
      <Pressable
        style={styles.button}
        onPress={async () => {
          const { error } = await supabase.auth.signOut();
          if (!error) {
            alert("Signed out!");
          }
          if (error) {
            alert(error.message);
          }
        }}>
        <Text style={styles.text}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
