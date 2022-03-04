import {
  AuthForm,
  ValidatedForm,
  create,
  create2,
  links,
  withYup
} from "/build/_shared/chunk-FREVI2CS.js";
import {
  Box_default
} from "/build/_shared/chunk-QG3XYWHK.js";
import "/build/_shared/chunk-QZZFN4HC.js";
import "/build/_shared/chunk-I24MGPTA.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PQ3L3JV4.js";
import "/build/_shared/chunk-WH5IEWHL.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
function links2() {
  return [...links];
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
  Index as default,
  links2 as links
};
//# sourceMappingURL=/build/routes/index-X2263WGK.js.map
