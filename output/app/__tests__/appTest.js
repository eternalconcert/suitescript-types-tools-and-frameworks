"use strict";
// import { ServerRequest, ServerResponse } from 'N/http';
// import { App, Route } from '../app';
// import { recordViewRoute } from '../recordView/recordViewRoute';
// import { setFieldValueRoute } from '../routes/setFieldValueRoute';
// import { findRecordRoute } from '../searchView/findRecordRoute';
// import { listRecordTypesRoute } from "../searchView/listRecordTypesRoute";
// import { mainPageRoute } from './appTestMainPage';
// import { setSublistFieldValueRoute } from '../routes/setSublistFieldValueRoute';
// // example application using ./app framework. It implements a simple MainPage route (see appTestMainPage and then uses built in routes like recordView and searchView)
// export function appTest(request: ServerRequest, response: ServerResponse) {
//   const app = new App()
//   app.addRoute(mainPageRoute(app))
//   app.addRoute(findRecordRoute(app))
//   app.addRoute(recordViewRoute(app))
//   app.addRoute(listRecordTypesRoute(app))
//   app.addRoute(setFieldValueRoute(app))
//   app.addRoute(setSublistFieldValueRoute(app))
//   // also we set a default route that redirects to main page in case the url doesn't have any route or unknown one (alternatively we could show 404 page)
//   app.setNoRouteParamRoute(defaultRoute(app))
//   app.setNoRouteFoundRoute(defaultRoute(app))
//   // finally we call dispatch() so the framework calls the routes implementation that matches request's url
//   app.dispatch({ request, response })
// }
// function defaultRoute(app: App): Route {
//   return {
//     name: 'redirectToMainPage',
//     handler(o) {
//       app.redirect({ redirect: app.renderLink({ routeName: 'mainPage', params: {} }) });
//     }
//   };
// }
