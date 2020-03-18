/*
*
@author tri.tran on 2/15/19
*
*/
import React from 'react';
import { Platform, Dimensions, Text } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get(
  "window"
);

export const AES_KEY = "LOYALTY_AES_KEY";
export const PAGE_SIZE = 10;

export const TOKEN_KEY = "12j098y3bd938ju9";

export const AVATAR_DEFAULT = 'http://triqtran.github.io/images/loyalty/others/profile-default.png';

export const PERCENT = 160 / 375;

export const appScreenName = {
  splash: "splash",
  login: "login",
  home: "home",
  aboutme: "aboutme",
  profile: "profile",
  webview: "webview"
};

export const homeTabName = {
  product: "product",
  specialOffer: "specialOffer",
  search: "search",
  reward: "reward",
  more: "more"
};

export const searchScreenName = {
  searchMain: "searchMain",
  searchDetail: "searchDetail"
};

export const rewardTabName = {
  membership: 0,
  voucher: 1,
  history: 2,
  myreward: 3,
};

export const appStyleConstants = {
  iphoneXPadding: Platform.OS === "ios" ? ifIphoneX(25, 0) : 0,
  smallFont: 13,
  mediumFont: 14,
  largeFont: 16,
  bigFont: 18,
  normalFontColor: "#666666",
  UI_ITEM_HEIGHT: Platform.OS === "ios" ? 46 : 50,
  UI_BORDER_RADIUS: 4,
  LARGE_SCREEN_MARGIN: 20,
  NORMAL_SCREEN_MARGIN: 15,
  SMALL_SCREEN_MARGIN: 10,
  BORDER_COLOR_GRAY: "rgba(228, 228, 228, 1)",
  PERCENT_INPUT: 37 / 375
};

export const OS = {
  IOS: 1,
  Android: 2
};

export const HEADER_TYPE = {
  BACKGROUND_IMAGE: 0,
  SEARCH: 1,
  TITLE: 2
};

export const HOME_TABS = {
  product: {
    name: "Home",
    uri: require("../../res/home-icon.png"),
    uriFocus: require("../../res/home-icon-focus.png")
  },
  specialOffer: {
    name: "Special",
    uri: require("../../res/gift-icon.png"),
    uriFocus: require("../../res/gift-icon-focus.png")
  },
  search: {
    name: "Search",
    uri: require("../../res/search-icon.png"),
    uriFocus: require("../../res/search-icon-focus.png")
  },
  reward: {
    name: "Reward",
    uri: require("../../res/star-icon.png"),
    uriFocus: require("../../res/star-icon-focus.png")
  },
  more: {
    name: "More",
    uri: require("../../res/more-icon.png"),
    uriFocus: require("../../res/more-icon-focus.png")
  }
};

export const INTERESTED = [
  { title: "Special Offers", value: "1", isChoose: false },
  { title: "Food", value: "2", isChoose: false },
  { title: "Drinks", value: "3", isChoose: false },
  { title: "Phone Cards", value: "4", isChoose: false }
];

export const ERROR_CODE = {
  FIRST_LOGIN: 1,
  SUCCESS: 0,
  ERROR: -1,
  FORBIDDEN: -403
};

export const DATETIME_TYPE = {
  DATE: "date",
  TIME: "time",
  DATE_TIME: "datetime"
};

export const DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
export const DEFAULT_TIME_FORMAT = "HH:mm:ss a";
export const DEFAULT_DATETIME_FORMAT =
  DEFAULT_DATE_FORMAT + " " + DEFAULT_TIME_FORMAT;
export const DATETIME_ZMT_FORMAT = "ddd, MMM DD YYYY A";
export const FULL_MONTH_FORMAT = "MMMM YYYY";

// create fade effect for App transition
export const fade = props => {
  const { position, scene } = props;

  const index = scene.index;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  };
};

export const REDEEM_DATA = [
  {
    vId: 1,
    vName: "Voucher 1",
    vPrice: 12000,
    vPoints: 50,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  },
  {
    vId: 2,
    vName: "Voucher 2",
    vPrice: 7000,
    vPoints: 30,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  },
  {
    vId: 3,
    vName: "Voucher 3",
    vPrice: 500,
    vPoints: 12,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  },
  {
    vId: 4,
    vName: "Voucher 4",
    vPrice: 130,
    vPoints: 3,
    vImage: "http://triqtran.github.io/images/loyalty/others/profile.png",
    uAvailables: 0
  }
];

export const HISTORY_VOUCHER = [
  {
    name: "Voucher 1",
    price: 12000,
    points: 50,
    description:
      "Congratulations, you earned 1 $232K Loyalty Voucher. Tap this voucher to redeem now."
  },
  {
    name: "Voucher 2",
    price: 700,
    points: 7,
    description:
      "Congratulations, you earned 1 $232K Loyalty Voucher. Tap this voucher to redeem now."
  },
  {
    name: "Voucher 3",
    price: 5000,
    points: 150,
    description:
      "Congratulations, you earned 1 $232K Loyalty Voucher. Tap this voucher to redeem now."
  },
  {
    name: "Voucher 4",
    price: 1300,
    points: 50,
    description:
      "Congratulations, you earned 1 $232K Loyalty Voucher. Tap this voucher to redeem now."
  }
];

export const STORE_DATA = [
  {
    storeId: 1,
    name: "Notfound",
    latitude: -37.814,
    longitude: 144.96332,
   
  }
];

export const HISTORY_DESCRIPTION = (point, price, voucherName) => {
  const text = ` $${price} ${voucherName}. Tap this voucher to redeem now.`
  return <Text>Congratulations, you earned <Text style={{color: '#2F80ED', fontWeight: 'bold'}}>{point}</Text> {text}</Text>
} 
