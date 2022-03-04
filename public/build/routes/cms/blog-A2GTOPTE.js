import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-X57EW24Y.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/cms/blog.jsx?browser
init_react();

// app/routes/cms/blog.jsx
init_react();
function Index() {
  const { articles } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex",
      height: "100%"
    }
  }, "blog", /* @__PURE__ */ React.createElement(Box, {
    column: true
  }, articles.map((e) => {
    return /* @__PURE__ */ React.createElement(Link, {
      to: `/${e.id}`
    }, "as");
  })));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/cms/blog-A2GTOPTE.js.map
