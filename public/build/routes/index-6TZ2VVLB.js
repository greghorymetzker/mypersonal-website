import {
  React,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-YBOPWANX.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_react = __toModule(require_react());
function Index() {
  let { data } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex"
    }
  }, data?.map((e) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: e.name,
      style: {
        flexDirection: "column",
        display: "flex",
        margin: "0px 50px"
      }
    }, e.title, /* @__PURE__ */ React.createElement("div", null, e?.data?.map((e2) => {
      return /* @__PURE__ */ React.createElement("span", {
        key: e2.id
      }, e2.name);
    })));
  }));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-6TZ2VVLB.js.map
