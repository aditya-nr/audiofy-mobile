import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { usePlaybackStore } from "@/stores/player";

const Index = () => {
  const setUri = usePlaybackStore((s) => s.seturi);
  return (
    <View>
      <Button
        title="Play song 1"
        onPress={() =>
          setUri(
            "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3"
          )
        }
      />
    </View>
  );
};

export default Index;
