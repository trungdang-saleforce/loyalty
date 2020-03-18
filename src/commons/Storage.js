import AsyncStorage from "@react-native-community/async-storage";
import { TOKEN_KEY } from "./Constants";


export default class Storage {
  
  static async getToken() {
    try {
      return await AsyncStorage.getItem(TOKEN_KEY).then((data) => {
        return data
      })
    }catch (e) {
      return null
    }
  }

}