var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../../jsx/createElement", "../../jsx/util/Bind", "../app", "../recordView/recordViewRoute", "../routes/setFieldValueRoute", "../routes/findRecordRoute", "../searchView/listRecordTypesRoute", "../routes/setSublistFieldValueRoute", "./miniDebuggerApp", "../../jsx/renderInHtml", "../searchView/searchViewRoute", "../routes/serveFileRoute", "../routes/serveSPAIndexRoute"], function (require, exports, createElement_1, Bind_1, app_1, recordViewRoute_1, setFieldValueRoute_1, findRecordRoute_1, listRecordTypesRoute_1, setSublistFieldValueRoute_1, miniDebuggerApp_1, renderInHtml_1, searchViewRoute_1, serveFileRoute_1, serveSPAIndexRoute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // example application using ./app framework. It implements a simple MainPage route (see appTestMainPage and then uses built in routes like recordView and searchView)
    function miniNetSuiteApp(request, response) {
        var app = new app_1.App();
        app.addRoute(mainPageRoute(app));
        app.addRoute(findRecordRoute_1.findRecordRoute(app));
        app.addRoute(recordViewRoute_1.recordViewRoute(app));
        app.addRoute(recordViewRoute_1.recordViewJsonRoute(app));
        app.addRoute(listRecordTypesRoute_1.listRecordTypesRoute(app));
        app.addRoute(listRecordTypesRoute_1.listRecordTypesResultRoute(app));
        app.addRoute(listRecordTypesRoute_1.listRecordTypesJsonRoute(app));
        app.addRoute(setFieldValueRoute_1.setFieldValueRoute(app));
        app.addRoute(setSublistFieldValueRoute_1.setSublistFieldValueRoute(app));
        app.addRoute(searchViewRoute_1.searchViewRoute(app));
        app.addRoute(searchViewRoute_1.searchViewJsonRoute(app));
        miniDebuggerApp_1.addMiniDebuggerRoutes(app);
        app.addRoute(serveFileRoute_1.serveFileRoute(app));
        app.addRoute(serveSPAIndexRoute_1.serveSPAIndexRoute(app));
        // also we set a default route that redirects to main page in case the url doesn't have any route or unknown one (alternatively we could show 404 page)  
        var defaultRoute = {
            name: 'redirectToMainPage',
            handler: function (o) {
                app.redirect({ redirect: app.renderLink({ routeName: 'mainPage', params: {} }) });
            }
        };
        app.setNoRouteParamRoute(defaultRoute);
        app.setNoRouteFoundRoute(defaultRoute);
        // finally we call dispatch() so the framework calls the routes implementation that matches request's url
        app.dispatch({ request: request, response: response });
    }
    exports.miniNetSuiteApp = miniNetSuiteApp;
    exports.MainPage = function (props, children) {
        return createElement_1.ReactLike.createElement("article", null,
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "dummy123" }),
            createElement_1.ReactLike.createElement("h1", null,
                "Welcome ",
                props.userName),
            "This is an experiment of mine (Sebasti\u00E1n Gurin) using JSX & TypeScript technologies to render server side pages. Try to use the buttons and links below to see some pages:",
            createElement_1.ReactLike.createElement("ul", null,
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { href: props.renderLink({
                            routeName: 'recordView',
                            params: { id: '7', type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false }
                        }) }, "record view link"),
                    "\u00A0 and \u00A0",
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'recordViewJson',
                            params: { id: '7', type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false }
                        }) }, "record json link"),
                    "\u00A0 and \u00A0",
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) { return fetchAndRenderHtml({
                            routeName: 'recordView',
                            params: { id: '7', type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false },
                            selector: '#mainView'
                        }); } }, "record view embedded")),
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { href: props.renderLink({
                            routeName: 'listRecordTypes',
                            params: { type: 'item' },
                        }) }, "listRecordTypes view link"),
                    "\u00A0 and \u00A0",
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) { return fetchAndRenderHtml({
                            routeName: 'listRecordTypes',
                            params: { dynamicResultsRender: true, type: 'item' },
                            selector: '#mainView'
                        }); } }, "listRecordTypes view embedded"),
                    "\u00A0 and \u00A0",
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'listRecordTypesJson',
                            params: { type: 'item' },
                        }) }, "listRecordTypesJson")),
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { href: props.renderLink({
                            routeName: 'debugger',
                            params: {},
                        }) }, "debugger"),
                    "\u00A0 and \u00A0",
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) { return fetchAndRenderHtml({
                            routeName: 'debugger',
                            params: { dynamicResultsRender: true },
                            selector: '#mainView'
                        }); } }, "debugger embedded")),
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { href: props.renderLink({
                            routeName: 'searchView',
                            params: {},
                        }) }, "searchView")),
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'serveFile',
                            params: { fileId: 88491 },
                        }) }, "serveFile with id 88491"),
                    createElement_1.ReactLike.createElement("br", null),
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'serveFile',
                            params: { name: 'app.js', folderId: 28898 },
                        }) }, "serveFile named app.js in folder 28898"),
                    createElement_1.ReactLike.createElement("br", null),
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'serveFile',
                            params: { name: 'app.js', folderId: 28898, outputMode: 'url' },
                        }) }, "serveFile print url of file named app.js in folder 28898"),
                    createElement_1.ReactLike.createElement("br", null),
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'serveFile',
                            params: { name: 'app.js', folderId: 28898, outputMode: 'redirectToUrl' },
                        }) }, "serveFile redirect to url of file named app.js in folder 28898")),
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'serveSPAIndex',
                            params: {
                                cssFiles: encodeURIComponent(JSON.stringify(["https://172.20.10.7:8080/src.7ed060e2.css"])),
                                jsFiles: encodeURIComponent(JSON.stringify(["https://127.0.0.1:8080/src.7ed060e2.js"])),
                            },
                        }) },
                        "serve SPA dummy index.html passing ",
                        createElement_1.ReactLike.createElement("a", { href: "https://127.0.0.1:8080/src.7ed060e2.js" }, ".js"),
                        " and ",
                        createElement_1.ReactLike.createElement("a", { href: "https://172.20.10.7:8080/src.7ed060e2.css" }, ".css"),
                        " file urls as params"),
                    createElement_1.ReactLike.createElement("br", null),
                    createElement_1.ReactLike.createElement("a", { target: "_blank", href: props.renderLink({
                            routeName: 'serveSPAIndex',
                            params: {
                                cssFiles: encodeURIComponent(JSON.stringify(["http://172.20.10.7:8080/src.7ed060e2.css"])),
                                jsFiles: encodeURIComponent(JSON.stringify(["http://127.0.0.1:8080/src.7ed060e2.js"])),
                            },
                        }) },
                        "same as before but loading from unsecure ",
                        createElement_1.ReactLike.createElement("a", { href: "http://127.0.0.1:8080/src.7ed060e2.js" }, ".js"),
                        " and ",
                        createElement_1.ReactLike.createElement("a", { href: "http://172.20.10.7:8080/src.7ed060e2.css" }, ".css"),
                        " file urls as params"))),
            createElement_1.ReactLike.createElement("div", { id: "mainView" }));
    };
    function mainPageRoute(app) {
        return {
            name: 'mainPage',
            handler: function (o) {
                return renderInHtml_1.renderInHTMLDocument(createElement_1.ReactLike.createElement(exports.MainPage, __assign({}, o.params, { userName: o.params.userName })));
            }
        };
    }
    exports.mainPageRoute = mainPageRoute;
});
