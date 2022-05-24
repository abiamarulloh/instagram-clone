/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: "home",
            },
          },
          TabExplore: {
            screens: {
              TabExploreScreen: "explore",
            },
          },
          TabProfile: {
            screens: {
              TabProfileScreen: "profile",
            },
          },
          TabCart: {
            screens: {
              TabCartScreen: "cart",
            },
          },
          TabFavorite: {
            screens: {
              TabFavoriteScreen: "favorite",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
