export const API_DOMAIN = 'http://127.0.0.1:3000';
export const API_VERSION = '';
const API_HOST = API_DOMAIN + API_VERSION;

// export const HEROKU_HOST = 'http://nin-loyalty-backend.herokuapp.com';
export const HEROKU_HOST = 'http://nin-sfdc-loyalty-backend.herokuapp.com'
export const HEROKU_API_VERSION = '/api/v1'
export const HEROKU_AUTH = '/auth'

const useHeroku = true

const API = useHeroku ? HEROKU_HOST + HEROKU_API_VERSION : API_HOST

export default APIs = {

    doAppData: API + '/app-data',

    doLogin: HEROKU_HOST + HEROKU_AUTH + '/login-create',

    doLogout: HEROKU_HOST + HEROKU_AUTH + '/logout',

    doProfile: API + '/user/profile',

    doCategories: API + '/product-categories',

    doSpecialOffer: API + '/specialoffer',

    doProduct: API + '/product',

    doStores: API + '/store',

    doNewProgramVoucher: API + '/program',

    doMyRewards: API + '/my-rewards',

    doHistoryVoucher: API + '/redeem-histories',

    doVoucher: API + '/redeem',

    doGoogleMapAPI: API + '/googlemap',

}
