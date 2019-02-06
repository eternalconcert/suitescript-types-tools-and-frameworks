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
define(["require", "exports", "../misc/misc", "../jsx/createElement", "N/redirect", "./browserCode"], function (require, exports, misc_1, createElement_1, redirect_1, browserCode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var f = misc_1.find; // install array.prototype.find
    var App = /** @class */ (function () {
        function App() {
            this.routes = [];
        }
        App.prototype.addRoute = function (r) {
            this.routes.push(r);
        };
        App.prototype.dispatch = function (d) {
            this.currentDispatchOptions = d;
            var params = this.getParamsWithoutPrefix(d.request);
            var routeName = params["" + browserCode_1.ROUTEPARAMNAME_NOPREFIX];
            if (!routeName) {
                return this.notFound(d, "no route name given in url");
            }
            var route = this.routes.find(function (r) { return r.name === routeName; });
            if (!route) {
                return this.notFound(d, "no route found with name " + routeName);
            }
            // TODO: if route params are mandatory , verify that they were provided in url or fail
            if (route.contentType === 'json') {
                d.response.setHeader({ name: 'Content-Type', value: 'application/json; charset=UTF-8' });
            }
            var result = route.handler(__assign({}, d, { params: params }));
            if (result && route.contentType === 'json') {
                d.response.write(JSON.stringify(result));
            }
            else if (result && typeof result === 'string' && !route.contentType || route.contentType === 'html') {
                d.response.write("<script>\n" + browserCode_1.renderBrowserCode() + "\n" + createElement_1.ReactLike.getClientCode().map(function (c) { return c.code; }).join('\n') + "\n</script>");
                d.response.write(result);
            }
            // else if not result we assume the route already write in the response.
        };
        App.prototype.notFound = function (d, msg) {
            if (msg === void 0) { msg = 'Page not found'; }
            console.log("App Error: " + msg);
        };
        App.prototype.redirect = function (config) {
            redirect_1.redirect({ url: config.redirect + "&" + browserCode_1.ROUTEPARAMPREFIX + "messageFromRedirect=" + (config.messageFromRedirect || ''), });
        };
        App.prototype.getCurrentRealUrlSearchFragment = function () {
            var params = this.currentDispatchOptions.request.parameters;
            var otherParams = this.getOtherParams();
            var otherParamsUrl = Object.keys(otherParams).map(function (p) { return p + "=" + otherParams[p]; }).join('&');
            var routeNameUrl = Object.keys(params).filter(function (p) { return p === browserCode_1.ROUTEPARAMNAME; }).map(function (p) { return p + "=" + params[p]; }).join('&');
            var routeParamsUrl = Object.keys(params).filter(function (p) { return p !== browserCode_1.ROUTEPARAMNAME && p.indexOf(browserCode_1.ROUTEPARAMPREFIX) === 0; }).map(function (p) { return p + "=" + params[p]; }).join('&');
            return browserCode_1.SCRIPTLETURLPREFIX + "?" + otherParamsUrl + "&" + routeNameUrl + "&" + routeParamsUrl;
        };
        App.prototype.renderLink = function (config) {
            var _a;
            var otherParams = this.getOtherParams();
            var otherParamsUrl = Object.keys(otherParams).map(function (p) { return p + "=" + otherParams[p]; }).join('&');
            var paramsUrl = this.getParamsUrl(config.params);
            var routeParamsUrl = this.getParamsUrl((_a = {}, _a[browserCode_1.ROUTEPARAMNAME_NOPREFIX] = config.routeName, _a));
            var currentUrlSearchFragment = "?" + otherParamsUrl + "&" + routeParamsUrl + "&" + paramsUrl;
            return browserCode_1.buildUrl(__assign({}, config, { params: this.getParamsWithPrefix(config.params), currentUrlSearchFragment: currentUrlSearchFragment }));
        };
        App.prototype.getParamsWithoutPrefix = function (request) {
            var params = {};
            Object.keys(request.parameters).filter(function (p) { return p.indexOf(browserCode_1.ROUTEPARAMPREFIX) === 0; }).forEach(function (p) {
                params[p.substring(browserCode_1.ROUTEPARAMPREFIX.length, p.length)] = request.parameters[p];
            });
            return params;
        };
        App.prototype.getOtherParams = function () {
            var _this = this;
            var otherParams = {};
            Object.keys(this.currentDispatchOptions.request.parameters).filter(function (p) { return p.indexOf(browserCode_1.ROUTEPARAMPREFIX) !== 0; }).forEach(function (p) {
                otherParams[p] = _this.currentDispatchOptions.request.parameters[p];
            });
            return otherParams;
        };
        App.prototype.getParamsUrl = function (params, except) {
            if (except === void 0) { except = []; }
            return "" + Object.keys(params).filter(function (p) { return except.indexOf(p) === -1; }).map(function (p) { return "" + browserCode_1.ROUTEPARAMPREFIX + p + "=" + params[p]; }).join('&');
        };
        App.prototype.getParamsWithPrefix = function (params, except) {
            if (except === void 0) { except = []; }
            var params_ = {};
            Object.keys(params).filter(function (p) { return except.indexOf(p) === -1; }).forEach(function (p) {
                params_[browserCode_1.ROUTEPARAMPREFIX + p] = params[p];
            });
            return params_;
        };
        return App;
    }());
    exports.App = App;
});