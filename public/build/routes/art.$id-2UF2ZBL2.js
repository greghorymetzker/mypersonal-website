import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-MWOHOS3W.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.$id.jsx?browser
init_react();

// app/routes/art.$id.jsx
init_react();
function Index() {
  const { params, data } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "column "
    }
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/art"
  }, "Voltar"), params.id, /* @__PURE__ */ React.createElement("img", {
    style: { width: "120px" },
    src: data?.thumbnail?.lqip
  }), /* @__PURE__ */ React.createElement("span", null, data?.name));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/art.$id-2UF2ZBL2.js.map
