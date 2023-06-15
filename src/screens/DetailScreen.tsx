import {
  ImageSourcePropType,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CommonStyle } from "../utils/CommonStyle";
import { NavigationProps } from "../utils/Navigation";
import { ScreenSize } from "../constants/Constant";
import { Spacing } from "../constants/Spacing";
import Animated from "react-native-reanimated";
import { useState } from "react";
import React from "react";

interface Game {
  icon: ImageSourcePropType;
  title: string;
  name: string;
  cat: string;
}

const Games = Array(10).fill({
  icon: require("../../assets/img/summer2.jpg"),
  title: "Apple Arcade",
  name: "TMNT Splintered Fate",
  cat: "Hành động",
});

export default function DetailScreen({ navigation, route }: NavigationProps) {
  const [didMount, setDidMount] = useState(false);
  const item = route.params.item;

  // useEffect(() => {
  //   setDidMount(true);
  // }, []);

  const renderItem = (item: Game, index: number) => {
    return (
      <Animated.View
        key={index}
        // entering={FadeIn.delay(index * 100 + 400)}
        style={{
          flexDirection: "row",
          paddingHorizontal: Spacing.medium,
          paddingBottom: Spacing.medium,
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 60, height: 60, borderRadius: Spacing.small }}
        />
        <View
          style={{
            justifyContent: "space-between",
            marginLeft: Spacing.medium,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.title}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>
          <Text style={{ fontWeight: "bold", color: "gray" }}>{item.cat}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: Spacing.medium,
            backgroundColor: "#edecf4",
            alignSelf: "center",
            padding: Spacing.tiny,
            paddingHorizontal: Spacing.small,
          }}
        >
          <Text style={{ color: "#0871ed", fontWeight: "bold" }}>NHẬN</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <Animated.View
      sharedTransitionTag={`item.${item.id}.container`}
      style={[
        CommonStyle.flex1,
        {
          borderRadius: 16,
          backgroundColor: "white",
        },
      ]}
    >
      <ScrollView style={[CommonStyle.flex1]}>
        <Animated.Image
          source={item.src}
          style={{
            width: ScreenSize.width,
            height: (ScreenSize.width * 3) / 4,
          }}
          sharedTransitionTag={`item.${item.id}.image`}
        />
        <Animated.View
          style={{
            margin: Spacing.medium,
            marginRight: 3 * Spacing.medium,
          }}
          sharedTransitionTag={`item.${item.id}.title`}
        >
          <Text style={{ color: "gray", fontWeight: "bold" }}>
            HÃY CÙNG CHƠI
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            20 Game Mới Cập Bến Apple Arcade
          </Text>
        </Animated.View>
        {/* {didMount && Games.map(renderItem)} */}
      </ScrollView>
      {/* {didMount ? ( */}
      <TouchableOpacity
        style={{ position: "absolute", top: 56, right: 16 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="closecircle" size={24} color="gray" />
      </TouchableOpacity>
      {/* ) : null} */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    paddingVertical: 44,
  },
});
