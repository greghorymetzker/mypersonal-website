import {
  authenticator,
  require_server_runtime
} from "/build/_shared/chunk-LE4DRNHO.js";
import "/build/_shared/chunk-FUDEBXLW.js";
import {
  __toModule,
  init_react
} from "/build/_shared/chunk-FDP6WGZF.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/api/articles.jsx?browser
init_react();

// app/routes/api/articles.jsx
init_react();
var import_server_runtime = __toModule(require_server_runtime());
var loader = async ({ request, params }) => {
  let isAuth = await authenticator.isAuthenticated(request);
  if (!isAuth) {
    return (0, import_server_runtime.json)("not authorized", { status: 401 });
  }
  let data = await getArticles();
  return (0, import_server_runtime.json)(data, { status: 200 });
};
export {
  loader
};
//# sourceMappingURL=/build/routes/api/articles-LNFIJV7P.js.map
