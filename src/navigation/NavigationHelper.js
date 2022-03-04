import * as RootNavigation from './RootNavigation';
import {LOGIN_PATH} from "./NavigationPath";

export function goToLogin() {
    RootNavigation.navigate(LOGIN_PATH);
}

// export function goToError() {
//     RootNavigation.navigate("Error");
// }
