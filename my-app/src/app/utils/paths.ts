// export const matchRoutes = (pathname: string, routes: Route[]) => {
//   const matchedRoutes = [];
//   let currentRoutes: Route[] | undefined = routes;

//   while (currentRoutes && currentRoutes.length) {
//     const matchedRoute: Route | undefined = currentRoutes.find((route) =>
//       isSimilarPath(pathname, route.path)
//     );

//     if (!matchedRoute) {
//       break;
//     }

//     matchedRoutes.push(matchedRoute);
//     if (matchedRoute.path.split('/').length < pathname.split('/').length) {
//       currentRoutes = matchedRoute?.childRoutes;
//     } else {
//       break;
//     }
//   }

//   return matchedRoutes;
// };
export {};
