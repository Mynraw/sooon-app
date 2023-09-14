import React, { useCallback, useState } from "react";
import { Image, Platform } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from "lottie-react-native";
import { Text } from "../../components/Themed";

export default function TabOneScreen() {
  const [refreshing, setRefreshing] = useState<Boolean>(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      // TODO: Make this happen relevant with some API etc.
      setRefreshing(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#F8F8F8",
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={"transparent"}
            onRefresh={handleRefresh}
          />
        }
      >
        {Platform.OS === "ios" ? (
          <Lottie
            autoPlay
            loop={!!refreshing}
            source={require("../../assets/logo/sooon.json")}
            style={{ width: 90, height: 90, alignSelf: "center" }}
          />
        ) : (
          <Image
            source={require("../../assets/images/sooon.gif")}
            style={{
              width: 90,
              height: 90,
              alignSelf: "center",
            }}
          />
        )}
      </ScrollView>
      <Text style={{ textAlign: "center" }}>Merhabalar AQ</Text>
    </SafeAreaView>
  );
}
