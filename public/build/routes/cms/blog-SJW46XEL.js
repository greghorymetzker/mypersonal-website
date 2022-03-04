import {
  Box_default
} from "/build/_shared/chunk-XB6GIIDF.js";
import "/build/_shared/chunk-ABZMIAM7.js";
import {
  useLoaderData
} from "/build/_shared/chunk-X57EW24Y.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/cms/blog.jsx?browser
init_react();

// app/routes/cms/blog.jsx
init_react();

// app/components/Lists/Header/Header.jsx
init_react();

// app/components/Lists/Header/styles.css
var styles_default = "/build/_assets/styles-S5N2SEIK.css";

// app/components/Lists/Header/Header.jsx
var links = [{ rel: "stylesheet", href: styles_default }];
var Header = ({ data }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    row: true,
    className: "header-list"
  }, /* @__PURE__ */ React.createElement("ul", null, data.map((e, k) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: k,
      style: { ...e.style }
    }, e.title);
  })));
};
Header.links = links;

// app/components/Lists/Items/Items.jsx
init_react();

// app/components/Hooks/useVirtualList.js
init_react();
var import_react3 = __toModule(require_react());

// node_modules/react-virtual/dist/react-virtual.mjs
init_react();
var import_react = __toModule(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var props = ["bottom", "height", "left", "right", "top", "width"];
var rectChanged = function rectChanged2(a, b) {
  if (a === void 0) {
    a = {};
  }
  if (b === void 0) {
    b = {};
  }
  return props.some(function(prop) {
    return a[prop] !== b[prop];
  });
};
var observedNodes = /* @__PURE__ */ new Map();
var rafId;
var run = function run2() {
  var changedStates = [];
  observedNodes.forEach(function(state, node) {
    var newRect = node.getBoundingClientRect();
    if (rectChanged(newRect, state.rect)) {
      state.rect = newRect;
      changedStates.push(state);
    }
  });
  changedStates.forEach(function(state) {
    state.callbacks.forEach(function(cb) {
      return cb(state.rect);
    });
  });
  rafId = window.requestAnimationFrame(run2);
};
function observeRect(node, cb) {
  return {
    observe: function observe() {
      var wasEmpty = observedNodes.size === 0;
      if (observedNodes.has(node)) {
        observedNodes.get(node).callbacks.push(cb);
      } else {
        observedNodes.set(node, {
          rect: void 0,
          hasRectChanged: false,
          callbacks: [cb]
        });
      }
      if (wasEmpty)
        run();
    },
    unobserve: function unobserve() {
      var state = observedNodes.get(node);
      if (state) {
        var index = state.callbacks.indexOf(cb);
        if (index >= 0)
          state.callbacks.splice(index, 1);
        if (!state.callbacks.length)
          observedNodes["delete"](node);
        if (!observedNodes.size)
          cancelAnimationFrame(rafId);
      }
    }
  };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.default.useLayoutEffect : import_react.default.useEffect;
function useRect(nodeRef, initialRect) {
  if (initialRect === void 0) {
    initialRect = {
      width: 0,
      height: 0
    };
  }
  var _React$useState = import_react.default.useState(nodeRef.current), element = _React$useState[0], setElement = _React$useState[1];
  var _React$useReducer = import_react.default.useReducer(rectReducer, initialRect), rect = _React$useReducer[0], dispatch = _React$useReducer[1];
  var initialRectSet = import_react.default.useRef(false);
  useIsomorphicLayoutEffect(function() {
    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });
  useIsomorphicLayoutEffect(function() {
    if (element && !initialRectSet.current) {
      initialRectSet.current = true;
      var _rect = element.getBoundingClientRect();
      dispatch({
        rect: _rect
      });
    }
  }, [element]);
  import_react.default.useEffect(function() {
    if (!element) {
      return;
    }
    var observer = observeRect(element, function(rect2) {
      dispatch({
        rect: rect2
      });
    });
    observer.observe();
    return function() {
      observer.unobserve();
    };
  }, [element]);
  return rect;
}
function rectReducer(state, action) {
  var rect = action.rect;
  if (state.height !== rect.height || state.width !== rect.width) {
    return rect;
  }
  return state;
}
var defaultEstimateSize = function defaultEstimateSize2() {
  return 50;
};
var defaultKeyExtractor = function defaultKeyExtractor2(index) {
  return index;
};
var defaultMeasureSize = function defaultMeasureSize2(el, horizontal) {
  var key = horizontal ? "offsetWidth" : "offsetHeight";
  return el[key];
};
var defaultRangeExtractor = function defaultRangeExtractor2(range) {
  var start = Math.max(range.start - range.overscan, 0);
  var end = Math.min(range.end + range.overscan, range.size - 1);
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
function useVirtual(_ref) {
  var _measurements;
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 0 : _ref$size, _ref$estimateSize = _ref.estimateSize, estimateSize = _ref$estimateSize === void 0 ? defaultEstimateSize : _ref$estimateSize, _ref$overscan = _ref.overscan, overscan = _ref$overscan === void 0 ? 1 : _ref$overscan, _ref$paddingStart = _ref.paddingStart, paddingStart = _ref$paddingStart === void 0 ? 0 : _ref$paddingStart, _ref$paddingEnd = _ref.paddingEnd, paddingEnd = _ref$paddingEnd === void 0 ? 0 : _ref$paddingEnd, parentRef = _ref.parentRef, horizontal = _ref.horizontal, scrollToFn = _ref.scrollToFn, useObserver = _ref.useObserver, initialRect = _ref.initialRect, onScrollElement = _ref.onScrollElement, scrollOffsetFn = _ref.scrollOffsetFn, _ref$keyExtractor = _ref.keyExtractor, keyExtractor = _ref$keyExtractor === void 0 ? defaultKeyExtractor : _ref$keyExtractor, _ref$measureSize = _ref.measureSize, measureSize = _ref$measureSize === void 0 ? defaultMeasureSize : _ref$measureSize, _ref$rangeExtractor = _ref.rangeExtractor, rangeExtractor = _ref$rangeExtractor === void 0 ? defaultRangeExtractor : _ref$rangeExtractor;
  var sizeKey = horizontal ? "width" : "height";
  var scrollKey = horizontal ? "scrollLeft" : "scrollTop";
  var latestRef = import_react.default.useRef({
    scrollOffset: 0,
    measurements: []
  });
  var _React$useState = import_react.default.useState(0), scrollOffset = _React$useState[0], setScrollOffset = _React$useState[1];
  latestRef.current.scrollOffset = scrollOffset;
  var useMeasureParent = useObserver || useRect;
  var _useMeasureParent = useMeasureParent(parentRef, initialRect), outerSize = _useMeasureParent[sizeKey];
  latestRef.current.outerSize = outerSize;
  var defaultScrollToFn = import_react.default.useCallback(function(offset) {
    if (parentRef.current) {
      parentRef.current[scrollKey] = offset;
    }
  }, [parentRef, scrollKey]);
  var resolvedScrollToFn = scrollToFn || defaultScrollToFn;
  scrollToFn = import_react.default.useCallback(function(offset) {
    resolvedScrollToFn(offset, defaultScrollToFn);
  }, [defaultScrollToFn, resolvedScrollToFn]);
  var _React$useState2 = import_react.default.useState({}), measuredCache = _React$useState2[0], setMeasuredCache = _React$useState2[1];
  var measure = import_react.default.useCallback(function() {
    return setMeasuredCache({});
  }, []);
  var pendingMeasuredCacheIndexesRef = import_react.default.useRef([]);
  var measurements = import_react.default.useMemo(function() {
    var min = pendingMeasuredCacheIndexesRef.current.length > 0 ? Math.min.apply(Math, pendingMeasuredCacheIndexesRef.current) : 0;
    pendingMeasuredCacheIndexesRef.current = [];
    var measurements2 = latestRef.current.measurements.slice(0, min);
    for (var i = min; i < size; i++) {
      var key = keyExtractor(i);
      var measuredSize = measuredCache[key];
      var _start = measurements2[i - 1] ? measurements2[i - 1].end : paddingStart;
      var _size = typeof measuredSize === "number" ? measuredSize : estimateSize(i);
      var _end = _start + _size;
      measurements2[i] = {
        index: i,
        start: _start,
        size: _size,
        end: _end,
        key
      };
    }
    return measurements2;
  }, [estimateSize, measuredCache, paddingStart, size, keyExtractor]);
  var totalSize = (((_measurements = measurements[size - 1]) == null ? void 0 : _measurements.end) || paddingStart) + paddingEnd;
  latestRef.current.measurements = measurements;
  latestRef.current.totalSize = totalSize;
  var element = onScrollElement ? onScrollElement.current : parentRef.current;
  var scrollOffsetFnRef = import_react.default.useRef(scrollOffsetFn);
  scrollOffsetFnRef.current = scrollOffsetFn;
  useIsomorphicLayoutEffect(function() {
    if (!element) {
      setScrollOffset(0);
      return;
    }
    var onScroll = function onScroll2(event) {
      var offset = scrollOffsetFnRef.current ? scrollOffsetFnRef.current(event) : element[scrollKey];
      setScrollOffset(offset);
    };
    onScroll();
    element.addEventListener("scroll", onScroll, {
      capture: false,
      passive: true
    });
    return function() {
      element.removeEventListener("scroll", onScroll);
    };
  }, [element, scrollKey]);
  var _calculateRange = calculateRange(latestRef.current), start = _calculateRange.start, end = _calculateRange.end;
  var indexes = import_react.default.useMemo(function() {
    return rangeExtractor({
      start,
      end,
      overscan,
      size: measurements.length
    });
  }, [start, end, overscan, measurements.length, rangeExtractor]);
  var measureSizeRef = import_react.default.useRef(measureSize);
  measureSizeRef.current = measureSize;
  var virtualItems = import_react.default.useMemo(function() {
    var virtualItems2 = [];
    var _loop = function _loop2(k2, len2) {
      var i = indexes[k2];
      var measurement = measurements[i];
      var item = _extends(_extends({}, measurement), {}, {
        measureRef: function measureRef(el) {
          if (el) {
            var measuredSize = measureSizeRef.current(el, horizontal);
            if (measuredSize !== item.size) {
              var _scrollOffset = latestRef.current.scrollOffset;
              if (item.start < _scrollOffset) {
                defaultScrollToFn(_scrollOffset + (measuredSize - item.size));
              }
              pendingMeasuredCacheIndexesRef.current.push(i);
              setMeasuredCache(function(old) {
                var _extends2;
                return _extends(_extends({}, old), {}, (_extends2 = {}, _extends2[item.key] = measuredSize, _extends2));
              });
            }
          }
        }
      });
      virtualItems2.push(item);
    };
    for (var k = 0, len = indexes.length; k < len; k++) {
      _loop(k);
    }
    return virtualItems2;
  }, [indexes, defaultScrollToFn, horizontal, measurements]);
  var mountedRef = import_react.default.useRef(false);
  useIsomorphicLayoutEffect(function() {
    if (mountedRef.current) {
      setMeasuredCache({});
    }
    mountedRef.current = true;
  }, [estimateSize]);
  var scrollToOffset = import_react.default.useCallback(function(toOffset, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp, _ref2$align = _ref2.align, align = _ref2$align === void 0 ? "start" : _ref2$align;
    var _latestRef$current = latestRef.current, scrollOffset2 = _latestRef$current.scrollOffset, outerSize2 = _latestRef$current.outerSize;
    if (align === "auto") {
      if (toOffset <= scrollOffset2) {
        align = "start";
      } else if (toOffset >= scrollOffset2 + outerSize2) {
        align = "end";
      } else {
        align = "start";
      }
    }
    if (align === "start") {
      scrollToFn(toOffset);
    } else if (align === "end") {
      scrollToFn(toOffset - outerSize2);
    } else if (align === "center") {
      scrollToFn(toOffset - outerSize2 / 2);
    }
  }, [scrollToFn]);
  var tryScrollToIndex = import_react.default.useCallback(function(index, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$align = _ref3.align, align = _ref3$align === void 0 ? "auto" : _ref3$align, rest = _objectWithoutPropertiesLoose(_ref3, ["align"]);
    var _latestRef$current2 = latestRef.current, measurements2 = _latestRef$current2.measurements, scrollOffset2 = _latestRef$current2.scrollOffset, outerSize2 = _latestRef$current2.outerSize;
    var measurement = measurements2[Math.max(0, Math.min(index, size - 1))];
    if (!measurement) {
      return;
    }
    if (align === "auto") {
      if (measurement.end >= scrollOffset2 + outerSize2) {
        align = "end";
      } else if (measurement.start <= scrollOffset2) {
        align = "start";
      } else {
        return;
      }
    }
    var toOffset = align === "center" ? measurement.start + measurement.size / 2 : align === "end" ? measurement.end : measurement.start;
    scrollToOffset(toOffset, _extends({
      align
    }, rest));
  }, [scrollToOffset, size]);
  var scrollToIndex = import_react.default.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    tryScrollToIndex.apply(void 0, args);
    requestAnimationFrame(function() {
      tryScrollToIndex.apply(void 0, args);
    });
  }, [tryScrollToIndex]);
  return {
    virtualItems,
    totalSize,
    scrollToOffset,
    scrollToIndex,
    measure
  };
}
var findNearestBinarySearch = function findNearestBinarySearch2(low, high, getCurrentValue, value) {
  while (low <= high) {
    var middle = (low + high) / 2 | 0;
    var currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange(_ref4) {
  var measurements = _ref4.measurements, outerSize = _ref4.outerSize, scrollOffset = _ref4.scrollOffset;
  var size = measurements.length - 1;
  var getOffset = function getOffset2(index) {
    return measurements[index].start;
  };
  var start = findNearestBinarySearch(0, size, getOffset, scrollOffset);
  var end = start;
  while (end < size && measurements[end].end < scrollOffset + outerSize) {
    end++;
  }
  return {
    start,
    end
  };
}

// app/components/Hooks/useRequest.js
init_react();
var import_react2 = __toModule(require_react());
var useRequest = (config = {
  error: true,
  errorMessage: "",
  success: false,
  successMessage: ""
}, service = null) => {
  const [data, setData] = (0, import_react2.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [isFetched, setIsFetched] = (0, import_react2.useState)(false);
  const [isError, setIsError] = (0, import_react2.useState)(false);
  const [serviceObserver, setService] = (0, import_react2.useState)(service);
  const fetchData = (0, import_react2.useCallback)(async (r = null, callback = null, options = null) => {
    setIsError(false);
    setIsFetched(false);
    setIsLoading(true);
    try {
      let result = null;
      if (!r) {
        result = await serviceObserver();
      } else {
        result = await r();
      }
      if (callback) {
        callback(null, result.data);
      }
      setData(result.data || null);
      if (options && options.success || config.success) {
      }
    } catch (error) {
      if (config.error) {
      }
      if (callback) {
        callback(error, null);
      }
    }
    setIsLoading(false);
    setIsFetched(true);
  });
  (0, import_react2.useEffect)(() => {
    if (serviceObserver) {
      fetchData();
    }
  }, [fetchData, serviceObserver]);
  const request = (r, callback, options = null) => {
    fetchData(() => r, callback, options);
  };
  return [
    {
      data,
      isLoading,
      isFetched,
      isError
    },
    request,
    setService
  ];
};
var useRequest_default = useRequest;

// app/components/Hooks/useVirtualList.js
var useVirtualList = ({ size, items = [], service, cursorItems }) => {
  const parentRef = (0, import_react3.useRef)();
  const [cursor, setCursor] = (0, import_react3.useState)(cursorItems);
  const [itemsInner, setItemsInner] = (0, import_react3.useState)(items);
  const rowVirtualizer = useVirtual({
    size: cursor?.hasNextPage ? itemsInner?.length + 1 : itemsInner?.length,
    parentRef,
    estimateSize: (0, import_react3.useCallback)(() => size, [])
  });
  const [{ data, isLoading, isFetched, isError }, request] = useRequest_default({
    error: true,
    public: false,
    errorMessage: "Algo deu Errado!",
    successMessage: null,
    success: false
  });
  (0, import_react3.useEffect)(() => {
    const [lastItem] = [...rowVirtualizer.virtualItems].reverse();
    if (!lastItem) {
      return;
    }
    if (lastItem.index === items.length - 1 && cursor?.hasNextPage && !isLoading) {
    }
  }, [isLoading, rowVirtualizer.virtualItems]);
  return [isLoading, rowVirtualizer, parentRef];
};

// app/components/Lists/Items/styles.css
var styles_default2 = "/build/_assets/styles-55DNWN2R.css";

// app/components/Lists/Items/Items.jsx
var links2 = [{ rel: "stylesheet", href: styles_default2 }];
var Items = ({ children, service, items }) => {
  const [isLoading, rowVirtualizer, parentRef] = useVirtualList({ service, items, ref });
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    ref: parentRef,
    className: "List",
    style: {
      height: "72vh",
      width: `100%`,
      overflow: "auto",
      display: "flex"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      height: `${rowVirtualizer.totalSize}px`,
      width: "100%",
      position: "relative"
    }
  }, rowVirtualizer.virtualItems.map((virtualRow) => {
    const isLoaderRow = virtualRow.index > items.length - 1;
    const events = items[virtualRow.index] || [];
    return /* @__PURE__ */ React.createElement("div", {
      key: virtualRow.index,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${virtualRow.size}px`,
        transform: `translateY(${virtualRow.start}px)`
      }
    }, /* @__PURE__ */ React.createElement(Box_default, {
      row: true
    }, /* @__PURE__ */ React.createElement(Box_default, {
      row: true,
      className: styles_default2.items
    }, "teste", children)));
  }))));
};
Items.links = links2;

// app/routes/cms/blog.jsx
var links3 = () => [...Header.links];
function Index() {
  const articles = useLoaderData();
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, "blog", /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, /* @__PURE__ */ React.createElement(Header, {
    data: [
      {
        title: "Nome",
        style: {
          textAlign: "start"
        }
      },
      {
        title: "Data"
      },
      {
        title: "Status",
        style: {
          width: "15%"
        }
      },
      {
        title: "A\xE7\xF5es",
        style: {
          width: "15%"
        }
      }
    ]
  }), /* @__PURE__ */ React.createElement(Items, {
    items: new Array(20).fill(0).map((e) => articles[0])
  })));
}
export {
  Index as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/cms/blog-SJW46XEL.js.map