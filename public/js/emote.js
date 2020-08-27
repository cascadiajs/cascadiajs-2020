/* proxy-compat-disable */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function detect() {
    // Don't apply polyfill when ProxyCompat is enabled.
    if ('getKey' in Proxy) {
      return false;
    }
  
    const proxy = new Proxy([3, 4], {});
    const res = [1, 2].concat(proxy);
    return res.length !== 4;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const {
    isConcatSpreadable
  } = Symbol;
  const {
    isArray
  } = Array;
  const {
    slice: ArraySlice,
    unshift: ArrayUnshift,
    shift: ArrayShift
  } = Array.prototype;
  
  function isObject(O) {
    return typeof O === 'object' ? O !== null : typeof O === 'function';
  } // https://www.ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
  
  
  function isSpreadable(O) {
    if (!isObject(O)) {
      return false;
    }
  
    const spreadable = O[isConcatSpreadable];
    return spreadable !== undefined ? Boolean(spreadable) : isArray(O);
  } // https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat
  
  
  function ArrayConcatPolyfill(..._args) {
    const O = Object(this);
    const A = [];
    let N = 0;
    const items = ArraySlice.call(arguments);
    ArrayUnshift.call(items, O);
  
    while (items.length) {
      const E = ArrayShift.call(items);
  
      if (isSpreadable(E)) {
        let k = 0;
        const length = E.length;
  
        for (k; k < length; k += 1, N += 1) {
          if (k in E) {
            const subElement = E[k];
            A[N] = subElement;
          }
        }
      } else {
        A[N] = E;
        N += 1;
      }
    }
  
    return A;
  }
  
  function apply() {
    // eslint-disable-next-line no-extend-native
    Array.prototype.concat = ArrayConcatPolyfill;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  if (detect()) {
    apply();
  }
  /**
   * Copyright (C) 2018 salesforce.com, inc.
   */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function invariant(value, msg) {
    if (!value) {
      throw new Error(`Invariant Violation: ${msg}`);
    }
  }
  
  function isTrue(value, msg) {
    if (!value) {
      throw new Error(`Assert Violation: ${msg}`);
    }
  }
  
  function isFalse(value, msg) {
    if (value) {
      throw new Error(`Assert Violation: ${msg}`);
    }
  }
  
  function fail(msg) {
    throw new Error(msg);
  }
  
  var assert = /*#__PURE__*/Object.freeze({
    __proto__: null,
    invariant: invariant,
    isTrue: isTrue,
    isFalse: isFalse,
    fail: fail
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  const {
    assign,
    create,
    defineProperties,
    defineProperty,
    freeze,
    getOwnPropertyDescriptor,
    getOwnPropertyNames,
    getPrototypeOf,
    hasOwnProperty,
    isFrozen,
    keys,
    seal,
    setPrototypeOf
  } = Object;
  const {
    filter: ArrayFilter,
    find: ArrayFind,
    indexOf: ArrayIndexOf,
    join: ArrayJoin,
    map: ArrayMap,
    push: ArrayPush,
    reduce: ArrayReduce,
    reverse: ArrayReverse,
    slice: ArraySlice$1,
    splice: ArraySplice,
    unshift: ArrayUnshift$1,
    forEach
  } = Array.prototype;
  const {
    charCodeAt: StringCharCodeAt,
    replace: StringReplace,
    slice: StringSlice,
    toLowerCase: StringToLowerCase
  } = String.prototype;
  
  function isUndefined(obj) {
    return obj === undefined;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /**
   * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
   * ariaGrabbed) are deprecated:
   * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
   *
   * The above list of 46 aria attributes is consistent with the following resources:
   * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
   * https://wicg.github.io/aom/spec/aria-reflection.html
   */
  
  const AriaPropertyNames = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];
  const AttrNameToPropNameMap = create(null);
  const PropNameToAttrNameMap = create(null); // Synthetic creation of all AOM property descriptors for Custom Elements
  
  forEach.call(AriaPropertyNames, propName => {
    // Typescript infers the wrong function type for this particular overloaded method:
    // https://github.com/Microsoft/TypeScript/issues/27972
    // @ts-ignore type-mismatch
    const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, 'aria-'));
    AttrNameToPropNameMap[attrName] = propName;
    PropNameToAttrNameMap[propName] = attrName;
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // Inspired from: https://mathiasbynens.be/notes/globalthis
  
  const _globalThis = function () {
    // On recent browsers, `globalThis` is already defined. In this case return it directly.
    if (typeof globalThis === 'object') {
      return globalThis;
    }
  
    let _globalThis;
  
    try {
      // eslint-disable-next-line no-extend-native
      Object.defineProperty(Object.prototype, '__magic__', {
        get: function () {
          return this;
        },
        configurable: true
      }); // __magic__ is undefined in Safari 10 and IE10 and older.
      // @ts-ignore
      // eslint-disable-next-line no-undef
  
      _globalThis = __magic__; // @ts-ignore
  
      delete Object.prototype.__magic__;
    } catch (ex) {// In IE8, Object.defineProperty only works on DOM objects.
    } finally {
      // If the magic above fails for some reason we assume that we are in a legacy browser.
      // Assume `window` exists in this case.
      if (typeof _globalThis === 'undefined') {
        // @ts-ignore
        _globalThis = window;
      }
    }
  
    return _globalThis;
  }();
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /*
   * In IE11, symbols are expensive.
   * Due to the nature of the symbol polyfill. This method abstract the
   * creation of symbols, so we can fallback to string when native symbols
   * are not supported. Note that we can't use typeof since it will fail when transpiling.
   */
  
  
  const hasNativeSymbolsSupport = Symbol('x').toString() === 'Symbol(x)';
  
  function createHiddenField(key, namespace) {
    return hasNativeSymbolsSupport ? Symbol(key) : `$$lwc-${namespace}-${key}$$`;
  }
  
  const hiddenFieldsMap = new WeakMap();
  
  function getHiddenField(o, field) {
    const valuesByField = hiddenFieldsMap.get(o);
  
    if (!isUndefined(valuesByField)) {
      return valuesByField[field];
    }
  }
  
  const HTML_ATTRIBUTES_TO_PROPERTY = {
    accesskey: 'accessKey',
    readonly: 'readOnly',
    tabindex: 'tabIndex',
    bgcolor: 'bgColor',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    contenteditable: 'contentEditable',
    crossorigin: 'crossOrigin',
    datetime: 'dateTime',
    formaction: 'formAction',
    ismap: 'isMap',
    maxlength: 'maxLength',
    minlength: 'minLength',
    novalidate: 'noValidate',
    usemap: 'useMap',
    for: 'htmlFor'
  };
  keys(HTML_ATTRIBUTES_TO_PROPERTY).forEach(attrName => {});
  /** version: 1.7.7 */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  function detect$1(propName) {
    return Object.getOwnPropertyDescriptor(Element.prototype, propName) === undefined;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const nodeToAriaPropertyValuesMap = new WeakMap();
  
  function getAriaPropertyMap(elm) {
    let map = nodeToAriaPropertyValuesMap.get(elm);
  
    if (map === undefined) {
      map = {};
      nodeToAriaPropertyValuesMap.set(elm, map);
    }
  
    return map;
  }
  
  function getNormalizedAriaPropertyValue(value) {
    return value == null ? null : String(value);
  }
  
  function createAriaPropertyPropertyDescriptor(propName, attrName) {
    return {
      get() {
        const map = getAriaPropertyMap(this);
  
        if (hasOwnProperty.call(map, propName)) {
          return map[propName];
        } // otherwise just reflect what's in the attribute
  
  
        return this.hasAttribute(attrName) ? this.getAttribute(attrName) : null;
      },
  
      set(newValue) {
        const normalizedValue = getNormalizedAriaPropertyValue(newValue);
        const map = getAriaPropertyMap(this);
        map[propName] = normalizedValue; // reflect into the corresponding attribute
  
        if (newValue === null) {
          this.removeAttribute(attrName);
        } else {
          this.setAttribute(attrName, newValue);
        }
      },
  
      configurable: true,
      enumerable: true
    };
  }
  
  function patch(propName) {
    // Typescript is inferring the wrong function type for this particular
    // overloaded method: https://github.com/Microsoft/TypeScript/issues/27972
    // @ts-ignore type-mismatch
    const attrName = PropNameToAttrNameMap[propName];
    const descriptor = createAriaPropertyPropertyDescriptor(propName, attrName);
    Object.defineProperty(Element.prototype, propName, descriptor);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const ElementPrototypeAriaPropertyNames = keys(PropNameToAttrNameMap);
  
  for (let i = 0, len = ElementPrototypeAriaPropertyNames.length; i < len; i += 1) {
    const propName = ElementPrototypeAriaPropertyNames[i];
  
    if (detect$1(propName)) {
      patch(propName);
    }
  }
  /* proxy-compat-disable */
  
  /**
   * Copyright (C) 2018 salesforce.com, inc.
   */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function invariant$1(value, msg) {
    if (!value) {
      throw new Error(`Invariant Violation: ${msg}`);
    }
  }
  
  function isTrue$1(value, msg) {
    if (!value) {
      throw new Error(`Assert Violation: ${msg}`);
    }
  }
  
  function isFalse$2(value, msg) {
    if (value) {
      throw new Error(`Assert Violation: ${msg}`);
    }
  }
  
  function fail$1(msg) {
    throw new Error(msg);
  }
  
  var assert$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    invariant: invariant$1,
    isTrue: isTrue$1,
    isFalse: isFalse$2,
    fail: fail$1
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  const {
    assign: assign$1,
    create: create$1,
    defineProperties: defineProperties$1,
    defineProperty: defineProperty$1,
    freeze: freeze$1,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor$1,
    getOwnPropertyNames: getOwnPropertyNames$1,
    getPrototypeOf: getPrototypeOf$1,
    hasOwnProperty: hasOwnProperty$1,
    isFrozen: isFrozen$1,
    keys: keys$1,
    seal: seal$1,
    setPrototypeOf: setPrototypeOf$1
  } = Object;
  const {
    isArray: isArray$2
  } = Array;
  const {
    filter: ArrayFilter$1,
    find: ArrayFind$1,
    indexOf: ArrayIndexOf$1,
    join: ArrayJoin$1,
    map: ArrayMap$1,
    push: ArrayPush$1,
    reduce: ArrayReduce$1,
    reverse: ArrayReverse$1,
    slice: ArraySlice$2,
    splice: ArraySplice$1,
    unshift: ArrayUnshift$2,
    forEach: forEach$1
  } = Array.prototype;
  const {
    charCodeAt: StringCharCodeAt$1,
    replace: StringReplace$1,
    slice: StringSlice$1,
    toLowerCase: StringToLowerCase$1
  } = String.prototype;
  
  function isUndefined$1(obj) {
    return obj === undefined;
  }
  
  function isNull$1(obj) {
    return obj === null;
  }
  
  function isTrue$1$1(obj) {
    return obj === true;
  }
  
  function isFalse$1$1(obj) {
    return obj === false;
  }
  
  function isFunction$1(obj) {
    return typeof obj === 'function';
  }
  
  function isObject$2(obj) {
    return typeof obj === 'object';
  }
  
  function isString(obj) {
    return typeof obj === 'string';
  }
  
  function isNumber(obj) {
    return typeof obj === 'number';
  }
  
  const OtS$1 = {}.toString;
  
  function toString$1(obj) {
    if (obj && obj.toString) {
      // Arrays might hold objects with "null" prototype So using
      // Array.prototype.toString directly will cause an error Iterate through
      // all the items and handle individually.
      if (isArray$2(obj)) {
        return ArrayJoin$1.call(ArrayMap$1.call(obj, toString$1), ',');
      }
  
      return obj.toString();
    } else if (typeof obj === 'object') {
      return OtS$1.call(obj);
    } else {
      return obj + emptyString$1;
    }
  }
  
  function getPropertyDescriptor(o, p) {
    do {
      const d = getOwnPropertyDescriptor$1(o, p);
  
      if (!isUndefined$1(d)) {
        return d;
      }
  
      o = getPrototypeOf$1(o);
    } while (o !== null);
  }
  
  const emptyString$1 = '';
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /**
   * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
   * ariaGrabbed) are deprecated:
   * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
   *
   * The above list of 46 aria attributes is consistent with the following resources:
   * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
   * https://wicg.github.io/aom/spec/aria-reflection.html
   */
  
  const AriaPropertyNames$1 = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];
  const AttrNameToPropNameMap$1 = create$1(null);
  const PropNameToAttrNameMap$1 = create$1(null); // Synthetic creation of all AOM property descriptors for Custom Elements
  
  forEach$1.call(AriaPropertyNames$1, propName => {
    // Typescript infers the wrong function type for this particular overloaded method:
    // https://github.com/Microsoft/TypeScript/issues/27972
    // @ts-ignore type-mismatch
    const attrName = StringToLowerCase$1.call(StringReplace$1.call(propName, /^aria/, 'aria-'));
    AttrNameToPropNameMap$1[attrName] = propName;
    PropNameToAttrNameMap$1[propName] = attrName;
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // Inspired from: https://mathiasbynens.be/notes/globalthis
  
  const _globalThis$1 = function () {
    // On recent browsers, `globalThis` is already defined. In this case return it directly.
    if (typeof globalThis === 'object') {
      return globalThis;
    }
  
    let _globalThis;
  
    try {
      // eslint-disable-next-line no-extend-native
      Object.defineProperty(Object.prototype, '__magic__', {
        get: function () {
          return this;
        },
        configurable: true
      }); // __magic__ is undefined in Safari 10 and IE10 and older.
      // @ts-ignore
      // eslint-disable-next-line no-undef
  
      _globalThis = __magic__; // @ts-ignore
  
      delete Object.prototype.__magic__;
    } catch (ex) {// In IE8, Object.defineProperty only works on DOM objects.
    } finally {
      // If the magic above fails for some reason we assume that we are in a legacy browser.
      // Assume `window` exists in this case.
      if (typeof _globalThis === 'undefined') {
        // @ts-ignore
        _globalThis = window;
      }
    }
  
    return _globalThis;
  }();
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /*
   * In IE11, symbols are expensive.
   * Due to the nature of the symbol polyfill. This method abstract the
   * creation of symbols, so we can fallback to string when native symbols
   * are not supported. Note that we can't use typeof since it will fail when transpiling.
   */
  
  
  const hasNativeSymbolsSupport$1 = Symbol('x').toString() === 'Symbol(x)';
  
  function createHiddenField$1(key, namespace) {
    return hasNativeSymbolsSupport$1 ? Symbol(key) : `$$lwc-${namespace}-${key}$$`;
  }
  
  const hiddenFieldsMap$1 = new WeakMap();
  
  function setHiddenField$1(o, field, value) {
    let valuesByField = hiddenFieldsMap$1.get(o);
  
    if (isUndefined$1(valuesByField)) {
      valuesByField = create$1(null);
      hiddenFieldsMap$1.set(o, valuesByField);
    }
  
    valuesByField[field] = value;
  }
  
  function getHiddenField$1(o, field) {
    const valuesByField = hiddenFieldsMap$1.get(o);
  
    if (!isUndefined$1(valuesByField)) {
      return valuesByField[field];
    }
  }
  
  const HTML_ATTRIBUTES_TO_PROPERTY$1 = {
    accesskey: 'accessKey',
    readonly: 'readOnly',
    tabindex: 'tabIndex',
    bgcolor: 'bgColor',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    contenteditable: 'contentEditable',
    crossorigin: 'crossOrigin',
    datetime: 'dateTime',
    formaction: 'formAction',
    ismap: 'isMap',
    maxlength: 'maxLength',
    minlength: 'minLength',
    novalidate: 'noValidate',
    usemap: 'useMap',
    for: 'htmlFor'
  };
  keys$1(HTML_ATTRIBUTES_TO_PROPERTY$1).forEach(attrName => {});
  /** version: 1.7.7 */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  let nextTickCallbackQueue = [];
  const SPACE_CHAR = 32;
  const EmptyObject = seal$1(create$1(null));
  const EmptyArray = seal$1([]);
  
  function flushCallbackQueue() {
    {
      if (nextTickCallbackQueue.length === 0) {
        throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);
      }
    }
  
    const callbacks = nextTickCallbackQueue;
    nextTickCallbackQueue = []; // reset to a new queue
  
    for (let i = 0, len = callbacks.length; i < len; i += 1) {
      callbacks[i]();
    }
  }
  
  function addCallbackToNextTick(callback) {
    {
      if (!isFunction$1(callback)) {
        throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);
      }
    }
  
    if (nextTickCallbackQueue.length === 0) {
      Promise.resolve().then(flushCallbackQueue);
    }
  
    ArrayPush$1.call(nextTickCallbackQueue, callback);
  }
  /*
   * Copyright (c) 2019, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const {
    create: create$1$1
  } = Object;
  const {
    splice: ArraySplice$1$1,
    indexOf: ArrayIndexOf$1$1,
    push: ArrayPush$1$1
  } = Array.prototype;
  const TargetToReactiveRecordMap = new WeakMap();
  
  function isUndefined$1$1(obj) {
    return obj === undefined;
  }
  
  function getReactiveRecord(target) {
    let reactiveRecord = TargetToReactiveRecordMap.get(target);
  
    if (isUndefined$1$1(reactiveRecord)) {
      const newRecord = create$1$1(null);
      reactiveRecord = newRecord;
      TargetToReactiveRecordMap.set(target, newRecord);
    }
  
    return reactiveRecord;
  }
  
  let currentReactiveObserver = null;
  
  function valueMutated(target, key) {
    const reactiveRecord = TargetToReactiveRecordMap.get(target);
  
    if (!isUndefined$1$1(reactiveRecord)) {
      const reactiveObservers = reactiveRecord[key];
  
      if (!isUndefined$1$1(reactiveObservers)) {
        for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
          const ro = reactiveObservers[i];
          ro.notify();
        }
      }
    }
  }
  
  function valueObserved(target, key) {
    // We should determine if an active Observing Record is present to track mutations.
    if (currentReactiveObserver === null) {
      return;
    }
  
    const ro = currentReactiveObserver;
    const reactiveRecord = getReactiveRecord(target);
    let reactiveObservers = reactiveRecord[key];
  
    if (isUndefined$1$1(reactiveObservers)) {
      reactiveObservers = [];
      reactiveRecord[key] = reactiveObservers;
    } else if (reactiveObservers[0] === ro) {
      return; // perf optimization considering that most subscriptions will come from the same record
    }
  
    if (ArrayIndexOf$1$1.call(reactiveObservers, ro) === -1) {
      ro.link(reactiveObservers);
    }
  }
  
  class ReactiveObserver {
    constructor(callback) {
      this.listeners = [];
      this.callback = callback;
    }
  
    observe(job) {
      const inceptionReactiveRecord = currentReactiveObserver;
      currentReactiveObserver = this;
      let error;
  
      try {
        job();
      } catch (e) {
        error = Object(e);
      } finally {
        currentReactiveObserver = inceptionReactiveRecord;
  
        if (error !== undefined) {
          throw error; // eslint-disable-line no-unsafe-finally
        }
      }
    }
    /**
     * This method is responsible for disconnecting the Reactive Observer
     * from any Reactive Record that has a reference to it, to prevent future
     * notifications about previously recorded access.
     */
  
  
    reset() {
      const {
        listeners
      } = this;
      const len = listeners.length;
  
      if (len > 0) {
        for (let i = 0; i < len; i += 1) {
          const set = listeners[i];
          const pos = ArrayIndexOf$1$1.call(listeners[i], this);
          ArraySplice$1$1.call(set, pos, 1);
        }
  
        listeners.length = 0;
      }
    } // friend methods
  
  
    notify() {
      this.callback.call(undefined, this);
    }
  
    link(reactiveObservers) {
      ArrayPush$1$1.call(reactiveObservers, this); // we keep track of observing records where the observing record was added to so we can do some clean up later on
  
      ArrayPush$1$1.call(this.listeners, reactiveObservers);
    }
  
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function componentValueMutated(vm, key) {
    valueMutated(vm.component, key);
  }
  
  function componentValueObserved(vm, key) {
    valueObserved(vm.component, key);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function getComponentTag(vm) {
    return `<${StringToLowerCase$1.call(vm.tagName)}>`;
  } // TODO [#1695]: Unify getComponentStack and getErrorComponentStack
  
  
  function getComponentStack(vm) {
    const stack = [];
    let prefix = '';
  
    while (!isNull$1(vm.owner)) {
      ArrayPush$1.call(stack, prefix + getComponentTag(vm));
      vm = vm.owner;
      prefix += '\t';
    }
  
    return ArrayJoin$1.call(stack, '\n');
  }
  
  function getErrorComponentStack(vm) {
    const wcStack = [];
    let currentVm = vm;
  
    while (!isNull$1(currentVm)) {
      ArrayPush$1.call(wcStack, getComponentTag(currentVm));
      currentVm = currentVm.owner;
    }
  
    return wcStack.reverse().join('\n\t');
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function logError(message, vm) {
    let msg = `[LWC error]: ${message}`;
  
    if (!isUndefined$1(vm)) {
      msg = `${msg}\n${getComponentStack(vm)}`;
    }
  
    try {
      throw new Error(msg);
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.error(e);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function handleEvent(event, vnode) {
    const {
      type
    } = event;
    const {
      data: {
        on
      }
    } = vnode;
    const handler = on && on[type]; // call event handler if exists
  
    if (handler) {
      handler.call(undefined, event);
    }
  }
  
  function createListener() {
    return function handler(event) {
      handleEvent(event, handler.vnode);
    };
  }
  
  function updateAllEventListeners(oldVnode, vnode) {
    if (isUndefined$1(oldVnode.listener)) {
      createAllEventListeners(vnode);
    } else {
      vnode.listener = oldVnode.listener;
      vnode.listener.vnode = vnode;
    }
  }
  
  function createAllEventListeners(vnode) {
    const {
      elm,
      data: {
        on
      },
      owner: {
        renderer
      }
    } = vnode;
  
    if (isUndefined$1(on)) {
      return;
    }
  
    const listener = vnode.listener = createListener();
    listener.vnode = vnode;
    let name;
  
    for (name in on) {
      renderer.addEventListener(elm, name, listener);
    }
  }
  
  var modEvents = {
    update: updateAllEventListeners,
    create: createAllEventListeners
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title']; // Few more exceptions that are using the attribute name to match the property in lowercase.
  // this list was compiled from https://msdn.microsoft.com/en-us/library/ms533062(v=vs.85).aspx
  // and https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
  // Note: this list most be in sync with the compiler as well.
  
  const HTMLPropertyNamesWithLowercasedReflectiveAttributes = ['accessKey', 'readOnly', 'tabIndex', 'bgColor', 'colSpan', 'rowSpan', 'contentEditable', 'dateTime', 'formAction', 'isMap', 'maxLength', 'useMap'];
  
  function offsetPropertyErrorMessage(name) {
    return `Using the \`${name}\` property is an anti-pattern because it rounds the value to an integer. Instead, use the \`getBoundingClientRect\` method to obtain fractional values for the size of an element and its position relative to the viewport.`;
  } // Global HTML Attributes & Properties
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
  
  
  const globalHTMLProperties = assign$1(create$1(null), {
    accessKey: {
      attribute: 'accesskey'
    },
    accessKeyLabel: {
      readOnly: true
    },
    className: {
      attribute: 'class',
      error: 'Using the `className` property is an anti-pattern because of slow runtime behavior and potential conflicts with classes provided by the owner element. Use the `classList` API instead.'
    },
    contentEditable: {
      attribute: 'contenteditable'
    },
    dataset: {
      readOnly: true,
      error: "Using the `dataset` property is an anti-pattern because it can't be statically analyzed. Expose each property individually using the `@api` decorator instead."
    },
    dir: {
      attribute: 'dir'
    },
    draggable: {
      attribute: 'draggable'
    },
    dropzone: {
      attribute: 'dropzone',
      readOnly: true
    },
    hidden: {
      attribute: 'hidden'
    },
    id: {
      attribute: 'id'
    },
    inputMode: {
      attribute: 'inputmode'
    },
    lang: {
      attribute: 'lang'
    },
    slot: {
      attribute: 'slot',
      error: 'Using the `slot` property is an anti-pattern.'
    },
    spellcheck: {
      attribute: 'spellcheck'
    },
    style: {
      attribute: 'style'
    },
    tabIndex: {
      attribute: 'tabindex'
    },
    title: {
      attribute: 'title'
    },
    translate: {
      attribute: 'translate'
    },
    // additional "global attributes" that are not present in the link above.
    isContentEditable: {
      readOnly: true
    },
    offsetHeight: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetHeight')
    },
    offsetLeft: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetLeft')
    },
    offsetParent: {
      readOnly: true
    },
    offsetTop: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetTop')
    },
    offsetWidth: {
      readOnly: true,
      error: offsetPropertyErrorMessage('offsetWidth')
    },
    role: {
      attribute: 'role'
    }
  });
  const AttrNameToPropNameMap$1$1 = assign$1(create$1(null), AttrNameToPropNameMap$1);
  const PropNameToAttrNameMap$1$1 = assign$1(create$1(null), PropNameToAttrNameMap$1);
  forEach$1.call(defaultDefHTMLPropertyNames, propName => {
    const attrName = StringToLowerCase$1.call(propName);
    AttrNameToPropNameMap$1$1[attrName] = propName;
    PropNameToAttrNameMap$1$1[propName] = attrName;
  });
  forEach$1.call(HTMLPropertyNamesWithLowercasedReflectiveAttributes, propName => {
    const attrName = StringToLowerCase$1.call(propName);
    AttrNameToPropNameMap$1$1[attrName] = propName;
    PropNameToAttrNameMap$1$1[propName] = attrName;
  });
  const CAPS_REGEX = /[A-Z]/g;
  /**
   * This method maps between property names
   * and the corresponding attribute name.
   */
  
  function getAttrNameFromPropName(propName) {
    if (isUndefined$1(PropNameToAttrNameMap$1$1[propName])) {
      PropNameToAttrNameMap$1$1[propName] = StringReplace$1.call(propName, CAPS_REGEX, match => '-' + match.toLowerCase());
    }
  
    return PropNameToAttrNameMap$1$1[propName];
  }
  
  let controlledElement = null;
  let controlledAttributeName;
  
  function isAttributeLocked(elm, attrName) {
    return elm !== controlledElement || attrName !== controlledAttributeName;
  }
  
  function lockAttribute(_elm, _key) {
    controlledElement = null;
    controlledAttributeName = undefined;
  }
  
  function unlockAttribute(elm, key) {
    controlledElement = elm;
    controlledAttributeName = key;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const xlinkNS = 'http://www.w3.org/1999/xlink';
  const xmlNS = 'http://www.w3.org/XML/1998/namespace';
  const ColonCharCode = 58;
  
  function updateAttrs(oldVnode, vnode) {
    const {
      data: {
        attrs
      },
      owner: {
        renderer
      }
    } = vnode;
  
    if (isUndefined$1(attrs)) {
      return;
    }
  
    let {
      data: {
        attrs: oldAttrs
      }
    } = oldVnode;
  
    if (oldAttrs === attrs) {
      return;
    }
  
    {
      assert$1.invariant(isUndefined$1(oldAttrs) || keys$1(oldAttrs).join(',') === keys$1(attrs).join(','), `vnode.data.attrs cannot change shape.`);
    }
  
    const elm = vnode.elm;
    const {
      setAttribute,
      removeAttribute
    } = renderer;
    let key;
    oldAttrs = isUndefined$1(oldAttrs) ? EmptyObject : oldAttrs; // update modified attributes, add new attributes
    // this routine is only useful for data-* attributes in all kind of elements
    // and aria-* in standard elements (custom elements will use props for these)
  
    for (key in attrs) {
      const cur = attrs[key];
      const old = oldAttrs[key];
  
      if (old !== cur) {
        unlockAttribute(elm, key);
  
        if (StringCharCodeAt$1.call(key, 3) === ColonCharCode) {
          // Assume xml namespace
          setAttribute(elm, key, cur, xmlNS);
        } else if (StringCharCodeAt$1.call(key, 5) === ColonCharCode) {
          // Assume xlink namespace
          setAttribute(elm, key, cur, xlinkNS);
        } else if (isNull$1(cur)) {
          removeAttribute(elm, key);
        } else {
          setAttribute(elm, key, cur);
        }
  
        lockAttribute();
      }
    }
  }
  
  const emptyVNode = {
    data: {}
  };
  var modAttrs = {
    create: vnode => updateAttrs(emptyVNode, vnode),
    update: updateAttrs
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  function isLiveBindingProp(sel, key) {
    // For properties with live bindings, we read values from the DOM element
    // instead of relying on internally tracked values.
    return sel === 'input' && (key === 'value' || key === 'checked');
  }
  
  function update(oldVnode, vnode) {
    const props = vnode.data.props;
  
    if (isUndefined$1(props)) {
      return;
    }
  
    const oldProps = oldVnode.data.props;
  
    if (oldProps === props) {
      return;
    }
  
    {
      assert$1.invariant(isUndefined$1(oldProps) || keys$1(oldProps).join(',') === keys$1(props).join(','), 'vnode.data.props cannot change shape.');
    }
  
    const isFirstPatch = isUndefined$1(oldProps);
    const {
      elm,
      sel,
      owner: {
        renderer
      }
    } = vnode;
  
    for (const key in props) {
      const cur = props[key]; // if it is the first time this element is patched, or the current value is different to the previous value...
  
      if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? renderer.getProperty(elm, key) : oldProps[key])) {
        renderer.setProperty(elm, key, cur);
      }
    }
  }
  
  const emptyVNode$1 = {
    data: {}
  };
  var modProps = {
    create: vnode => update(emptyVNode$1, vnode),
    update
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  const classNameToClassMap = create$1(null);
  
  function getMapFromClassName(className) {
    // Intentionally using == to match undefined and null values from computed style attribute
    if (className == null) {
      return EmptyObject;
    } // computed class names must be string
  
  
    className = isString(className) ? className : className + '';
    let map = classNameToClassMap[className];
  
    if (map) {
      return map;
    }
  
    map = create$1(null);
    let start = 0;
    let o;
    const len = className.length;
  
    for (o = 0; o < len; o++) {
      if (StringCharCodeAt$1.call(className, o) === SPACE_CHAR) {
        if (o > start) {
          map[StringSlice$1.call(className, start, o)] = true;
        }
  
        start = o + 1;
      }
    }
  
    if (o > start) {
      map[StringSlice$1.call(className, start, o)] = true;
    }
  
    classNameToClassMap[className] = map;
  
    {
      // just to make sure that this object never changes as part of the diffing algo
      freeze$1(map);
    }
  
    return map;
  }
  
  function updateClassAttribute(oldVnode, vnode) {
    const {
      elm,
      data: {
        className: newClass
      },
      owner: {
        renderer
      }
    } = vnode;
    const {
      data: {
        className: oldClass
      }
    } = oldVnode;
  
    if (oldClass === newClass) {
      return;
    }
  
    const classList = renderer.getClassList(elm);
    const newClassMap = getMapFromClassName(newClass);
    const oldClassMap = getMapFromClassName(oldClass);
    let name;
  
    for (name in oldClassMap) {
      // remove only if it is not in the new class collection and it is not set from within the instance
      if (isUndefined$1(newClassMap[name])) {
        classList.remove(name);
      }
    }
  
    for (name in newClassMap) {
      if (isUndefined$1(oldClassMap[name])) {
        classList.add(name);
      }
    }
  }
  
  const emptyVNode$2 = {
    data: {}
  };
  var modComputedClassName = {
    create: vnode => updateClassAttribute(emptyVNode$2, vnode),
    update: updateClassAttribute
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  function updateStyleAttribute(oldVnode, vnode) {
    const {
      elm,
      data: {
        style: newStyle
      },
      owner: {
        renderer
      }
    } = vnode;
    const {
      getStyleDeclaration,
      removeAttribute
    } = renderer;
  
    if (oldVnode.data.style === newStyle) {
      return;
    }
  
    const style = getStyleDeclaration(elm);
  
    if (!isString(newStyle) || newStyle === '') {
      removeAttribute(elm, 'style');
    } else {
      style.cssText = newStyle;
    }
  }
  
  const emptyVNode$3 = {
    data: {}
  };
  var modComputedStyle = {
    create: vnode => updateStyleAttribute(emptyVNode$3, vnode),
    update: updateStyleAttribute
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // The compiler takes care of transforming the inline classnames into an object. It's faster to set the
  // different classnames properties individually instead of via a string.
  
  function createClassAttribute(vnode) {
    const {
      elm,
      data: {
        classMap
      },
      owner: {
        renderer
      }
    } = vnode;
  
    if (isUndefined$1(classMap)) {
      return;
    }
  
    const classList = renderer.getClassList(elm);
  
    for (const name in classMap) {
      classList.add(name);
    }
  }
  
  var modStaticClassName = {
    create: createClassAttribute
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // The compiler takes care of transforming the inline style into an object. It's faster to set the
  // different style properties individually instead of via a string.
  
  function createStyleAttribute(vnode) {
    const {
      elm,
      data: {
        styleMap
      },
      owner: {
        renderer
      }
    } = vnode;
  
    if (isUndefined$1(styleMap)) {
      return;
    }
  
    const style = renderer.getStyleDeclaration(elm);
  
    for (const name in styleMap) {
      style[name] = styleMap[name];
    }
  }
  
  var modStaticStyle = {
    create: createStyleAttribute
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /**
  @license
  Copyright (c) 2015 Simon Friis Vindum.
  This code may only be used under the MIT License found at
  https://github.com/snabbdom/snabbdom/blob/master/LICENSE
  Code distributed by Snabbdom as part of the Snabbdom project at
  https://github.com/snabbdom/snabbdom/
  */
  
  function isUndef(s) {
    return s === undefined;
  }
  
  function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
  }
  
  function isVNode(vnode) {
    return vnode != null;
  }
  
  function createKeyToOldIdx(children, beginIdx, endIdx) {
    const map = {};
    let j, key, ch; // TODO [#1637]: simplify this by assuming that all vnodes has keys
  
    for (j = beginIdx; j <= endIdx; ++j) {
      ch = children[j];
  
      if (isVNode(ch)) {
        key = ch.key;
  
        if (key !== undefined) {
          map[key] = j;
        }
      }
    }
  
    return map;
  }
  
  function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx];
  
      if (isVNode(ch)) {
        ch.hook.create(ch);
        ch.hook.insert(ch, parentElm, before);
      }
    }
  }
  
  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx]; // text nodes do not have logic associated to them
  
      if (isVNode(ch)) {
        ch.hook.remove(ch, parentElm);
      }
    }
  }
  
  function updateDynamicChildren(parentElm, oldCh, newCh) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let oldKeyToIdx;
    let idxInOld;
    let elmToMove;
    let before;
  
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (!isVNode(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
      } else if (!isVNode(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (!isVNode(newStartVnode)) {
        newStartVnode = newCh[++newStartIdx];
      } else if (!isVNode(newEndVnode)) {
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode);
        newEndVnode.hook.move(oldStartVnode, parentElm, oldEndVnode.owner.renderer.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode);
        newStartVnode.hook.move(oldEndVnode, parentElm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
  
        idxInOld = oldKeyToIdx[newStartVnode.key];
  
        if (isUndef(idxInOld)) {
          // New element
          newStartVnode.hook.create(newStartVnode);
          newStartVnode.hook.insert(newStartVnode, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
  
          if (isVNode(elmToMove)) {
            if (elmToMove.sel !== newStartVnode.sel) {
              // New element
              newStartVnode.hook.create(newStartVnode);
              newStartVnode.hook.insert(newStartVnode, parentElm, oldStartVnode.elm);
            } else {
              patchVnode(elmToMove, newStartVnode);
              oldCh[idxInOld] = undefined;
              newStartVnode.hook.move(elmToMove, parentElm, oldStartVnode.elm);
            }
          }
  
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
  
    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
      if (oldStartIdx > oldEndIdx) {
        const n = newCh[newEndIdx + 1];
        before = isVNode(n) ? n.elm : null;
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
      } else {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }
  }
  
  function updateStaticChildren(parentElm, oldCh, newCh) {
    const {
      length
    } = newCh;
  
    if (oldCh.length === 0) {
      // the old list is empty, we can directly insert anything new
      addVnodes(parentElm, null, newCh, 0, length);
      return;
    } // if the old list is not empty, the new list MUST have the same
    // amount of nodes, that's why we call this static children
  
  
    let referenceElm = null;
  
    for (let i = length - 1; i >= 0; i -= 1) {
      const vnode = newCh[i];
      const oldVNode = oldCh[i];
  
      if (vnode !== oldVNode) {
        if (isVNode(oldVNode)) {
          if (isVNode(vnode)) {
            // both vnodes must be equivalent, and se just need to patch them
            patchVnode(oldVNode, vnode);
            referenceElm = vnode.elm;
          } else {
            // removing the old vnode since the new one is null
            oldVNode.hook.remove(oldVNode, parentElm);
          }
        } else if (isVNode(vnode)) {
          // this condition is unnecessary
          vnode.hook.create(vnode); // insert the new node one since the old one is null
  
          vnode.hook.insert(vnode, parentElm, referenceElm);
          referenceElm = vnode.elm;
        }
      }
    }
  }
  
  function patchVnode(oldVnode, vnode) {
    if (oldVnode !== vnode) {
      vnode.elm = oldVnode.elm;
      vnode.hook.update(oldVnode, vnode);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function generateDataDescriptor(options) {
    return assign$1({
      configurable: true,
      enumerable: true,
      writable: true
    }, options);
  }
  
  function generateAccessorDescriptor(options) {
    return assign$1({
      configurable: true,
      enumerable: true
    }, options);
  }
  
  let isDomMutationAllowed = false;
  
  function unlockDomMutation() {
  
    isDomMutationAllowed = true;
  }
  
  function lockDomMutation() {
  
    isDomMutationAllowed = false;
  }
  
  function logMissingPortalError(name, type) {
    return logError(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);
  }
  
  function patchElementWithRestrictions(elm, options) {
  
    const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
    const descriptors = {
      outerHTML: generateAccessorDescriptor({
        get() {
          return originalOuterHTMLDescriptor.get.call(this);
        },
  
        set(_value) {
          throw new TypeError(`Invalid attempt to set outerHTML on Element.`);
        }
  
      })
    }; // Apply extra restriction related to DOM manipulation if the element is not a portal.
  
    if (isFalse$1$1(options.isPortal)) {
      const {
        appendChild,
        insertBefore,
        removeChild,
        replaceChild
      } = elm;
      const originalNodeValueDescriptor = getPropertyDescriptor(elm, 'nodeValue');
      const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
      const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
      assign$1(descriptors, {
        appendChild: generateDataDescriptor({
          value(aChild) {
            logMissingPortalError('appendChild', 'method');
            return appendChild.call(this, aChild);
          }
  
        }),
        insertBefore: generateDataDescriptor({
          value(newNode, referenceNode) {
            if (!isDomMutationAllowed) {
              logMissingPortalError('insertBefore', 'method');
            }
  
            return insertBefore.call(this, newNode, referenceNode);
          }
  
        }),
        removeChild: generateDataDescriptor({
          value(aChild) {
            if (!isDomMutationAllowed) {
              logMissingPortalError('removeChild', 'method');
            }
  
            return removeChild.call(this, aChild);
          }
  
        }),
        replaceChild: generateDataDescriptor({
          value(newChild, oldChild) {
            logMissingPortalError('replaceChild', 'method');
            return replaceChild.call(this, newChild, oldChild);
          }
  
        }),
        nodeValue: generateAccessorDescriptor({
          get() {
            return originalNodeValueDescriptor.get.call(this);
          },
  
          set(value) {
            if (!isDomMutationAllowed) {
              logMissingPortalError('nodeValue', 'property');
            }
  
            originalNodeValueDescriptor.set.call(this, value);
          }
  
        }),
        textContent: generateAccessorDescriptor({
          get() {
            return originalTextContentDescriptor.get.call(this);
          },
  
          set(value) {
            logMissingPortalError('textContent', 'property');
            originalTextContentDescriptor.set.call(this, value);
          }
  
        }),
        innerHTML: generateAccessorDescriptor({
          get() {
            return originalInnerHTMLDescriptor.get.call(this);
          },
  
          set(value) {
            logMissingPortalError('innerHTML', 'property');
            return originalInnerHTMLDescriptor.set.call(this, value);
          }
  
        })
      });
    }
  
    defineProperties$1(elm, descriptors);
  }
  
  const BLOCKED_SHADOW_ROOT_METHODS = ['cloneNode', 'getElementById', 'getSelection', 'elementsFromPoint', 'dispatchEvent'];
  
  function getShadowRootRestrictionsDescriptors(sr) {
    // thing when using the real shadow root, because if that's the case,
    // the component will not work when running with synthetic shadow.
  
  
    const originalAddEventListener = sr.addEventListener;
    const originalInnerHTMLDescriptor = getPropertyDescriptor(sr, 'innerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(sr, 'textContent');
    const descriptors = {
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },
  
        set(_value) {
          throw new TypeError(`Invalid attempt to set innerHTML on ShadowRoot.`);
        }
  
      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },
  
        set(_value) {
          throw new TypeError(`Invalid attempt to set textContent on ShadowRoot.`);
        }
  
      }),
      addEventListener: generateDataDescriptor({
        value(type, listener, options) {
          // TODO [#420]: this is triggered when the component author attempts to add a listener
          // programmatically into its Component's shadow root
          if (!isUndefined$1(options)) {
            logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
          } // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-ignore type-mismatch
  
  
          return originalAddEventListener.apply(this, arguments);
        }
  
      })
    };
    forEach$1.call(BLOCKED_SHADOW_ROOT_METHODS, methodName => {
      descriptors[methodName] = generateAccessorDescriptor({
        get() {
          throw new Error(`Disallowed method "${methodName}" in ShadowRoot.`);
        }
  
      });
    });
    return descriptors;
  } // Custom Elements Restrictions:
  // -----------------------------
  
  
  function getCustomElementRestrictionsDescriptors(elm) {
  
    const originalAddEventListener = elm.addEventListener;
    const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
    const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
    return {
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },
  
        set(_value) {
          throw new TypeError(`Invalid attempt to set innerHTML on HTMLElement.`);
        }
  
      }),
      outerHTML: generateAccessorDescriptor({
        get() {
          return originalOuterHTMLDescriptor.get.call(this);
        },
  
        set(_value) {
          throw new TypeError(`Invalid attempt to set outerHTML on HTMLElement.`);
        }
  
      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },
  
        set(_value) {
          throw new TypeError(`Invalid attempt to set textContent on HTMLElement.`);
        }
  
      }),
      addEventListener: generateDataDescriptor({
        value(type, listener, options) {
          // TODO [#420]: this is triggered when the component author attempts to add a listener
          // programmatically into a lighting element node
          if (!isUndefined$1(options)) {
            logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
          } // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-ignore type-mismatch
  
  
          return originalAddEventListener.apply(this, arguments);
        }
  
      })
    };
  }
  
  function getComponentRestrictionsDescriptors() {
  
    return {
      tagName: generateAccessorDescriptor({
        get() {
          throw new Error(`Usage of property \`tagName\` is disallowed because the component itself does` + ` not know which tagName will be used to create the element, therefore writing` + ` code that check for that value is error prone.`);
        },
  
        configurable: true,
        enumerable: false
      })
    };
  }
  
  function getLightningElementPrototypeRestrictionsDescriptors(proto) {
  
    const originalDispatchEvent = proto.dispatchEvent;
    const descriptors = {
      dispatchEvent: generateDataDescriptor({
        value(event) {
          const vm = getAssociatedVM(this);
  
          if (!isNull$1(event) && isObject$2(event)) {
            const {
              type
            } = event;
  
            if (!/^[a-z][a-z0-9_]*$/.test(type)) {
              logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
            }
          } // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-ignore type-mismatch
  
  
          return originalDispatchEvent.apply(this, arguments);
        }
  
      })
    };
    forEach$1.call(getOwnPropertyNames$1(globalHTMLProperties), propName => {
      if (propName in proto) {
        return; // no need to redefine something that we are already exposing
      }
  
      descriptors[propName] = generateAccessorDescriptor({
        get() {
          const {
            error,
            attribute
          } = globalHTMLProperties[propName];
          const msg = [];
          msg.push(`Accessing the global HTML property "${propName}" is disabled.`);
  
          if (error) {
            msg.push(error);
          } else if (attribute) {
            msg.push(`Instead access it via \`this.getAttribute("${attribute}")\`.`);
          }
  
          logError(msg.join('\n'), getAssociatedVM(this));
        },
  
        set() {
          const {
            readOnly
          } = globalHTMLProperties[propName];
  
          if (readOnly) {
            logError(`The global HTML property \`${propName}\` is read-only.`, getAssociatedVM(this));
          }
        }
  
      });
    });
    return descriptors;
  } // This routine will prevent access to certain properties on a shadow root instance to guarantee
  // that all components will work fine in IE11 and other browsers without shadow dom support.
  
  
  function patchShadowRootWithRestrictions(sr) {
    defineProperties$1(sr, getShadowRootRestrictionsDescriptors(sr));
  }
  
  function patchCustomElementWithRestrictions(elm) {
    const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
    const elmProto = getPrototypeOf$1(elm);
    setPrototypeOf$1(elm, create$1(elmProto, restrictionsDescriptors));
  }
  
  function patchComponentWithRestrictions(cmp) {
    defineProperties$1(cmp, getComponentRestrictionsDescriptors());
  }
  
  function patchLightningElementPrototypeWithRestrictions(proto) {
    defineProperties$1(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
  }
  /*
   * Copyright (c) 2020, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // This is a temporary workaround to get the @lwc/engine-server to evaluate in node without having
  // to inject at runtime.
  
  
  const HTMLElementConstructor = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
  const HTMLElementPrototype = HTMLElementConstructor.prototype;
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /**
   * This is a descriptor map that contains
   * all standard properties that a Custom Element can support (including AOM properties), which
   * determines what kind of capabilities the Base HTML Element and
   * Base Lightning Element should support.
   */
  
  const HTMLElementOriginalDescriptors = create$1(null);
  forEach$1.call(keys$1(PropNameToAttrNameMap$1), propName => {
    // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
    // in IE11, some properties are on Element.prototype instead of HTMLElement, just to be sure.
    const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  
    if (!isUndefined$1(descriptor)) {
      HTMLElementOriginalDescriptors[propName] = descriptor;
    }
  });
  forEach$1.call(defaultDefHTMLPropertyNames, propName => {
    // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
    // in IE11, id property is on Element.prototype instead of HTMLElement, and we suspect that more will fall into
    // this category, so, better to be sure.
    const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  
    if (!isUndefined$1(descriptor)) {
      HTMLElementOriginalDescriptors[propName] = descriptor;
    }
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /**
   * This operation is called with a descriptor of an standard html property
   * that a Custom Element can support (including AOM properties), which
   * determines what kind of capabilities the Base Lightning Element should support. When producing the new descriptors
   * for the Base Lightning Element, it also include the reactivity bit, so the standard property is reactive.
   */
  
  function createBridgeToElementDescriptor(propName, descriptor) {
    const {
      get,
      set,
      enumerable,
      configurable
    } = descriptor;
  
    if (!isFunction$1(get)) {
      {
        assert$1.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
      }
  
      throw new TypeError();
    }
  
    if (!isFunction$1(set)) {
      {
        assert$1.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
      }
  
      throw new TypeError();
    }
  
    return {
      enumerable,
      configurable,
  
      get() {
        const vm = getAssociatedVM(this);
  
        if (isBeingConstructed(vm)) {
          {
            logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
          }
  
          return;
        }
  
        componentValueObserved(vm, propName);
        return get.call(vm.elm);
      },
  
      set(newValue) {
        const vm = getAssociatedVM(this);
  
        {
          const vmBeingRendered = getVMBeingRendered();
          assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);
          assert$1.invariant(!isUpdatingTemplate, `When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);
          assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
          assert$1.invariant(!isObject$2(newValue) || isNull$1(newValue), `Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
        }
  
        if (newValue !== vm.cmpProps[propName]) {
          vm.cmpProps[propName] = newValue;
          componentValueMutated(vm, propName);
        }
  
        return set.call(vm.elm, newValue);
      }
  
    };
  }
  /**
   * This class is the base class for any LWC element.
   * Some elements directly extends this class, others implement it via inheritance.
   **/
  
  
  function BaseLightningElementConstructor() {
    var _a; // This should be as performant as possible, while any initialization should be done lazily
  
  
    if (isNull$1(vmBeingConstructed)) {
      throw new ReferenceError('Illegal constructor');
    }
  
    const vm = vmBeingConstructed;
    const {
      elm,
      mode,
      renderer,
      def: {
        ctor
      }
    } = vm;
  
    {
      (_a = renderer.assertInstanceOfHTMLElement) === null || _a === void 0 ? void 0 : _a.call(renderer, vm.elm, `Component creation requires a DOM element to be associated to ${vm}.`);
    }
  
    const component = this;
    const cmpRoot = renderer.attachShadow(elm, {
      mode,
      delegatesFocus: !!ctor.delegatesFocus,
      '$$lwc-synthetic-mode$$': true
    });
    vm.component = this;
    vm.cmpRoot = cmpRoot; // Locker hooks assignment. When the LWC engine run with Locker, Locker intercepts all the new
    // component creation and passes hooks to instrument all the component interactions with the
    // engine. We are intentionally hiding this argument from the formal API of LightningElement
    // because we don't want folks to know about it just yet.
  
    if (arguments.length === 1) {
      const {
        callHook,
        setHook,
        getHook
      } = arguments[0];
      vm.callHook = callHook;
      vm.setHook = setHook;
      vm.getHook = getHook;
    } // Linking elm, shadow root and component with the VM.
  
  
    associateVM(component, vm);
    associateVM(cmpRoot, vm);
    associateVM(elm, vm); // Adding extra guard rails in DEV mode.
  
    {
      patchCustomElementWithRestrictions(elm);
      patchComponentWithRestrictions(component);
      patchShadowRootWithRestrictions(cmpRoot);
    }
  
    return this;
  }
  
  BaseLightningElementConstructor.prototype = {
    constructor: BaseLightningElementConstructor,
  
    dispatchEvent(event) {
      const {
        elm,
        renderer: {
          dispatchEvent
        }
      } = getAssociatedVM(this);
      return dispatchEvent(elm, event);
    },
  
    addEventListener(type, listener, options) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          addEventListener
        }
      } = vm;
  
      {
        const vmBeingRendered = getVMBeingRendered();
        assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
        assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
        assert$1.invariant(isFunction$1(listener), `Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
      }
  
      const wrappedListener = getWrappedComponentsListener(vm, listener);
      addEventListener(elm, type, wrappedListener, options);
    },
  
    removeEventListener(type, listener, options) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          removeEventListener
        }
      } = vm;
      const wrappedListener = getWrappedComponentsListener(vm, listener);
      removeEventListener(elm, type, wrappedListener, options);
    },
  
    hasAttribute(name) {
      const {
        elm,
        renderer: {
          getAttribute
        }
      } = getAssociatedVM(this);
      return !isNull$1(getAttribute(elm, name));
    },
  
    hasAttributeNS(namespace, name) {
      const {
        elm,
        renderer: {
          getAttribute
        }
      } = getAssociatedVM(this);
      return !isNull$1(getAttribute(elm, name, namespace));
    },
  
    removeAttribute(name) {
      const {
        elm,
        renderer: {
          removeAttribute
        }
      } = getAssociatedVM(this);
      unlockAttribute(elm, name);
      removeAttribute(elm, name);
      lockAttribute();
    },
  
    removeAttributeNS(namespace, name) {
      const {
        elm,
        renderer: {
          removeAttribute
        }
      } = getAssociatedVM(this);
      unlockAttribute(elm, name);
      removeAttribute(elm, name, namespace);
      lockAttribute();
    },
  
    getAttribute(name) {
      const {
        elm,
        renderer: {
          getAttribute
        }
      } = getAssociatedVM(this);
      return getAttribute(elm, name);
    },
  
    getAttributeNS(namespace, name) {
      const {
        elm,
        renderer: {
          getAttribute
        }
      } = getAssociatedVM(this);
      return getAttribute(elm, name, namespace);
    },
  
    setAttribute(name, value) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          setAttribute
        }
      } = vm;
  
      {
        assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }
  
      unlockAttribute(elm, name);
      setAttribute(elm, name, value);
      lockAttribute();
    },
  
    setAttributeNS(namespace, name, value) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          setAttribute
        }
      } = vm;
  
      {
        assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }
  
      unlockAttribute(elm, name);
      setAttribute(elm, name, value, namespace);
      lockAttribute();
    },
  
    getBoundingClientRect() {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          getBoundingClientRect
        }
      } = vm;
  
      {
        assert$1.isFalse(isBeingConstructed(vm), `this.getBoundingClientRect() should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM, instead, you can use it in one of the available life-cycle hooks.`);
      }
  
      return getBoundingClientRect(elm);
    },
  
    querySelector(selectors) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          querySelector
        }
      } = vm;
  
      {
        assert$1.isFalse(isBeingConstructed(vm), `this.querySelector() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
      }
  
      return querySelector(elm, selectors);
    },
  
    querySelectorAll(selectors) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          querySelectorAll
        }
      } = vm;
  
      {
        assert$1.isFalse(isBeingConstructed(vm), `this.querySelectorAll() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
      }
  
      return querySelectorAll(elm, selectors);
    },
  
    getElementsByTagName(tagNameOrWildCard) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          getElementsByTagName
        }
      } = vm;
  
      {
        assert$1.isFalse(isBeingConstructed(vm), `this.getElementsByTagName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
      }
  
      return getElementsByTagName(elm, tagNameOrWildCard);
    },
  
    getElementsByClassName(names) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          getElementsByClassName
        }
      } = vm;
  
      {
        assert$1.isFalse(isBeingConstructed(vm), `this.getElementsByClassName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
      }
  
      return getElementsByClassName(elm, names);
    },
  
    get isConnected() {
      const {
        elm,
        renderer: {
          isConnected
        }
      } = getAssociatedVM(this);
      return isConnected(elm);
    },
  
    get classList() {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer: {
          getClassList
        }
      } = vm;
  
      {
        // TODO [#1290]: this still fails in dev but works in production, eventually, we should
        // just throw in all modes
        assert$1.isFalse(isBeingConstructed(vm), `Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
      }
  
      return getClassList(elm);
    },
  
    get template() {
      const vm = getAssociatedVM(this);
      return vm.cmpRoot;
    },
  
    get shadowRoot() {
      // From within the component instance, the shadowRoot is always reported as "closed".
      // Authors should rely on this.template instead.
      return null;
    },
  
    render() {
      const vm = getAssociatedVM(this);
      return vm.def.template;
    },
  
    toString() {
      const vm = getAssociatedVM(this);
      return `[object ${vm.def.name}]`;
    }
  
  };
  const lightningBasedDescriptors = create$1(null);
  
  for (const propName in HTMLElementOriginalDescriptors) {
    lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
  }
  
  defineProperties$1(BaseLightningElementConstructor.prototype, lightningBasedDescriptors);
  defineProperty$1(BaseLightningElementConstructor, 'CustomElementConstructor', {
    get() {
      // If required, a runtime-specific implementation must be defined.
      throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
    },
  
    configurable: true
  });
  
  {
    patchLightningElementPrototypeWithRestrictions(BaseLightningElementConstructor.prototype);
  } // @ts-ignore
  
  
  const BaseLightningElement = BaseLightningElementConstructor;
  
  function internalWireFieldDecorator(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);
        componentValueObserved(vm, key);
        return vm.cmpFields[key];
      },
  
      set(value) {
        const vm = getAssociatedVM(this);
        /**
         * Reactivity for wired fields is provided in wiring.
         * We intentionally add reactivity here since this is just
         * letting the author to do the wrong thing, but it will keep our
         * system to be backward compatible.
         */
  
        if (value !== vm.cmpFields[key]) {
          vm.cmpFields[key] = value;
          componentValueMutated(vm, key);
        }
      },
  
      enumerable: true,
      configurable: true
    };
  }
  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  
  
  const {
    isArray: isArray$1$1
  } = Array;
  const {
    getPrototypeOf: getPrototypeOf$1$1,
    create: ObjectCreate,
    defineProperty: ObjectDefineProperty,
    defineProperties: ObjectDefineProperties,
    isExtensible,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor$1$1,
    getOwnPropertyNames: getOwnPropertyNames$1$1,
    getOwnPropertySymbols,
    preventExtensions,
    hasOwnProperty: hasOwnProperty$1$1
  } = Object;
  const {
    push: ArrayPush$2,
    concat: ArrayConcat,
    map: ArrayMap$1$1
  } = Array.prototype;
  const OtS$1$1 = {}.toString;
  
  function toString$1$1(obj) {
    if (obj && obj.toString) {
      return obj.toString();
    } else if (typeof obj === 'object') {
      return OtS$1$1.call(obj);
    } else {
      return obj + '';
    }
  }
  
  function isUndefined$2(obj) {
    return obj === undefined;
  }
  
  function isFunction$1$1(obj) {
    return typeof obj === 'function';
  }
  
  function isObject$1$1(obj) {
    return typeof obj === 'object';
  }
  
  const proxyToValueMap = new WeakMap();
  
  function registerProxy(proxy, value) {
    proxyToValueMap.set(proxy, value);
  }
  
  const unwrap = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;
  
  function wrapValue(membrane, value) {
    return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  
  
  function unwrapDescriptor(descriptor) {
    if (hasOwnProperty$1$1.call(descriptor, 'value')) {
      descriptor.value = unwrap(descriptor.value);
    }
  
    return descriptor;
  }
  
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
    const targetKeys = ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(key => {
      let descriptor = getOwnPropertyDescriptor$1$1(originalTarget, key); // We do not need to wrap the descriptor if configurable
      // Because we can deal with wrapping it when user goes through
      // Get own property descriptor. There is also a chance that this descriptor
      // could change sometime in the future, so we can defer wrapping
      // until we need to
  
      if (!descriptor.configurable) {
        descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
      }
  
      ObjectDefineProperty(shadowTarget, key, descriptor);
    });
    preventExtensions(shadowTarget);
  }
  
  class ReactiveProxyHandler {
    constructor(membrane, value) {
      this.originalTarget = value;
      this.membrane = membrane;
    }
  
    get(shadowTarget, key) {
      const {
        originalTarget,
        membrane
      } = this;
      const value = originalTarget[key];
      const {
        valueObserved
      } = membrane;
      valueObserved(originalTarget, key);
      return membrane.getProxy(value);
    }
  
    set(shadowTarget, key, value) {
      const {
        originalTarget,
        membrane: {
          valueMutated
        }
      } = this;
      const oldValue = originalTarget[key];
  
      if (oldValue !== value) {
        originalTarget[key] = value;
        valueMutated(originalTarget, key);
      } else if (key === 'length' && isArray$1$1(originalTarget)) {
        // fix for issue #236: push will add the new index, and by the time length
        // is updated, the internal length is already equal to the new length value
        // therefore, the oldValue is equal to the value. This is the forking logic
        // to support this use case.
        valueMutated(originalTarget, key);
      }
  
      return true;
    }
  
    deleteProperty(shadowTarget, key) {
      const {
        originalTarget,
        membrane: {
          valueMutated
        }
      } = this;
      delete originalTarget[key];
      valueMutated(originalTarget, key);
      return true;
    }
  
    apply(shadowTarget, thisArg, argArray) {
      /* No op */
    }
  
    construct(target, argArray, newTarget) {
      /* No op */
    }
  
    has(shadowTarget, key) {
      const {
        originalTarget,
        membrane: {
          valueObserved
        }
      } = this;
      valueObserved(originalTarget, key);
      return key in originalTarget;
    }
  
    ownKeys(shadowTarget) {
      const {
        originalTarget
      } = this;
      return ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget), getOwnPropertySymbols(originalTarget));
    }
  
    isExtensible(shadowTarget) {
      const shadowIsExtensible = isExtensible(shadowTarget);
  
      if (!shadowIsExtensible) {
        return shadowIsExtensible;
      }
  
      const {
        originalTarget,
        membrane
      } = this;
      const targetIsExtensible = isExtensible(originalTarget);
  
      if (!targetIsExtensible) {
        lockShadowTarget(membrane, shadowTarget, originalTarget);
      }
  
      return targetIsExtensible;
    }
  
    setPrototypeOf(shadowTarget, prototype) {
      {
        throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString$1$1(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
      }
    }
  
    getPrototypeOf(shadowTarget) {
      const {
        originalTarget
      } = this;
      return getPrototypeOf$1$1(originalTarget);
    }
  
    getOwnPropertyDescriptor(shadowTarget, key) {
      const {
        originalTarget,
        membrane
      } = this;
      const {
        valueObserved
      } = this.membrane; // keys looked up via hasOwnProperty need to be reactive
  
      valueObserved(originalTarget, key);
      let desc = getOwnPropertyDescriptor$1$1(originalTarget, key);
  
      if (isUndefined$2(desc)) {
        return desc;
      }
  
      const shadowDescriptor = getOwnPropertyDescriptor$1$1(shadowTarget, key);
  
      if (!isUndefined$2(shadowDescriptor)) {
        return shadowDescriptor;
      } // Note: by accessing the descriptor, the key is marked as observed
      // but access to the value, setter or getter (if available) cannot observe
      // mutations, just like regular methods, in which case we just do nothing.
  
  
      desc = wrapDescriptor(membrane, desc, wrapValue);
  
      if (!desc.configurable) {
        // If descriptor from original target is not configurable,
        // We must copy the wrapped descriptor over to the shadow target.
        // Otherwise, proxy will throw an invariant error.
        // This is our last chance to lock the value.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
        ObjectDefineProperty(shadowTarget, key, desc);
      }
  
      return desc;
    }
  
    preventExtensions(shadowTarget) {
      const {
        originalTarget,
        membrane
      } = this;
      lockShadowTarget(membrane, shadowTarget, originalTarget);
      preventExtensions(originalTarget);
      return true;
    }
  
    defineProperty(shadowTarget, key, descriptor) {
      const {
        originalTarget,
        membrane
      } = this;
      const {
        valueMutated
      } = membrane;
      const {
        configurable
      } = descriptor; // We have to check for value in descriptor
      // because Object.freeze(proxy) calls this method
      // with only { configurable: false, writeable: false }
      // Additionally, method will only be called with writeable:false
      // if the descriptor has a value, as opposed to getter/setter
      // So we can just check if writable is present and then see if
      // value is present. This eliminates getter and setter descriptors
  
      if (hasOwnProperty$1$1.call(descriptor, 'writable') && !hasOwnProperty$1$1.call(descriptor, 'value')) {
        const originalDescriptor = getOwnPropertyDescriptor$1$1(originalTarget, key);
        descriptor.value = originalDescriptor.value;
      }
  
      ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
  
      if (configurable === false) {
        ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
      }
  
      valueMutated(originalTarget, key);
      return true;
    }
  
  }
  
  function wrapReadOnlyValue(membrane, value) {
    return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  
  class ReadOnlyHandler {
    constructor(membrane, value) {
      this.originalTarget = value;
      this.membrane = membrane;
    }
  
    get(shadowTarget, key) {
      const {
        membrane,
        originalTarget
      } = this;
      const value = originalTarget[key];
      const {
        valueObserved
      } = membrane;
      valueObserved(originalTarget, key);
      return membrane.getReadOnlyProxy(value);
    }
  
    set(shadowTarget, key, value) {
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    }
  
    deleteProperty(shadowTarget, key) {
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    }
  
    apply(shadowTarget, thisArg, argArray) {
      /* No op */
    }
  
    construct(target, argArray, newTarget) {
      /* No op */
    }
  
    has(shadowTarget, key) {
      const {
        originalTarget,
        membrane: {
          valueObserved
        }
      } = this;
      valueObserved(originalTarget, key);
      return key in originalTarget;
    }
  
    ownKeys(shadowTarget) {
      const {
        originalTarget
      } = this;
      return ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget), getOwnPropertySymbols(originalTarget));
    }
  
    setPrototypeOf(shadowTarget, prototype) {
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
      }
    }
  
    getOwnPropertyDescriptor(shadowTarget, key) {
      const {
        originalTarget,
        membrane
      } = this;
      const {
        valueObserved
      } = membrane; // keys looked up via hasOwnProperty need to be reactive
  
      valueObserved(originalTarget, key);
      let desc = getOwnPropertyDescriptor$1$1(originalTarget, key);
  
      if (isUndefined$2(desc)) {
        return desc;
      }
  
      const shadowDescriptor = getOwnPropertyDescriptor$1$1(shadowTarget, key);
  
      if (!isUndefined$2(shadowDescriptor)) {
        return shadowDescriptor;
      } // Note: by accessing the descriptor, the key is marked as observed
      // but access to the value or getter (if available) cannot be observed,
      // just like regular methods, in which case we just do nothing.
  
  
      desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
  
      if (hasOwnProperty$1$1.call(desc, 'set')) {
        desc.set = undefined; // readOnly membrane does not allow setters
      }
  
      if (!desc.configurable) {
        // If descriptor from original target is not configurable,
        // We must copy the wrapped descriptor over to the shadow target.
        // Otherwise, proxy will throw an invariant error.
        // This is our last chance to lock the value.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
        ObjectDefineProperty(shadowTarget, key, desc);
      }
  
      return desc;
    }
  
    preventExtensions(shadowTarget) {
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);
      }
    }
  
    defineProperty(shadowTarget, key, descriptor) {
      {
        const {
          originalTarget
        } = this;
        throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    }
  
  }
  
  function extract(objectOrArray) {
    if (isArray$1$1(objectOrArray)) {
      return objectOrArray.map(item => {
        const original = unwrap(item);
  
        if (original !== item) {
          return extract(original);
        }
  
        return item;
      });
    }
  
    const obj = ObjectCreate(getPrototypeOf$1$1(objectOrArray));
    const names = getOwnPropertyNames$1$1(objectOrArray);
    return ArrayConcat.call(names, getOwnPropertySymbols(objectOrArray)).reduce((seed, key) => {
      const item = objectOrArray[key];
      const original = unwrap(item);
  
      if (original !== item) {
        seed[key] = extract(original);
      } else {
        seed[key] = item;
      }
  
      return seed;
    }, obj);
  }
  
  const formatter = {
    header: plainOrProxy => {
      const originalTarget = unwrap(plainOrProxy); // if originalTarget is falsy or not unwrappable, exit
  
      if (!originalTarget || originalTarget === plainOrProxy) {
        return null;
      }
  
      const obj = extract(plainOrProxy);
      return ['object', {
        object: obj
      }];
    },
    hasBody: () => {
      return false;
    },
    body: () => {
      return null;
    }
  }; // Inspired from paulmillr/es6-shim
  // https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L176-L185
  
  function getGlobal() {
    // the only reliable means to get the global object is `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof globalThis !== 'undefined') {
      return globalThis;
    }
  
    if (typeof self !== 'undefined') {
      return self;
    }
  
    if (typeof window !== 'undefined') {
      return window;
    }
  
    if (typeof global !== 'undefined') {
      return global;
    } // Gracefully degrade if not able to locate the global object
  
  
    return {};
  }
  
  function init() {
  
    const global = getGlobal(); // Custom Formatter for Dev Tools. To enable this, open Chrome Dev Tools
    //  - Go to Settings,
    //  - Under console, select "Enable custom formatters"
    // For more information, https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
  
    const devtoolsFormatters = global.devtoolsFormatters || [];
    ArrayPush$2.call(devtoolsFormatters, formatter);
    global.devtoolsFormatters = devtoolsFormatters;
  }
  
  {
    init();
  }
  
  function createShadowTarget(value) {
    let shadowTarget = undefined;
  
    if (isArray$1$1(value)) {
      shadowTarget = [];
    } else if (isObject$1$1(value)) {
      shadowTarget = {};
    }
  
    return shadowTarget;
  }
  
  const ObjectDotPrototype = Object.prototype;
  
  function defaultValueIsObservable(value) {
    // intentionally checking for null
    if (value === null) {
      return false;
    } // treat all non-object types, including undefined, as non-observable values
  
  
    if (typeof value !== 'object') {
      return false;
    }
  
    if (isArray$1$1(value)) {
      return true;
    }
  
    const proto = getPrototypeOf$1$1(value);
    return proto === ObjectDotPrototype || proto === null || getPrototypeOf$1$1(proto) === null;
  }
  
  const defaultValueObserved = (obj, key) => {
    /* do nothing */
  };
  
  const defaultValueMutated = (obj, key) => {
    /* do nothing */
  };
  
  const defaultValueDistortion = value => value;
  
  function wrapDescriptor(membrane, descriptor, getValue) {
    const {
      set,
      get
    } = descriptor;
  
    if (hasOwnProperty$1$1.call(descriptor, 'value')) {
      descriptor.value = getValue(membrane, descriptor.value);
    } else {
      if (!isUndefined$2(get)) {
        descriptor.get = function () {
          // invoking the original getter with the original target
          return getValue(membrane, get.call(unwrap(this)));
        };
      }
  
      if (!isUndefined$2(set)) {
        descriptor.set = function (value) {
          // At this point we don't have a clear indication of whether
          // or not a valid mutation will occur, we don't have the key,
          // and we are not sure why and how they are invoking this setter.
          // Nevertheless we preserve the original semantics by invoking the
          // original setter with the original target and the unwrapped value
          set.call(unwrap(this), membrane.unwrapProxy(value));
        };
      }
    }
  
    return descriptor;
  }
  
  class ReactiveMembrane {
    constructor(options) {
      this.valueDistortion = defaultValueDistortion;
      this.valueMutated = defaultValueMutated;
      this.valueObserved = defaultValueObserved;
      this.valueIsObservable = defaultValueIsObservable;
      this.objectGraph = new WeakMap();
  
      if (!isUndefined$2(options)) {
        const {
          valueDistortion,
          valueMutated,
          valueObserved,
          valueIsObservable
        } = options;
        this.valueDistortion = isFunction$1$1(valueDistortion) ? valueDistortion : defaultValueDistortion;
        this.valueMutated = isFunction$1$1(valueMutated) ? valueMutated : defaultValueMutated;
        this.valueObserved = isFunction$1$1(valueObserved) ? valueObserved : defaultValueObserved;
        this.valueIsObservable = isFunction$1$1(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
      }
    }
  
    getProxy(value) {
      const unwrappedValue = unwrap(value);
      const distorted = this.valueDistortion(unwrappedValue);
  
      if (this.valueIsObservable(distorted)) {
        const o = this.getReactiveState(unwrappedValue, distorted); // when trying to extract the writable version of a readonly
        // we return the readonly.
  
        return o.readOnly === value ? value : o.reactive;
      }
  
      return distorted;
    }
  
    getReadOnlyProxy(value) {
      value = unwrap(value);
      const distorted = this.valueDistortion(value);
  
      if (this.valueIsObservable(distorted)) {
        return this.getReactiveState(value, distorted).readOnly;
      }
  
      return distorted;
    }
  
    unwrapProxy(p) {
      return unwrap(p);
    }
  
    getReactiveState(value, distortedValue) {
      const {
        objectGraph
      } = this;
      let reactiveState = objectGraph.get(distortedValue);
  
      if (reactiveState) {
        return reactiveState;
      }
  
      const membrane = this;
      reactiveState = {
        get reactive() {
          const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue); // caching the reactive proxy after the first time it is accessed
  
          const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
          registerProxy(proxy, value);
          ObjectDefineProperty(this, 'reactive', {
            value: proxy
          });
          return proxy;
        },
  
        get readOnly() {
          const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue); // caching the readOnly proxy after the first time it is accessed
  
          const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
          registerProxy(proxy, value);
          ObjectDefineProperty(this, 'readOnly', {
            value: proxy
          });
          return proxy;
        }
  
      };
      objectGraph.set(distortedValue, reactiveState);
      return reactiveState;
    }
  
  }
  /** version: 0.26.0 */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function valueDistortion(value) {
    return value;
  }
  
  const reactiveMembrane = new ReactiveMembrane({
    valueObserved,
    valueMutated,
    valueDistortion
  });
  
  function internalTrackDecorator(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);
        componentValueObserved(vm, key);
        return vm.cmpFields[key];
      },
  
      set(newValue) {
        const vm = getAssociatedVM(this);
  
        {
          const vmBeingRendered = getVMBeingRendered();
          assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
          assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }
  
        const reactiveOrAnyValue = reactiveMembrane.getProxy(newValue);
  
        if (reactiveOrAnyValue !== vm.cmpFields[key]) {
          vm.cmpFields[key] = reactiveOrAnyValue;
          componentValueMutated(vm, key);
        }
      },
  
      enumerable: true,
      configurable: true
    };
  }
  /**
   * Copyright (C) 2018 salesforce.com, inc.
   */
  
  /**
   * Copyright (C) 2018 salesforce.com, inc.
   */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const {
    assign: assign$1$1,
    create: create$2,
    defineProperties: defineProperties$1$1,
    defineProperty: defineProperty$1$1,
    freeze: freeze$1$1,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor$2,
    getOwnPropertyNames: getOwnPropertyNames$2,
    getPrototypeOf: getPrototypeOf$2,
    hasOwnProperty: hasOwnProperty$2,
    isFrozen: isFrozen$1$1,
    keys: keys$1$1,
    seal: seal$1$1,
    setPrototypeOf: setPrototypeOf$1$1
  } = Object;
  const {
    filter: ArrayFilter$1$1,
    find: ArrayFind$1$1,
    indexOf: ArrayIndexOf$2,
    join: ArrayJoin$1$1,
    map: ArrayMap$2,
    push: ArrayPush$3,
    reduce: ArrayReduce$1$1,
    reverse: ArrayReverse$1$1,
    slice: ArraySlice$1$1,
    splice: ArraySplice$2,
    unshift: ArrayUnshift$1$1,
    forEach: forEach$1$1
  } = Array.prototype;
  const {
    charCodeAt: StringCharCodeAt$1$1,
    replace: StringReplace$1$1,
    slice: StringSlice$1$1,
    toLowerCase: StringToLowerCase$1$1
  } = String.prototype;
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /**
   * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
   * ariaGrabbed) are deprecated:
   * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
   *
   * The above list of 46 aria attributes is consistent with the following resources:
   * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
   * https://wicg.github.io/aom/spec/aria-reflection.html
   */
  
  
  const AriaPropertyNames$1$1 = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];
  const AttrNameToPropNameMap$2 = create$2(null);
  const PropNameToAttrNameMap$2 = create$2(null); // Synthetic creation of all AOM property descriptors for Custom Elements
  
  forEach$1$1.call(AriaPropertyNames$1$1, propName => {
    // Typescript infers the wrong function type for this particular overloaded method:
    // https://github.com/Microsoft/TypeScript/issues/27972
    // @ts-ignore type-mismatch
    const attrName = StringToLowerCase$1$1.call(StringReplace$1$1.call(propName, /^aria/, 'aria-'));
    AttrNameToPropNameMap$2[attrName] = propName;
    PropNameToAttrNameMap$2[propName] = attrName;
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // Inspired from: https://mathiasbynens.be/notes/globalthis
  
  const _globalThis$1$1 = function () {
    // On recent browsers, `globalThis` is already defined. In this case return it directly.
    if (typeof globalThis === 'object') {
      return globalThis;
    }
  
    let _globalThis;
  
    try {
      // eslint-disable-next-line no-extend-native
      Object.defineProperty(Object.prototype, '__magic__', {
        get: function () {
          return this;
        },
        configurable: true
      }); // __magic__ is undefined in Safari 10 and IE10 and older.
      // @ts-ignore
      // eslint-disable-next-line no-undef
  
      _globalThis = __magic__; // @ts-ignore
  
      delete Object.prototype.__magic__;
    } catch (ex) {// In IE8, Object.defineProperty only works on DOM objects.
    } finally {
      // If the magic above fails for some reason we assume that we are in a legacy browser.
      // Assume `window` exists in this case.
      if (typeof _globalThis === 'undefined') {
        // @ts-ignore
        _globalThis = window;
      }
    }
  
    return _globalThis;
  }();
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  /*
   * In IE11, symbols are expensive.
   * Due to the nature of the symbol polyfill. This method abstract the
   * creation of symbols, so we can fallback to string when native symbols
   * are not supported. Note that we can't use typeof since it will fail when transpiling.
   */
  
  
  const hasNativeSymbolsSupport$1$1 = Symbol('x').toString() === 'Symbol(x)';
  const HTML_ATTRIBUTES_TO_PROPERTY$1$1 = {
    accesskey: 'accessKey',
    readonly: 'readOnly',
    tabindex: 'tabIndex',
    bgcolor: 'bgColor',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    contenteditable: 'contentEditable',
    crossorigin: 'crossOrigin',
    datetime: 'dateTime',
    formaction: 'formAction',
    ismap: 'isMap',
    maxlength: 'maxLength',
    minlength: 'minLength',
    novalidate: 'noValidate',
    usemap: 'useMap',
    for: 'htmlFor'
  };
  keys$1$1(HTML_ATTRIBUTES_TO_PROPERTY$1$1).forEach(attrName => {});
  /** version: 1.7.7 */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  if (!_globalThis$1$1.lwcRuntimeFlags) {
    Object.defineProperty(_globalThis$1$1, 'lwcRuntimeFlags', {
      value: create$2(null)
    });
  }
  
  const runtimeFlags = _globalThis$1$1.lwcRuntimeFlags; // This function is not supported for use within components and is meant for
  
  function createPublicPropertyDescriptor(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);
  
        if (isBeingConstructed(vm)) {
          {
            logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
          }
  
          return;
        }
  
        componentValueObserved(vm, key);
        return vm.cmpProps[key];
      },
  
      set(newValue) {
        const vm = getAssociatedVM(this);
  
        {
          const vmBeingRendered = getVMBeingRendered();
          assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
          assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }
  
        vm.cmpProps[key] = newValue;
        componentValueMutated(vm, key);
      },
  
      enumerable: true,
      configurable: true
    };
  }
  
  class AccessorReactiveObserver extends ReactiveObserver {
    constructor(vm, set) {
      super(() => {
        if (isFalse$1$1(this.debouncing)) {
          this.debouncing = true;
          addCallbackToNextTick(() => {
            if (isTrue$1$1(this.debouncing)) {
              const {
                value
              } = this;
              const {
                isDirty: dirtyStateBeforeSetterCall,
                component,
                idx
              } = vm;
              set.call(component, value); // de-bouncing after the call to the original setter to prevent
              // infinity loop if the setter itself is mutating things that
              // were accessed during the previous invocation.
  
              this.debouncing = false;
  
              if (isTrue$1$1(vm.isDirty) && isFalse$1$1(dirtyStateBeforeSetterCall) && idx > 0) {
                // immediate rehydration due to a setter driven mutation, otherwise
                // the component will get rendered on the second tick, which it is not
                // desirable.
                rerenderVM(vm);
              }
            }
          });
        }
      });
      this.debouncing = false;
    }
  
    reset(value) {
      super.reset();
      this.debouncing = false;
  
      if (arguments.length > 0) {
        this.value = value;
      }
    }
  
  }
  
  function createPublicAccessorDescriptor(key, descriptor) {
    const {
      get,
      set,
      enumerable,
      configurable
    } = descriptor;
  
    if (!isFunction$1(get)) {
      {
        assert$1.invariant(isFunction$1(get), `Invalid compiler output for public accessor ${toString$1(key)} decorated with @api`);
      }
  
      throw new Error();
    }
  
    return {
      get() {
        {
          // Assert that the this value is an actual Component with an associated VM.
          getAssociatedVM(this);
        }
  
        return get.call(this);
      },
  
      set(newValue) {
        const vm = getAssociatedVM(this);
  
        {
          const vmBeingRendered = getVMBeingRendered();
          assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
          assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }
  
        if (set) {
          if (runtimeFlags.ENABLE_REACTIVE_SETTER) {
            let ro = vm.oar[key];
  
            if (isUndefined$1(ro)) {
              ro = vm.oar[key] = new AccessorReactiveObserver(vm, set);
            } // every time we invoke this setter from outside (through this wrapper setter)
            // we should reset the value and then debounce just in case there is a pending
            // invocation the next tick that is not longer relevant since the value is changing
            // from outside.
  
  
            ro.reset(newValue);
            ro.observe(() => {
              set.call(this, newValue);
            });
          } else {
            set.call(this, newValue);
          }
        } else {
          assert$1.fail(`Invalid attempt to set a new value for property ${toString$1(key)} of ${vm} that does not has a setter decorated with @api.`);
        }
      },
  
      enumerable,
      configurable
    };
  }
  
  function createObservedFieldPropertyDescriptor(key) {
    return {
      get() {
        const vm = getAssociatedVM(this);
        componentValueObserved(vm, key);
        return vm.cmpFields[key];
      },
  
      set(newValue) {
        const vm = getAssociatedVM(this);
  
        if (newValue !== vm.cmpFields[key]) {
          vm.cmpFields[key] = newValue;
          componentValueMutated(vm, key);
        }
      },
  
      enumerable: true,
      configurable: true
    };
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  var PropType;
  
  (function (PropType) {
    PropType[PropType["Field"] = 0] = "Field";
    PropType[PropType["Set"] = 1] = "Set";
    PropType[PropType["Get"] = 2] = "Get";
    PropType[PropType["GetSet"] = 3] = "GetSet";
  })(PropType || (PropType = {}));
  
  function validateObservedField(Ctor, fieldName, descriptor) {
    {
      if (!isUndefined$1(descriptor)) {
        assert$1.fail(`Compiler Error: Invalid field ${fieldName} declaration.`);
      }
    }
  }
  
  function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
    {
      if (!isUndefined$1(descriptor)) {
        assert$1.fail(`Compiler Error: Invalid @track ${fieldName} declaration.`);
      }
    }
  }
  
  function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
    {
      if (!isUndefined$1(descriptor)) {
        assert$1.fail(`Compiler Error: Invalid @wire(...) ${fieldName} field declaration.`);
      }
    }
  }
  
  function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
    {
      if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse$1$1(descriptor.writable)) {
        assert$1.fail(`Compiler Error: Invalid @wire(...) ${methodName} method declaration.`);
      }
    }
  }
  
  function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
    {
      if (!isUndefined$1(descriptor)) {
        assert$1.fail(`Compiler Error: Invalid @api ${fieldName} field declaration.`);
      }
    }
  }
  
  function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
    {
      if (isUndefined$1(descriptor)) {
        assert$1.fail(`Compiler Error: Invalid @api get ${fieldName} accessor declaration.`);
      } else if (isFunction$1(descriptor.set)) {
        assert$1.isTrue(isFunction$1(descriptor.get), `Compiler Error: Missing getter for property ${toString$1(fieldName)} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
      } else if (!isFunction$1(descriptor.get)) {
        assert$1.fail(`Compiler Error: Missing @api get ${fieldName} accessor declaration.`);
      }
    }
  }
  
  function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
    {
      if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse$1$1(descriptor.writable)) {
        assert$1.fail(`Compiler Error: Invalid @api ${methodName} method declaration.`);
      }
    }
  }
  /**
   * INTERNAL: This function can only be invoked by compiled code. The compiler
   * will prevent this function from being imported by user-land code.
   */
  
  
  function registerDecorators(Ctor, meta) {
    const proto = Ctor.prototype;
    const {
      publicProps,
      publicMethods,
      wire,
      track,
      fields
    } = meta;
    const apiMethods = create$1(null);
    const apiFields = create$1(null);
    const wiredMethods = create$1(null);
    const wiredFields = create$1(null);
    const observedFields = create$1(null);
    const apiFieldsConfig = create$1(null);
    let descriptor;
  
    if (!isUndefined$1(publicProps)) {
      for (const fieldName in publicProps) {
        const propConfig = publicProps[fieldName];
        apiFieldsConfig[fieldName] = propConfig.config;
        descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
  
        if (propConfig.config > 0) {
          // accessor declaration
          {
            validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor);
          }
  
          if (isUndefined$1(descriptor)) {
            throw new Error();
          }
  
          descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
        } else {
          // field declaration
          {
            validateFieldDecoratedWithApi(Ctor, fieldName, descriptor);
          }
  
          descriptor = createPublicPropertyDescriptor(fieldName);
        }
  
        apiFields[fieldName] = descriptor;
        defineProperty$1(proto, fieldName, descriptor);
      }
    }
  
    if (!isUndefined$1(publicMethods)) {
      forEach$1.call(publicMethods, methodName => {
        descriptor = getOwnPropertyDescriptor$1(proto, methodName);
  
        {
          validateMethodDecoratedWithApi(Ctor, methodName, descriptor);
        }
  
        if (isUndefined$1(descriptor)) {
          throw new Error();
        }
  
        apiMethods[methodName] = descriptor;
      });
    }
  
    if (!isUndefined$1(wire)) {
      for (const fieldOrMethodName in wire) {
        const {
          adapter,
          method,
          config: configCallback,
          dynamic = []
        } = wire[fieldOrMethodName];
        descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);
  
        if (method === 1) {
          {
            assert$1.isTrue(adapter, `@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
            validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
          }
  
          if (isUndefined$1(descriptor)) {
            throw new Error();
          }
  
          wiredMethods[fieldOrMethodName] = descriptor;
          storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
        } else {
          {
            assert$1.isTrue(adapter, `@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
            validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
          }
  
          descriptor = internalWireFieldDecorator(fieldOrMethodName);
          wiredFields[fieldOrMethodName] = descriptor;
          storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
          defineProperty$1(proto, fieldOrMethodName, descriptor);
        }
      }
    }
  
    if (!isUndefined$1(track)) {
      for (const fieldName in track) {
        descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
  
        {
          validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
        }
  
        descriptor = internalTrackDecorator(fieldName);
        defineProperty$1(proto, fieldName, descriptor);
      }
    }
  
    if (!isUndefined$1(fields)) {
      for (let i = 0, n = fields.length; i < n; i++) {
        const fieldName = fields[i];
        descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
  
        {
          validateObservedField(Ctor, fieldName, descriptor);
        }
  
        observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
      }
    }
  
    setDecoratorsMeta(Ctor, {
      apiMethods,
      apiFields,
      apiFieldsConfig,
      wiredMethods,
      wiredFields,
      observedFields
    });
    return Ctor;
  }
  
  const signedDecoratorToMetaMap = new Map();
  
  function setDecoratorsMeta(Ctor, meta) {
    signedDecoratorToMetaMap.set(Ctor, meta);
  }
  
  const defaultMeta = {
    apiMethods: EmptyObject,
    apiFields: EmptyObject,
    apiFieldsConfig: EmptyObject,
    wiredMethods: EmptyObject,
    wiredFields: EmptyObject,
    observedFields: EmptyObject
  };
  
  function getDecoratorsMeta(Ctor) {
    const meta = signedDecoratorToMetaMap.get(Ctor);
    return isUndefined$1(meta) ? defaultMeta : meta;
  }
  
  const signedTemplateSet = new Set();
  
  function defaultEmptyTemplate() {
    return [];
  }
  
  signedTemplateSet.add(defaultEmptyTemplate);
  
  function isTemplateRegistered(tpl) {
    return signedTemplateSet.has(tpl);
  }
  /**
   * INTERNAL: This function can only be invoked by compiled code. The compiler
   * will prevent this function from being imported by userland code.
   */
  
  
  function registerTemplate(tpl) {
    signedTemplateSet.add(tpl); // chaining this method as a way to wrap existing
    // assignment of templates easily, without too much transformation
  
    return tpl;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  // from the element instance, and get the value or set a new value on the component.
  // This means that across different elements, similar names can get the exact same
  // descriptor, so we can cache them:
  
  
  const cachedGetterByKey = create$1(null);
  const cachedSetterByKey = create$1(null);
  
  function createGetter(key) {
    let fn = cachedGetterByKey[key];
  
    if (isUndefined$1(fn)) {
      fn = cachedGetterByKey[key] = function () {
        const vm = getAssociatedVM(this);
        const {
          getHook
        } = vm;
        return getHook(vm.component, key);
      };
    }
  
    return fn;
  }
  
  function createSetter(key) {
    let fn = cachedSetterByKey[key];
  
    if (isUndefined$1(fn)) {
      fn = cachedSetterByKey[key] = function (newValue) {
        const vm = getAssociatedVM(this);
        const {
          setHook
        } = vm;
        newValue = reactiveMembrane.getReadOnlyProxy(newValue);
        setHook(vm.component, key, newValue);
      };
    }
  
    return fn;
  }
  
  function createMethodCaller(methodName) {
    return function () {
      const vm = getAssociatedVM(this);
      const {
        callHook,
        component
      } = vm;
      const fn = component[methodName];
      return callHook(vm.component, fn, ArraySlice$2.call(arguments));
    };
  }
  
  function HTMLBridgeElementFactory(SuperClass, props, methods) {
    let HTMLBridgeElement;
    /**
     * Modern browsers will have all Native Constructors as regular Classes
     * and must be instantiated with the new keyword. In older browsers,
     * specifically IE11, those are objects with a prototype property defined,
     * since they are not supposed to be extended or instantiated with the
     * new keyword. This forking logic supports both cases, specifically because
     * wc.ts relies on the construction path of the bridges to create new
     * fully qualifying web components.
     */
  
    if (isFunction$1(SuperClass)) {
      HTMLBridgeElement = class extends SuperClass {};
    } else {
      HTMLBridgeElement = function () {
        // Bridge classes are not supposed to be instantiated directly in
        // browsers that do not support web components.
        throw new TypeError('Illegal constructor');
      }; // prototype inheritance dance
  
  
      setPrototypeOf$1(HTMLBridgeElement, SuperClass);
      setPrototypeOf$1(HTMLBridgeElement.prototype, SuperClass.prototype);
      defineProperty$1(HTMLBridgeElement.prototype, 'constructor', {
        writable: true,
        configurable: true,
        value: HTMLBridgeElement
      });
    }
  
    const descriptors = create$1(null); // expose getters and setters for each public props on the new Element Bridge
  
    for (let i = 0, len = props.length; i < len; i += 1) {
      const propName = props[i];
      descriptors[propName] = {
        get: createGetter(propName),
        set: createSetter(propName),
        enumerable: true,
        configurable: true
      };
    } // expose public methods as props on the new Element Bridge
  
  
    for (let i = 0, len = methods.length; i < len; i += 1) {
      const methodName = methods[i];
      descriptors[methodName] = {
        value: createMethodCaller(methodName),
        writable: true,
        configurable: true
      };
    }
  
    defineProperties$1(HTMLBridgeElement.prototype, descriptors);
    return HTMLBridgeElement;
  }
  
  const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor, getOwnPropertyNames$1(HTMLElementOriginalDescriptors), []);
  freeze$1(BaseBridgeElement);
  seal$1(BaseBridgeElement.prototype);
  /*
   * Copyright (c) 2020, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  function resolveCircularModuleDependency(fn) {
    return fn();
  }
  
  function isCircularModuleDependency(obj) {
    return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const CtorToDefMap = new WeakMap();
  
  function getCtorProto(Ctor) {
    let proto = getPrototypeOf$1(Ctor);
  
    if (isNull$1(proto)) {
      throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
    } // covering the cases where the ref is circular in AMD
  
  
    if (isCircularModuleDependency(proto)) {
      const p = resolveCircularModuleDependency(proto);
  
      {
        if (isNull$1(p)) {
          throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);
        }
      } // escape hatch for Locker and other abstractions to provide their own base class instead
      // of our Base class without having to leak it to user-land. If the circular function returns
      // itself, that's the signal that we have hit the end of the proto chain, which must always
      // be base.
  
  
      proto = p === proto ? BaseLightningElement : p;
    }
  
    return proto;
  }
  
  function createComponentDef(Ctor) {
    {
      const ctorName = Ctor.name; // Removing the following assert until https://bugs.webkit.org/show_bug.cgi?id=190140 is fixed.
      // assert.isTrue(ctorName && isString(ctorName), `${toString(Ctor)} should have a "name" property with string value, but found ${ctorName}.`);
  
      assert$1.isTrue(Ctor.constructor, `Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);
    }
  
    const decoratorsMeta = getDecoratorsMeta(Ctor);
    const {
      apiFields,
      apiFieldsConfig,
      apiMethods,
      wiredFields,
      wiredMethods,
      observedFields
    } = decoratorsMeta;
    const proto = Ctor.prototype;
    let {
      connectedCallback,
      disconnectedCallback,
      renderedCallback,
      errorCallback,
      render
    } = proto;
    const superProto = getCtorProto(Ctor);
    const superDef = superProto !== BaseLightningElement ? getComponentInternalDef(superProto) : lightingElementDef;
    const bridge = HTMLBridgeElementFactory(superDef.bridge, keys$1(apiFields), keys$1(apiMethods));
    const props = assign$1(create$1(null), superDef.props, apiFields);
    const propsConfig = assign$1(create$1(null), superDef.propsConfig, apiFieldsConfig);
    const methods = assign$1(create$1(null), superDef.methods, apiMethods);
    const wire = assign$1(create$1(null), superDef.wire, wiredFields, wiredMethods);
    connectedCallback = connectedCallback || superDef.connectedCallback;
    disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
    renderedCallback = renderedCallback || superDef.renderedCallback;
    errorCallback = errorCallback || superDef.errorCallback;
    render = render || superDef.render;
    const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
    const name = Ctor.name || superDef.name; // installing observed fields into the prototype.
  
    defineProperties$1(proto, observedFields);
    const def = {
      ctor: Ctor,
      name,
      wire,
      props,
      propsConfig,
      methods,
      bridge,
      template,
      connectedCallback,
      disconnectedCallback,
      renderedCallback,
      errorCallback,
      render
    };
  
    {
      freeze$1(Ctor.prototype);
    }
  
    return def;
  }
  /**
   * EXPERIMENTAL: This function allows for the identification of LWC constructors. This API is
   * subject to change or being removed.
   */
  
  
  function isComponentConstructor(ctor) {
    if (!isFunction$1(ctor)) {
      return false;
    } // Fast path: LightningElement is part of the prototype chain of the constructor.
  
  
    if (ctor.prototype instanceof BaseLightningElement) {
      return true;
    } // Slow path: LightningElement is not part of the prototype chain of the constructor, we need
    // climb up the constructor prototype chain to check in case there are circular dependencies
    // to resolve.
  
  
    let current = ctor;
  
    do {
      if (isCircularModuleDependency(current)) {
        const circularResolved = resolveCircularModuleDependency(current); // If the circular function returns itself, that's the signal that we have hit the end
        // of the proto chain, which must always be a valid base constructor.
  
        if (circularResolved === current) {
          return true;
        }
  
        current = circularResolved;
      }
  
      if (current === BaseLightningElement) {
        return true;
      }
    } while (!isNull$1(current) && (current = getPrototypeOf$1(current))); // Finally return false if the LightningElement is not part of the prototype chain.
  
  
    return false;
  }
  
  function getComponentInternalDef(Ctor) {
    let def = CtorToDefMap.get(Ctor);
  
    if (isUndefined$1(def)) {
      if (isCircularModuleDependency(Ctor)) {
        const resolvedCtor = resolveCircularModuleDependency(Ctor);
        def = getComponentInternalDef(resolvedCtor); // Cache the unresolved component ctor too. The next time if the same unresolved ctor is used,
        // look up the definition in cache instead of re-resolving and recreating the def.
  
        CtorToDefMap.set(Ctor, def);
        return def;
      }
  
      if (!isComponentConstructor(Ctor)) {
        throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
      }
  
      def = createComponentDef(Ctor);
      CtorToDefMap.set(Ctor, def);
    }
  
    return def;
  }
  /** Set prototype for public methods and properties on the element. No DOM Patching occurs here. */
  
  
  function setElementProto(elm, def) {
    setPrototypeOf$1(elm, def.bridge.prototype);
  }
  
  const lightingElementDef = {
    ctor: BaseLightningElement,
    name: BaseLightningElement.name,
    props: lightningBasedDescriptors,
    propsConfig: EmptyObject,
    methods: EmptyObject,
    wire: EmptyObject,
    bridge: BaseBridgeElement,
    template: defaultEmptyTemplate,
    render: BaseLightningElement.prototype.render
  };
  var PropDefType;
  
  (function (PropDefType) {
    PropDefType["any"] = "any";
  })(PropDefType || (PropDefType = {}));
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const noop = () => void 0;
  
  function observeElementChildNodes(elm) {
    elm.$domManual$ = true;
  }
  
  function setElementShadowToken(elm, token) {
    elm.$shadowToken$ = token;
  }
  
  function updateNodeHook(oldVnode, vnode) {
    const {
      elm,
      text,
      owner: {
        renderer
      }
    } = vnode;
  
    if (oldVnode.text !== text) {
      {
        unlockDomMutation();
      }
  
      renderer.setText(elm, text);
  
      {
        lockDomMutation();
      }
    }
  }
  
  function insertNodeHook(vnode, parentNode, referenceNode) {
    const {
      renderer
    } = vnode.owner;
  
    {
      unlockDomMutation();
    }
  
    renderer.insert(vnode.elm, parentNode, referenceNode);
  
    {
      lockDomMutation();
    }
  }
  
  function removeNodeHook(vnode, parentNode) {
    const {
      renderer
    } = vnode.owner;
  
    {
      unlockDomMutation();
    }
  
    renderer.remove(vnode.elm, parentNode);
  
    {
      lockDomMutation();
    }
  }
  
  function createElmHook(vnode) {
    modEvents.create(vnode); // Attrs need to be applied to element before props
    // IE11 will wipe out value on radio inputs if value
    // is set before type=radio.
  
    modAttrs.create(vnode);
    modProps.create(vnode);
    modStaticClassName.create(vnode);
    modStaticStyle.create(vnode);
    modComputedClassName.create(vnode);
    modComputedStyle.create(vnode);
  }
  
  var LWCDOMMode;
  
  (function (LWCDOMMode) {
    LWCDOMMode["manual"] = "manual";
  })(LWCDOMMode || (LWCDOMMode = {}));
  
  function fallbackElmHook(elm, vnode) {
    const {
      owner
    } = vnode;
  
    if (isTrue$1$1(owner.renderer.syntheticShadow)) {
      const {
        data: {
          context
        }
      } = vnode;
      const {
        shadowAttribute
      } = owner.context;
  
      if (!isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === LWCDOMMode.manual) {
        // this element will now accept any manual content inserted into it
        observeElementChildNodes(elm);
      } // when running in synthetic shadow mode, we need to set the shadowToken value
      // into each element from the template, so they can be styled accordingly.
  
  
      setElementShadowToken(elm, shadowAttribute);
    }
  
    {
      const {
        data: {
          context
        }
      } = vnode;
      const isPortal = !isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === LWCDOMMode.manual;
      patchElementWithRestrictions(elm, {
        isPortal
      });
    }
  }
  
  function updateElmHook(oldVnode, vnode) {
    // Attrs need to be applied to element before props
    // IE11 will wipe out value on radio inputs if value
    // is set before type=radio.
    modAttrs.update(oldVnode, vnode);
    modProps.update(oldVnode, vnode);
    modComputedClassName.update(oldVnode, vnode);
    modComputedStyle.update(oldVnode, vnode);
  }
  
  function insertCustomElmHook(vnode) {
    const vm = getAssociatedVM(vnode.elm);
    appendVM(vm);
  }
  
  function updateChildrenHook(oldVnode, vnode) {
    const {
      children,
      owner
    } = vnode;
    const fn = hasDynamicChildren(children) ? updateDynamicChildren : updateStaticChildren;
    runWithBoundaryProtection(owner, owner.owner, noop, () => {
      fn(vnode.elm, oldVnode.children, children);
    }, noop);
  }
  
  function allocateChildrenHook(vnode) {
    const vm = getAssociatedVM(vnode.elm); // A component with slots will re-render because:
    // 1- There is a change of the internal state.
    // 2- There is a change on the external api (ex: slots)
    //
    // In case #1, the vnodes in the cmpSlots will be reused since they didn't changed. This routine emptied the
    // slotted children when those VCustomElement were rendered and therefore in subsequent calls to allocate children
    // in a reused VCustomElement, there won't be any slotted children.
    // For those cases, we will use the reference for allocated children stored when rendering the fresh VCustomElement.
    //
    // In case #2, we will always get a fresh VCustomElement.
  
    const children = vnode.aChildren || vnode.children;
    vm.aChildren = children;
  
    if (isTrue$1$1(vm.renderer.syntheticShadow)) {
      // slow path
      allocateInSlot(vm, children); // save the allocated children in case this vnode is reused.
  
      vnode.aChildren = children; // every child vnode is now allocated, and the host should receive none directly, it receives them via the shadow!
  
      vnode.children = EmptyArray;
    }
  }
  
  function createViewModelHook(elm, vnode) {
    if (!isUndefined$1(getAssociatedVMIfPresent(elm))) {
      // There is a possibility that a custom element is registered under tagName,
      // in which case, the initialization is already carry on, and there is nothing else
      // to do here since this hook is called right after invoking `document.createElement`.
      return;
    }
  
    const {
      sel,
      mode,
      ctor,
      owner
    } = vnode;
    const def = getComponentInternalDef(ctor);
    setElementProto(elm, def);
  
    if (isTrue$1$1(owner.renderer.syntheticShadow)) {
      const {
        shadowAttribute
      } = owner.context; // when running in synthetic shadow mode, we need to set the shadowToken value
      // into each element from the template, so they can be styled accordingly.
  
      setElementShadowToken(elm, shadowAttribute);
    }
  
    createVM(elm, def, {
      mode,
      owner,
      tagName: sel,
      renderer: owner.renderer
    });
  
    {
      assert$1.isTrue(isArray$2(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
    }
  }
  
  function createCustomElmHook(vnode) {
    modEvents.create(vnode); // Attrs need to be applied to element before props
    // IE11 will wipe out value on radio inputs if value
    // is set before type=radio.
  
    modAttrs.create(vnode);
    modProps.create(vnode);
    modStaticClassName.create(vnode);
    modStaticStyle.create(vnode);
    modComputedClassName.create(vnode);
    modComputedStyle.create(vnode);
  }
  
  function createChildrenHook(vnode) {
    const {
      elm,
      children
    } = vnode;
  
    for (let j = 0; j < children.length; ++j) {
      const ch = children[j];
  
      if (ch != null) {
        ch.hook.create(ch);
        ch.hook.insert(ch, elm, null);
      }
    }
  }
  
  function rerenderCustomElmHook(vnode) {
    const vm = getAssociatedVM(vnode.elm);
  
    {
      assert$1.isTrue(isArray$2(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
    }
  
    rerenderVM(vm);
  }
  
  function updateCustomElmHook(oldVnode, vnode) {
    // Attrs need to be applied to element before props
    // IE11 will wipe out value on radio inputs if value
    // is set before type=radio.
    modAttrs.update(oldVnode, vnode);
    modProps.update(oldVnode, vnode);
    modComputedClassName.update(oldVnode, vnode);
    modComputedStyle.update(oldVnode, vnode);
  }
  
  function removeElmHook(vnode) {
    // this method only needs to search on child vnodes from template
    // to trigger the remove hook just in case some of those children
    // are custom elements.
    const {
      children,
      elm
    } = vnode;
  
    for (let j = 0, len = children.length; j < len; ++j) {
      const ch = children[j];
  
      if (!isNull$1(ch)) {
        ch.hook.remove(ch, elm);
      }
    }
  }
  
  function removeCustomElmHook(vnode) {
    // for custom elements we don't have to go recursively because the removeVM routine
    // will take care of disconnecting any child VM attached to its shadow as well.
    removeVM(getAssociatedVM(vnode.elm));
  } // Using a WeakMap instead of a WeakSet because this one works in IE11 :(
  
  
  const FromIteration = new WeakMap(); // dynamic children means it was generated by an iteration
  // in a template, and will require a more complex diffing algo.
  
  function markAsDynamicChildren(children) {
    FromIteration.set(children, 1);
  }
  
  function hasDynamicChildren(children) {
    return FromIteration.has(children);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const CHAR_S = 115;
  const CHAR_V = 118;
  const CHAR_G = 103;
  const NamespaceAttributeForSVG = 'http://www.w3.org/2000/svg';
  const SymbolIterator = Symbol.iterator;
  const TextHook = {
    create: vnode => {
      const {
        renderer
      } = vnode.owner;
      const elm = renderer.createText(vnode.text);
      linkNodeToShadow(elm, vnode);
      vnode.elm = elm;
    },
    update: updateNodeHook,
    insert: insertNodeHook,
    move: insertNodeHook,
    remove: removeNodeHook
  }; // insert is called after update, which is used somewhere else (via a module)
  // to mark the vm as inserted, that means we cannot use update as the main channel
  // to rehydrate when dirty, because sometimes the element is not inserted just yet,
  // which breaks some invariants. For that reason, we have the following for any
  // Custom Element that is inserted via a template.
  
  const ElementHook = {
    create: vnode => {
      const {
        sel,
        data: {
          ns
        },
        owner: {
          renderer
        }
      } = vnode;
      const elm = renderer.createElement(sel, ns);
      linkNodeToShadow(elm, vnode);
      fallbackElmHook(elm, vnode);
      vnode.elm = elm;
      createElmHook(vnode);
    },
    update: (oldVnode, vnode) => {
      updateElmHook(oldVnode, vnode);
      updateChildrenHook(oldVnode, vnode);
    },
    insert: (vnode, parentNode, referenceNode) => {
      insertNodeHook(vnode, parentNode, referenceNode);
      createChildrenHook(vnode);
    },
    move: (vnode, parentNode, referenceNode) => {
      insertNodeHook(vnode, parentNode, referenceNode);
    },
    remove: (vnode, parentNode) => {
      removeNodeHook(vnode, parentNode);
      removeElmHook(vnode);
    }
  };
  const CustomElementHook = {
    create: vnode => {
      const {
        sel,
        owner: {
          renderer
        }
      } = vnode;
      const elm = renderer.createElement(sel);
      linkNodeToShadow(elm, vnode);
      createViewModelHook(elm, vnode);
      vnode.elm = elm;
      allocateChildrenHook(vnode);
      createCustomElmHook(vnode);
    },
    update: (oldVnode, vnode) => {
      updateCustomElmHook(oldVnode, vnode); // in fallback mode, the allocation will always set children to
      // empty and delegate the real allocation to the slot elements
  
      allocateChildrenHook(vnode); // in fallback mode, the children will be always empty, so, nothing
      // will happen, but in native, it does allocate the light dom
  
      updateChildrenHook(oldVnode, vnode); // this will update the shadowRoot
  
      rerenderCustomElmHook(vnode);
    },
    insert: (vnode, parentNode, referenceNode) => {
      insertNodeHook(vnode, parentNode, referenceNode);
      const vm = getAssociatedVM(vnode.elm);
  
      {
        assert$1.isTrue(vm.state === VMState.created, `${vm} cannot be recycled.`);
      }
  
      runConnectedCallback(vm);
      createChildrenHook(vnode);
      insertCustomElmHook(vnode);
    },
    move: (vnode, parentNode, referenceNode) => {
      insertNodeHook(vnode, parentNode, referenceNode);
    },
    remove: (vnode, parentNode) => {
      removeNodeHook(vnode, parentNode);
      removeCustomElmHook(vnode);
    }
  };
  
  function linkNodeToShadow(elm, vnode) {
    // TODO [#1164]: this should eventually be done by the polyfill directly
    elm.$shadowResolver$ = vnode.owner.cmpRoot.$shadowResolver$;
  } // TODO [#1136]: this should be done by the compiler, adding ns to every sub-element
  
  
  function addNS(vnode) {
    const {
      data,
      children,
      sel
    } = vnode;
    data.ns = NamespaceAttributeForSVG; // TODO [#1275]: review why `sel` equal `foreignObject` should get this `ns`
  
    if (isArray$2(children) && sel !== 'foreignObject') {
      for (let j = 0, n = children.length; j < n; ++j) {
        const childNode = children[j];
  
        if (childNode != null && childNode.hook === ElementHook) {
          addNS(childNode);
        }
      }
    }
  }
  
  function addVNodeToChildLWC(vnode) {
    ArrayPush$1.call(getVMBeingRendered().velements, vnode);
  } // [h]tml node
  
  
  function h(sel, data, children) {
    const vmBeingRendered = getVMBeingRendered();
  
    {
      assert$1.isTrue(isString(sel), `h() 1st argument sel must be a string.`);
      assert$1.isTrue(isObject$2(data), `h() 2nd argument data must be an object.`);
      assert$1.isTrue(isArray$2(children), `h() 3rd argument children must be an array.`);
      assert$1.isTrue('key' in data, ` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`); // checking reserved internal data properties
  
      assert$1.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
      assert$1.isFalse(data.styleMap && data.style, `vnode.data.styleMap and vnode.data.style ambiguous declaration.`);
  
      if (data.style && !isString(data.style)) {
        logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
      }
  
      forEach$1.call(children, childVnode => {
        if (childVnode != null) {
          assert$1.isTrue(childVnode && 'sel' in childVnode && 'data' in childVnode && 'children' in childVnode && 'text' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
        }
      });
    }
  
    const {
      key
    } = data;
    let text, elm;
    const vnode = {
      sel,
      data,
      children,
      text,
      elm,
      key,
      hook: ElementHook,
      owner: vmBeingRendered
    };
  
    if (sel.length === 3 && StringCharCodeAt$1.call(sel, 0) === CHAR_S && StringCharCodeAt$1.call(sel, 1) === CHAR_V && StringCharCodeAt$1.call(sel, 2) === CHAR_G) {
      addNS(vnode);
    }
  
    return vnode;
  } // [t]ab[i]ndex function
  
  
  function ti(value) {
    // if value is greater than 0, we normalize to 0
    // If value is an invalid tabIndex value (null, undefined, string, etc), we let that value pass through
    // If value is less than -1, we don't care
    const shouldNormalize = value > 0 && !(isTrue$1$1(value) || isFalse$1$1(value));
  
    {
      const vmBeingRendered = getVMBeingRendered();
  
      if (shouldNormalize) {
        logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`, vmBeingRendered);
      }
    }
  
    return shouldNormalize ? 0 : value;
  } // [s]lot element node
  
  
  function s(slotName, data, children, slotset) {
    {
      assert$1.isTrue(isString(slotName), `s() 1st argument slotName must be a string.`);
      assert$1.isTrue(isObject$2(data), `s() 2nd argument data must be an object.`);
      assert$1.isTrue(isArray$2(children), `h() 3rd argument children must be an array.`);
    }
  
    if (!isUndefined$1(slotset) && !isUndefined$1(slotset[slotName]) && slotset[slotName].length !== 0) {
      children = slotset[slotName];
    }
  
    const vnode = h('slot', data, children);
  
    if (vnode.owner.renderer.syntheticShadow) {
      // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
      sc(children);
    }
  
    return vnode;
  } // [c]ustom element node
  
  
  function c(sel, Ctor, data, children = EmptyArray) {
    const vmBeingRendered = getVMBeingRendered();
  
    {
      assert$1.isTrue(isString(sel), `c() 1st argument sel must be a string.`);
      assert$1.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
      assert$1.isTrue(isObject$2(data), `c() 3nd argument data must be an object.`);
      assert$1.isTrue(arguments.length === 3 || isArray$2(children), `c() 4nd argument data must be an array.`); // checking reserved internal data properties
  
      assert$1.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
      assert$1.isFalse(data.styleMap && data.style, `vnode.data.styleMap and vnode.data.style ambiguous declaration.`);
  
      if (data.style && !isString(data.style)) {
        logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
      }
  
      if (arguments.length === 4) {
        forEach$1.call(children, childVnode => {
          if (childVnode != null) {
            assert$1.isTrue(childVnode && 'sel' in childVnode && 'data' in childVnode && 'children' in childVnode && 'text' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
          }
        });
      }
    }
  
    const {
      key
    } = data;
    let text, elm;
    const vnode = {
      sel,
      data,
      children,
      text,
      elm,
      key,
      hook: CustomElementHook,
      ctor: Ctor,
      owner: vmBeingRendered,
      mode: 'open'
    };
    addVNodeToChildLWC(vnode);
    return vnode;
  } // [i]terable node
  
  
  function i(iterable, factory) {
    const list = []; // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  
    sc(list);
    const vmBeingRendered = getVMBeingRendered();
  
    if (isUndefined$1(iterable) || iterable === null) {
      {
        logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`, vmBeingRendered);
      }
  
      return list;
    }
  
    {
      assert$1.isFalse(isUndefined$1(iterable[SymbolIterator]), `Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);
    }
  
    const iterator = iterable[SymbolIterator]();
  
    {
      assert$1.isTrue(iterator && isFunction$1(iterator.next), `Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);
    }
  
    let next = iterator.next();
    let j = 0;
    let {
      value,
      done: last
    } = next;
    let keyMap;
    let iterationError;
  
    {
      keyMap = create$1(null);
    }
  
    while (last === false) {
      // implementing a look-back-approach because we need to know if the element is the last
      next = iterator.next();
      last = next.done; // template factory logic based on the previous collected value
  
      const vnode = factory(value, j, j === 0, last);
  
      if (isArray$2(vnode)) {
        ArrayPush$1.apply(list, vnode);
      } else {
        ArrayPush$1.call(list, vnode);
      }
  
      {
        const vnodes = isArray$2(vnode) ? vnode : [vnode];
        forEach$1.call(vnodes, childVnode => {
          if (!isNull$1(childVnode) && isObject$2(childVnode) && !isUndefined$1(childVnode.sel)) {
            const {
              key
            } = childVnode;
  
            if (isString(key) || isNumber(key)) {
              if (keyMap[key] === 1 && isUndefined$1(iterationError)) {
                iterationError = `Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;
              }
  
              keyMap[key] = 1;
            } else if (isUndefined$1(iterationError)) {
              iterationError = `Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;
            }
          }
        });
      } // preparing next value
  
  
      j += 1;
      value = next.value;
    }
  
    {
      if (!isUndefined$1(iterationError)) {
        logError(iterationError, vmBeingRendered);
      }
    }
  
    return list;
  }
  /**
   * [f]lattening
   */
  
  
  function f(items) {
    {
      assert$1.isTrue(isArray$2(items), 'flattening api can only work with arrays.');
    }
  
    const len = items.length;
    const flattened = []; // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  
    sc(flattened);
  
    for (let j = 0; j < len; j += 1) {
      const item = items[j];
  
      if (isArray$2(item)) {
        ArrayPush$1.apply(flattened, item);
      } else {
        ArrayPush$1.call(flattened, item);
      }
    }
  
    return flattened;
  } // [t]ext node
  
  
  function t(text) {
    const data = EmptyObject;
    let sel, children, key, elm;
    return {
      sel,
      data,
      children,
      text,
      elm,
      key,
      hook: TextHook,
      owner: getVMBeingRendered()
    };
  } // [d]ynamic value to produce a text vnode
  
  
  function d(value) {
    if (value == null) {
      return null;
    }
  
    return t(value);
  } // [b]ind function
  
  
  function b(fn) {
    const vmBeingRendered = getVMBeingRendered();
  
    if (isNull$1(vmBeingRendered)) {
      throw new Error();
    }
  
    const vm = vmBeingRendered;
    return function (event) {
      invokeEventListener(vm, fn, vm.component, event);
    };
  } // [k]ey function
  
  
  function k(compilerKey, obj) {
    switch (typeof obj) {
      case 'number':
      case 'string':
        return compilerKey + ':' + obj;
  
      case 'object':
        {
          assert$1.fail(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);
        }
  
    }
  } // [g]lobal [id] function
  
  
  function gid(id) {
    const vmBeingRendered = getVMBeingRendered();
  
    if (isUndefined$1(id) || id === '') {
      {
        logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`, vmBeingRendered);
      }
  
      return id;
    } // We remove attributes when they are assigned a value of null
  
  
    if (isNull$1(id)) {
      return null;
    }
  
    return `${id}-${vmBeingRendered.idx}`;
  } // [f]ragment [id] function
  
  
  function fid(url) {
    const vmBeingRendered = getVMBeingRendered();
  
    if (isUndefined$1(url) || url === '') {
      {
        if (isUndefined$1(url)) {
          logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`, vmBeingRendered);
        }
      }
  
      return url;
    } // We remove attributes when they are assigned a value of null
  
  
    if (isNull$1(url)) {
      return null;
    } // Apply transformation only for fragment-only-urls
  
  
    if (/^#/.test(url)) {
      return `${url}-${vmBeingRendered.idx}`;
    }
  
    return url;
  }
  /**
   * Map to store an index value assigned to any dynamic component reference ingested
   * by dc() api. This allows us to generate a unique unique per template per dynamic
   * component reference to avoid diffing algo mismatches.
   */
  
  
  const DynamicImportedComponentMap = new Map();
  let dynamicImportedComponentCounter = 0;
  /**
   * create a dynamic component via `<x-foo lwc:dynamic={Ctor}>`
   */
  
  function dc(sel, Ctor, data, children) {
    {
      assert$1.isTrue(isString(sel), `dc() 1st argument sel must be a string.`);
      assert$1.isTrue(isObject$2(data), `dc() 3nd argument data must be an object.`);
      assert$1.isTrue(arguments.length === 3 || isArray$2(children), `dc() 4nd argument data must be an array.`);
    } // null or undefined values should produce a null value in the VNodes
  
  
    if (Ctor == null) {
      return null;
    }
  
    if (!isComponentConstructor(Ctor)) {
      throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);
    }
  
    let idx = DynamicImportedComponentMap.get(Ctor);
  
    if (isUndefined$1(idx)) {
      idx = dynamicImportedComponentCounter++;
      DynamicImportedComponentMap.set(Ctor, idx);
    } // the new vnode key is a mix of idx and compiler key, this is required by the diffing algo
    // to identify different constructors as vnodes with different keys to avoid reusing the
    // element used for previous constructors.
  
  
    data.key = `dc:${idx}:${data.key}`;
    return c(sel, Ctor, data, children);
  }
  /**
   * slow children collection marking mechanism. this API allows the compiler to signal
   * to the engine that a particular collection of children must be diffed using the slow
   * algo based on keys due to the nature of the list. E.g.:
   *
   *   - slot element's children: the content of the slot has to be dynamic when in synthetic
   *                              shadow mode because the `vnode.children` might be the slotted
   *                              content vs default content, in which case the size and the
   *                              keys are not matching.
   *   - children that contain dynamic components
   *   - children that are produced by iteration
   *
   */
  
  
  function sc(vnodes) {
    {
      assert$1.isTrue(isArray$2(vnodes), 'sc() api can only work with arrays.');
    } // We have to mark the vnodes collection as dynamic so we can later on
    // choose to use the snabbdom virtual dom diffing algo instead of our
    // static dummy algo.
  
  
    markAsDynamicChildren(vnodes);
    return vnodes;
  }
  
  var api$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    h: h,
    ti: ti,
    s: s,
    c: c,
    i: i,
    f: f,
    t: t,
    d: d,
    b: b,
    k: k,
    gid: gid,
    fid: fid,
    dc: dc,
    sc: sc
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  function createShadowStyleVNode(content) {
    return h('style', {
      key: 'style',
      attrs: {
        type: 'text/css'
      }
    }, [t(content)]);
  }
  
  function updateSyntheticShadowAttributes(vm, template) {
    const {
      elm,
      context,
      renderer
    } = vm;
    const {
      stylesheets: newStylesheets,
      stylesheetTokens: newStylesheetTokens
    } = template;
    let newHostAttribute;
    let newShadowAttribute; // Reset the styling token applied to the host element.
  
    const oldHostAttribute = context.hostAttribute;
  
    if (!isUndefined$1(oldHostAttribute)) {
      renderer.removeAttribute(elm, oldHostAttribute);
    } // Apply the new template styling token to the host element, if the new template has any
    // associated stylesheets.
  
  
    if (!isUndefined$1(newStylesheetTokens) && !isUndefined$1(newStylesheets) && newStylesheets.length !== 0) {
      newHostAttribute = newStylesheetTokens.hostAttribute;
      newShadowAttribute = newStylesheetTokens.shadowAttribute;
      renderer.setAttribute(elm, newHostAttribute, '');
    } // Update the styling tokens present on the context object.
  
  
    context.hostAttribute = newHostAttribute;
    context.shadowAttribute = newShadowAttribute;
  }
  
  function evaluateStylesheetsContent(stylesheets, hostSelector, shadowSelector, nativeShadow) {
    const content = [];
  
    for (let i = 0; i < stylesheets.length; i++) {
      const stylesheet = stylesheets[i];
  
      if (isArray$2(stylesheet)) {
        ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, hostSelector, shadowSelector, nativeShadow));
      } else {
        ArrayPush$1.call(content, stylesheet(hostSelector, shadowSelector, nativeShadow));
      }
    }
  
    return content;
  }
  
  function getStylesheetsContent(vm, template) {
    const {
      stylesheets,
      stylesheetTokens: tokens
    } = template;
    const {
      syntheticShadow
    } = vm.renderer;
    let content = [];
  
    if (!isUndefined$1(stylesheets) && !isUndefined$1(tokens)) {
      const hostSelector = syntheticShadow ? `[${tokens.hostAttribute}]` : '';
      const shadowSelector = syntheticShadow ? `[${tokens.shadowAttribute}]` : '';
      content = evaluateStylesheetsContent(stylesheets, hostSelector, shadowSelector, !syntheticShadow);
    }
  
    return content;
  }
  
  function createStylesheet(vm, stylesheets) {
    const {
      renderer
    } = vm;
  
    if (renderer.syntheticShadow) {
      for (let i = 0; i < stylesheets.length; i++) {
        renderer.insertGlobalStylesheet(stylesheets[i]);
      }
  
      return null;
    } else {
      const shadowStyleSheetContent = ArrayJoin$1.call(stylesheets, '\n');
      return createShadowStyleVNode(shadowStyleSheetContent);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  var GlobalMeasurementPhase;
  
  (function (GlobalMeasurementPhase) {
    GlobalMeasurementPhase["REHYDRATE"] = "lwc-rehydrate";
    GlobalMeasurementPhase["HYDRATE"] = "lwc-hydrate";
  })(GlobalMeasurementPhase || (GlobalMeasurementPhase = {})); // Even if all the browser the engine supports implements the UserTiming API, we need to guard the measure APIs.
  // JSDom (used in Jest) for example doesn't implement the UserTiming APIs.
  
  
  const isUserTimingSupported = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
  
  function getMarkName(phase, vm) {
    // Adding the VM idx to the mark name creates a unique mark name component instance. This is necessary to produce
    // the right measures for components that are recursive.
    return `${getComponentTag(vm)} - ${phase} - ${vm.idx}`;
  }
  
  function getMeasureName(phase, vm) {
    return `${getComponentTag(vm)} - ${phase}`;
  }
  
  function start(markName) {
    performance.mark(markName);
  }
  
  function end(measureName, markName) {
    performance.measure(measureName, markName); // Clear the created marks and measure to avoid filling the performance entries buffer.
    // Note: Even if the entries get deleted, existing PerformanceObservers preserve a copy of those entries.
  
    performance.clearMarks(markName);
    performance.clearMarks(measureName);
  }
  
  function noop$1() {
    /* do nothing */
  }
  
  const startMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
    const markName = getMarkName(phase, vm);
    start(markName);
  };
  const endMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
    const markName = getMarkName(phase, vm);
    const measureName = getMeasureName(phase, vm);
    end(measureName, markName);
  };
  const startGlobalMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
    const markName = isUndefined$1(vm) ? phase : getMarkName(phase, vm);
    start(markName);
  };
  const endGlobalMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
    const markName = isUndefined$1(vm) ? phase : getMarkName(phase, vm);
    end(phase, markName);
  };
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  let isUpdatingTemplate = false;
  let vmBeingRendered = null;
  
  function getVMBeingRendered() {
    return vmBeingRendered;
  }
  
  function setVMBeingRendered(vm) {
    vmBeingRendered = vm;
  }
  
  function validateSlots(vm, html) {
  
    const {
      cmpSlots
    } = vm;
    const {
      slots = EmptyArray
    } = html;
  
    for (const slotName in cmpSlots) {
      // eslint-disable-next-line lwc-internal/no-production-assert
      assert$1.isTrue(isArray$2(cmpSlots[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots[slotName])} for slot "${slotName}" in ${vm}.`);
  
      if (slotName !== '' && ArrayIndexOf$1.call(slots, slotName) === -1) {
        // TODO [#1297]: this should never really happen because the compiler should always validate
        // eslint-disable-next-line lwc-internal/no-production-assert
        logError(`Ignoring unknown provided slot name "${slotName}" in ${vm}. Check for a typo on the slot attribute.`, vm);
      }
    }
  }
  
  function evaluateTemplate(vm, html) {
    {
      assert$1.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`);
    }
  
    const isUpdatingTemplateInception = isUpdatingTemplate;
    const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
    let vnodes = [];
    runWithBoundaryProtection(vm, vm.owner, () => {
      // pre
      vmBeingRendered = vm;
  
      {
        startMeasure('render', vm);
      }
    }, () => {
      // job
      const {
        component,
        context,
        cmpSlots,
        cmpTemplate,
        tro,
        renderer
      } = vm;
      tro.observe(() => {
        // Reset the cache memoizer for template when needed.
        if (html !== cmpTemplate) {
          // Perf opt: do not reset the shadow root during the first rendering (there is
          // nothing to reset).
          if (!isNull$1(cmpTemplate)) {
            // It is important to reset the content to avoid reusing similar elements
            // generated from a different template, because they could have similar IDs,
            // and snabbdom just rely on the IDs.
            resetShadowRoot(vm);
          } // Check that the template was built by the compiler.
  
  
          if (!isTemplateRegistered(html)) {
            throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
          }
  
          vm.cmpTemplate = html; // Create a brand new template cache for the swapped templated.
  
          context.tplCache = create$1(null); // Update the synthetic shadow attributes on the host element if necessary.
  
          if (renderer.syntheticShadow) {
            updateSyntheticShadowAttributes(vm, html);
          } // Evaluate, create stylesheet and cache the produced VNode for future
          // re-rendering.
  
  
          const stylesheetsContent = getStylesheetsContent(vm, html);
          context.styleVNode = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
        }
  
        if ("development" !== 'production') {
          // validating slots in every rendering since the allocated content might change over time
          validateSlots(vm, html);
        } // right before producing the vnodes, we clear up all internal references
        // to custom elements from the template.
  
  
        vm.velements = []; // Set the global flag that template is being updated
  
        isUpdatingTemplate = true;
        vnodes = html.call(undefined, api$1, component, cmpSlots, context.tplCache);
        const {
          styleVNode
        } = context;
  
        if (!isNull$1(styleVNode)) {
          ArrayUnshift$2.call(vnodes, styleVNode);
        }
      });
    }, () => {
      // post
      isUpdatingTemplate = isUpdatingTemplateInception;
      vmBeingRendered = vmOfTemplateBeingUpdatedInception;
  
      {
        endMeasure('render', vm);
      }
    });
  
    {
      assert$1.invariant(isArray$2(vnodes), `Compiler should produce html functions that always return an array.`);
    }
  
    return vnodes;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  function addErrorComponentStack(vm, error) {
    if (!isFrozen$1(error) && isUndefined$1(error.wcStack)) {
      const wcStack = getErrorComponentStack(vm);
      defineProperty$1(error, 'wcStack', {
        get() {
          return wcStack;
        }
  
      });
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  let isInvokingRender = false;
  let vmBeingConstructed = null;
  
  function isBeingConstructed(vm) {
    return vmBeingConstructed === vm;
  }
  
  const noop$2 = () => void 0;
  
  function invokeComponentCallback(vm, fn, args) {
    const {
      component,
      callHook,
      owner
    } = vm;
    let result;
    runWithBoundaryProtection(vm, owner, noop$2, () => {
      // job
      result = callHook(component, fn, args);
    }, noop$2);
    return result;
  }
  
  function invokeComponentConstructor(vm, Ctor) {
    const vmBeingConstructedInception = vmBeingConstructed;
    let error;
  
    {
      startMeasure('constructor', vm);
    }
  
    vmBeingConstructed = vm;
    /**
     * Constructors don't need to be wrapped with a boundary because for root elements
     * it should throw, while elements from template are already wrapped by a boundary
     * associated to the diffing algo.
     */
  
    try {
      // job
      const result = new Ctor(); // Check indirectly if the constructor result is an instance of LightningElement. Using
      // the "instanceof" operator would not work here since Locker Service provides its own
      // implementation of LightningElement, so we indirectly check if the base constructor is
      // invoked by accessing the component on the vm.
  
      if (vmBeingConstructed.component !== result) {
        throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
      }
    } catch (e) {
      error = Object(e);
    } finally {
      {
        endMeasure('constructor', vm);
      }
  
      vmBeingConstructed = vmBeingConstructedInception;
  
      if (!isUndefined$1(error)) {
        addErrorComponentStack(vm, error); // re-throwing the original error annotated after restoring the context
  
        throw error; // eslint-disable-line no-unsafe-finally
      }
    }
  }
  
  function invokeComponentRenderMethod(vm) {
    const {
      def: {
        render
      },
      callHook,
      component,
      owner
    } = vm;
    const isRenderBeingInvokedInception = isInvokingRender;
    const vmBeingRenderedInception = getVMBeingRendered();
    let html;
    let renderInvocationSuccessful = false;
    runWithBoundaryProtection(vm, owner, () => {
      // pre
      isInvokingRender = true;
      setVMBeingRendered(vm);
    }, () => {
      // job
      vm.tro.observe(() => {
        html = callHook(component, render);
        renderInvocationSuccessful = true;
      });
    }, () => {
      // post
      isInvokingRender = isRenderBeingInvokedInception;
      setVMBeingRendered(vmBeingRenderedInception);
    }); // If render() invocation failed, process errorCallback in boundary and return an empty template
  
    return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
  }
  
  function invokeComponentRenderedCallback(vm) {
    const {
      def: {
        renderedCallback
      },
      component,
      callHook,
      owner
    } = vm;
  
    if (!isUndefined$1(renderedCallback)) {
      runWithBoundaryProtection(vm, owner, () => {
        {
          startMeasure('renderedCallback', vm);
        }
      }, () => {
        // job
        callHook(component, renderedCallback);
      }, () => {
        // post
        {
          endMeasure('renderedCallback', vm);
        }
      });
    }
  }
  
  function invokeEventListener(vm, fn, thisValue, event) {
    const {
      callHook,
      owner
    } = vm;
    runWithBoundaryProtection(vm, owner, noop$2, () => {
      // job
      if ("development" !== 'production') {
        assert$1.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
      }
  
      callHook(thisValue, fn, [event]);
    }, noop$2);
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const signedTemplateMap = new Map();
  /**
   * INTERNAL: This function can only be invoked by compiled code. The compiler
   * will prevent this function from being imported by userland code.
   */
  
  function registerComponent(Ctor, {
    tmpl
  }) {
    signedTemplateMap.set(Ctor, tmpl); // chaining this method as a way to wrap existing assignment of component constructor easily,
    // without too much transformation
  
    return Ctor;
  }
  
  function getComponentRegisteredTemplate(Ctor) {
    return signedTemplateMap.get(Ctor);
  }
  
  function createComponent(vm, Ctor) {
    // create the component instance
    invokeComponentConstructor(vm, Ctor);
  
    if (isUndefined$1(vm.component)) {
      throw new ReferenceError(`Invalid construction for ${Ctor}, you must extend LightningElement.`);
    }
  }
  
  function getTemplateReactiveObserver(vm) {
    return new ReactiveObserver(() => {
      const {
        isDirty
      } = vm;
  
      if (isFalse$1$1(isDirty)) {
        markComponentAsDirty(vm);
        scheduleRehydration(vm);
      }
    });
  }
  
  function renderComponent(vm) {
    {
      assert$1.invariant(vm.isDirty, `${vm} is not dirty.`);
    }
  
    vm.tro.reset();
    const vnodes = invokeComponentRenderMethod(vm);
    vm.isDirty = false;
    vm.isScheduled = false;
  
    {
      assert$1.invariant(isArray$2(vnodes), `${vm}.render() should always return an array of vnodes instead of ${vnodes}`);
    }
  
    return vnodes;
  }
  
  function markComponentAsDirty(vm) {
    {
      const vmBeingRendered = getVMBeingRendered();
      assert$1.isFalse(vm.isDirty, `markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);
      assert$1.isFalse(isInvokingRender, `markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);
      assert$1.isFalse(isUpdatingTemplate, `markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);
    }
  
    vm.isDirty = true;
  }
  
  const cmpEventListenerMap = new WeakMap();
  
  function getWrappedComponentsListener(vm, listener) {
    if (!isFunction$1(listener)) {
      throw new TypeError(); // avoiding problems with non-valid listeners
    }
  
    let wrappedListener = cmpEventListenerMap.get(listener);
  
    if (isUndefined$1(wrappedListener)) {
      wrappedListener = function (event) {
        invokeEventListener(vm, listener, undefined, event);
      };
  
      cmpEventListenerMap.set(listener, wrappedListener);
    }
  
    return wrappedListener;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const Services = create$1(null);
  
  function invokeServiceHook(vm, cbs) {
    {
      assert$1.isTrue(isArray$2(cbs) && cbs.length > 0, `Optimize invokeServiceHook() to be invoked only when needed`);
    }
  
    const {
      component,
      def,
      context
    } = vm;
  
    for (let i = 0, len = cbs.length; i < len; ++i) {
      cbs[i].call(undefined, component, {}, def, context);
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  var VMState;
  
  (function (VMState) {
    VMState[VMState["created"] = 0] = "created";
    VMState[VMState["connected"] = 1] = "connected";
    VMState[VMState["disconnected"] = 2] = "disconnected";
  })(VMState || (VMState = {}));
  
  let idx = 0;
  /** The internal slot used to associate different objects the engine manipulates with the VM */
  
  const ViewModelReflection = createHiddenField$1('ViewModel', 'engine');
  
  function callHook(cmp, fn, args = []) {
    return fn.apply(cmp, args);
  }
  
  function setHook(cmp, prop, newValue) {
    cmp[prop] = newValue;
  }
  
  function getHook(cmp, prop) {
    return cmp[prop];
  }
  
  function rerenderVM(vm) {
    rehydrate(vm);
  }
  
  function connectRootElement(elm) {
    const vm = getAssociatedVM(elm);
    startGlobalMeasure(GlobalMeasurementPhase.HYDRATE, vm); // Usually means moving the element from one place to another, which is observable via
    // life-cycle hooks.
  
    if (vm.state === VMState.connected) {
      disconnectRootElement(elm);
    }
  
    runConnectedCallback(vm);
    rehydrate(vm);
    endGlobalMeasure(GlobalMeasurementPhase.HYDRATE, vm);
  }
  
  function disconnectRootElement(elm) {
    const vm = getAssociatedVM(elm);
    resetComponentStateWhenRemoved(vm);
  }
  
  function appendVM(vm) {
    rehydrate(vm);
  } // just in case the component comes back, with this we guarantee re-rendering it
  // while preventing any attempt to rehydration until after reinsertion.
  
  
  function resetComponentStateWhenRemoved(vm) {
    const {
      state
    } = vm;
  
    if (state !== VMState.disconnected) {
      const {
        oar,
        tro
      } = vm; // Making sure that any observing record will not trigger the rehydrated on this vm
  
      tro.reset(); // Making sure that any observing accessor record will not trigger the setter to be reinvoked
  
      for (const key in oar) {
        oar[key].reset();
      }
  
      runDisconnectedCallback(vm); // Spec: https://dom.spec.whatwg.org/#concept-node-remove (step 14-15)
  
      runShadowChildNodesDisconnectedCallback(vm);
      runLightChildNodesDisconnectedCallback(vm);
    }
  } // this method is triggered by the diffing algo only when a vnode from the
  // old vnode.children is removed from the DOM.
  
  
  function removeVM(vm) {
    {
      assert$1.isTrue(vm.state === VMState.connected || vm.state === VMState.disconnected, `${vm} must have been connected.`);
    }
  
    resetComponentStateWhenRemoved(vm);
  }
  
  function createVM(elm, def, options) {
    const {
      mode,
      owner,
      renderer,
      tagName
    } = options;
    const vm = {
      elm,
      def,
      idx: idx++,
      state: VMState.created,
      isScheduled: false,
      isDirty: true,
      tagName,
      mode,
      owner,
      renderer,
      children: EmptyArray,
      aChildren: EmptyArray,
      velements: EmptyArray,
      cmpProps: create$1(null),
      cmpFields: create$1(null),
      cmpSlots: create$1(null),
      oar: create$1(null),
      cmpTemplate: null,
      context: {
        hostAttribute: undefined,
        shadowAttribute: undefined,
        styleVNode: null,
        tplCache: EmptyObject,
        wiredConnecting: EmptyArray,
        wiredDisconnecting: EmptyArray
      },
      tro: null,
      component: null,
      cmpRoot: null,
      callHook,
      setHook,
      getHook
    };
    vm.tro = getTemplateReactiveObserver(vm);
  
    {
      vm.toString = () => {
        return `[object:vm ${def.name} (${vm.idx})]`;
      };
    } // Create component instance associated to the vm and the element.
  
  
    createComponent(vm, def.ctor); // Initializing the wire decorator per instance only when really needed
  
    if (isFalse$1$1(renderer.ssr) && hasWireAdapters(vm)) {
      installWireAdapters(vm);
    }
  
    return vm;
  }
  
  function assertIsVM(obj) {
    if (isNull$1(obj) || !isObject$2(obj) || !('cmpRoot' in obj)) {
      throw new TypeError(`${obj} is not a VM.`);
    }
  }
  
  function associateVM(obj, vm) {
    setHiddenField$1(obj, ViewModelReflection, vm);
  }
  
  function getAssociatedVM(obj) {
    const vm = getHiddenField$1(obj, ViewModelReflection);
  
    {
      assertIsVM(vm);
    }
  
    return vm;
  }
  
  function getAssociatedVMIfPresent(obj) {
    const maybeVm = getHiddenField$1(obj, ViewModelReflection);
  
    {
      if (!isUndefined$1(maybeVm)) {
        assertIsVM(maybeVm);
      }
    }
  
    return maybeVm;
  }
  
  function rehydrate(vm) {
    if (isTrue$1$1(vm.isDirty)) {
      const children = renderComponent(vm);
      patchShadowRoot(vm, children);
    }
  }
  
  function patchShadowRoot(vm, newCh) {
    const {
      cmpRoot,
      children: oldCh
    } = vm; // caching the new children collection
  
    vm.children = newCh;
  
    if (newCh.length > 0 || oldCh.length > 0) {
      // patch function mutates vnodes by adding the element reference,
      // however, if patching fails it contains partial changes.
      if (oldCh !== newCh) {
        const fn = hasDynamicChildren(newCh) ? updateDynamicChildren : updateStaticChildren;
        runWithBoundaryProtection(vm, vm, () => {
          // pre
          {
            startMeasure('patch', vm);
          }
        }, () => {
          // job
          fn(cmpRoot, oldCh, newCh);
        }, () => {
          // post
          {
            endMeasure('patch', vm);
          }
        });
      }
    }
  
    if (vm.state === VMState.connected) {
      // If the element is connected, that means connectedCallback was already issued, and
      // any successive rendering should finish with the call to renderedCallback, otherwise
      // the connectedCallback will take care of calling it in the right order at the end of
      // the current rehydration process.
      runRenderedCallback(vm);
    }
  }
  
  function runRenderedCallback(vm) {
    if (isTrue$1$1(vm.renderer.ssr)) {
      return;
    }
  
    const {
      rendered
    } = Services;
  
    if (rendered) {
      invokeServiceHook(vm, rendered);
    }
  
    invokeComponentRenderedCallback(vm);
  }
  
  let rehydrateQueue = [];
  
  function flushRehydrationQueue() {
    startGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);
  
    {
      assert$1.invariant(rehydrateQueue.length, `If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);
    }
  
    const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
    rehydrateQueue = []; // reset to a new queue
  
    for (let i = 0, len = vms.length; i < len; i += 1) {
      const vm = vms[i];
  
      try {
        rehydrate(vm);
      } catch (error) {
        if (i + 1 < len) {
          // pieces of the queue are still pending to be rehydrated, those should have priority
          if (rehydrateQueue.length === 0) {
            addCallbackToNextTick(flushRehydrationQueue);
          }
  
          ArrayUnshift$2.apply(rehydrateQueue, ArraySlice$2.call(vms, i + 1));
        } // we need to end the measure before throwing.
  
  
        endGlobalMeasure(GlobalMeasurementPhase.REHYDRATE); // re-throwing the original error will break the current tick, but since the next tick is
        // already scheduled, it should continue patching the rest.
  
        throw error; // eslint-disable-line no-unsafe-finally
      }
    }
  
    endGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);
  }
  
  function runConnectedCallback(vm) {
    const {
      state
    } = vm;
  
    if (state === VMState.connected) {
      return; // nothing to do since it was already connected
    }
  
    vm.state = VMState.connected; // reporting connection
  
    const {
      connected
    } = Services;
  
    if (connected) {
      invokeServiceHook(vm, connected);
    }
  
    if (hasWireAdapters(vm)) {
      connectWireAdapters(vm);
    }
  
    const {
      connectedCallback
    } = vm.def;
  
    if (!isUndefined$1(connectedCallback)) {
      {
        startMeasure('connectedCallback', vm);
      }
  
      invokeComponentCallback(vm, connectedCallback);
  
      {
        endMeasure('connectedCallback', vm);
      }
    }
  }
  
  function hasWireAdapters(vm) {
    return getOwnPropertyNames$1(vm.def.wire).length > 0;
  }
  
  function runDisconnectedCallback(vm) {
    {
      assert$1.isTrue(vm.state !== VMState.disconnected, `${vm} must be inserted.`);
    }
  
    if (isFalse$1$1(vm.isDirty)) {
      // this guarantees that if the component is reused/reinserted,
      // it will be re-rendered because we are disconnecting the reactivity
      // linking, so mutations are not automatically reflected on the state
      // of disconnected components.
      vm.isDirty = true;
    }
  
    vm.state = VMState.disconnected; // reporting disconnection
  
    const {
      disconnected
    } = Services;
  
    if (disconnected) {
      invokeServiceHook(vm, disconnected);
    }
  
    if (hasWireAdapters(vm)) {
      disconnectWireAdapters(vm);
    }
  
    const {
      disconnectedCallback
    } = vm.def;
  
    if (!isUndefined$1(disconnectedCallback)) {
      {
        startMeasure('disconnectedCallback', vm);
      }
  
      invokeComponentCallback(vm, disconnectedCallback);
  
      {
        endMeasure('disconnectedCallback', vm);
      }
    }
  }
  
  function runShadowChildNodesDisconnectedCallback(vm) {
    const {
      velements: vCustomElementCollection
    } = vm; // Reporting disconnection for every child in inverse order since they are
    // inserted in reserved order.
  
    for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
      const {
        elm
      } = vCustomElementCollection[i]; // There are two cases where the element could be undefined:
      // * when there is an error during the construction phase, and an error
      //   boundary picks it, there is a possibility that the VCustomElement
      //   is not properly initialized, and therefore is should be ignored.
      // * when slotted custom element is not used by the element where it is
      //   slotted into it, as  a result, the custom element was never
      //   initialized.
  
      if (!isUndefined$1(elm)) {
        const childVM = getAssociatedVMIfPresent(elm); // The VM associated with the element might be associated undefined
        // in the case where the VM failed in the middle of its creation,
        // eg: constructor throwing before invoking super().
  
        if (!isUndefined$1(childVM)) {
          resetComponentStateWhenRemoved(childVM);
        }
      }
    }
  }
  
  function runLightChildNodesDisconnectedCallback(vm) {
    const {
      aChildren: adoptedChildren
    } = vm;
    recursivelyDisconnectChildren(adoptedChildren);
  }
  /**
   * The recursion doesn't need to be a complete traversal of the vnode graph,
   * instead it can be partial, when a custom element vnode is found, we don't
   * need to continue into its children because by attempting to disconnect the
   * custom element itself will trigger the removal of anything slotted or anything
   * defined on its shadow.
   */
  
  
  function recursivelyDisconnectChildren(vnodes) {
    for (let i = 0, len = vnodes.length; i < len; i += 1) {
      const vnode = vnodes[i];
  
      if (!isNull$1(vnode) && isArray$2(vnode.children) && !isUndefined$1(vnode.elm)) {
        // vnode is a VElement with children
        if (isUndefined$1(vnode.ctor)) {
          // it is a VElement, just keep looking (recursively)
          recursivelyDisconnectChildren(vnode.children);
        } else {
          // it is a VCustomElement, disconnect it and ignore its children
          resetComponentStateWhenRemoved(getAssociatedVM(vnode.elm));
        }
      }
    }
  } // This is a super optimized mechanism to remove the content of the shadowRoot without having to go
  // into snabbdom. Especially useful when the reset is a consequence of an error, in which case the
  // children VNodes might not be representing the current state of the DOM.
  
  
  function resetShadowRoot(vm) {
    const {
      children,
      cmpRoot,
      renderer
    } = vm;
  
    for (let i = 0, len = children.length; i < len; i++) {
      const child = children[i];
  
      if (!isNull$1(child) && !isUndefined$1(child.elm)) {
        renderer.remove(child.elm, cmpRoot);
      }
    }
  
    vm.children = EmptyArray;
    runShadowChildNodesDisconnectedCallback(vm);
    vm.velements = EmptyArray;
  }
  
  function scheduleRehydration(vm) {
    if (isTrue$1$1(vm.renderer.ssr) || isTrue$1$1(vm.isScheduled)) {
      return;
    }
  
    vm.isScheduled = true;
  
    if (rehydrateQueue.length === 0) {
      addCallbackToNextTick(flushRehydrationQueue);
    }
  
    ArrayPush$1.call(rehydrateQueue, vm);
  }
  
  function getErrorBoundaryVM(vm) {
    let currentVm = vm;
  
    while (!isNull$1(currentVm)) {
      if (!isUndefined$1(currentVm.def.errorCallback)) {
        return currentVm;
      }
  
      currentVm = currentVm.owner;
    }
  } // slow path routine
  // NOTE: we should probably more this routine to the synthetic shadow folder
  // and get the allocation to be cached by in the elm instead of in the VM
  
  
  function allocateInSlot(vm, children) {
    {
      assert$1.invariant(isObject$2(vm.cmpSlots), `When doing manual allocation, there must be a cmpSlots object available.`);
    }
  
    const {
      cmpSlots: oldSlots
    } = vm;
    const cmpSlots = vm.cmpSlots = create$1(null);
  
    for (let i = 0, len = children.length; i < len; i += 1) {
      const vnode = children[i];
  
      if (isNull$1(vnode)) {
        continue;
      }
  
      const {
        data
      } = vnode;
      const slotName = data.attrs && data.attrs.slot || '';
      const vnodes = cmpSlots[slotName] = cmpSlots[slotName] || []; // re-keying the vnodes is necessary to avoid conflicts with default content for the slot
      // which might have similar keys. Each vnode will always have a key that
      // starts with a numeric character from compiler. In this case, we add a unique
      // notation for slotted vnodes keys, e.g.: `@foo:1:1`
  
      if (!isUndefined$1(vnode.key)) {
        vnode.key = `@${slotName}:${vnode.key}`;
      }
  
      ArrayPush$1.call(vnodes, vnode);
    }
  
    if (isFalse$1$1(vm.isDirty)) {
      // We need to determine if the old allocation is really different from the new one
      // and mark the vm as dirty
      const oldKeys = keys$1(oldSlots);
  
      if (oldKeys.length !== keys$1(cmpSlots).length) {
        markComponentAsDirty(vm);
        return;
      }
  
      for (let i = 0, len = oldKeys.length; i < len; i += 1) {
        const key = oldKeys[i];
  
        if (isUndefined$1(cmpSlots[key]) || oldSlots[key].length !== cmpSlots[key].length) {
          markComponentAsDirty(vm);
          return;
        }
  
        const oldVNodes = oldSlots[key];
        const vnodes = cmpSlots[key];
  
        for (let j = 0, a = cmpSlots[key].length; j < a; j += 1) {
          if (oldVNodes[j] !== vnodes[j]) {
            markComponentAsDirty(vm);
            return;
          }
        }
      }
    }
  }
  
  function runWithBoundaryProtection(vm, owner, pre, job, post) {
    let error;
    pre();
  
    try {
      job();
    } catch (e) {
      error = Object(e);
    } finally {
      post();
  
      if (!isUndefined$1(error)) {
        addErrorComponentStack(vm, error);
        const errorBoundaryVm = isNull$1(owner) ? undefined : getErrorBoundaryVM(owner);
  
        if (isUndefined$1(errorBoundaryVm)) {
          throw error; // eslint-disable-line no-unsafe-finally
        }
  
        resetShadowRoot(vm); // remove offenders
  
        {
          startMeasure('errorCallback', errorBoundaryVm);
        } // error boundaries must have an ErrorCallback
  
  
        const errorCallback = errorBoundaryVm.def.errorCallback;
        invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);
  
        {
          endMeasure('errorCallback', errorBoundaryVm);
        }
      }
    }
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
  const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
  const WireMetaMap = new Map();
  
  function noop$3() {}
  
  class WireContextRegistrationEvent extends CustomEvent {
    constructor(adapterToken, {
      setNewContext,
      setDisconnectedCallback
    }) {
      super(adapterToken, {
        bubbles: true,
        composed: true
      });
      defineProperties$1(this, {
        setNewContext: {
          value: setNewContext
        },
        setDisconnectedCallback: {
          value: setDisconnectedCallback
        }
      });
    }
  
  }
  
  function createFieldDataCallback(vm, name) {
    const {
      cmpFields
    } = vm;
    return value => {
      if (value !== vm.cmpFields[name]) {
        // storing the value in the underlying storage
        cmpFields[name] = value;
        componentValueMutated(vm, name);
      }
    };
  }
  
  function createMethodDataCallback(vm, method) {
    return value => {
      // dispatching new value into the wired method
      invokeComponentCallback(vm, method, [value]);
    };
  }
  
  function createConfigWatcher(vm, wireDef, callbackWhenConfigIsReady) {
    const {
      component
    } = vm;
    const {
      configCallback
    } = wireDef;
    let hasPendingConfig = false; // creating the reactive observer for reactive params when needed
  
    const ro = new ReactiveObserver(() => {
      if (hasPendingConfig === false) {
        hasPendingConfig = true; // collect new config in the micro-task
  
        Promise.resolve().then(() => {
          hasPendingConfig = false; // resetting current reactive params
  
          ro.reset(); // dispatching a new config due to a change in the configuration
  
          callback();
        });
      }
    });
  
    const callback = () => {
      let config;
      ro.observe(() => config = configCallback(component)); // eslint-disable-next-line lwc-internal/no-invalid-todo
      // TODO: dev-mode validation of config based on the adapter.configSchema
      // @ts-ignore it is assigned in the observe() callback
  
      callbackWhenConfigIsReady(config);
    };
  
    return callback;
  }
  
  function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
    const {
      adapter
    } = wireDef;
    const adapterContextToken = getAdapterToken(adapter);
  
    if (isUndefined$1(adapterContextToken)) {
      return; // no provider found, nothing to be done
    }
  
    const {
      elm,
      renderer,
      context: {
        wiredConnecting,
        wiredDisconnecting
      }
    } = vm; // waiting for the component to be connected to formally request the context via the token
  
    ArrayPush$1.call(wiredConnecting, () => {
      // This event is responsible for connecting the host element with another
      // element in the composed path that is providing contextual data. The provider
      // must be listening for a special dom event with the name corresponding to the value of
      // `adapterContextToken`, which will remain secret and internal to this file only to
      // guarantee that the linkage can be forged.
      const contextRegistrationEvent = new WireContextRegistrationEvent(adapterContextToken, {
        setNewContext(newContext) {
          // eslint-disable-next-line lwc-internal/no-invalid-todo
          // TODO: dev-mode validation of config based on the adapter.contextSchema
          callbackWhenContextIsReady(newContext);
        },
  
        setDisconnectedCallback(disconnectCallback) {
          // adds this callback into the disconnect bucket so it gets disconnected from parent
          // the the element hosting the wire is disconnected
          ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
        }
  
      });
      renderer.dispatchEvent(elm, contextRegistrationEvent);
    });
  }
  
  function createConnector(vm, name, wireDef) {
    const {
      method,
      adapter,
      configCallback,
      dynamic
    } = wireDef;
    const hasDynamicParams = dynamic.length > 0;
    const {
      component
    } = vm;
    const dataCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
    let context;
    let connector; // Workaround to pass the component element associated to this wire adapter instance.
  
    defineProperty$1(dataCallback, DeprecatedWiredElementHost, {
      value: vm.elm
    });
    defineProperty$1(dataCallback, DeprecatedWiredParamsMeta, {
      value: dynamic
    });
    runWithBoundaryProtection(vm, vm, noop$3, () => {
      // job
      connector = new adapter(dataCallback);
    }, noop$3);
  
    const updateConnectorConfig = config => {
      // every time the config is recomputed due to tracking,
      // this callback will be invoked with the new computed config
      runWithBoundaryProtection(vm, vm, noop$3, () => {
        // job
        connector.update(config, context);
      }, noop$3);
    }; // Computes the current wire config and calls the update method on the wire adapter.
    // This initial implementation may change depending on the specific wire instance, if it has params, we will need
    // to observe changes in the next tick.
  
  
    let computeConfigAndUpdate = () => {
      updateConnectorConfig(configCallback(component));
    };
  
    if (hasDynamicParams) {
      // This wire has dynamic parameters: we wait for the component instance is created and its values set
      // in order to call the update(config) method.
      Promise.resolve().then(() => {
        computeConfigAndUpdate = createConfigWatcher(vm, wireDef, updateConnectorConfig);
        computeConfigAndUpdate();
      });
    } else {
      computeConfigAndUpdate();
    } // if the adapter needs contextualization, we need to watch for new context and push it alongside the config
  
  
    if (!isUndefined$1(adapter.contextSchema)) {
      createContextWatcher(vm, wireDef, newContext => {
        // every time the context is pushed into this component,
        // this callback will be invoked with the new computed context
        if (context !== newContext) {
          context = newContext; // Note: when new context arrives, the config will be recomputed and pushed along side the new
          // context, this is to preserve the identity characteristics, config should not have identity
          // (ever), while context can have identity
  
          computeConfigAndUpdate();
        }
      });
    } // @ts-ignore the boundary protection executes sync, connector is always defined
  
  
    return connector;
  }
  
  const AdapterToTokenMap = new Map();
  
  function getAdapterToken(adapter) {
    return AdapterToTokenMap.get(adapter);
  }
  
  function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
    // support for callable adapters
    if (adapter.adapter) {
      adapter = adapter.adapter;
    }
  
    const method = descriptor.value;
    const def = {
      adapter,
      method,
      configCallback,
      dynamic
    };
    WireMetaMap.set(descriptor, def);
  }
  
  function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
    // support for callable adapters
    if (adapter.adapter) {
      adapter = adapter.adapter;
    }
  
    const def = {
      adapter,
      configCallback,
      dynamic
    };
    WireMetaMap.set(descriptor, def);
  }
  
  function installWireAdapters(vm) {
    const {
      context,
      def: {
        wire
      }
    } = vm;
    const wiredConnecting = context.wiredConnecting = [];
    const wiredDisconnecting = context.wiredDisconnecting = [];
  
    for (const fieldNameOrMethod in wire) {
      const descriptor = wire[fieldNameOrMethod];
      const wireDef = WireMetaMap.get(descriptor);
  
      {
        assert$1.invariant(wireDef, `Internal Error: invalid wire definition found.`);
      }
  
      if (!isUndefined$1(wireDef)) {
        const adapterInstance = createConnector(vm, fieldNameOrMethod, wireDef);
        ArrayPush$1.call(wiredConnecting, () => adapterInstance.connect());
        ArrayPush$1.call(wiredDisconnecting, () => adapterInstance.disconnect());
      }
    }
  }
  
  function connectWireAdapters(vm) {
    const {
      wiredConnecting
    } = vm.context;
  
    for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
      wiredConnecting[i]();
    }
  }
  
  function disconnectWireAdapters(vm) {
    const {
      wiredDisconnecting
    } = vm.context;
    runWithBoundaryProtection(vm, vm, noop$3, () => {
      // job
      for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
        wiredDisconnecting[i]();
      }
    }, noop$3);
  }
  /* version: 1.7.7 */
  
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const globalStylesheets = create(null);
  const globalStylesheetsParentElement = document.head || document.body || document; // TODO [#0]: Evaluate how we can extract the `$shadowToken$` property name in a shared package
  // to avoid having to synchronize it between the different modules.
  
  const useSyntheticShadow = hasOwnProperty.call(Element.prototype, '$shadowToken$');
  const renderer = {
    ssr: false,
    syntheticShadow: useSyntheticShadow,
  
    createElement(tagName, namespace) {
      return isUndefined(namespace) ? document.createElement(tagName) : document.createElementNS(namespace, tagName);
    },
  
    createText(content) {
      return document.createTextNode(content);
    },
  
    insert(node, parent, anchor) {
      parent.insertBefore(node, anchor);
    },
  
    remove(node, parent) {
      parent.removeChild(node);
    },
  
    nextSibling(node) {
      return node.nextSibling;
    },
  
    attachShadow(element, options) {
      return element.attachShadow(options);
    },
  
    setText(node, content) {
      node.nodeValue = content;
    },
  
    getProperty(node, key) {
      return node[key];
    },
  
    setProperty(node, key, value) {
      {
        if (node instanceof Element && !(key in node)) {
          // TODO [#1297]: Move this validation to the compiler
          assert.fail(`Unknown public property "${key}" of element <${node.tagName}>. This is likely a typo on the corresponding attribute "${getAttrNameFromPropName(key)}".`);
        }
      }
  
      node[key] = value;
    },
  
    getAttribute(element, name, namespace) {
      return isUndefined(namespace) ? element.getAttribute(name) : element.getAttributeNS(namespace, name);
    },
  
    setAttribute(element, name, value, namespace) {
      return isUndefined(namespace) ? element.setAttribute(name, value) : element.setAttributeNS(namespace, name, value);
    },
  
    removeAttribute(element, name, namespace) {
      if (isUndefined(namespace)) {
        element.removeAttribute(name);
      } else {
        element.removeAttributeNS(namespace, name);
      }
    },
  
    addEventListener(target, type, callback, options) {
      target.addEventListener(type, callback, options);
    },
  
    removeEventListener(target, type, callback, options) {
      target.removeEventListener(type, callback, options);
    },
  
    dispatchEvent(target, event) {
      return target.dispatchEvent(event);
    },
  
    getClassList(element) {
      return element.classList;
    },
  
    getStyleDeclaration(element) {
      // TODO [#0]: How to avoid this type casting? Shall we use a different type interface to
      // represent elements in the engine?
      return element.style;
    },
  
    getBoundingClientRect(element) {
      return element.getBoundingClientRect();
    },
  
    querySelector(element, selectors) {
      return element.querySelector(selectors);
    },
  
    querySelectorAll(element, selectors) {
      return element.querySelectorAll(selectors);
    },
  
    getElementsByTagName(element, tagNameOrWildCard) {
      return element.getElementsByTagName(tagNameOrWildCard);
    },
  
    getElementsByClassName(element, names) {
      return element.getElementsByClassName(names);
    },
  
    isConnected(node) {
      return node.isConnected;
    },
  
    insertGlobalStylesheet(content) {
      if (!isUndefined(globalStylesheets[content])) {
        return;
      }
  
      globalStylesheets[content] = true;
      const elm = document.createElement('style');
      elm.type = 'text/css';
      elm.textContent = content;
      globalStylesheetsParentElement.appendChild(elm);
    },
  
    assertInstanceOfHTMLElement(elm, msg) {
      assert.invariant(elm instanceof HTMLElement, msg);
    }
  
  };
  
  function buildCustomElementConstructor(Ctor) {
    var _a;
  
    const def = getComponentInternalDef(Ctor); // generating the hash table for attributes to avoid duplicate fields and facilitate validation
    // and false positives in case of inheritance.
  
    const attributeToPropMap = create(null);
  
    for (const propName in def.props) {
      attributeToPropMap[getAttrNameFromPropName(propName)] = propName;
    }
  
    return _a = class extends def.bridge {
      constructor() {
        super();
        createVM(this, def, {
          mode: 'open',
          owner: null,
          tagName: this.tagName,
          renderer
        });
      }
  
      connectedCallback() {
        connectRootElement(this);
      }
  
      disconnectedCallback() {
        disconnectRootElement(this);
      }
  
      attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue === newValue) {
          // Ignore same values.
          return;
        }
  
        const propName = attributeToPropMap[attrName];
  
        if (isUndefined(propName)) {
          // Ignore unknown attributes.
          return;
        }
  
        if (!isAttributeLocked(this, attrName)) {
          // Ignore changes triggered by the engine itself during:
          // * diffing when public props are attempting to reflect to the DOM
          // * component via `this.setAttribute()`, should never update the prop
          // Both cases, the setAttribute call is always wrapped by the unlocking of the
          // attribute to be changed
          return;
        } // Reflect attribute change to the corresponding property when changed from outside.
  
  
        this[propName] = newValue;
      }
  
    }, // Specify attributes for which we want to reflect changes back to their corresponding
    // properties via attributeChangedCallback.
    _a.observedAttributes = keys(attributeToPropMap), _a;
  }
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const ConnectingSlot = createHiddenField('connecting', 'engine');
  const DisconnectingSlot = createHiddenField('disconnecting', 'engine');
  
  function callNodeSlot(node, slot) {
    {
      assert.isTrue(node, `callNodeSlot() should not be called for a non-object`);
    }
  
    const fn = getHiddenField(node, slot);
  
    if (!isUndefined(fn)) {
      fn(node);
    }
  
    return node; // for convenience
  } // Monkey patching Node methods to be able to detect the insertions and removal of root elements
  // created via createElement.
  
  
  const {
    appendChild,
    insertBefore,
    removeChild,
    replaceChild
  } = Node.prototype;
  assign(Node.prototype, {
    appendChild(newChild) {
      const appendedNode = appendChild.call(this, newChild);
      return callNodeSlot(appendedNode, ConnectingSlot);
    },
  
    insertBefore(newChild, referenceNode) {
      const insertedNode = insertBefore.call(this, newChild, referenceNode);
      return callNodeSlot(insertedNode, ConnectingSlot);
    },
  
    removeChild(oldChild) {
      const removedNode = removeChild.call(this, oldChild);
      return callNodeSlot(removedNode, DisconnectingSlot);
    },
  
    replaceChild(newChild, oldChild) {
      const replacedNode = replaceChild.call(this, newChild, oldChild);
      callNodeSlot(replacedNode, DisconnectingSlot);
      callNodeSlot(newChild, ConnectingSlot);
      return replacedNode;
    }
  
  });
  /*
   * Copyright (c) 2018, salesforce.com, inc.
   * All rights reserved.
   * SPDX-License-Identifier: MIT
   * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
   */
  
  
  const ComponentConstructorToCustomElementConstructorMap = new Map();
  
  function getCustomElementConstructor(Ctor) {
    if (Ctor === BaseLightningElement) {
      throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
    }
  
    let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);
  
    if (isUndefined(ce)) {
      ce = buildCustomElementConstructor(Ctor);
      ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
    }
  
    return ce;
  }
  /**
   * This static getter builds a Web Component class from a LWC constructor so it can be registered
   * as a new element via customElements.define() at any given time. E.g.:
   *
   *      import Foo from 'ns/foo';
   *      customElements.define('x-foo', Foo.CustomElementConstructor);
   *      const elm = document.createElement('x-foo');
   *
   */
  
  
  defineProperty(BaseLightningElement, 'CustomElementConstructor', {
    get() {
      return getCustomElementConstructor(this);
    }
  
  });
  freeze(BaseLightningElement);
  seal(BaseLightningElement.prototype);
  
  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return [".container", shadowSelector, " {display: flex;flex-direction: column;justify-items: center;font-family: \"Nunito\", sans-serif;color: #4a4a4a;align-items: flex-end;padding: 0 2em 2em 0;}\n.speech-bubble", shadowSelector, " {background-image: linear-gradient(140deg, #fcfcfc 0%, #f8f8f8 91%, #f8f8f8 91%);box-shadow: 0 0 50px 0 rgba(10, 6, 27, 0.22);flex: 1;padding: 1em;border-radius: 15px;border-top: 10px solid #17c37b;position: relative;display: flex;flex-direction: column;margin-left: 2em;}\n@media only screen and (min-width: 700px) {.speech-bubble", shadowSelector, " {margin: 0;}\n}.speech-bubble", shadowSelector, ":after {display: block;content: '';position: absolute;bottom: -10px;right: 30px;width: 0px;height: 0px;border-left: 10px solid transparent;border-right: 10px solid transparent;border-top: 10px solid #f8f8f8;}\nh1", shadowSelector, " {font-size: 18px;text-align: center;margin: 0;}\n.buttons", shadowSelector, " {display: flex;align-content: center;justify-content: center;width: 100%;text-align: center;padding: 1em 0;flex-wrap: wrap;}\na.text-link", shadowSelector, " {color: #4a4a4a;text-decoration: none;font-size: 13px;}\na.text-link:hover", shadowSelector, " {text-decoration: underline;}\n.activator", shadowSelector, " {width: 80px;height: 80px;border-radius: 50%;background-color: #17c37b;margin-top: 20px;display: flex;align-items: center;justify-content: center;cursor: pointer;position: relative;}\n.activator", shadowSelector, ":after {width: 50px;height: 50px;content: '';display: block;background-size: 100%;}\n.activator", shadowSelector, ":after {background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+c21pbGUtbGc8L3RpdGxlPgogICAgPGcgaWQ9InNtaWxlLWxnIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZEMTA1IiBjeD0iMjMuNSIgY3k9IjIzLjUiIHI9IjIyLjUiPjwvY2lyY2xlPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDE3LjAwMDAwMCkiIHN0cm9rZT0iIzAxMzNGRCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjA4OTQ1MzEsMy4wNTg3ODkwNiBDMTkuNTc3MzQ1NywxLjM4NzAzNDI4IDIxLjIyNzU0MSwwLjU1MjcxODUyNyAyMy4wNDAwMzkxLDAuNTU1ODQxODA0IEMyNC44NDY3NjExLDAuNTU4OTc4NTE4IDI2LjQ3NTAxNjMsMS4zOTY0ODQzOCAyNy45MjQ4MDQ3LDMuMDY4MzU5MzgiIGlkPSJyaWdodC1leWUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDMuMDU4Nzg5MDYgQzEuNDg3ODkyNTksMS4zODcwMzQyOCAzLjEzODA4NzksMC41NTI3MTg1MjcgNC45NTA1ODU5NCwwLjU1NTg0MTgwNCBDNi43NTczMDc5NCwwLjU1ODk3ODUxOCA4LjM4NTU2MzE1LDEuMzk2NDg0MzggOS44MzUzNTE1NiwzLjA2ODM1OTM4IiBpZD0ibGVmdC1leWUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTQ2MzEzNiwxOSBDOS4wNTU3MDU2LDE5IDUuNDA2OTM0NCwxNi42NjY2NjY3IDMsMTIgTDMsMTIgTDI0LDEyIEwyNCwxMiBDMjIuMTg4MTUwNCwxNi42NjY2NjY3IDE4LjgzNjkyMTYsMTkgMTMuOTQ2MzEzNiwxOSBaIiBpZD0iUGF0aC0yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiMwMTMzRkQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");}\nform", shadowSelector, " {padding: 1em;}\nlabel", shadowSelector, " {display: block;}\nselect", shadowSelector, " {width: 100%;}\n.form-buttons", shadowSelector, " {text-align: center;padding-top: 1em;}\n.form-buttons", shadowSelector, " a", shadowSelector, " {margin: 0 2em;}\n.animation-canvas", shadowSelector, " {position: absolute;background: transparent;height: calc(100vh - 30%);width: calc(100%  + 4em);bottom: 30%;right: -2em;z-index: 1;pointer-events: none;}\n"].join('');
  }
  var _implicitStylesheets = [stylesheet];
  
  function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
    return ["button", shadowSelector, " {width: 50px;height: 50px;font-size: 2rem;border: 0;background: none;background-size: contain;background-position: center;background-repeat: no-repeat;margin: 0 .1em;cursor: pointer;}\np", shadowSelector, " {margin: 0px;font-size: 13px;}\nbutton.celebrate", shadowSelector, " {background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+eWF5LWxnPC90aXRsZT4KICAgIDxnIGlkPSJ5YXktbGciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIj48L2c+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS44OTUzNjUsIDI5LjUwMzY1NCkgcm90YXRlKC00LjAwMDAwMCkgdHJhbnNsYXRlKC0xMS44OTUzNjUsIC0yOS41MDM2NTQpIHRyYW5zbGF0ZSgtNC4xMDQ2MzUsIDE2LjAwMzY1NCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNNS4yNjg4NTMwMiwyMC45OTU0NjAxIEwxOC43NjA0OTgxLDUuMDM4MzU5NTQgQzE5LjQ3MzY2MjEsNC4xOTQ4NzIyNyAyMC43MzU1Nzc0LDQuMDg5MjI0NDQgMjEuNTc5MDY0Nyw0LjgwMjM4ODUyIEMyMS44MzYxOTM4LDUuMDE5Nzg5ODEgMjIuMDM0MjcyMyw1LjI5ODU5MTExIDIyLjE1NDkzNyw1LjYxMjk0NTU2IEwyOC4zOTI4MDE3LDIxLjg2Mzc2NjUgQzI4Ljc4ODYzMDcsMjIuODk0OTc2MSAyOC4yNzM1NTI5LDI0LjA1MTgxOTQgMjcuMjQyMzQzNCwyNC40NDc2NDg0IEMyNy4wMDQyNDY1LDI0LjUzOTA0MTcgMjYuNzUwODY2OSwyNC41ODQwNTMxIDI2LjQ5NTg2MDIsMjQuNTgwMjU2NyBMNi43NjYzNTA0LDI0LjI4NjUzNjMgQzUuNjYxOTAzMjksMjQuMjcwMDk0IDQuNzc5OTAxMTIsMjMuMzYxNDMzNiA0Ljc5NjM0MzQzLDIyLjI1Njk4NjUgQzQuODAzMjI4NzksMjEuNzk0NDg5OSA0Ljk3MDIwOTUxLDIxLjM0ODY3NzYgNS4yNjg4NTMwMiwyMC45OTU0NjAxIFoiIGlkPSJQYXRoLTMiIGZpbGw9IiNGRkQxMDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1Ljk5NTk0NSwgMTMuNTQwNDMwKSByb3RhdGUoLTEwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNS45OTU5NDUsIC0xMy41NDA0MzApICI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjcuMDUwNDU5OSwyMi4zNDQ5NTI2IEMyOC4xNTk4NjQ3LDIxLjc0MTY4OTIgMjcuNTIyOTE3OCwxNi44NzkzODY3IDI1Ljg0MDUyMzYsMTEuNzU1Njk3NCBDMjQuMTU4MTI5NSw2LjYzMjAwODExIDIxLjg0MDk1NjIsMi44NjcwNDkzMSAyMC43MzE1NTE0LDMuNDcwMzEyNzUgQzE5LjYyMjE0NjYsNC4wNzM1NzYyIDIwLjE0MDYxOTMsOC44MTY2MTgyOSAyMS44MjMwMTM0LDEzLjk0MDMwNzYgQzIzLjUwNTQwNzYsMTkuMDYzOTk2OSAyNS45NDEwNTUsMjIuOTQ4MjE2MSAyNy4wNTA0NTk5LDIyLjM0NDk1MjYgWiIgaWQ9Ik92YWwiIHN0cm9rZT0iI0ZGRDEwNSIgZmlsbD0iI0UyQkIwRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuODc0MzE3LCAxMi45MDY4MDEpIHJvdGF0ZSgtMTMuMDAwMDAwKSB0cmFuc2xhdGUoLTIzLjg3NDMxNywgLTEyLjkwNjgwMSkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0yMC4zMjk1MDUzLDIwLjAzNjAxODIgQzIzLjkwNDAzNDksMTUuNTM0NTQwOCAyNS4wNzI3MzkyLDExLjIwNDcyMDYgMjMuODM1NjE4Myw3LjA0NjU1NzY2IiBpZD0iUGF0aC00IiBzdHJva2U9IiMwMTMzRkQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi4zMjExMTgsIDEzLjU0MTI4OCkgcm90YXRlKC02LjAwMDAwMCkgdHJhbnNsYXRlKC0yMi4zMjExMTgsIC0xMy41NDEyODgpICI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNy40NzE2Nzk3LDI4LjQ2MzM3ODkgQzMyLjM1Njc3MDgsMjguMjI4NzExOCAzNS44NjYyMTA5LDI5LjgwMzc2MSAzOCwzMy4xODg1MjY2IiBpZD0iUGF0aC00LUNvcHkiIHN0cm9rZT0iI0QwMDIxQiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiMxQkMzN0IiIGZpbGw9IiMxQkMzN0IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjUwMDAwMCwgMTAuNTAwMDAwKSByb3RhdGUoNC4wMDAwMDApIHRyYW5zbGF0ZSgtMTUuNTAwMDAwLCAtMTAuNTAwMDAwKSAiIGN4PSIxNS41IiBjeT0iMTAuNSIgcj0iMS41Ij48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNMzIuMzk1MzY5Niw3Ljk5NjI4NDMzIEMzMy4yMjE3NDQ2LDguMDU0MDcwMSAzMy45Mzg0OTg2LDcuNDMxMDA1NDEgMzMuOTk2Mjg0Myw2LjYwNDYzMDM5IEMzNC4wNTQwNzAxLDUuNzc4MjU1MzggMzMuNDMxMDA1NCw1LjA2MTUwMTQ0IDMyLjYwNDYzMDQsNS4wMDM3MTU2NyBDMzEuNzc4MjU1NCw0Ljk0NTkyOTkgMzEuMDYxNTAxNCw1LjU2ODk5NDU5IDMxLjAwMzcxNTcsNi4zOTUzNjk2MSBDMzAuOTQ1OTI5OSw3LjIyMTc0NDYyIDMxLjU2ODk5NDYsNy45Mzg0OTg1NiAzMi4zOTUzNjk2LDcuOTk2Mjg0MzMgWiIgaWQ9Ik92YWwtQ29weSIgc3Ryb2tlPSIjRDAwMjFCIiBmaWxsPSIjRDAwMjFCIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTMxLjM5NTM2OTYsMzcuOTk2Mjg0MyBDMzIuMjIxNzQ0NiwzOC4wNTQwNzAxIDMyLjkzODQ5ODYsMzcuNDMxMDA1NCAzMi45OTYyODQzLDM2LjYwNDYzMDQgQzMzLjA1NDA3MDEsMzUuNzc4MjU1NCAzMi40MzEwMDU0LDM1LjA2MTUwMTQgMzEuNjA0NjMwNCwzNS4wMDM3MTU3IEMzMC43NzgyNTU0LDM0Ljk0NTkyOTkgMzAuMDYxNTAxNCwzNS41Njg5OTQ2IDMwLjAwMzcxNTcsMzYuMzk1MzY5NiBDMjkuOTQ1OTI5OSwzNy4yMjE3NDQ2IDMwLjU2ODk5NDYsMzcuOTM4NDk4NiAzMS4zOTUzNjk2LDM3Ljk5NjI4NDMgWiIgaWQ9Ik92YWwtQ29weS0yIiBzdHJva2U9IiMwMTMzRkQiIGZpbGw9IiMwMTMzRkQiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMzUsMjMuMzIwMTc3OCBDMzcuNTg4NTgyMiwyMi43Mjk0OTc2IDM5LjU4ODU4MjIsMjIuOTU2MTA0OSA0MSwyNCIgaWQ9IlBhdGgtOSIgc3Ryb2tlPSIjRkZEMTA1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDAwMDAwLCAyMy41MDAwMDApIHJvdGF0ZSgyLjAwMDAwMCkgdHJhbnNsYXRlKC0zOC4wMDAwMDAsIC0yMy41MDAwMDApICI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNi4wMzk1NTA4LDIyLjgxODM1OTQgQzMyLjE2NTQxMTgsMTQuNTgxODAxMyAzNy43Nzg2OTMsMTAuOTEzMTgxNSA0Mi44NzkzOTQ1LDExLjgxMjUiIGlkPSJQYXRoLTEwIiBzdHJva2U9IiMxQkMzN0IiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==\");}\nbutton.heart", shadowSelector, " {background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+bG92ZS1sZzwvdGl0bGU+CiAgICA8ZyBpZD0ibG92ZS1sZyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkhlYXJ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNi4wMDAwMDApIiBmaWxsPSIjRDAwMjFCIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuMDMzMzYxNSw4LjAxMzUxMzUxIEMyMi4yMjc0MTY5LDIyLjkyMjE4MDUgMzEuMTAxNjY3NiwyOC40MTY1MjIzIDM5LjAzOTA2ODIsMjYuNjc2MTk5MSBDNDcuMjY1ODg1MSwyNC44NzI0MTk1IDQ5LjkyMzUzNzEsMTUuMTgxMzIxMSAzNi45MDAwODEsOC4wMTM1MTM1MSBMMTIuMDMzMzYxNSw4LjAxMzUxMzUxIFoiIGlkPSJoZWFydC1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC45ODY0ODYsIDE3LjUwMDAwMCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjguOTg2NDg2LCAtMTcuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTS02LjkzOTYxMTQ5LDguMDEzNTEzNTEgQzMuMjU0NDQzOTEsMjIuOTIyMTgwNSAxMi4xMjg2OTQ2LDI4LjQxNjUyMjMgMjAuMDY2MDk1MywyNi42NzYxOTkxIEMyOC4yOTI5MTIxLDI0Ljg3MjQxOTUgMzAuOTUwNTY0MSwxNS4xODEzMjExIDE3LjkyNzEwOCw4LjAxMzUxMzUxIEwtNi45Mzk2MTE0OSw4LjAxMzUxMzUxIFoiIGlkPSJoZWFydC1jb3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAxMzUxNCwgMTcuNTAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuMDEzNTE0LCAtMTcuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwiIGZpbGw9IiNEMDAyMUIiIGN4PSIyMy41IiBjeT0iMjgiIHJ4PSI0LjUiIHJ5PSIxMiI+PC9lbGxpcHNlPgogICAgPC9nPgo8L3N2Zz4=\");}\nbutton.plusone", shadowSelector, " {background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGx1cy1sZzwvdGl0bGU+CiAgICA8ZyBpZD0icGx1cy1sZyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgOC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjM1MDgyNywyNi4wNCBMMTEuMjM1MDgyNywyMC4yMjU2NDU5IEwxNi40Nzc1LDIwLjIyNTY0NTkgTDE2LjQ3NzUsMTQuNDk0MzU0MSBMMTEuMjM1MDgyNywxNC40OTQzNTQxIEwxMS4yMzUwODI3LDguNjggTDUuODc2MTY3MjgsOC42OCBMNS44NzYxNjcyOCwxNC40OTQzNTQxIEwwLjYzMzc1LDE0LjQ5NDM1NDEgTDAuNjMzNzUsMjAuMjI1NjQ1OSBMNS44NzYxNjcyOCwyMC4yMjU2NDU5IEw1Ljg3NjE2NzI4LDI2LjA0IEwxMS4yMzUwODI3LDI2LjA0IFogTTM3LjE5NjI1LDMxIEwzNy4xOTYyNSwyNS4xOTY1MTE2IEwzMi4yODA2MjUsMjUuMTk2NTExNiBMMzIuMjgwNjI1LDIuNDggTDI2LjQzMDYyNSwyLjQ4IEMyNi40MzA2MjUsNS4zODE3NDQxOSAyNC4yNzc1LDYuNzkxMTYyNzkgMjEuMzUyNSw2Ljc5MTE2Mjc5IEwyMS4zNTI1LDExLjU1ODMxNCBMMjYuNDMwNjI1LDExLjU1ODMxNCBMMjYuNDMwNjI1LDI1LjE5NjUxMTYgTDIxLjM1MjUsMjUuMTk2NTExNiBMMjEuMzUyNSwzMSBMMzcuMTk2MjUsMzEgWiIgaWQ9IisxIiBmaWxsPSIjRkZEMTA1Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy42NzI1ODI3LDIzLjU2IEwxMy42NzI1ODI3LDE3Ljc0NTY0NTkgTDE4LjkxNSwxNy43NDU2NDU5IEwxOC45MTUsMTIuMDE0MzU0MSBMMTMuNjcyNTgyNywxMi4wMTQzNTQxIEwxMy42NzI1ODI3LDYuMiBMOC4zMTM2NjcyOCw2LjIgTDguMzEzNjY3MjgsMTIuMDE0MzU0MSBMMy4wNzEyNSwxMi4wMTQzNTQxIEwzLjA3MTI1LDE3Ljc0NTY0NTkgTDguMzEzNjY3MjgsMTcuNzQ1NjQ1OSBMOC4zMTM2NjcyOCwyMy41NiBMMTMuNjcyNTgyNywyMy41NiBaIE0zOS42MzM3NSwyOC41MiBMMzkuNjMzNzUsMjIuNzE2NTExNiBMMzQuNzE4MTI1LDIyLjcxNjUxMTYgTDM0LjcxODEyNSwwIEwyOC44NjgxMjUsMCBDMjguODY4MTI1LDIuOTAxNzQ0MTkgMjYuNzE1LDQuMzExMTYyNzkgMjMuNzksNC4zMTExNjI3OSBMMjMuNzksOS4wNzgzMTM5NSBMMjguODY4MTI1LDkuMDc4MzEzOTUgTDI4Ljg2ODEyNSwyMi43MTY1MTE2IEwyMy43OSwyMi43MTY1MTE2IEwyMy43OSwyOC41MiBMMzkuNjMzNzUsMjguNTIgWiIgaWQ9IisxIiBmaWxsPSIjMUJDMzdCIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\");}\nbutton.question", shadowSelector, " {background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cXVlc3Rpb24tbGc8L3RpdGxlPgogICAgPGcgaWQ9InF1ZXN0aW9uLWxnIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgNi4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTU1NTM1NywyNi4yNSBMMTIuNTU1NTM1NywyNS4wMzUgQzEyLjU1NTUzNTcsMjMuMTc3NCAxMi42MDI4NSwyMy4wMjAxNTIgMTQuNzg2ODc3NCwyMS4wOTk1MTQ2IEwxNS4wNzExNjA3LDIwLjg1IEMxNy45NDYxNjA3LDE4LjMzIDE5LjQzNSwxNi45OCAxOS40MzUsMTIuNzk1IEMxOS40MzUsOC40NzUgMTcuMDczMzkyOSwzLjc1IDkuMzcyNSwzLjc1IEMzLjAwNjQyODU3LDMuNzUgLTAuNjksNy41MyAtMC42OSwxMi44ODUgTC0wLjY5LDE0LjY4NSBMNi40OTc1LDE0LjY4NSBMNi40OTc1LDEyLjg4NSBDNi40OTc1LDExLjU4IDcuMjY3NTg5MjksOS45MTUgOS4zNzI1LDkuOTE1IEMxMS41Mjg3NSw5LjkxNSAxMi4yNDc1LDExLjEzIDEyLjI0NzUsMTIuNzk1IEMxMi4yNDc1LDE0LjY0IDExLjExODAzNTcsMTUuNTg1IDkuNDc1MTc4NTcsMTYuOTM1IEM1LjY3NjA3MTQzLDIwLjA4NSA1LjM2ODAzNTcxLDIwLjM1NSA1LjM2ODAzNTcxLDIzLjE5IEw1LjM2ODAzNTcxLDI2LjI1IEwxMi41NTU1MzU3LDI2LjI1IFogTTEzLjY4NSwzNSBMMTMuNjg1LDI3LjUgTDUuMDYsMjcuNSBMNS4wNiwzNSBMMTMuNjg1LDM1IFoiIGlkPSI/IiBmaWxsPSIjRkZEMTA1Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS40MzA1MzU3LDIzLjc1IEwxNS40MzA1MzU3LDIyLjQ2NzUgQzE1LjQzMDUzNTcsMjAuNTA2NyAxNS40Nzc4NSwyMC4zNDA3MTYgMTcuNjYxODc3NCwxOC4zMTMzNzY1IEwxNy45NDYxNjA3LDE4LjA1IEMyMC44MjExNjA3LDE1LjM5IDIyLjMxLDEzLjk2NSAyMi4zMSw5LjU0NzUgQzIyLjMxLDQuOTg3NSAxOS45NDgzOTI5LDAgMTIuMjQ3NSwwIEM1Ljg4MTQyODU3LDAgMi4xODUsMy45OSAyLjE4NSw5LjY0MjUgTDIuMTg1LDExLjU0MjUgTDkuMzcyNSwxMS41NDI1IEw5LjM3MjUsOS42NDI1IEM5LjM3MjUsOC4yNjUgMTAuMTQyNTg5Myw2LjUwNzUgMTIuMjQ3NSw2LjUwNzUgQzE0LjQwMzc1LDYuNTA3NSAxNS4xMjI1LDcuNzkgMTUuMTIyNSw5LjU0NzUgQzE1LjEyMjUsMTEuNDk1IDEzLjk5MzAzNTcsMTIuNDkyNSAxMi4zNTAxNzg2LDEzLjkxNzUgQzguNTUxMDcxNDMsMTcuMjQyNSA4LjI0MzAzNTcxLDE3LjUyNzUgOC4yNDMwMzU3MSwyMC41MiBMOC4yNDMwMzU3MSwyMy43NSBMMTUuNDMwNTM1NywyMy43NSBaIE0xNi41NiwzMi41IEwxNi41NiwyNSBMNy45MzUsMjUgTDcuOTM1LDMyLjUgTDE2LjU2LDMyLjUgWiIgaWQ9Ij8iIGZpbGw9IiMwMTMzRkQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");}\nbutton.smile", shadowSelector, " {background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+c21pbGUtbGc8L3RpdGxlPgogICAgPGcgaWQ9InNtaWxlLWxnIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZEMTA1IiBjeD0iMjMuNSIgY3k9IjIzLjUiIHI9IjIyLjUiPjwvY2lyY2xlPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDE3LjAwMDAwMCkiIHN0cm9rZT0iIzAxMzNGRCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjA4OTQ1MzEsMy4wNTg3ODkwNiBDMTkuNTc3MzQ1NywxLjM4NzAzNDI4IDIxLjIyNzU0MSwwLjU1MjcxODUyNyAyMy4wNDAwMzkxLDAuNTU1ODQxODA0IEMyNC44NDY3NjExLDAuNTU4OTc4NTE4IDI2LjQ3NTAxNjMsMS4zOTY0ODQzOCAyNy45MjQ4MDQ3LDMuMDY4MzU5MzgiIGlkPSJyaWdodC1leWUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDMuMDU4Nzg5MDYgQzEuNDg3ODkyNTksMS4zODcwMzQyOCAzLjEzODA4NzksMC41NTI3MTg1MjcgNC45NTA1ODU5NCwwLjU1NTg0MTgwNCBDNi43NTczMDc5NCwwLjU1ODk3ODUxOCA4LjM4NTU2MzE1LDEuMzk2NDg0MzggOS44MzUzNTE1NiwzLjA2ODM1OTM4IiBpZD0ibGVmdC1leWUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTQ2MzEzNiwxOSBDOS4wNTU3MDU2LDE5IDUuNDA2OTM0NCwxNi42NjY2NjY3IDMsMTIgTDMsMTIgTDI0LDEyIEwyNCwxMiBDMjIuMTg4MTUwNCwxNi42NjY2NjY3IDE4LjgzNjkyMTYsMTkgMTMuOTQ2MzEzNiwxOSBaIiBpZD0iUGF0aC0yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiMwMTMzRkQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");}\nbutton.clap", shadowSelector, " {background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y2xhcC1sZzwvdGl0bGU+CiAgICA8ZyBpZD0iY2xhcC1sZyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTMzLjc1MzEzNTEsMjEuMDY1MTk3MSBMMzMuNjUxMDI2MSwyMS4wMjg2Njg0IEMzMi42MDU5NDY4LDIwLjY1NDg5MTggMzEuNDU1NjQzMSwyMS4xOTkwODM4IDMxLjA4MTg2NjQsMjIuMjQ0MjQwOSBMMjkuNDE2MDMyOSwyNy42MzQwNTUzIEwyOS41NzE4MDU2LDI0LjQ0NTIzMTcgTDI5LjU3MTgwNTYsMjQuMDU1Nzk5OSBMMjkuNTcxODA1NiwxMC4zMTk4Mzg0IEMyOS41NzE4MDU2LDkuMzAyODc2MTYgMjguNzQ3NDU2Myw4LjQ3ODUyNjg3IDI3LjczMDU3MTksOC40Nzg1MjY4NyBMMjcuMjg1MDYxOSw4LjQ3ODUyNjg3IEMyNi4yNjgxNzc1LDguNDc4NTI2ODcgMjUuNDQzODI4Miw5LjMwMjg3NjE2IDI1LjQ0MzgyODIsMTAuMzE5ODM4NCBMMjUuNDQzODI4MiwyMy43ODMxOTc2IEMyNS40NDM4MjgyLDIzLjkzMzc1MiAyNS4zMjE3ODAzLDI0LjA1NTc5OTkgMjUuMTcxMjI2LDI0LjA1NTc5OTkgQzI1LjAyMDY3MTYsMjQuMDU1Nzk5OSAyNC44OTg2MjM3LDIzLjkzMzc1MiAyNC44OTg2MjM3LDIzLjc4MzE5NzYgTDI0Ljg5ODYyMzcsOC40MDIwNDI0NiBDMjQuODk4NjIzNyw3LjM2ODg3OTgzIDI0LjA2MTExMTYsNi41MzEzNjc3NSAyMy4wMjc5NDksNi41MzEzNjc3NSBMMjIuNjQxMzIxLDYuNTMxMzY3NzUgQzIxLjYwODE1ODQsNi41MzEzNjc3NSAyMC43NzA2NDYzLDcuMzY4ODc5ODMgMjAuNzcwNjQ2Myw4LjQwMjA0MjQ2IEwyMC43NzA2NDYzLDIzLjc4MzE5NzYgQzIwLjc3MDY0NjMsMjMuOTMzNzUyIDIwLjY0ODU5ODQsMjQuMDU1Nzk5OSAyMC40OTgwNDQsMjQuMDU1Nzk5OSBDMjAuMzQ3NDg5NywyNC4wNTU3OTk5IDIwLjIyNTQ0MTgsMjMuOTMzNzUyIDIwLjIyNTQ0MTgsMjMuNzgzMTk3NiBMMjAuMjI1NDQxOCwxMS4yMDMxNDc3IEMyMC4yMjU0NDE4LDEwLjE2OTk4NTEgMTkuMzg3OTI5Nyw5LjMzMjQ3Mjk4IDE4LjM1NDc2NzEsOS4zMzI0NzI5OCBMMTcuOTY4MTM5MSw5LjMzMjQ3Mjk4IEMxNi45MzQ5NzY1LDkuMzMyNDcyOTggMTYuMDk3NDY0NCwxMC4xNjk5ODUxIDE2LjA5NzQ2NDQsMTEuMjAzMTQ3NyBMMTYuMDk3NDY0NCwyMy43ODMxOTc2IEMxNi4wOTc0NjQ0LDIzLjkzMzc1MiAxNS45NzU0MTY1LDI0LjA1NTc5OTkgMTUuODI0ODYyMSwyNC4wNTU3OTk5IEMxNS42NzQzMDc4LDI0LjA1NTc5OTkgMTUuNTUyMjU5OSwyMy45MzM3NTIgMTUuNTUyMjU5OSwyMy43ODMxOTc2IEwxNS41NTIyNTk5LDE1LjA4ODc0MjcgQzE1LjU1MjI1OTksMTQuMTA1MDM3OSAxNC43NTQ3ODE0LDEzLjMwNzQ4MTUgMTMuNzcwOTk4NywxMy4zMDc0ODE1IEwxMy4yMDU1NDM3LDEzLjMwNzQ4MTUgQzEyLjIyMTc2MSwxMy4zMDc0ODE1IDExLjQyNDI4MjUsMTQuMTA1MDM3OSAxMS40MjQyODI1LDE1LjA4ODc0MjcgTDExLjQyNDI4MjUsMjQuMDU1Nzk5OSBMMTEuNDI0MjgyNSwyNC40NDUyMzE3IEwxMS40MjQyODI1LDMzLjYzMDY4MjMgQzExLjQyNDI4MjUsMzcuODA2MDE0NiAxNC44MDkwNjgyLDQxLjE5MDgwMDIgMTguOTg0NDAwNCw0MS4xOTA4MDAyIEwyMi4wMTE2ODc3LDQxLjE5MDgwMDIgQzIzLjEwNTk5MTEsNDEuMTkwODAwMiAyNS42MzQxMDQ2LDQxLjAyNTA1OCAyNi41NzMxODA1LDQwLjYwNjY1MjUgQzI3LjIwMTU2NzcsNDAuNDIyOTk2NCAyNy44MTA5NTA2LDQwLjA1MzgxNTEgMjguMzYxMTM5OSwzOS42MTMyMTE5IEMyOS42OTgxMzczLDM4LjU0MjE5NjUgMzAuNjU2NDUxMSwzNy4wNzAzIDMxLjE0NTczMzIsMzUuNDI4NTMzMyBMMzUuMTI0NDAyNCwyMy42MzQ0MzQ3IEMzNS40OTgyNTcsMjIuNTg5MzU1NCAzNC43OTgyOTIyLDIxLjQzOTA1MTcgMzMuNzUzMTM1MSwyMS4wNjUxOTcxIiBpZD0iRmlsbC0xIiBmaWxsPSIjRTJCQjBFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy4zMjUyNjcsIDIzLjg2MTA4NCkgcm90YXRlKC01Ni4wMDAwMDApIHRyYW5zbGF0ZSgtMjMuMzI1MjY3LCAtMjMuODYxMDg0KSAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMzYuODE5Nzg1NSwyMC4zNDMwMjkyIEwzNi43MTc2NzY1LDIwLjMwNjUwMDUgQzM1LjY3MjU5NzIsMTkuOTMyNzIzOCAzNC41MjIyOTM1LDIwLjQ3NjkxNTggMzQuMTQ4NTE2OCwyMS41MjIwNzMgTDMyLjQ4MjY4MzIsMjYuOTExODg3MyBMMzIuNjM4NDU2LDIzLjcyMzA2MzggTDMyLjYzODQ1NiwyMy4zMzM2MzE5IEwzMi42Mzg0NTYsOS41OTc2NzA0NiBDMzIuNjM4NDU2LDguNTgwNzA4MTkgMzEuODE0MTA2Nyw3Ljc1NjM1ODkxIDMwLjc5NzIyMjMsNy43NTYzNTg5MSBMMzAuMzUxNzEyMyw3Ljc1NjM1ODkxIEMyOS4zMzQ4Mjc5LDcuNzU2MzU4OTEgMjguNTEwNDc4Niw4LjU4MDcwODE5IDI4LjUxMDQ3ODYsOS41OTc2NzA0NiBMMjguNTEwNDc4NiwyMy4wNjEwMjk3IEMyOC41MTA0Nzg2LDIzLjIxMTU4NCAyOC4zODg0MzA3LDIzLjMzMzYzMTkgMjguMjM3ODc2MywyMy4zMzM2MzE5IEMyOC4wODczMjIsMjMuMzMzNjMxOSAyNy45NjUyNzQxLDIzLjIxMTU4NCAyNy45NjUyNzQxLDIzLjA2MTAyOTcgTDI3Ljk2NTI3NDEsNy42Nzk4NzQ1IEMyNy45NjUyNzQxLDYuNjQ2NzExODYgMjcuMTI3NzYyLDUuODA5MTk5NzggMjYuMDk0NTk5Myw1LjgwOTE5OTc4IEwyNS43MDc5NzE0LDUuODA5MTk5NzggQzI0LjY3NDgwODgsNS44MDkxOTk3OCAyMy44MzcyOTY3LDYuNjQ2NzExODYgMjMuODM3Mjk2Nyw3LjY3OTg3NDUgTDIzLjgzNzI5NjcsMjMuMDYxMDI5NyBDMjMuODM3Mjk2NywyMy4yMTE1ODQgMjMuNzE1MjQ4OCwyMy4zMzM2MzE5IDIzLjU2NDY5NDQsMjMuMzMzNjMxOSBDMjMuNDE0MTQwMSwyMy4zMzM2MzE5IDIzLjI5MjA5MjIsMjMuMjExNTg0IDIzLjI5MjA5MjIsMjMuMDYxMDI5NyBMMjMuMjkyMDkyMiwxMC40ODA5Nzk3IEMyMy4yOTIwOTIyLDkuNDQ3ODE3MSAyMi40NTQ1ODAxLDguNjEwMzA1MDEgMjEuNDIxNDE3NCw4LjYxMDMwNTAxIEwyMS4wMzQ3ODk1LDguNjEwMzA1MDEgQzIwLjAwMTYyNjksOC42MTAzMDUwMSAxOS4xNjQxMTQ4LDkuNDQ3ODE3MSAxOS4xNjQxMTQ4LDEwLjQ4MDk3OTcgTDE5LjE2NDExNDgsMjMuMDYxMDI5NyBDMTkuMTY0MTE0OCwyMy4yMTE1ODQgMTkuMDQyMDY2OSwyMy4zMzM2MzE5IDE4Ljg5MTUxMjUsMjMuMzMzNjMxOSBDMTguNzQwOTU4MiwyMy4zMzM2MzE5IDE4LjYxODkxMDMsMjMuMjExNTg0IDE4LjYxODkxMDMsMjMuMDYxMDI5NyBMMTguNjE4OTEwMywxNC4zNjY1NzQ3IEMxOC42MTg5MTAzLDEzLjM4Mjg2OTkgMTcuODIxNDMxOCwxMi41ODUzMTM1IDE2LjgzNzY0OTEsMTIuNTg1MzEzNSBMMTYuMjcyMTk0MSwxMi41ODUzMTM1IEMxNS4yODg0MTE0LDEyLjU4NTMxMzUgMTQuNDkwOTMyOSwxMy4zODI4Njk5IDE0LjQ5MDkzMjksMTQuMzY2NTc0NyBMMTQuNDkwOTMyOSwyMy4zMzM2MzE5IEwxNC40OTA5MzI5LDIzLjcyMzA2MzggTDE0LjQ5MDkzMjksMzIuOTA4NTE0MyBDMTQuNDkwOTMyOSwzNy4wODM4NDY2IDE3Ljg3NTcxODYsNDAuNDY4NjMyMyAyMi4wNTEwNTA4LDQwLjQ2ODYzMjMgTDI1LjA3ODMzODEsNDAuNDY4NjMyMyBDMjYuMTcyNjQxNSw0MC40Njg2MzIzIDI4LjcwMDc1NSw0MC4zMDI4OTAxIDI5LjYzOTgzMDksMzkuODg0NDg0NSBDMzAuMjY4MjE4MSwzOS43MDA4Mjg1IDMwLjg3NzYwMSwzOS4zMzE2NDcxIDMxLjQyNzc5MDMsMzguODkxMDQzOSBDMzIuNzY0Nzg3NywzNy44MjAwMjg1IDMzLjcyMzEwMTUsMzYuMzQ4MTMyIDM0LjIxMjM4MzYsMzQuNzA2MzY1MyBMMzguMTkxMDUyOCwyMi45MTIyNjY3IEMzOC41NjQ5MDc0LDIxLjg2NzE4NzQgMzcuODY0OTQyNiwyMC43MTY4ODM3IDM2LjgxOTc4NTUsMjAuMzQzMDI5MiIgaWQ9IkZpbGwtMSIgZmlsbD0iI0ZGRDEwNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYuMzkxOTE4LCAyMy4xMzg5MTYpIHJvdGF0ZSgtNTYuMDAwMDAwKSB0cmFuc2xhdGUoLTI2LjM5MTkxOCwgLTIzLjEzODkxNikgIj48L3BhdGg+CiAgICAgICAgPGxpbmUgeDE9IjI0LjIyNTA1ODYiIHkxPSI5LjUyNzA5OTYxIiB4Mj0iMjEuNzg3NTU4NiIgeTI9IjUuNjM3ODE1NjQiIGlkPSJQYXRoLTgiIHN0cm9rZT0iIzFCQzM3QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICA8bGluZSB4MT0iMzUuNTYwMjYzNyIgeTE9IjEwLjMwNjE1MjMiIHgyPSIzMy4xMjI3NjM3IiB5Mj0iNi40MTY4NjgzNyIgaWQ9IlBhdGgtOCIgc3Ryb2tlPSIjMUJDMzdCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuMzQxNTE0LCA4LjM2MTUxMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzQuMzQxNTE0LCAtOC4zNjE1MTApICI+PC9saW5lPgogICAgICAgIDxsaW5lIHgxPSIxNy4yOTEzNTcyIiB5MT0iMzguODg0MTY5MiIgeDI9IjEzLjYwNjQ1NzMiIHkyPSI0NS4zNjQ4ODgzIiBpZD0iUGF0aC0xMSIgc3Ryb2tlPSIjMUJDMzdCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgogICAgICAgIDxsaW5lIHgxPSIyMS4yMjYxMDU0IiB5MT0iNDAuNzA1NDg2OCIgeDI9IjIxLjcxMTk2NiIgeTI9IjQ1LjI2OTY4MTgiIGlkPSJQYXRoLTgiIHN0cm9rZT0iIzFCQzM3QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICA8bGluZSB4MT0iMTMuNTcwNDE1MyIgeTE9IjM2LjEwNDc4MTciIHgyPSI5LjY3NDY1NDk2IiB5Mj0iMzguNTMxOTE3MyIgaWQ9IlBhdGgtOCIgc3Ryb2tlPSIjMUJDMzdCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgogICAgICAgIDxsaW5lIHgxPSIyOC45NTI1MTI1IiB5MT0iOS4yMzc2NjkxNSIgeDI9IjI5LjQyMzUxODQiIHkyPSIxLjc5NzQ4MzYiIGlkPSJQYXRoLTExIiBzdHJva2U9IiMxQkMzN0IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICA8L2c+Cjwvc3ZnPg==\");}\n"].join('');
  }
  var _implicitStylesheets$1 = [stylesheet$1];
  
  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      b: api_bind,
      h: api_element,
      d: api_dynamic
    } = $api;
    const {
      _m0
    } = $ctx;
    return [api_element("div", {
      classMap: {
        "button": true
      },
      key: 2
    }, [api_element("button", {
      className: $cmp.name,
      key: 0,
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
      }
    }, []), api_element("p", {
      key: 1
    }, [api_dynamic($cmp.count)])])];
  }
  
  var _tmpl = registerTemplate(tmpl);
  tmpl.stylesheets = [];
  
  if (_implicitStylesheets$1) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$1);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "emote-button_button-host",
    shadowAttribute: "emote-button_button"
  };
  
  // See https://github.com/fostive/emote-server for documentation of these values. You probably will only have to update the `apiDomain` value.
  const config = {
    apiDomain: 'https://cascadiajs-emote-server.herokuapp.com',
    ssePath: '/events/emote',
    emotePath: '/api/emote'
  };
  
  const {
    apiDomain,
    emotePath
  } = config; // const API_SERVER = 'http://localhost:8080';
  // const API_ROUTE = '/api/emote/';
  
  class Button extends BaseLightningElement {
    constructor(...args) {
      super(...args);
      this.emoji = 'unknown';
      this.name = 'unknown';
      this.talkId = 'unknown';
      this.count = 0;
    }
  
    // On button click, POST message to API server
    handleClick() {
      fetch(`${apiDomain}${emotePath}/${this.talkId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emote: this.name
        })
      }).catch(error => console.error('Error:', error));
    }
  
  }
  
  registerDecorators(Button, {
    publicProps: {
      emoji: {
        config: 0
      },
      name: {
        config: 0
      },
      talkId: {
        config: 0
      },
      count: {
        config: 0
      }
    }
  });
  
  var _emoteButton = registerComponent(Button, {
    tmpl: _tmpl
  });
  
  function tmpl$1($api, $cmp, $slotset, $ctx) {
    const {
      t: api_text,
      h: api_element,
      k: api_key,
      c: api_custom_element,
      i: api_iterator,
      fid: api_scoped_frag_id,
      b: api_bind,
      gid: api_scoped_id
    } = $api;
    const {
      _m0,
      _m1,
      _m2,
      _m3,
      _m4
    } = $ctx;
    return [api_element("div", {
      classMap: {
        "container": true
      },
      key: 18
    }, [$cmp.showBubble ? api_element("div", {
      classMap: {
        "speech-bubble": true
      },
      key: 15
    }, [$cmp.showWidget ? api_element("h1", {
      key: 0
    }, [api_text("Share how you feel!")]) : null, $cmp.showWidget ? api_element("div", {
      classMap: {
        "buttons": true
      },
      key: 2
    }, api_iterator($cmp.buttonsData, function (buttonData) {
      return api_custom_element("emote-button", _emoteButton, {
        props: {
          "emoji": buttonData.emoji,
          "name": buttonData.name,
          "talkId": $cmp.talkId,
          "count": buttonData.count
        },
        key: api_key(1, buttonData.name)
      }, []);
    })) : null, $cmp.showWidget ? api_element("a", {
      classMap: {
        "text-link": true
      },
      attrs: {
        "href": api_scoped_frag_id("#")
      },
      key: 3,
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.openOptions))
      }
    }, [api_text("options")]) : null, $cmp.showOptions ? api_element("h1", {
      key: 4
    }, [api_text("Options")]) : null, $cmp.showOptions ? api_element("form", {
      key: 14
    }, [api_element("label", {
      attrs: {
        "for": `${api_scoped_id("animations")}`
      },
      key: 5
    }, [api_text("Animations")]), api_element("select", {
      attrs: {
        "id": api_scoped_id("animations")
      },
      key: 10,
      on: {
        "change": _m1 || ($ctx._m1 = api_bind($cmp.selectOption))
      }
    }, [$cmp.showAnimations ? api_element("option", {
      attrs: {
        "value": "true"
      },
      props: {
        "selected": true
      },
      key: 6
    }, [api_text("On")]) : null, $cmp.showAnimations ? api_element("option", {
      attrs: {
        "value": "false"
      },
      key: 7
    }, [api_text("Off")]) : null, !$cmp.showAnimations ? api_element("option", {
      attrs: {
        "value": "true"
      },
      key: 8
    }, [api_text("On")]) : null, !$cmp.showAnimations ? api_element("option", {
      attrs: {
        "value": "false"
      },
      props: {
        "selected": true
      },
      key: 9
    }, [api_text("Off")]) : null]), api_element("div", {
      classMap: {
        "form-buttons": true
      },
      key: 13
    }, [api_element("a", {
      classMap: {
        "text-link": true
      },
      attrs: {
        "href": api_scoped_frag_id("#")
      },
      key: 11,
      on: {
        "click": _m2 || ($ctx._m2 = api_bind($cmp.closeOptions))
      }
    }, [api_text("Cancel")]), api_element("a", {
      classMap: {
        "text-link": true
      },
      attrs: {
        "href": api_scoped_frag_id("#")
      },
      key: 12,
      on: {
        "click": _m3 || ($ctx._m3 = api_bind($cmp.saveOptions))
      }
    }, [api_text("Save")])])]) : null]) : null, api_element("div", {
      classMap: {
        "activator": true
      },
      key: 17,
      on: {
        "click": _m4 || ($ctx._m4 = api_bind($cmp.toggleWidget))
      }
    }, [api_element("canvas", {
      classMap: {
        "animation-canvas": true
      },
      context: {
        lwc: {
          dom: "manual"
        }
      },
      key: 16
    }, [])])])];
  }
  
  var _tmpl$1 = registerTemplate(tmpl$1);
  tmpl$1.stylesheets = [];
  
  if (_implicitStylesheets) {
    tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets);
  }
  tmpl$1.stylesheetTokens = {
    hostAttribute: "emote-widget_widget-host",
    shadowAttribute: "emote-widget_widget"
  };
  
  var _tmpl$2 = void 0;
  
  /*
   * anime.js v3.2.0
   * (c) 2020 Julian Garnier
   * Released under the MIT license
   * animejs.com
   */
  // Defaults
  var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: 'normal',
    autoplay: true,
    timelineOffset: 0
  };
  var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0
  };
  var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching
  
  var cache = {
    CSS: {},
    springs: {}
  }; // Utils
  
  function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  
  function stringContains(str, text) {
    return str.indexOf(text) > -1;
  }
  
  function applyArguments(func, args) {
    return func.apply(null, args);
  }
  
  var is = {
    arr: function (a) {
      return Array.isArray(a);
    },
    obj: function (a) {
      return stringContains(Object.prototype.toString.call(a), 'Object');
    },
    pth: function (a) {
      return is.obj(a) && a.hasOwnProperty('totalLength');
    },
    svg: function (a) {
      return a instanceof SVGElement;
    },
    inp: function (a) {
      return a instanceof HTMLInputElement;
    },
    dom: function (a) {
      return a.nodeType || is.svg(a);
    },
    str: function (a) {
      return typeof a === 'string';
    },
    fnc: function (a) {
      return typeof a === 'function';
    },
    und: function (a) {
      return typeof a === 'undefined';
    },
    hex: function (a) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function (a) {
      return /^rgb/.test(a);
    },
    hsl: function (a) {
      return /^hsl/.test(a);
    },
    col: function (a) {
      return is.hex(a) || is.rgb(a) || is.hsl(a);
    },
    key: function (a) {
      return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
    }
  }; // Easings
  
  function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(',').map(function (p) {
      return parseFloat(p);
    }) : [];
  } // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
  
  
  function spring(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
  
    function solver(t) {
      var progress = duration ? duration * t / 1000 : t;
  
      if (zeta < 1) {
        progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
      } else {
        progress = (a + b * progress) * Math.exp(-progress * w0);
      }
  
      if (t === 0 || t === 1) {
        return t;
      }
  
      return 1 - progress;
    }
  
    function getDuration() {
      var cached = cache.springs[string];
  
      if (cached) {
        return cached;
      }
  
      var frame = 1 / 6;
      var elapsed = 0;
      var rest = 0;
  
      while (true) {
        elapsed += frame;
  
        if (solver(elapsed) === 1) {
          rest++;
  
          if (rest >= 16) {
            break;
          }
        } else {
          rest = 0;
        }
      }
  
      var duration = elapsed * frame * 1000;
      cache.springs[string] = duration;
      return duration;
    }
  
    return duration ? solver : getDuration;
  } // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
  
  
  function steps(steps) {
    if (steps === void 0) steps = 10;
    return function (t) {
      return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
    };
  } // BezierEasing https://github.com/gre/bezier-easing
  
  
  var bezier = function () {
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
  
    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
  
    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    }
  
    function C(aA1) {
      return 3.0 * aA1;
    }
  
    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
  
    function getSlope(aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }
  
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX,
          currentT,
          i = 0;
  
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
  
        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
  
      return currentT;
    }
  
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < 4; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
  
        if (currentSlope === 0.0) {
          return aGuessT;
        }
  
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
  
      return aGuessT;
    }
  
    function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        return;
      }
  
      var sampleValues = new Float32Array(kSplineTableSize);
  
      if (mX1 !== mY1 || mX2 !== mY2) {
        for (var i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }
  
      function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
  
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
  
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
  
        if (initialSlope >= 0.001) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
  
      return function (x) {
        if (mX1 === mY1 && mX2 === mY2) {
          return x;
        }
  
        if (x === 0 || x === 1) {
          return x;
        }
  
        return calcBezier(getTForX(x), mY1, mY2);
      };
    }
  
    return bezier;
  }();
  
  var penner = function () {
    // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
    var eases = {
      linear: function () {
        return function (t) {
          return t;
        };
      }
    };
    var functionEasings = {
      Sine: function () {
        return function (t) {
          return 1 - Math.cos(t * Math.PI / 2);
        };
      },
      Circ: function () {
        return function (t) {
          return 1 - Math.sqrt(1 - t * t);
        };
      },
      Back: function () {
        return function (t) {
          return t * t * (3 * t - 2);
        };
      },
      Bounce: function () {
        return function (t) {
          var pow2,
              b = 4;
  
          while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}
  
          return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
        };
      },
      Elastic: function (amplitude, period) {
        if (amplitude === void 0) amplitude = 1;
        if (period === void 0) period = .5;
        var a = minMax(amplitude, 1, 10);
        var p = minMax(period, .1, 2);
        return function (t) {
          return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
        };
      }
    };
    var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
    baseEasings.forEach(function (name, i) {
      functionEasings[name] = function () {
        return function (t) {
          return Math.pow(t, i + 2);
        };
      };
    });
    Object.keys(functionEasings).forEach(function (name) {
      var easeIn = functionEasings[name];
      eases['easeIn' + name] = easeIn;
  
      eases['easeOut' + name] = function (a, b) {
        return function (t) {
          return 1 - easeIn(a, b)(1 - t);
        };
      };
  
      eases['easeInOut' + name] = function (a, b) {
        return function (t) {
          return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
        };
      };
    });
    return eases;
  }();
  
  function parseEasings(easing, duration) {
    if (is.fnc(easing)) {
      return easing;
    }
  
    var name = easing.split('(')[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
  
    switch (name) {
      case 'spring':
        return spring(easing, duration);
  
      case 'cubicBezier':
        return applyArguments(bezier, args);
  
      case 'steps':
        return applyArguments(steps, args);
  
      default:
        return applyArguments(ease, args);
    }
  } // Strings
  
  
  function selectString(str) {
    try {
      var nodes = document.querySelectorAll(str);
      return nodes;
    } catch (e) {
      return;
    }
  } // Arrays
  
  
  function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
  
    for (var i = 0; i < len; i++) {
      if (i in arr) {
        var val = arr[i];
  
        if (callback.call(thisArg, val, i, arr)) {
          result.push(val);
        }
      }
    }
  
    return result;
  }
  
  function flattenArray(arr) {
    return arr.reduce(function (a, b) {
      return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
  }
  
  function toArray(o) {
    if (is.arr(o)) {
      return o;
    }
  
    if (is.str(o)) {
      o = selectString(o) || o;
    }
  
    if (o instanceof NodeList || o instanceof HTMLCollection) {
      return [].slice.call(o);
    }
  
    return [o];
  }
  
  function arrayContains(arr, val) {
    return arr.some(function (a) {
      return a === val;
    });
  } // Objects
  
  
  function cloneObject(o) {
    var clone = {};
  
    for (var p in o) {
      clone[p] = o[p];
    }
  
    return clone;
  }
  
  function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
  
    for (var p in o1) {
      o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    }
  
    return o;
  }
  
  function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
  
    for (var p in o2) {
      o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    }
  
    return o;
  } // Colors
  
  
  function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
  }
  
  function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return "rgba(" + r + "," + g + "," + b + ",1)";
  }
  
  function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
  
    function hue2rgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }
  
      if (t > 1) {
        t -= 1;
      }
  
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
  
      if (t < 1 / 2) {
        return q;
      }
  
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
  
      return p;
    }
  
    var r, g, b;
  
    if (s == 0) {
      r = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
  }
  
  function colorToRgb(val) {
    if (is.rgb(val)) {
      return rgbToRgba(val);
    }
  
    if (is.hex(val)) {
      return hexToRgba(val);
    }
  
    if (is.hsl(val)) {
      return hslToRgba(val);
    }
  } // Units
  
  
  function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  
    if (split) {
      return split[1];
    }
  }
  
  function getTransformUnit(propName) {
    if (stringContains(propName, 'translate') || propName === 'perspective') {
      return 'px';
    }
  
    if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
      return 'deg';
    }
  } // Values
  
  
  function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) {
      return val;
    }
  
    return val(animatable.target, animatable.id, animatable.total);
  }
  
  function getAttribute(el, prop) {
    return el.getAttribute(prop);
  }
  
  function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
  
    if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
      return value;
    }
  
    var cached = cache.CSS[value + unit];
  
    if (!is.und(cached)) {
      return cached;
    }
  
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = 'absolute';
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
  }
  
  function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
      var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
      return unit ? convertPxToUnit(el, value, unit) : value;
    }
  }
  
  function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
      return 'attribute';
    }
  
    if (is.dom(el) && arrayContains(validTransforms, prop)) {
      return 'transform';
    }
  
    if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
      return 'css';
    }
  
    if (el[prop] != null) {
      return 'object';
    }
  }
  
  function getElementTransforms(el) {
    if (!is.dom(el)) {
      return;
    }
  
    var str = el.style.transform || '';
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m;
  
    while (m = reg.exec(str)) {
      transforms.set(m[1], m[2]);
    }
  
    return transforms;
  }
  
  function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
  
    if (animatable) {
      animatable.transforms.list.set(propName, value);
      animatable.transforms['last'] = propName;
    }
  
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
  
  function getOriginalTargetValue(target, propName, unit, animatable) {
    switch (getAnimationType(target, propName)) {
      case 'transform':
        return getTransformValue(target, propName, animatable, unit);
  
      case 'css':
        return getCSSValue(target, propName, unit);
  
      case 'attribute':
        return getAttribute(target, propName);
  
      default:
        return target[propName] || 0;
    }
  }
  
  function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
  
    if (!operator) {
      return to;
    }
  
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ''));
  
    switch (operator[0][0]) {
      case '+':
        return x + y + u;
  
      case '-':
        return x - y + u;
  
      case '*':
        return x * y + u;
    }
  }
  
  function validateValue(val, unit) {
    if (is.col(val)) {
      return colorToRgb(val);
    }
  
    if (/\s/g.test(val)) {
      return val;
    }
  
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  
    if (unit) {
      return unitLess + unit;
    }
  
    return unitLess;
  } // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
  // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
  
  
  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }
  
  function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, 'r');
  }
  
  function getRectLength(el) {
    return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
  }
  
  function getLineLength(el) {
    return getDistance({
      x: getAttribute(el, 'x1'),
      y: getAttribute(el, 'y1')
    }, {
      x: getAttribute(el, 'x2'),
      y: getAttribute(el, 'y2')
    });
  }
  
  function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
  
    for (var i = 0; i < points.numberOfItems; i++) {
      var currentPos = points.getItem(i);
  
      if (i > 0) {
        totalLength += getDistance(previousPos, currentPos);
      }
  
      previousPos = currentPos;
    }
  
    return totalLength;
  }
  
  function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
  } // Path animation
  
  
  function getTotalLength(el) {
    if (el.getTotalLength) {
      return el.getTotalLength();
    }
  
    switch (el.tagName.toLowerCase()) {
      case 'circle':
        return getCircleLength(el);
  
      case 'rect':
        return getRectLength(el);
  
      case 'line':
        return getLineLength(el);
  
      case 'polyline':
        return getPolylineLength(el);
  
      case 'polygon':
        return getPolygonLength(el);
    }
  }
  
  function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute('stroke-dasharray', pathLength);
    return pathLength;
  } // Motion path
  
  
  function getParentSvgEl(el) {
    var parentEl = el.parentNode;
  
    while (is.svg(parentEl)) {
      if (!is.svg(parentEl.parentNode)) {
        break;
      }
  
      parentEl = parentEl.parentNode;
    }
  
    return parentEl;
  }
  
  function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
    return {
      el: parentSvgEl,
      viewBox: viewBox,
      x: viewBox[0] / 1,
      y: viewBox[1] / 1,
      w: width / viewBox[2],
      h: height / viewBox[3]
    };
  }
  
  function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function (property) {
      return {
        property: property,
        el: pathEl,
        svg: getParentSvg(pathEl),
        totalLength: getTotalLength(pathEl) * (p / 100)
      };
    };
  }
  
  function getPathProgress(path, progress) {
    function point(offset) {
      if (offset === void 0) offset = 0;
      var l = progress + offset >= 1 ? progress + offset : 0;
      return path.el.getPointAtLength(l);
    }
  
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(+1);
  
    switch (path.property) {
      case 'x':
        return (p.x - svg.x) * svg.w;
  
      case 'y':
        return (p.y - svg.y) * svg.h;
  
      case 'angle':
        return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  } // Decompose value
  
  
  function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
    return {
      original: value,
      numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
      strings: is.str(val) || unit ? value.split(rgx) : []
    };
  } // Animatables
  
  
  function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function (item, pos, self) {
      return self.indexOf(item) === pos;
    });
  }
  
  function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function (t, i) {
      return {
        target: t,
        id: i,
        total: parsed.length,
        transforms: {
          list: getElementTransforms(t)
        }
      };
    });
  } // Properties
  
  
  function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings); // Override duration if easing is a spring
  
    if (/^spring/.test(settings.easing)) {
      settings.duration = spring(settings.easing);
    }
  
    if (is.arr(prop)) {
      var l = prop.length;
      var isFromTo = l === 2 && !is.obj(prop[0]);
  
      if (!isFromTo) {
        // Duration divided by the number of tweens
        if (!is.fnc(tweenSettings.duration)) {
          settings.duration = tweenSettings.duration / l;
        }
      } else {
        // Transform [from, to] values shorthand to a valid tween value
        prop = {
          value: prop
        };
      }
    }
  
    var propArray = is.arr(prop) ? prop : [prop];
    return propArray.map(function (v, i) {
      var obj = is.obj(v) && !is.pth(v) ? v : {
        value: v
      }; // Default delay value should only be applied to the first tween
  
      if (is.und(obj.delay)) {
        obj.delay = !i ? tweenSettings.delay : 0;
      } // Default endDelay value should only be applied to the last tween
  
  
      if (is.und(obj.endDelay)) {
        obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
      }
  
      return obj;
    }).map(function (k) {
      return mergeObjects(k, settings);
    });
  }
  
  function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
      return Object.keys(key);
    })), function (p) {
      return is.key(p);
    }).reduce(function (a, b) {
      if (a.indexOf(b) < 0) {
        a.push(b);
      }
  
      return a;
    }, []);
    var properties = {};
  
    var loop = function (i) {
      var propName = propertyNames[i];
      properties[propName] = keyframes.map(function (key) {
        var newKey = {};
  
        for (var p in key) {
          if (is.key(p)) {
            if (p == propName) {
              newKey.value = key[p];
            }
          } else {
            newKey[p] = key[p];
          }
        }
  
        return newKey;
      });
    };
  
    for (var i = 0; i < propertyNames.length; i++) loop(i);
  
    return properties;
  }
  
  function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
  
    if (keyframes) {
      params = mergeObjects(flattenKeyframes(keyframes), params);
    }
  
    for (var p in params) {
      if (is.key(p)) {
        properties.push({
          name: p,
          tweens: normalizePropertyTweens(params[p], tweenSettings)
        });
      }
    }
  
    return properties;
  } // Tweens
  
  
  function normalizeTweenValues(tween, animatable) {
    var t = {};
  
    for (var p in tween) {
      var value = getFunctionValue(tween[p], animatable);
  
      if (is.arr(value)) {
        value = value.map(function (v) {
          return getFunctionValue(v, animatable);
        });
  
        if (value.length === 1) {
          value = value[0];
        }
      }
  
      t[p] = value;
    }
  
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
  }
  
  function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function (t) {
      var tween = normalizeTweenValues(t, animatable);
      var tweenValue = tween.value;
      var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
      var toUnit = getUnit(to);
      var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
      var previousValue = previousTween ? previousTween.to.original : originalValue;
      var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
      var fromUnit = getUnit(from) || getUnit(originalValue);
      var unit = toUnit || fromUnit;
  
      if (is.und(to)) {
        to = previousValue;
      }
  
      tween.from = decomposeValue(from, unit);
      tween.to = decomposeValue(getRelativeValue(to, from), unit);
      tween.start = previousTween ? previousTween.end : 0;
      tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
      tween.easing = parseEasings(tween.easing, tween.duration);
      tween.isPath = is.pth(tweenValue);
      tween.isColor = is.col(tween.from.original);
  
      if (tween.isColor) {
        tween.round = 1;
      }
  
      previousTween = tween;
      return tween;
    });
  } // Tween progress
  
  
  var setProgressValue = {
    css: function (t, p, v) {
      return t.style[p] = v;
    },
    attribute: function (t, p, v) {
      return t.setAttribute(p, v);
    },
    object: function (t, p, v) {
      return t[p] = v;
    },
    transform: function (t, p, v, transforms, manual) {
      transforms.list.set(p, v);
  
      if (p === transforms.last || manual) {
        var str = '';
        transforms.list.forEach(function (value, prop) {
          str += prop + "(" + value + ") ";
        });
        t.style.transform = str;
      }
    }
  }; // Set Value helper
  
  function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function (animatable) {
      for (var property in properties) {
        var value = getFunctionValue(properties[property], animatable);
        var target = animatable.target;
        var valueUnit = getUnit(value);
        var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
        var unit = valueUnit || getUnit(originalValue);
        var to = getRelativeValue(validateValue(value, unit), originalValue);
        var animType = getAnimationType(target, property);
        setProgressValue[animType](target, property, to, animatable.transforms, true);
      }
    });
  } // Animations
  
  
  function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
  
    if (animType) {
      var tweens = normalizeTweens(prop, animatable);
      var lastTween = tweens[tweens.length - 1];
      return {
        type: animType,
        property: prop.name,
        animatable: animatable,
        tweens: tweens,
        duration: lastTween.end,
        delay: tweens[0].delay,
        endDelay: lastTween.endDelay
      };
    }
  }
  
  function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function (animatable) {
      return properties.map(function (prop) {
        return createAnimation(animatable, prop);
      });
    })), function (a) {
      return !is.und(a);
    });
  } // Create Instance
  
  
  function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
  
    var getTlOffset = function (anim) {
      return anim.timelineOffset ? anim.timelineOffset : 0;
    };
  
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
      return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
      return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
      return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
  }
  
  var instanceID = 0;
  
  function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
      id: id,
      children: [],
      animatables: animatables,
      animations: animations,
      duration: timings.duration,
      delay: timings.delay,
      endDelay: timings.endDelay
    });
  } // Core
  
  
  var activeInstances = [];
  var pausedInstances = [];
  var raf;
  
  var engine = function () {
    function play() {
      raf = requestAnimationFrame(step);
    }
  
    function step(t) {
      var activeInstancesLength = activeInstances.length;
  
      if (activeInstancesLength) {
        var i = 0;
  
        while (i < activeInstancesLength) {
          var activeInstance = activeInstances[i];
  
          if (!activeInstance.paused) {
            activeInstance.tick(t);
          } else {
            var instanceIndex = activeInstances.indexOf(activeInstance);
  
            if (instanceIndex > -1) {
              activeInstances.splice(instanceIndex, 1);
              activeInstancesLength = activeInstances.length;
            }
          }
  
          i++;
        }
  
        play();
      } else {
        raf = cancelAnimationFrame(raf);
      }
    }
  
    return play;
  }();
  
  function handleVisibilityChange() {
    if (document.hidden) {
      activeInstances.forEach(function (ins) {
        return ins.pause();
      });
      pausedInstances = activeInstances.slice(0);
      anime.running = activeInstances = [];
    } else {
      pausedInstances.forEach(function (ins) {
        return ins.play();
      });
    }
  }
  
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  } // Public Instance
  
  
  function anime(params) {
    if (params === void 0) params = {};
    var startTime = 0,
        lastTime = 0,
        now = 0;
    var children,
        childrenLength = 0;
    var resolve = null;
  
    function makePromise(instance) {
      var promise = window.Promise && new Promise(function (_resolve) {
        return resolve = _resolve;
      });
      instance.finished = promise;
      return promise;
    }
  
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
  
    function toggleInstanceDirection() {
      var direction = instance.direction;
  
      if (direction !== 'alternate') {
        instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
      }
  
      instance.reversed = !instance.reversed;
      children.forEach(function (child) {
        return child.reversed = instance.reversed;
      });
    }
  
    function adjustTime(time) {
      return instance.reversed ? instance.duration - time : time;
    }
  
    function resetTime() {
      startTime = 0;
      lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
  
    function seekChild(time, child) {
      if (child) {
        child.seek(time - child.timelineOffset);
      }
    }
  
    function syncInstanceChildren(time) {
      if (!instance.reversePlayback) {
        for (var i = 0; i < childrenLength; i++) {
          seekChild(time, children[i]);
        }
      } else {
        for (var i$1 = childrenLength; i$1--;) {
          seekChild(time, children[i$1]);
        }
      }
    }
  
    function setAnimationsProgress(insTime) {
      var i = 0;
      var animations = instance.animations;
      var animationsLength = animations.length;
  
      while (i < animationsLength) {
        var anim = animations[i];
        var animatable = anim.animatable;
        var tweens = anim.tweens;
        var tweenLength = tweens.length - 1;
        var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween
  
        if (tweenLength) {
          tween = filterArray(tweens, function (t) {
            return insTime < t.end;
          })[0] || tween;
        }
  
        var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
        var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
        var strings = tween.to.strings;
        var round = tween.round;
        var numbers = [];
        var toNumbersLength = tween.to.numbers.length;
        var progress = void 0;
  
        for (var n = 0; n < toNumbersLength; n++) {
          var value = void 0;
          var toNumber = tween.to.numbers[n];
          var fromNumber = tween.from.numbers[n] || 0;
  
          if (!tween.isPath) {
            value = fromNumber + eased * (toNumber - fromNumber);
          } else {
            value = getPathProgress(tween.value, eased * toNumber);
          }
  
          if (round) {
            if (!(tween.isColor && n > 2)) {
              value = Math.round(value * round) / round;
            }
          }
  
          numbers.push(value);
        } // Manual Array.reduce for better performances
  
  
        var stringsLength = strings.length;
  
        if (!stringsLength) {
          progress = numbers[0];
        } else {
          progress = strings[0];
  
          for (var s = 0; s < stringsLength; s++) {
            var a = strings[s];
            var b = strings[s + 1];
            var n$1 = numbers[s];
  
            if (!isNaN(n$1)) {
              if (!b) {
                progress += n$1 + ' ';
              } else {
                progress += n$1 + b;
              }
            }
          }
        }
  
        setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
        anim.currentValue = progress;
        i++;
      }
    }
  
    function setCallback(cb) {
      if (instance[cb] && !instance.passThrough) {
        instance[cb](instance);
      }
    }
  
    function countIteration() {
      if (instance.remaining && instance.remaining !== true) {
        instance.remaining--;
      }
    }
  
    function setInstanceProgress(engineTime) {
      var insDuration = instance.duration;
      var insDelay = instance.delay;
      var insEndDelay = insDuration - instance.endDelay;
      var insTime = adjustTime(engineTime);
      instance.progress = minMax(insTime / insDuration * 100, 0, 100);
      instance.reversePlayback = insTime < instance.currentTime;
  
      if (children) {
        syncInstanceChildren(insTime);
      }
  
      if (!instance.began && instance.currentTime > 0) {
        instance.began = true;
        setCallback('begin');
      }
  
      if (!instance.loopBegan && instance.currentTime > 0) {
        instance.loopBegan = true;
        setCallback('loopBegin');
      }
  
      if (insTime <= insDelay && instance.currentTime !== 0) {
        setAnimationsProgress(0);
      }
  
      if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
        setAnimationsProgress(insDuration);
      }
  
      if (insTime > insDelay && insTime < insEndDelay) {
        if (!instance.changeBegan) {
          instance.changeBegan = true;
          instance.changeCompleted = false;
          setCallback('changeBegin');
        }
  
        setCallback('change');
        setAnimationsProgress(insTime);
      } else {
        if (instance.changeBegan) {
          instance.changeCompleted = true;
          instance.changeBegan = false;
          setCallback('changeComplete');
        }
      }
  
      instance.currentTime = minMax(insTime, 0, insDuration);
  
      if (instance.began) {
        setCallback('update');
      }
  
      if (engineTime >= insDuration) {
        lastTime = 0;
        countIteration();
  
        if (!instance.remaining) {
          instance.paused = true;
  
          if (!instance.completed) {
            instance.completed = true;
            setCallback('loopComplete');
            setCallback('complete');
  
            if (!instance.passThrough && 'Promise' in window) {
              resolve();
              promise = makePromise(instance);
            }
          }
        } else {
          startTime = now;
          setCallback('loopComplete');
          instance.loopBegan = false;
  
          if (instance.direction === 'alternate') {
            toggleInstanceDirection();
          }
        }
      }
    }
  
    instance.reset = function () {
      var direction = instance.direction;
      instance.passThrough = false;
      instance.currentTime = 0;
      instance.progress = 0;
      instance.paused = true;
      instance.began = false;
      instance.loopBegan = false;
      instance.changeBegan = false;
      instance.completed = false;
      instance.changeCompleted = false;
      instance.reversePlayback = false;
      instance.reversed = direction === 'reverse';
      instance.remaining = instance.loop;
      children = instance.children;
      childrenLength = children.length;
  
      for (var i = childrenLength; i--;) {
        instance.children[i].reset();
      }
  
      if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
        instance.remaining++;
      }
  
      setAnimationsProgress(instance.reversed ? instance.duration : 0);
    }; // Set Value helper
  
  
    instance.set = function (targets, properties) {
      setTargetsValue(targets, properties);
      return instance;
    };
  
    instance.tick = function (t) {
      now = t;
  
      if (!startTime) {
        startTime = now;
      }
  
      setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };
  
    instance.seek = function (time) {
      setInstanceProgress(adjustTime(time));
    };
  
    instance.pause = function () {
      instance.paused = true;
      resetTime();
    };
  
    instance.play = function () {
      if (!instance.paused) {
        return;
      }
  
      if (instance.completed) {
        instance.reset();
      }
  
      instance.paused = false;
      activeInstances.push(instance);
      resetTime();
  
      if (!raf) {
        engine();
      }
    };
  
    instance.reverse = function () {
      toggleInstanceDirection();
      instance.completed = instance.reversed ? false : true;
      resetTime();
    };
  
    instance.restart = function () {
      instance.reset();
      instance.play();
    };
  
    instance.reset();
  
    if (instance.autoplay) {
      instance.play();
    }
  
    return instance;
  } // Remove targets from animation
  
  
  function removeTargetsFromAnimations(targetsArray, animations) {
    for (var a = animations.length; a--;) {
      if (arrayContains(targetsArray, animations[a].animatable.target)) {
        animations.splice(a, 1);
      }
    }
  }
  
  function removeTargets(targets) {
    var targetsArray = parseTargets(targets);
  
    for (var i = activeInstances.length; i--;) {
      var instance = activeInstances[i];
      var animations = instance.animations;
      var children = instance.children;
      removeTargetsFromAnimations(targetsArray, animations);
  
      for (var c = children.length; c--;) {
        var child = children[c];
        var childAnimations = child.animations;
        removeTargetsFromAnimations(targetsArray, childAnimations);
  
        if (!childAnimations.length && !child.children.length) {
          children.splice(c, 1);
        }
      }
  
      if (!animations.length && !children.length) {
        instance.pause();
      }
    }
  } // Stagger helpers
  
  
  function stagger(val, params) {
    if (params === void 0) params = {};
    var direction = params.direction || 'normal';
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === 'first';
    var fromCenter = fromIndex === 'center';
    var fromLast = fromIndex === 'last';
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function (el, i, t) {
      if (fromFirst) {
        fromIndex = 0;
      }
  
      if (fromCenter) {
        fromIndex = (t - 1) / 2;
      }
  
      if (fromLast) {
        fromIndex = t - 1;
      }
  
      if (!values.length) {
        for (var index = 0; index < t; index++) {
          if (!grid) {
            values.push(Math.abs(fromIndex - index));
          } else {
            var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
            var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
            var toX = index % grid[0];
            var toY = Math.floor(index / grid[0]);
            var distanceX = fromX - toX;
            var distanceY = fromY - toY;
            var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
            if (axis === 'x') {
              value = -distanceX;
            }
  
            if (axis === 'y') {
              value = -distanceY;
            }
  
            values.push(value);
          }
  
          maxValue = Math.max.apply(Math, values);
        }
  
        if (easing) {
          values = values.map(function (val) {
            return easing(val / maxValue) * maxValue;
          });
        }
  
        if (direction === 'reverse') {
          values = values.map(function (val) {
            return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
          });
        }
      }
  
      var spacing = isRange ? (val2 - val1) / maxValue : val1;
      return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
    };
  } // Timeline
  
  
  function timeline(params) {
    if (params === void 0) params = {};
    var tl = anime(params);
    tl.duration = 0;
  
    tl.add = function (instanceParams, timelineOffset) {
      var tlIndex = activeInstances.indexOf(tl);
      var children = tl.children;
  
      if (tlIndex > -1) {
        activeInstances.splice(tlIndex, 1);
      }
  
      function passThrough(ins) {
        ins.passThrough = true;
      }
  
      for (var i = 0; i < children.length; i++) {
        passThrough(children[i]);
      }
  
      var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
      insParams.targets = insParams.targets || params.targets;
      var tlDuration = tl.duration;
      insParams.autoplay = false;
      insParams.direction = tl.direction;
      insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
      passThrough(tl);
      tl.seek(insParams.timelineOffset);
      var ins = anime(insParams);
      passThrough(ins);
      children.push(ins);
      var timings = getInstanceTimings(children, params);
      tl.delay = timings.delay;
      tl.endDelay = timings.endDelay;
      tl.duration = timings.duration;
      tl.seek(0);
      tl.reset();
  
      if (tl.autoplay) {
        tl.play();
      }
  
      return tl;
    };
  
    return tl;
  }
  
  anime.version = '3.2.0';
  anime.speed = 1;
  anime.running = activeInstances;
  anime.remove = removeTargets;
  anime.get = getOriginalTargetValue;
  anime.set = setTargetsValue;
  anime.convertPx = convertPxToUnit;
  anime.path = getPath;
  anime.setDashoffset = setDashoffset;
  anime.stagger = stagger;
  anime.timeline = timeline;
  anime.easing = parseEasings;
  anime.penner = penner;
  
  anime.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  var anime$1 = registerComponent(anime, {
    tmpl: _tmpl$2
  });
  
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  
  function createCommonjsModule(fn, basedir, module) {
      return module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
      }, fn(module, module.exports), module.exports;
  }
  
  function commonjsRequire () {
      throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }
  
  var index_umd = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
     factory(exports) ;
  })(commonjsGlobal, function (exports) {
    /* eslint-disable no-undefined,no-param-reassign,no-shadow */
  
    /**
     * Throttle execution of a function. Especially useful for rate limiting
     * execution of handlers on events like resize and scroll.
     *
     * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
     * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
     *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
     *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
     *                                    the internal counter is reset).
     * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
     *                                    to `callback` when the throttled-function is executed.
     * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
     *                                    schedule `callback` to execute after `delay` ms.
     *
     * @returns {Function}  A new, throttled, function.
     */
  
    function throttle(delay, noTrailing, callback, debounceMode) {
      /*
       * After wrapper has stopped being called, this timeout ensures that
       * `callback` is executed at the proper times in `throttle` and `end`
       * debounce modes.
       */
      var timeoutID;
      var cancelled = false; // Keep track of the last time `callback` was executed.
  
      var lastExec = 0; // Function to clear existing timeout
  
      function clearExistingTimeout() {
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
      } // Function to cancel next exec
  
  
      function cancel() {
        clearExistingTimeout();
        cancelled = true;
      } // `noTrailing` defaults to falsy.
  
  
      if (typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
      }
      /*
       * The `wrapper` function encapsulates all of the throttling / debouncing
       * functionality and when executed will limit the rate at which `callback`
       * is executed.
       */
  
  
      function wrapper() {
        for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
          arguments_[_key] = arguments[_key];
        }
  
        var self = this;
        var elapsed = Date.now() - lastExec;
  
        if (cancelled) {
          return;
        } // Execute `callback` and update the `lastExec` timestamp.
  
  
        function exec() {
          lastExec = Date.now();
          callback.apply(self, arguments_);
        }
        /*
         * If `debounceMode` is true (at begin) this is used to clear the flag
         * to allow future `callback` executions.
         */
  
  
        function clear() {
          timeoutID = undefined;
        }
  
        if (debounceMode && !timeoutID) {
          /*
           * Since `wrapper` is being called for the first time and
           * `debounceMode` is true (at begin), execute `callback`.
           */
          exec();
        }
  
        clearExistingTimeout();
  
        if (debounceMode === undefined && elapsed > delay) {
          /*
           * In throttle mode, if `delay` time has been exceeded, execute
           * `callback`.
           */
          exec();
        } else if (noTrailing !== true) {
          /*
           * In trailing throttle mode, since `delay` time has not been
           * exceeded, schedule `callback` to execute `delay` ms after most
           * recent execution.
           *
           * If `debounceMode` is true (at begin), schedule `clear` to execute
           * after `delay` ms.
           *
           * If `debounceMode` is false (at end), schedule `callback` to
           * execute after `delay` ms.
           */
          timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
      }
  
      wrapper.cancel = cancel; // Return the wrapper function.
  
      return wrapper;
    }
    /* eslint-disable no-undefined */
  
    /**
     * Debounce execution of a function. Debouncing, unlike throttling,
     * guarantees that a function is only executed a single time, either at the
     * very beginning of a series of calls, or at the very end.
     *
     * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
     * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
     *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
     *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
     * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
     *                                  to `callback` when the debounced-function is executed.
     *
     * @returns {Function} A new, debounced function.
     */
  
  
    function debounce(delay, atBegin, callback) {
      return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
    }
  
    exports.debounce = debounce;
    exports.throttle = throttle;
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  });
  });
  
  const emojiUrlLookup = {
    celebrate: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+eWF5LWxnPC90aXRsZT4KICAgIDxnIGlkPSJ5YXktbGciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIj48L2c+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS44OTUzNjUsIDI5LjUwMzY1NCkgcm90YXRlKC00LjAwMDAwMCkgdHJhbnNsYXRlKC0xMS44OTUzNjUsIC0yOS41MDM2NTQpIHRyYW5zbGF0ZSgtNC4xMDQ2MzUsIDE2LjAwMzY1NCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNNS4yNjg4NTMwMiwyMC45OTU0NjAxIEwxOC43NjA0OTgxLDUuMDM4MzU5NTQgQzE5LjQ3MzY2MjEsNC4xOTQ4NzIyNyAyMC43MzU1Nzc0LDQuMDg5MjI0NDQgMjEuNTc5MDY0Nyw0LjgwMjM4ODUyIEMyMS44MzYxOTM4LDUuMDE5Nzg5ODEgMjIuMDM0MjcyMyw1LjI5ODU5MTExIDIyLjE1NDkzNyw1LjYxMjk0NTU2IEwyOC4zOTI4MDE3LDIxLjg2Mzc2NjUgQzI4Ljc4ODYzMDcsMjIuODk0OTc2MSAyOC4yNzM1NTI5LDI0LjA1MTgxOTQgMjcuMjQyMzQzNCwyNC40NDc2NDg0IEMyNy4wMDQyNDY1LDI0LjUzOTA0MTcgMjYuNzUwODY2OSwyNC41ODQwNTMxIDI2LjQ5NTg2MDIsMjQuNTgwMjU2NyBMNi43NjYzNTA0LDI0LjI4NjUzNjMgQzUuNjYxOTAzMjksMjQuMjcwMDk0IDQuNzc5OTAxMTIsMjMuMzYxNDMzNiA0Ljc5NjM0MzQzLDIyLjI1Njk4NjUgQzQuODAzMjI4NzksMjEuNzk0NDg5OSA0Ljk3MDIwOTUxLDIxLjM0ODY3NzYgNS4yNjg4NTMwMiwyMC45OTU0NjAxIFoiIGlkPSJQYXRoLTMiIGZpbGw9IiNGRkQxMDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1Ljk5NTk0NSwgMTMuNTQwNDMwKSByb3RhdGUoLTEwLjAwMDAwMCkgdHJhbnNsYXRlKC0xNS45OTU5NDUsIC0xMy41NDA0MzApICI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjcuMDUwNDU5OSwyMi4zNDQ5NTI2IEMyOC4xNTk4NjQ3LDIxLjc0MTY4OTIgMjcuNTIyOTE3OCwxNi44NzkzODY3IDI1Ljg0MDUyMzYsMTEuNzU1Njk3NCBDMjQuMTU4MTI5NSw2LjYzMjAwODExIDIxLjg0MDk1NjIsMi44NjcwNDkzMSAyMC43MzE1NTE0LDMuNDcwMzEyNzUgQzE5LjYyMjE0NjYsNC4wNzM1NzYyIDIwLjE0MDYxOTMsOC44MTY2MTgyOSAyMS44MjMwMTM0LDEzLjk0MDMwNzYgQzIzLjUwNTQwNzYsMTkuMDYzOTk2OSAyNS45NDEwNTUsMjIuOTQ4MjE2MSAyNy4wNTA0NTk5LDIyLjM0NDk1MjYgWiIgaWQ9Ik92YWwiIHN0cm9rZT0iI0ZGRDEwNSIgZmlsbD0iI0UyQkIwRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuODc0MzE3LCAxMi45MDY4MDEpIHJvdGF0ZSgtMTMuMDAwMDAwKSB0cmFuc2xhdGUoLTIzLjg3NDMxNywgLTEyLjkwNjgwMSkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0yMC4zMjk1MDUzLDIwLjAzNjAxODIgQzIzLjkwNDAzNDksMTUuNTM0NTQwOCAyNS4wNzI3MzkyLDExLjIwNDcyMDYgMjMuODM1NjE4Myw3LjA0NjU1NzY2IiBpZD0iUGF0aC00IiBzdHJva2U9IiMwMTMzRkQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi4zMjExMTgsIDEzLjU0MTI4OCkgcm90YXRlKC02LjAwMDAwMCkgdHJhbnNsYXRlKC0yMi4zMjExMTgsIC0xMy41NDEyODgpICI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNy40NzE2Nzk3LDI4LjQ2MzM3ODkgQzMyLjM1Njc3MDgsMjguMjI4NzExOCAzNS44NjYyMTA5LDI5LjgwMzc2MSAzOCwzMy4xODg1MjY2IiBpZD0iUGF0aC00LUNvcHkiIHN0cm9rZT0iI0QwMDIxQiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBzdHJva2U9IiMxQkMzN0IiIGZpbGw9IiMxQkMzN0IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjUwMDAwMCwgMTAuNTAwMDAwKSByb3RhdGUoNC4wMDAwMDApIHRyYW5zbGF0ZSgtMTUuNTAwMDAwLCAtMTAuNTAwMDAwKSAiIGN4PSIxNS41IiBjeT0iMTAuNSIgcj0iMS41Ij48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNMzIuMzk1MzY5Niw3Ljk5NjI4NDMzIEMzMy4yMjE3NDQ2LDguMDU0MDcwMSAzMy45Mzg0OTg2LDcuNDMxMDA1NDEgMzMuOTk2Mjg0Myw2LjYwNDYzMDM5IEMzNC4wNTQwNzAxLDUuNzc4MjU1MzggMzMuNDMxMDA1NCw1LjA2MTUwMTQ0IDMyLjYwNDYzMDQsNS4wMDM3MTU2NyBDMzEuNzc4MjU1NCw0Ljk0NTkyOTkgMzEuMDYxNTAxNCw1LjU2ODk5NDU5IDMxLjAwMzcxNTcsNi4zOTUzNjk2MSBDMzAuOTQ1OTI5OSw3LjIyMTc0NDYyIDMxLjU2ODk5NDYsNy45Mzg0OTg1NiAzMi4zOTUzNjk2LDcuOTk2Mjg0MzMgWiIgaWQ9Ik92YWwtQ29weSIgc3Ryb2tlPSIjRDAwMjFCIiBmaWxsPSIjRDAwMjFCIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTMxLjM5NTM2OTYsMzcuOTk2Mjg0MyBDMzIuMjIxNzQ0NiwzOC4wNTQwNzAxIDMyLjkzODQ5ODYsMzcuNDMxMDA1NCAzMi45OTYyODQzLDM2LjYwNDYzMDQgQzMzLjA1NDA3MDEsMzUuNzc4MjU1NCAzMi40MzEwMDU0LDM1LjA2MTUwMTQgMzEuNjA0NjMwNCwzNS4wMDM3MTU3IEMzMC43NzgyNTU0LDM0Ljk0NTkyOTkgMzAuMDYxNTAxNCwzNS41Njg5OTQ2IDMwLjAwMzcxNTcsMzYuMzk1MzY5NiBDMjkuOTQ1OTI5OSwzNy4yMjE3NDQ2IDMwLjU2ODk5NDYsMzcuOTM4NDk4NiAzMS4zOTUzNjk2LDM3Ljk5NjI4NDMgWiIgaWQ9Ik92YWwtQ29weS0yIiBzdHJva2U9IiMwMTMzRkQiIGZpbGw9IiMwMTMzRkQiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMzUsMjMuMzIwMTc3OCBDMzcuNTg4NTgyMiwyMi43Mjk0OTc2IDM5LjU4ODU4MjIsMjIuOTU2MTA0OSA0MSwyNCIgaWQ9IlBhdGgtOSIgc3Ryb2tlPSIjRkZEMTA1IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzguMDAwMDAwLCAyMy41MDAwMDApIHJvdGF0ZSgyLjAwMDAwMCkgdHJhbnNsYXRlKC0zOC4wMDAwMDAsIC0yMy41MDAwMDApICI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNi4wMzk1NTA4LDIyLjgxODM1OTQgQzMyLjE2NTQxMTgsMTQuNTgxODAxMyAzNy43Nzg2OTMsMTAuOTEzMTgxNSA0Mi44NzkzOTQ1LDExLjgxMjUiIGlkPSJQYXRoLTEwIiBzdHJva2U9IiMxQkMzN0IiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==',
    heart: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+bG92ZS1sZzwvdGl0bGU+CiAgICA8ZyBpZD0ibG92ZS1sZyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkhlYXJ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNi4wMDAwMDApIiBmaWxsPSIjRDAwMjFCIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuMDMzMzYxNSw4LjAxMzUxMzUxIEMyMi4yMjc0MTY5LDIyLjkyMjE4MDUgMzEuMTAxNjY3NiwyOC40MTY1MjIzIDM5LjAzOTA2ODIsMjYuNjc2MTk5MSBDNDcuMjY1ODg1MSwyNC44NzI0MTk1IDQ5LjkyMzUzNzEsMTUuMTgxMzIxMSAzNi45MDAwODEsOC4wMTM1MTM1MSBMMTIuMDMzMzYxNSw4LjAxMzUxMzUxIFoiIGlkPSJoZWFydC1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC45ODY0ODYsIDE3LjUwMDAwMCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjguOTg2NDg2LCAtMTcuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTS02LjkzOTYxMTQ5LDguMDEzNTEzNTEgQzMuMjU0NDQzOTEsMjIuOTIyMTgwNSAxMi4xMjg2OTQ2LDI4LjQxNjUyMjMgMjAuMDY2MDk1MywyNi42NzYxOTkxIEMyOC4yOTI5MTIxLDI0Ljg3MjQxOTUgMzAuOTUwNTY0MSwxNS4xODEzMjExIDE3LjkyNzEwOCw4LjAxMzUxMzUxIEwtNi45Mzk2MTE0OSw4LjAxMzUxMzUxIFoiIGlkPSJoZWFydC1jb3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAxMzUxNCwgMTcuNTAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuMDEzNTE0LCAtMTcuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwiIGZpbGw9IiNEMDAyMUIiIGN4PSIyMy41IiBjeT0iMjgiIHJ4PSI0LjUiIHJ5PSIxMiI+PC9lbGxpcHNlPgogICAgPC9nPgo8L3N2Zz4=',
    plusone: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGx1cy1sZzwvdGl0bGU+CiAgICA8ZyBpZD0icGx1cy1sZyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgOC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjM1MDgyNywyNi4wNCBMMTEuMjM1MDgyNywyMC4yMjU2NDU5IEwxNi40Nzc1LDIwLjIyNTY0NTkgTDE2LjQ3NzUsMTQuNDk0MzU0MSBMMTEuMjM1MDgyNywxNC40OTQzNTQxIEwxMS4yMzUwODI3LDguNjggTDUuODc2MTY3MjgsOC42OCBMNS44NzYxNjcyOCwxNC40OTQzNTQxIEwwLjYzMzc1LDE0LjQ5NDM1NDEgTDAuNjMzNzUsMjAuMjI1NjQ1OSBMNS44NzYxNjcyOCwyMC4yMjU2NDU5IEw1Ljg3NjE2NzI4LDI2LjA0IEwxMS4yMzUwODI3LDI2LjA0IFogTTM3LjE5NjI1LDMxIEwzNy4xOTYyNSwyNS4xOTY1MTE2IEwzMi4yODA2MjUsMjUuMTk2NTExNiBMMzIuMjgwNjI1LDIuNDggTDI2LjQzMDYyNSwyLjQ4IEMyNi40MzA2MjUsNS4zODE3NDQxOSAyNC4yNzc1LDYuNzkxMTYyNzkgMjEuMzUyNSw2Ljc5MTE2Mjc5IEwyMS4zNTI1LDExLjU1ODMxNCBMMjYuNDMwNjI1LDExLjU1ODMxNCBMMjYuNDMwNjI1LDI1LjE5NjUxMTYgTDIxLjM1MjUsMjUuMTk2NTExNiBMMjEuMzUyNSwzMSBMMzcuMTk2MjUsMzEgWiIgaWQ9IisxIiBmaWxsPSIjRkZEMTA1Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy42NzI1ODI3LDIzLjU2IEwxMy42NzI1ODI3LDE3Ljc0NTY0NTkgTDE4LjkxNSwxNy43NDU2NDU5IEwxOC45MTUsMTIuMDE0MzU0MSBMMTMuNjcyNTgyNywxMi4wMTQzNTQxIEwxMy42NzI1ODI3LDYuMiBMOC4zMTM2NjcyOCw2LjIgTDguMzEzNjY3MjgsMTIuMDE0MzU0MSBMMy4wNzEyNSwxMi4wMTQzNTQxIEwzLjA3MTI1LDE3Ljc0NTY0NTkgTDguMzEzNjY3MjgsMTcuNzQ1NjQ1OSBMOC4zMTM2NjcyOCwyMy41NiBMMTMuNjcyNTgyNywyMy41NiBaIE0zOS42MzM3NSwyOC41MiBMMzkuNjMzNzUsMjIuNzE2NTExNiBMMzQuNzE4MTI1LDIyLjcxNjUxMTYgTDM0LjcxODEyNSwwIEwyOC44NjgxMjUsMCBDMjguODY4MTI1LDIuOTAxNzQ0MTkgMjYuNzE1LDQuMzExMTYyNzkgMjMuNzksNC4zMTExNjI3OSBMMjMuNzksOS4wNzgzMTM5NSBMMjguODY4MTI1LDkuMDc4MzEzOTUgTDI4Ljg2ODEyNSwyMi43MTY1MTE2IEwyMy43OSwyMi43MTY1MTE2IEwyMy43OSwyOC41MiBMMzkuNjMzNzUsMjguNTIgWiIgaWQ9IisxIiBmaWxsPSIjMUJDMzdCIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
    question: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cXVlc3Rpb24tbGc8L3RpdGxlPgogICAgPGcgaWQ9InF1ZXN0aW9uLWxnIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgNi4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTU1NTM1NywyNi4yNSBMMTIuNTU1NTM1NywyNS4wMzUgQzEyLjU1NTUzNTcsMjMuMTc3NCAxMi42MDI4NSwyMy4wMjAxNTIgMTQuNzg2ODc3NCwyMS4wOTk1MTQ2IEwxNS4wNzExNjA3LDIwLjg1IEMxNy45NDYxNjA3LDE4LjMzIDE5LjQzNSwxNi45OCAxOS40MzUsMTIuNzk1IEMxOS40MzUsOC40NzUgMTcuMDczMzkyOSwzLjc1IDkuMzcyNSwzLjc1IEMzLjAwNjQyODU3LDMuNzUgLTAuNjksNy41MyAtMC42OSwxMi44ODUgTC0wLjY5LDE0LjY4NSBMNi40OTc1LDE0LjY4NSBMNi40OTc1LDEyLjg4NSBDNi40OTc1LDExLjU4IDcuMjY3NTg5MjksOS45MTUgOS4zNzI1LDkuOTE1IEMxMS41Mjg3NSw5LjkxNSAxMi4yNDc1LDExLjEzIDEyLjI0NzUsMTIuNzk1IEMxMi4yNDc1LDE0LjY0IDExLjExODAzNTcsMTUuNTg1IDkuNDc1MTc4NTcsMTYuOTM1IEM1LjY3NjA3MTQzLDIwLjA4NSA1LjM2ODAzNTcxLDIwLjM1NSA1LjM2ODAzNTcxLDIzLjE5IEw1LjM2ODAzNTcxLDI2LjI1IEwxMi41NTU1MzU3LDI2LjI1IFogTTEzLjY4NSwzNSBMMTMuNjg1LDI3LjUgTDUuMDYsMjcuNSBMNS4wNiwzNSBMMTMuNjg1LDM1IFoiIGlkPSI/IiBmaWxsPSIjRkZEMTA1Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS40MzA1MzU3LDIzLjc1IEwxNS40MzA1MzU3LDIyLjQ2NzUgQzE1LjQzMDUzNTcsMjAuNTA2NyAxNS40Nzc4NSwyMC4zNDA3MTYgMTcuNjYxODc3NCwxOC4zMTMzNzY1IEwxNy45NDYxNjA3LDE4LjA1IEMyMC44MjExNjA3LDE1LjM5IDIyLjMxLDEzLjk2NSAyMi4zMSw5LjU0NzUgQzIyLjMxLDQuOTg3NSAxOS45NDgzOTI5LDAgMTIuMjQ3NSwwIEM1Ljg4MTQyODU3LDAgMi4xODUsMy45OSAyLjE4NSw5LjY0MjUgTDIuMTg1LDExLjU0MjUgTDkuMzcyNSwxMS41NDI1IEw5LjM3MjUsOS42NDI1IEM5LjM3MjUsOC4yNjUgMTAuMTQyNTg5Myw2LjUwNzUgMTIuMjQ3NSw2LjUwNzUgQzE0LjQwMzc1LDYuNTA3NSAxNS4xMjI1LDcuNzkgMTUuMTIyNSw5LjU0NzUgQzE1LjEyMjUsMTEuNDk1IDEzLjk5MzAzNTcsMTIuNDkyNSAxMi4zNTAxNzg2LDEzLjkxNzUgQzguNTUxMDcxNDMsMTcuMjQyNSA4LjI0MzAzNTcxLDE3LjUyNzUgOC4yNDMwMzU3MSwyMC41MiBMOC4yNDMwMzU3MSwyMy43NSBMMTUuNDMwNTM1NywyMy43NSBaIE0xNi41NiwzMi41IEwxNi41NiwyNSBMNy45MzUsMjUgTDcuOTM1LDMyLjUgTDE2LjU2LDMyLjUgWiIgaWQ9Ij8iIGZpbGw9IiMwMTMzRkQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
    clap: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Y2xhcC1sZzwvdGl0bGU+CiAgICA8ZyBpZD0iY2xhcC1sZyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTMzLjc1MzEzNTEsMjEuMDY1MTk3MSBMMzMuNjUxMDI2MSwyMS4wMjg2Njg0IEMzMi42MDU5NDY4LDIwLjY1NDg5MTggMzEuNDU1NjQzMSwyMS4xOTkwODM4IDMxLjA4MTg2NjQsMjIuMjQ0MjQwOSBMMjkuNDE2MDMyOSwyNy42MzQwNTUzIEwyOS41NzE4MDU2LDI0LjQ0NTIzMTcgTDI5LjU3MTgwNTYsMjQuMDU1Nzk5OSBMMjkuNTcxODA1NiwxMC4zMTk4Mzg0IEMyOS41NzE4MDU2LDkuMzAyODc2MTYgMjguNzQ3NDU2Myw4LjQ3ODUyNjg3IDI3LjczMDU3MTksOC40Nzg1MjY4NyBMMjcuMjg1MDYxOSw4LjQ3ODUyNjg3IEMyNi4yNjgxNzc1LDguNDc4NTI2ODcgMjUuNDQzODI4Miw5LjMwMjg3NjE2IDI1LjQ0MzgyODIsMTAuMzE5ODM4NCBMMjUuNDQzODI4MiwyMy43ODMxOTc2IEMyNS40NDM4MjgyLDIzLjkzMzc1MiAyNS4zMjE3ODAzLDI0LjA1NTc5OTkgMjUuMTcxMjI2LDI0LjA1NTc5OTkgQzI1LjAyMDY3MTYsMjQuMDU1Nzk5OSAyNC44OTg2MjM3LDIzLjkzMzc1MiAyNC44OTg2MjM3LDIzLjc4MzE5NzYgTDI0Ljg5ODYyMzcsOC40MDIwNDI0NiBDMjQuODk4NjIzNyw3LjM2ODg3OTgzIDI0LjA2MTExMTYsNi41MzEzNjc3NSAyMy4wMjc5NDksNi41MzEzNjc3NSBMMjIuNjQxMzIxLDYuNTMxMzY3NzUgQzIxLjYwODE1ODQsNi41MzEzNjc3NSAyMC43NzA2NDYzLDcuMzY4ODc5ODMgMjAuNzcwNjQ2Myw4LjQwMjA0MjQ2IEwyMC43NzA2NDYzLDIzLjc4MzE5NzYgQzIwLjc3MDY0NjMsMjMuOTMzNzUyIDIwLjY0ODU5ODQsMjQuMDU1Nzk5OSAyMC40OTgwNDQsMjQuMDU1Nzk5OSBDMjAuMzQ3NDg5NywyNC4wNTU3OTk5IDIwLjIyNTQ0MTgsMjMuOTMzNzUyIDIwLjIyNTQ0MTgsMjMuNzgzMTk3NiBMMjAuMjI1NDQxOCwxMS4yMDMxNDc3IEMyMC4yMjU0NDE4LDEwLjE2OTk4NTEgMTkuMzg3OTI5Nyw5LjMzMjQ3Mjk4IDE4LjM1NDc2NzEsOS4zMzI0NzI5OCBMMTcuOTY4MTM5MSw5LjMzMjQ3Mjk4IEMxNi45MzQ5NzY1LDkuMzMyNDcyOTggMTYuMDk3NDY0NCwxMC4xNjk5ODUxIDE2LjA5NzQ2NDQsMTEuMjAzMTQ3NyBMMTYuMDk3NDY0NCwyMy43ODMxOTc2IEMxNi4wOTc0NjQ0LDIzLjkzMzc1MiAxNS45NzU0MTY1LDI0LjA1NTc5OTkgMTUuODI0ODYyMSwyNC4wNTU3OTk5IEMxNS42NzQzMDc4LDI0LjA1NTc5OTkgMTUuNTUyMjU5OSwyMy45MzM3NTIgMTUuNTUyMjU5OSwyMy43ODMxOTc2IEwxNS41NTIyNTk5LDE1LjA4ODc0MjcgQzE1LjU1MjI1OTksMTQuMTA1MDM3OSAxNC43NTQ3ODE0LDEzLjMwNzQ4MTUgMTMuNzcwOTk4NywxMy4zMDc0ODE1IEwxMy4yMDU1NDM3LDEzLjMwNzQ4MTUgQzEyLjIyMTc2MSwxMy4zMDc0ODE1IDExLjQyNDI4MjUsMTQuMTA1MDM3OSAxMS40MjQyODI1LDE1LjA4ODc0MjcgTDExLjQyNDI4MjUsMjQuMDU1Nzk5OSBMMTEuNDI0MjgyNSwyNC40NDUyMzE3IEwxMS40MjQyODI1LDMzLjYzMDY4MjMgQzExLjQyNDI4MjUsMzcuODA2MDE0NiAxNC44MDkwNjgyLDQxLjE5MDgwMDIgMTguOTg0NDAwNCw0MS4xOTA4MDAyIEwyMi4wMTE2ODc3LDQxLjE5MDgwMDIgQzIzLjEwNTk5MTEsNDEuMTkwODAwMiAyNS42MzQxMDQ2LDQxLjAyNTA1OCAyNi41NzMxODA1LDQwLjYwNjY1MjUgQzI3LjIwMTU2NzcsNDAuNDIyOTk2NCAyNy44MTA5NTA2LDQwLjA1MzgxNTEgMjguMzYxMTM5OSwzOS42MTMyMTE5IEMyOS42OTgxMzczLDM4LjU0MjE5NjUgMzAuNjU2NDUxMSwzNy4wNzAzIDMxLjE0NTczMzIsMzUuNDI4NTMzMyBMMzUuMTI0NDAyNCwyMy42MzQ0MzQ3IEMzNS40OTgyNTcsMjIuNTg5MzU1NCAzNC43OTgyOTIyLDIxLjQzOTA1MTcgMzMuNzUzMTM1MSwyMS4wNjUxOTcxIiBpZD0iRmlsbC0xIiBmaWxsPSIjRTJCQjBFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy4zMjUyNjcsIDIzLjg2MTA4NCkgcm90YXRlKC01Ni4wMDAwMDApIHRyYW5zbGF0ZSgtMjMuMzI1MjY3LCAtMjMuODYxMDg0KSAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMzYuODE5Nzg1NSwyMC4zNDMwMjkyIEwzNi43MTc2NzY1LDIwLjMwNjUwMDUgQzM1LjY3MjU5NzIsMTkuOTMyNzIzOCAzNC41MjIyOTM1LDIwLjQ3NjkxNTggMzQuMTQ4NTE2OCwyMS41MjIwNzMgTDMyLjQ4MjY4MzIsMjYuOTExODg3MyBMMzIuNjM4NDU2LDIzLjcyMzA2MzggTDMyLjYzODQ1NiwyMy4zMzM2MzE5IEwzMi42Mzg0NTYsOS41OTc2NzA0NiBDMzIuNjM4NDU2LDguNTgwNzA4MTkgMzEuODE0MTA2Nyw3Ljc1NjM1ODkxIDMwLjc5NzIyMjMsNy43NTYzNTg5MSBMMzAuMzUxNzEyMyw3Ljc1NjM1ODkxIEMyOS4zMzQ4Mjc5LDcuNzU2MzU4OTEgMjguNTEwNDc4Niw4LjU4MDcwODE5IDI4LjUxMDQ3ODYsOS41OTc2NzA0NiBMMjguNTEwNDc4NiwyMy4wNjEwMjk3IEMyOC41MTA0Nzg2LDIzLjIxMTU4NCAyOC4zODg0MzA3LDIzLjMzMzYzMTkgMjguMjM3ODc2MywyMy4zMzM2MzE5IEMyOC4wODczMjIsMjMuMzMzNjMxOSAyNy45NjUyNzQxLDIzLjIxMTU4NCAyNy45NjUyNzQxLDIzLjA2MTAyOTcgTDI3Ljk2NTI3NDEsNy42Nzk4NzQ1IEMyNy45NjUyNzQxLDYuNjQ2NzExODYgMjcuMTI3NzYyLDUuODA5MTk5NzggMjYuMDk0NTk5Myw1LjgwOTE5OTc4IEwyNS43MDc5NzE0LDUuODA5MTk5NzggQzI0LjY3NDgwODgsNS44MDkxOTk3OCAyMy44MzcyOTY3LDYuNjQ2NzExODYgMjMuODM3Mjk2Nyw3LjY3OTg3NDUgTDIzLjgzNzI5NjcsMjMuMDYxMDI5NyBDMjMuODM3Mjk2NywyMy4yMTE1ODQgMjMuNzE1MjQ4OCwyMy4zMzM2MzE5IDIzLjU2NDY5NDQsMjMuMzMzNjMxOSBDMjMuNDE0MTQwMSwyMy4zMzM2MzE5IDIzLjI5MjA5MjIsMjMuMjExNTg0IDIzLjI5MjA5MjIsMjMuMDYxMDI5NyBMMjMuMjkyMDkyMiwxMC40ODA5Nzk3IEMyMy4yOTIwOTIyLDkuNDQ3ODE3MSAyMi40NTQ1ODAxLDguNjEwMzA1MDEgMjEuNDIxNDE3NCw4LjYxMDMwNTAxIEwyMS4wMzQ3ODk1LDguNjEwMzA1MDEgQzIwLjAwMTYyNjksOC42MTAzMDUwMSAxOS4xNjQxMTQ4LDkuNDQ3ODE3MSAxOS4xNjQxMTQ4LDEwLjQ4MDk3OTcgTDE5LjE2NDExNDgsMjMuMDYxMDI5NyBDMTkuMTY0MTE0OCwyMy4yMTE1ODQgMTkuMDQyMDY2OSwyMy4zMzM2MzE5IDE4Ljg5MTUxMjUsMjMuMzMzNjMxOSBDMTguNzQwOTU4MiwyMy4zMzM2MzE5IDE4LjYxODkxMDMsMjMuMjExNTg0IDE4LjYxODkxMDMsMjMuMDYxMDI5NyBMMTguNjE4OTEwMywxNC4zNjY1NzQ3IEMxOC42MTg5MTAzLDEzLjM4Mjg2OTkgMTcuODIxNDMxOCwxMi41ODUzMTM1IDE2LjgzNzY0OTEsMTIuNTg1MzEzNSBMMTYuMjcyMTk0MSwxMi41ODUzMTM1IEMxNS4yODg0MTE0LDEyLjU4NTMxMzUgMTQuNDkwOTMyOSwxMy4zODI4Njk5IDE0LjQ5MDkzMjksMTQuMzY2NTc0NyBMMTQuNDkwOTMyOSwyMy4zMzM2MzE5IEwxNC40OTA5MzI5LDIzLjcyMzA2MzggTDE0LjQ5MDkzMjksMzIuOTA4NTE0MyBDMTQuNDkwOTMyOSwzNy4wODM4NDY2IDE3Ljg3NTcxODYsNDAuNDY4NjMyMyAyMi4wNTEwNTA4LDQwLjQ2ODYzMjMgTDI1LjA3ODMzODEsNDAuNDY4NjMyMyBDMjYuMTcyNjQxNSw0MC40Njg2MzIzIDI4LjcwMDc1NSw0MC4zMDI4OTAxIDI5LjYzOTgzMDksMzkuODg0NDg0NSBDMzAuMjY4MjE4MSwzOS43MDA4Mjg1IDMwLjg3NzYwMSwzOS4zMzE2NDcxIDMxLjQyNzc5MDMsMzguODkxMDQzOSBDMzIuNzY0Nzg3NywzNy44MjAwMjg1IDMzLjcyMzEwMTUsMzYuMzQ4MTMyIDM0LjIxMjM4MzYsMzQuNzA2MzY1MyBMMzguMTkxMDUyOCwyMi45MTIyNjY3IEMzOC41NjQ5MDc0LDIxLjg2NzE4NzQgMzcuODY0OTQyNiwyMC43MTY4ODM3IDM2LjgxOTc4NTUsMjAuMzQzMDI5MiIgaWQ9IkZpbGwtMSIgZmlsbD0iI0ZGRDEwNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYuMzkxOTE4LCAyMy4xMzg5MTYpIHJvdGF0ZSgtNTYuMDAwMDAwKSB0cmFuc2xhdGUoLTI2LjM5MTkxOCwgLTIzLjEzODkxNikgIj48L3BhdGg+CiAgICAgICAgPGxpbmUgeDE9IjI0LjIyNTA1ODYiIHkxPSI5LjUyNzA5OTYxIiB4Mj0iMjEuNzg3NTU4NiIgeTI9IjUuNjM3ODE1NjQiIGlkPSJQYXRoLTgiIHN0cm9rZT0iIzFCQzM3QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICA8bGluZSB4MT0iMzUuNTYwMjYzNyIgeTE9IjEwLjMwNjE1MjMiIHgyPSIzMy4xMjI3NjM3IiB5Mj0iNi40MTY4NjgzNyIgaWQ9IlBhdGgtOCIgc3Ryb2tlPSIjMUJDMzdCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQuMzQxNTE0LCA4LjM2MTUxMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzQuMzQxNTE0LCAtOC4zNjE1MTApICI+PC9saW5lPgogICAgICAgIDxsaW5lIHgxPSIxNy4yOTEzNTcyIiB5MT0iMzguODg0MTY5MiIgeDI9IjEzLjYwNjQ1NzMiIHkyPSI0NS4zNjQ4ODgzIiBpZD0iUGF0aC0xMSIgc3Ryb2tlPSIjMUJDMzdCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgogICAgICAgIDxsaW5lIHgxPSIyMS4yMjYxMDU0IiB5MT0iNDAuNzA1NDg2OCIgeDI9IjIxLjcxMTk2NiIgeTI9IjQ1LjI2OTY4MTgiIGlkPSJQYXRoLTgiIHN0cm9rZT0iIzFCQzM3QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICA8bGluZSB4MT0iMTMuNTcwNDE1MyIgeTE9IjM2LjEwNDc4MTciIHgyPSI5LjY3NDY1NDk2IiB5Mj0iMzguNTMxOTE3MyIgaWQ9IlBhdGgtOCIgc3Ryb2tlPSIjMUJDMzdCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgogICAgICAgIDxsaW5lIHgxPSIyOC45NTI1MTI1IiB5MT0iOS4yMzc2NjkxNSIgeDI9IjI5LjQyMzUxODQiIHkyPSIxLjc5NzQ4MzYiIGlkPSJQYXRoLTExIiBzdHJva2U9IiMxQkMzN0IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICA8L2c+Cjwvc3ZnPg==',
    smile: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+c21pbGUtbGc8L3RpdGxlPgogICAgPGcgaWQ9InNtaWxlLWxnIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZEMTA1IiBjeD0iMjMuNSIgY3k9IjIzLjUiIHI9IjIyLjUiPjwvY2lyY2xlPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDE3LjAwMDAwMCkiIHN0cm9rZT0iIzAxMzNGRCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjA4OTQ1MzEsMy4wNTg3ODkwNiBDMTkuNTc3MzQ1NywxLjM4NzAzNDI4IDIxLjIyNzU0MSwwLjU1MjcxODUyNyAyMy4wNDAwMzkxLDAuNTU1ODQxODA0IEMyNC44NDY3NjExLDAuNTU4OTc4NTE4IDI2LjQ3NTAxNjMsMS4zOTY0ODQzOCAyNy45MjQ4MDQ3LDMuMDY4MzU5MzgiIGlkPSJyaWdodC1leWUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDMuMDU4Nzg5MDYgQzEuNDg3ODkyNTksMS4zODcwMzQyOCAzLjEzODA4NzksMC41NTI3MTg1MjcgNC45NTA1ODU5NCwwLjU1NTg0MTgwNCBDNi43NTczMDc5NCwwLjU1ODk3ODUxOCA4LjM4NTU2MzE1LDEuMzk2NDg0MzggOS44MzUzNTE1NiwzLjA2ODM1OTM4IiBpZD0ibGVmdC1leWUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTQ2MzEzNiwxOSBDOS4wNTU3MDU2LDE5IDUuNDA2OTM0NCwxNi42NjY2NjY3IDMsMTIgTDMsMTIgTDI0LDEyIEwyNCwxMiBDMjIuMTg4MTUwNCwxNi42NjY2NjY3IDE4LjgzNjkyMTYsMTkgMTMuOTQ2MzEzNiwxOSBaIiBpZD0iUGF0aC0yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiMwMTMzRkQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
  };
  
  const calculateAlpha = (yCurrent, yStart, yEnd) => {
    const yMid = (yStart - yEnd) / 2;
    const alpha = 1 - Math.abs(yMid - (yCurrent - 20)) / yMid;
    return alpha < 0 ? 0 : alpha;
  };
  
  class Animation {
    constructor(elem) {
      this.canvasEl = void 0;
      this.ctx = void 0;
      this.render = void 0;
      this.images = {};
      this.animate = void 0;
      this.canvasEl = elem;
      this.setCanvasSize();
      this.ctx = this.canvasEl.getContext('2d');
      this.render = anime$1({
        duration: Infinity,
        update: () => {
          this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        }
      });
    }
  
    loadImage(name) {
      if (this.images[name]) {
        return this.images[name];
      }
  
      const image = new Image();
      image.src = emojiUrlLookup[name];
      this.images[name] = image;
      return image;
    }
  
    setCanvasSize() {
      this.canvasRect = this.canvasEl.getBoundingClientRect();
      this.canvasEl.width = this.canvasRect.width;
      this.canvasEl.height = this.canvasRect.height;
      this.canvasEl.getContext('2d').scale(1, 1);
    }
  
    setParticuleDirection(p) {
      const angle = 1.55;
      const radius = -this.canvasRect.height;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
      };
    }
  
    createParticule(img) {
      const p = {};
      const x = anime$1.random(30, 60);
      const yBase = this.canvasRect.height - 78;
      const yWiggle = 30;
      const y = anime$1.random(yBase - yWiggle / 2, yBase + yWiggle / 2);
      p.startPos = {
        x,
        y
      };
      p.x = x;
      p.y = y;
      p.radius = anime$1.random(24, 48);
      p.endPos = this.setParticuleDirection(p);
  
      p.draw = () => {
        this.ctx.globalAlpha = calculateAlpha(+p.y, p.startPos.y, p.endPos.y);
        this.ctx.drawImage(img, p.x, p.y, p.radius, p.radius);
      };
  
      return p;
    }
  
    renderParticule(anim) {
      anim.animatables.forEach(i => i.target.draw());
    }
  
    animateParticules(img) {
      const particules = [this.createParticule(img)];
      anime$1.timeline().add({
        targets: particules,
        x: p => p.endPos.x,
        y: p => p.endPos.y,
        radius: anime$1.random(10, 80),
        duration: anime$1.random(12000, 15000),
        easing: 'easeOutExpo',
        update: this.renderParticule
      });
    }
  
    fireAnimation(name) {
      const img = this.loadImage(name);
  
      if (this.animate) {
        this.animate(img);
      } else {
        this.animate = index_umd.debounce(10, image => {
          this.render.play();
          this.animateParticules(image);
        });
        this.animate(img);
      }
    }
  
  }
  
  registerDecorators(Animation, {
    fields: ["canvasEl", "ctx", "render", "images", "animate"]
  });
  
  var Animation$1 = registerComponent(Animation, {
    tmpl: _tmpl$2
  });
  
  const {
    apiDomain: apiDomain$1,
    ssePath,
    emotePath: emotePath$1
  } = config;
  
  class Widget extends BaseLightningElement {
    constructor(...args) {
      super(...args);
      this.eventSource = void 0;
      this.eventList = void 0;
      this.emoteCallback = void 0;
      this.intervalId = void 0;
      this.talk = void 0;
      this.showWidget = true;
      this.showOptions = false;
      this.showAnimations = true;
      this.selectedOption = true;
      this.animation = void 0;
      this.COUNT_REFRESH_INTERVAL = 5000;
      this.buttonsData = [{
        name: 'celebrate',
        emoji: '🎉',
        count: '0'
      }, {
        name: 'heart',
        emoji: '♥️',
        count: '0'
      }, {
        name: 'smile',
        emoji: '😊',
        count: '0'
      }, {
        name: 'clap',
        emoji: '👏',
        count: '0'
      }, {
        name: 'plusone',
        emoji: '👍',
        count: '0'
      }, {
        name: 'question',
        emoji: '❓',
        count: '0'
      }];
    }
  
    // Start animation component
    renderedCallback() {
      if (this.animation) return;
      const canvasEl = this.template.querySelector('.animation-canvas');
      this.animation = new Animation$1(canvasEl);
    }
  
    get talkId() {
      return this.talk;
    } // Handle when the value of the "talk-id" attribute is set (or updated)
  
  
    set talkId(value) {
      this.talk = value;
  
      if (this.eventSource) {
        this.cleanUp();
      } // Initialize event source
  
  
      this.eventSource = new EventSource(`${apiDomain$1}${ssePath}/${value}`); // Increment displayed count when SSE received
  
      this.eventSource.addEventListener('emote', this.emoteReceived.bind(this)); // Update displayed count periodically from server
  
      this.updateAllCounts();
      this.intervalId = setInterval(this.updateAllCounts.bind(this), this.COUNT_REFRESH_INTERVAL);
    } // Avoid memory leaks
  
  
    disconnectedCallback() {
      this.cleanUp();
    } // Tear down interval and event source to avoid memory leaks
  
  
    cleanUp() {
      clearInterval(this.intervalId);
      this.eventSource.removeEventListener('emote', this.emoteReceived.bind(this));
      this.eventSource.close();
      this.animation = false;
    }
  
    emoteReceived(event) {
      // If animations are enabled, trigger an animation
      if (this.showAnimations) {
        this.animation.fireAnimation(event.data);
      } // If a listener is added then trigger it
  
  
      if (typeof this.emoteCallback === 'function') {
        this.emoteCallback(event);
      } // For each button, increment its count if its name matches the string in the event
  
  
      this.buttonsData.forEach(button => {
        if (button.name === event.data) {
          button.count = parseInt(button.count, 10) + 1;
        }
      });
    } // Get all counts from the server for current talk
  
  
    async getAllCounts() {
      return fetch(`${apiDomain$1}${emotePath$1}/${this.talk}`).then(response => response.json()).catch(error => console.error('Error:', error));
    } // Update displayed counts of all emojis from server
  
  
    async updateAllCounts() {
      const counts = await this.getAllCounts(); // Update count of each emoji for which we received data
      // and zero out any others for which we didn't receive data
  
      const keys = Object.keys(counts);
      this.buttonsData.forEach(button => {
        if (keys.includes(button.name)) {
          button.count = counts[button.name];
        } else {
          button.count = 0;
        }
      });
    }
  
    onEmote(callback) {
      this.emoteCallback = callback;
    } // Control bubble visibility
  
  
    get showBubble() {
      return this.showWidget || this.showOptions;
    } // Open options dialog
  
  
    openOptions() {
      this.showOptions = true;
      this.showWidget = false;
    } // Close options dialog
  
  
    closeOptions() {
      this.showOptions = false;
      this.showWidget = true;
    } // Save the selected option to enable or disable animations
  
  
    saveOptions() {
      this.showAnimations = this.selectedOption;
      this.closeOptions();
    } // Select a configuration option to enable or disable animations
  
  
    selectOption(event) {
      this.selectedOption = event.target.value === 'true';
    } // Toggle widget visibility
  
  
    toggleWidget() {
      if (this.showOptions) {
        this.showWidget = false;
        this.showOptions = false;
        return;
      }
  
      this.showWidget = !this.showWidget;
    }
  
  }
  
  registerDecorators(Widget, {
    publicProps: {
      talkId: {
        config: 3
      }
    },
    publicMethods: ["onEmote"],
    track: {
      buttonsData: 1
    },
    fields: ["eventSource", "eventList", "emoteCallback", "intervalId", "talk", "showWidget", "showOptions", "showAnimations", "selectedOption", "animation", "COUNT_REFRESH_INTERVAL"]
  });
  
  var Widget$1 = registerComponent(Widget, {
    tmpl: _tmpl$1
  });
  
  customElements.define('emote-widget', Widget$1.CustomElementConstructor);
  //# sourceMappingURL=main.js.map