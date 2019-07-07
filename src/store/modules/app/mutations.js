import { set, toggle } from "@/utils/vuex";

export default {
  setDrawer: set("drawer"),
  setImage: set("image"),
  setColor: set("color"),
  toggleDrawer: toggle("drawer"),
  setErrorMessage: set("errorMessage"),
  toggleSnackbar: toggle("snackbar")
};
