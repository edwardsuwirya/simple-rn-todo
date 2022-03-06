import {LOGIN_PATH} from "../../src/navigation/NavigationPath";

describe('Navigation Helper', () => {
    jest.mock('../../src/navigation/RootNavigation', () => (
        {
            navigate: jest.fn()
        }
    ));
    const importModule = (test) => {
        return Promise.all([
            import('../../src/navigation/RootNavigation'),
            import('../../src/navigation/NavigationHelper')])
            .then(([moduleRootNavigation, moduleNavigationHelper]) => {
                test(moduleRootNavigation, moduleNavigationHelper);
            });
    }
    it('navigate to Login', () => {
        return importModule((moduleRootNavigation, moduleNavigationHelper) => {
            const nav = jest.spyOn(moduleRootNavigation, "navigate");
            moduleNavigationHelper.goToLogin();
            expect(nav).toHaveBeenCalledWith(LOGIN_PATH, null, true)
        })
    });
    it('navigate to screen', () => {
        return importModule((moduleRootNavigation, moduleNavigationHelper) => {
            const nav = jest.spyOn(moduleRootNavigation, "navigate");
            moduleNavigationHelper.goToScreen('path', false);
            expect(nav).toHaveBeenCalledWith('path', null, false)
        })
    });
    it('navigate to screen with params', () => {
        return importModule((moduleRootNavigation, moduleNavigationHelper) => {
            const nav = jest.spyOn(moduleRootNavigation, "navigate");
            moduleNavigationHelper.goToScreenWithParams('path', {}, false);
            expect(nav).toHaveBeenCalledWith('path', {}, false)
        })
    });
})
