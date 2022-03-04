import * as RootNavigation from './RootNavigation';
import {LOGIN_PATH} from "./NavigationPath";

export function goToLogin() {
    RootNavigation.navigate(LOGIN_PATH, null, true);
}

export function goToScreenWithParams(routePath, params = {}, isReplace) {
    RootNavigation.navigate(routePath, params, isReplace);
}

export function goToScreen(routePath, isReplace) {
    RootNavigation.navigate(routePath, null, isReplace);
}

// export function goToError() {
//     RootNavigation.navigate("Error");
// }
