import {
  BaseImage_default,
  LOGO_default,
  links
} from "/build/_shared/chunk-I3A7VGLC.js";
import {
  Box_default
} from "/build/_shared/chunk-XB6GIIDF.js";
import "/build/_shared/chunk-GBCRI72L.js";
import {
  useTheme
} from "/build/_shared/chunk-XTDSILFO.js";
import {
  require_prop_types
} from "/build/_shared/chunk-ABZMIAM7.js";
import {
  Link,
  require_main
} from "/build/_shared/chunk-X57EW24Y.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/cms.jsx?browser
init_react();

// app/routes/cms.jsx
init_react();
var import_react_router = __toModule(require_main());

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
init_react();

// app/assets/images/logo.svg
var logo_default = "/build/_assets/logo-ZBIMXZP7.svg";

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      margin: type == "h" ? `${spaccing} 0px` : `0px ${spaccing}`,
      minWidth: type == "h" ? `100%` : `${size}px`,
      minHeight: type == "h" ? `${size}px` : `100%`,
      ...dotted,
      ...style
    }
  });
};
Divider.defaultProps = {
  variant: "solid"
};
Divider.propTypes = {
  type: import_prop_types.default.string,
  spaccing: import_prop_types.default.string,
  variant: import_prop_types.default.string
};
var Divider_default = Divider;

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
init_react();

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types2 = __toModule(require_prop_types());
var import_react2 = __toModule(require_react());
var Icon = ({ style, name, className = "", onClick }) => {
  return /* @__PURE__ */ import_react2.default.createElement("i", {
    className: `icon ${name} ${className || ""}`,
    onClick: (e) => {
      if (onClick) {
        onClick(e);
      }
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  });
};
Icon.propTypes = {
  name: import_prop_types2.default.string,
  className: import_prop_types2.default.string,
  style: import_prop_types2.default.object
};
var Icon_default = Icon;

// app/components/Navigation/LinkNavigation/styles.css
var styles_default = "/build/_assets/styles-UABLCSO2.css";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
var links2 = [{ rel: "stylesheet", href: styles_default }];
var LinkNavigation = ({ icon }) => {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "link_navbar",
    to: "/"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: icon
  }));
};

// app/components/Navigation/LeftNavbar/styles.css
var styles_default2 = "/build/_assets/styles-U3F2WV34.css";

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
var links3 = [{ rel: "stylesheet", href: styles_default2 }, ...links2];
var logos = {
  buscamilhas: LOGO_default,
  dot8: logo_default
};
var LeftNavbar = ({ props }) => {
  const [theme] = useTheme();
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar",
    row: true,
    position: "fixed",
    "data-scroll": true,
    "data-scroll-sticky": true,
    "data-scroll-target": "#scroll"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn",
    flex: true,
    aCenter: true,
    column: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_nav",
    flex: "1",
    column: true
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    width: "30px",
    height: "30px",
    src: logos[theme],
    style: {
      minWidth: "30px",
      minHeight: "30px"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_links",
    flex: true,
    column: true
  }, /* @__PURE__ */ React.createElement(LinkNavigation, {
    icon: "icon-icon_code"
  })))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "v",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }));
};

// app/routes/cms.jsx
function links4() {
  return [...links3, ...links];
}
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LeftNavbar, null), /* @__PURE__ */ React.createElement(import_react_router.Outlet, null));
}
export {
  Index as default,
  links4 as links
};
//# sourceMappingURL=/build/routes/cms-LP64LDHW.js.map
