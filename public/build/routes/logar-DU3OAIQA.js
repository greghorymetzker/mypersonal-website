import {
  AuthForm,
  ValidatedForm,
  create,
  create2,
  withYup
} from "/build/_shared/chunk-WJROOG4Z.js";
import "/build/_shared/chunk-7DA4NXQS.js";
import {
  Box_default
} from "/build/_shared/chunk-BDVPY5N2.js";
import "/build/_shared/chunk-5AIIDFQC.js";
import "/build/_shared/chunk-BKCMAYM7.js";
import "/build/_shared/chunk-5KJDWWOR.js";
import "/build/_shared/chunk-7CL3GUNS.js";
import "/build/_shared/chunk-7ZJJSLYA.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YX36M75A.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-FDP6WGZF.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/logar.jsx?browser
init_react();

// app/routes/logar.jsx
init_react();
function links() {
  return [...AuthForm.links];
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Scripts, null)));
}
var validator = withYup(create2({
  email: create().nullable().email("Email Incorreto").required("Campo obrigat\xF3rio"),
  password: create().nullable().required("Campo obrigat\xF3rio")
}));
function Index() {
  const { defaultValues } = useLoaderData();
  return /* @__PURE__ */ React.createElement(Box_default, {
    flex: 1,
    style: {
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(ValidatedForm, {
    validator,
    method: "post",
    defaultValues,
    style: {
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(AuthForm, {
    defaultValues
  })));
}
export {
  ErrorBoundary,
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/logar-DU3OAIQA.js.map
