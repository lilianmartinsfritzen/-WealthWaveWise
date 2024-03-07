import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueGray150,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: colors.blueGray200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userWrapper: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  user: {
    marginLeft: 17,
  },
  userGreeting: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "SairaCondensed-Regular",
  },
  userName: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "SairaCondensed-Regular",
  },
  icon: {
    color: colors.blue700,
    fontSize: 24,
  },
});
