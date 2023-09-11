import React from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO: Logo - As web version does not support Lottie, there should be a conditional serving (as Lottie or gif) according to the platform.

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Lottie
          autoPlay
          loop
          source={require("../../assets/logo/sooon.json")}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        /> */}
        <Image
          source={require("../../assets/images/sooon.gif")}
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
