import React, {Component} from 'react';
import {Provider} from 'react-redux'
import configStore from "./src/redux/stores/Store";
import RootApp from './src/RootApp';

const store = configStore()
//disable warning
console.disableYellowBox = true;

//export function to return store
export function getStore() {
    return store
}

//root component
export default class App extends Component{
    render() {
        return (
            <Provider store={store}>
              <RootApp />
            </Provider>
        );
    }
}
