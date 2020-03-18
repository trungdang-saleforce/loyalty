/*
*
@author tri.tran on 1/29/19
*
*/

import {createReactNavigationReduxMiddleware, createReduxBoundAddListener} from 'react-navigation-redux-helpers';

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

export {
    reactNavigationMiddleware,
    addListener,
};