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
define(["require", "exports", "../../jsx/createElement", "../../search/typedSearch/typedSearchOperations", "./listRecordTypesView"], function (require, exports, createElement_1, typedSearchOperations_1, listRecordTypesView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function listRecordTypesRoute(app) {
        return {
            name: 'listRecordTypes',
            handler: function (o) {
                var type = o.params.type;
                var pageSize = parseInt(o.params.pageSize || '20', 10);
                var counter = 0;
                var results = type ? typedSearchOperations_1.filter({
                    type: type,
                    columns: []
                }, function (r) { return (((counter++) > pageSize) || !r) ? false : true; }) : [];
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(listRecordTypesView_1.ListRecordTypes, __assign({ pageSize: pageSize }, o.params, { type: type, results: results })));
            }
        };
    }
    exports.listRecordTypesRoute = listRecordTypesRoute;
    function listRecordTypesJsonRoute(app) {
        return {
            name: 'listRecordTypesJson',
            contentType: 'json',
            handler: function (o) {
                var _a = o.params, type = _a.type, columns = _a.columns;
                var pageSize = parseInt(o.params.pageSize || '20', 10);
                var counter = 0;
                var results = type ? typedSearchOperations_1.filter({
                    type: type,
                    columns: []
                }, function (r) { return (((counter++) > pageSize) || !r) ? false : true; }) : [];
                return {
                    results: results.map(function (r) { return ({
                        id: r.id,
                        recordType: r.recordType,
                    }); })
                };
                // return ReactLike.render(<ListRecordTypes pageSize={pageSize} {...o.params} type={type} results={results}
                // ></ListRecordTypes>)
            }
        };
    }
    exports.listRecordTypesJsonRoute = listRecordTypesJsonRoute;
    function listRecordTypesResultRoute(app) {
        return {
            name: 'listRecordTypesResult',
            handler: function (o) {
                var type = o.params.type;
                var pageSize = parseInt(o.params.pageSize || '20', 10);
                var counter = 0;
                var results = type ? typedSearchOperations_1.filter({
                    type: type,
                    columns: []
                }, function (r) { return (((counter++) > pageSize) || !r) ? false : true; }) : [];
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(listRecordTypesView_1.ListRecordTypesResult, __assign({ pageSize: pageSize }, o.params, { type: type, results: results })));
            }
        };
    }
    exports.listRecordTypesResultRoute = listRecordTypesResultRoute;
});
