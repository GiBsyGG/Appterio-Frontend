import { StyleSheet } from "react-native";

export const colors = {
  white: "#FFFFFF",
  white1: "#F9F9F9",
  white2: "#F1F0F3",
  white3: "#D8D8DF",
  white4: "#C7C7D1",
  black: "#000000",
  black1: "#0B0B0E",
  black2: "#151519",
  black3: "#1F1F24",
  black4: "#2E2E38",
  gray1: "#B3B3C1",
  gray2: "#9D9DAF",
  gray3: "#83839A",
  gray4: "#6A6A81",
  primaryBlue: "#0A78CC",
  lightBlue: "#CCECFE",
  darkBlue: "#001A58",
  primaryGreen: "#507C20",
  lightGreen: "#E6EDB1",
  darkGreen: "#1A2B0A",
  primaryRed: "#EE4343",
  lightRed: "#FFCFCF",
  darkRed: "#580000",
  primaryOrange: "#D98634",
  lightOrange: "#FFF2DD",
  darkOrange: "#5A2F00",
};

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 32,
  xxxlarge: 48,
};

export const spacing = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

export const itemsSizes = {
  tiny: 32,
  small: 48,
  medium: 64,
  large: 96,
  xlarge: 128,
};

export const globalStyles = StyleSheet.create({
  mainTitle: {
    fontSize: fontSizes.xxxlarge,
    fontFamily: "Inter-Bold",
    color: colors.black4,
    marginBottom: spacing.medium,
  },

  grayTitle: {
    fontSize: fontSizes.large,
    fontFamily: "Inter-Bold",
    color: colors.gray4,
  },

  screenTitle: {
    fontSize: fontSizes.xxlarge,
    fontFamily: "Inter-Bold",
    color: colors.black4,
    marginBottom: spacing.medium,
  },

  sectionTitle: {
    fontSize: fontSizes.large,
    fontFamily: "Inter-Bold",
    color: colors.black4,
  },

  title: {
    fontSize: fontSizes.medium,
    fontFamily: "Inter-SemiBold",
    color: colors.black4,
  },

  text: {
    fontSize: fontSizes.medium,
    fontFamily: "Inter-Medium",
    color: colors.gray4,
  },

  smallTitle: {
    fontSize: fontSizes.small,
    fontFamily: "Inter-SemiBold",
    color: colors.black4,
  },

  smallText: {
    fontSize: fontSizes.small,
    fontFamily: "Inter-Medium",
    color: colors.gray4,
  },

  lightText: {
    fontSize: fontSizes.medium,
    fontFamily: "Inter-Regular",
    color: colors.gray2,
  },
});
