import React, { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../firebase";
import { ListItem, Avatar } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      //   headerLeft: () => (
      //     <View style={{ marginLeft: 20 }}>
      //       <Avatar rounded source={{ uri: auth?.currentUser?.photoUrl }} />
      //     </View>
      //   ),
    });
  }, []);
  return (
    <View>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
