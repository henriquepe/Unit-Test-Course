import { Platform, StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const changeHightScoreStyles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 20,
    height: 240,
    backgroundColor: colors.yellow,
    borderRadius: 8,
    position: "absolute",
    top: 140,
    left: 20,
    zIndex: 2,
  },

  title: {
    fontSize: 22,
    color: colors.black,
    fontWeight: "bold",
  },

  input: {
    marginTop: 16,
    width: "90%",
    height: 40,
    fontSize: 24,
    color: colors.black,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: colors.blur,
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? "7%" : "15%",
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 32,
    marginTop: 20,
    color: colors.white,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },

  subtitleBold: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },

  changePointsButton: {
    marginTop: 16,
    backgroundColor: colors.yellow,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
  },

  changePointsButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },

  smallScoreWrapper: {
    marginTop: 32,
    marginBottom: 8,
    flexDirection: "row",
  },

  smallScoreValue: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },

  smallScoreDivider: {
    width: 1,
    height: "100%",
    backgroundColor: colors.white,
    marginHorizontal: 12,
  },

  scoreWrapper: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: "row",
  },

  scoreValue: {
    fontSize: 80,
    color: colors.white,
    fontWeight: "bold",
    width: "55%",
    textAlign: "center",
  },

  scoreValueIdentifierWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },

  scoreValueIdentifier: {
    fontSize: 36,
    color: colors.white,
    fontWeight: "bold",
  },

  scoreDivider: {
    width: 1,
    height: "100%",
    backgroundColor: colors.white,
    marginHorizontal: 12,
  },

  counterButtonsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },

  counterButton: {
    borderRadius: 8,
    backgroundColor: colors.blur,
    paddingVertical: 14,
    width: "48%",
  },

  counterButtonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },

  optionButtonsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },

  optionButton: {
    borderRadius: 8,
    backgroundColor: colors.gradientBackground.start,
    paddingVertical: 14,
    width: "48%",
  },

  optionButtonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
});
