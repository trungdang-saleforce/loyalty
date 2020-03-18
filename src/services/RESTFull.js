import { getStore } from "../../App";
import { getStrings } from "../commons/Strings";
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';
import { isEmpty } from "../commons/Utils";
import { TOKEN_KEY } from "../commons/Constants";
import Storage from "../commons/Storage";
import { actions } from "../redux/actions";

const handling = async (_method, url, requestData) => {
	return await Storage.getToken().then((token) => {
		let authorization = (getStore().getState() && getStore().getState().users && getStore().getState().users.accessToken)
		?
		"Bearer " + getStore().getState().users.accessToken : null
		if(isEmpty(authorization) && !isEmpty(token)) {
			authorization = "Bearer " + token
		}
		if (!checkInternetConnection()) {
			return { error: -1, message: getStrings().noInternetConnection };
		}
		if (_method === 'GET' && !isEmpty(requestData)) {
			let parameter = '?'
			_.keys(requestData).forEach((param, key) => {
				parameter += '&' + param + '=' + requestData[param]
			})
			url += parameter
		}
		return {error: 0, data: {_method, url, requestData, authorization}}
	}).then((result) => {
		if(result.error < 0) {
			return result
		}
		const {_method, url, requestData, authorization} = result.data
		return fetch(url, {
			method: _method,
			headers: {
				"Content-Type": "application/json",
				Authorization: authorization,
				"Cache-Control": "no-cache"
			},
			body: _method !== 'GET' ? requestData : null,
		}).then(response => {
			return response.json()
		})
		.then(responseJson => {
			const error = _.get(responseJson, 'error', null) //ERROR_CODE.ERROR
			if(error === null) {
				return responseJson;
			}
			if(_.isString(error) && _.includes(_.toLower(error), 'token')) {
				getStore().dispatch(actions.doLogout());
				return { message: "Invalid access token"}
			}
			if(error < 0) {
				return responseJson; //{error: -1, message: _.get(responseJson.data, 'message', 'No message')}
			}
			if(_.includes(url, 'login')) {
				AsyncStorage.setItem(TOKEN_KEY, responseJson.data.token)
			}
			return responseJson;
		})
	})
}


function checkInternetConnection() {
	return true
	
}

export default class RESTFull {
	
	static get = (url, parameters) => {
		return handling('GET', url, parameters)
	}

	static post = (url, body) => {
		return handling('POST', url, body)
	}

	static put = (url, body) => {
		return handling('PUT', url, body)
	}
	
}