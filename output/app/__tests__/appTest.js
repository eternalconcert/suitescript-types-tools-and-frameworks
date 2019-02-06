define(["require", "exports", "../../jsx/createElement", "../app", "../recordView/recordViewRoute", "../routes/setFieldValueRoute", "./appTestUI", "../searchView/findRecordRoute", "../searchView/listRecordTypesRoute"], function (require, exports, createElement_1, app_1, recordViewRoute_1, setFieldValueRoute_1, appTestUI_1, findRecordRoute_1, listRecordTypesRoute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function appTest(request, response) {
        var app = new app_1.App();
        app.addRoute({
            name: 'mainPage',
            handler: function (o) {
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(appTestUI_1.MainPage, { userName: o.params.userName, categories: [], renderLink: app.renderLink.bind(app) }));
            }
        });
        app.addRoute(findRecordRoute_1.findRecordRoute(app));
        app.addRoute(recordViewRoute_1.recordViewRoute(app));
        app.addRoute(listRecordTypesRoute_1.listRecordTypesRoute(app));
        app.addRoute(setFieldValueRoute_1.setFieldValueRoute(app));
        app.dispatch({ request: request, response: response });
    }
    exports.appTest = appTest;
});