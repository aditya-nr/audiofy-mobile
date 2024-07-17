import { View, Text, Button } from "react-native";
import React from "react";
import { usePlaybackStore } from "@/stores/player";

const Home = () => {
  const setUri = usePlaybackStore((s) => s.seturi);
  return (
    <View>
      <Button
        title="Play song 2"
        onPress={() =>
          setUri(
            "https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3"
          )
        }
      />
    </View>
  );
};

export default Home;
