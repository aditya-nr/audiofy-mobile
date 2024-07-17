import { AVPlaybackStatus } from "expo-av/build/AV.types";
import { Sound } from "expo-av/build/Audio";
import { create } from "zustand";

type PlaybackState = {
  uri: string;
  PlayableInstance: Sound | null;
  PlayableStatus: AVPlaybackStatus | null;
  seturi: (uri: string) => void;
  setPlaybaleInstance: (instance: Sound | null) => void;
  setPlaybaleStatus: (instance: AVPlaybackStatus | null) => void;
};

export const usePlaybackStore = create<PlaybackState>((set) => ({
  uri: "",
  PlayableInstance: null,
  PlayableStatus: null,
  seturi: (uri: string) => set((state) => ({ uri })),
  setPlaybaleInstance: (instance: Sound | null) =>
    set((state) => ({ ...state, PlayableInstance: instance })),
  setPlaybaleStatus: (status: AVPlaybackStatus | null) =>
    set((state) => ({ ...state, PlayableStatus: status })),
}));
