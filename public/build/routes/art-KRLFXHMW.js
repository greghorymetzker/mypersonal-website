import {
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-MWOHOS3W.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.jsx?browser
init_react();

// app/routes/art.jsx
init_react();
function Art() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement("span", {
    onClick: () => {
      hist;
    }
  }, "Voltar"), /* @__PURE__ */ React.createElement("ul", null, data.map((e, k) => {
    return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
      key: k
    }, " ", e.title, " "));
  })));
}
export {
  Art as default
};
//# sourceMappingURL=/build/routes/art-KRLFXHMW.js.map