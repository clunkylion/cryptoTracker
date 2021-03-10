import AsyncStorage from "@react-native-async-storage/async-storage";
class Storage {
  static instance = new Storage();
  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error("Storage error", error);
      return false;
    }
  };
  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error("get error", error);
      throw Error(error);
    }
  };
  multiGet = async (keys) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.error("Storage multiget Error", error);
      throw Error(error);
    }
  };
  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error("storage getAllKeys err", error);
      throw Error(error);
    }
  };
  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("storage revome error", error);
      return false;
    }
  };
}
export default Storage;
