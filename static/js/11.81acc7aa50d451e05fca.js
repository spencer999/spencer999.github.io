webpackJsonp([11],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.vitualLoading),
      expression: "vitualLoading"
    }],
    staticClass: "p-20",
    attrs: {
      "element-loading-text": "正在加载"
    }
  }, [_c('div', {
    staticClass: "filter-container",
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c('el-input', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请输入商品名称、编号"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.virtualQuery($event)
      }
    },
    model: {
      value: (_vm.goodspage.goodsName),
      callback: function($$v) {
        _vm.goodspage.goodsName = $$v
      },
      expression: "goodspage.goodsName"
    }
  }), _vm._v(" "), _c('span', [_vm._v("商品类型")]), _vm._v(" "), _c('el-select', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "查询所有"
    },
    model: {
      value: (_vm.goodspage.status),
      callback: function($$v) {
        _vm.goodspage.status = $$v
      },
      expression: "goodspage.status"
    }
  }, _vm._l((_vm.calendarTypeOptions), function(coinStatus) {
    return _c('el-option', {
      key: coinStatus.key,
      attrs: {
        "label": coinStatus.display_name,
        "value": coinStatus.key
      }
    })
  })), _vm._v(" "), _c('el-button', {
    staticClass: "filter-item",
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.virtualQuery
    }
  }, [_vm._v("查询")]), _vm._v(" "), (_vm.permission.add) ? _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.handleDialogShow('add')
      }
    }
  }, [_vm._v("新增")]) : _vm._e()], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    ref: "singleTable",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "element-loading-text": "给我一点时间"
    }
  }, [_vm._l((_vm.tableHeader), function(item) {
    return _c('el-table-column', {
      key: item.prop,
      attrs: {
        "label": item.label,
        "prop": item.prop,
        "width": item.width,
        "min-width": item.minWidth,
        "align": item.align,
        "formatter": item.formatter,
        "show-overflow-tooltip": ""
      }
    })
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "fixed": "right",
      "label": "操作",
      "width": "170"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('ul', {
          staticStyle: {
            "list-style": "none",
            "padding": "0px"
          }
        }, [_c('li', {
          staticStyle: {
            "float": "left",
            "width": "30px"
          }
        }, [(_vm.permission.edit) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.modificationCoin(scope.row.id)
            }
          }
        }, [_vm._v("修改\n                        ")]) : _vm._e()], 1), _vm._v(" "), (scope.row.status === 1) ? _c('li', {
          staticStyle: {
            "float": "left",
            "width": "30px"
          }
        }, [(_vm.permission.enable) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.enableDisable(2, scope.row.id, '启用')
            }
          }
        }, [_vm._v("启用\n                        ")]) : _vm._e()], 1) : (scope.row.status === 2) ? _c('li', {
          staticStyle: {
            "float": "left",
            "width": "30px"
          }
        }, [(_vm.permission.disable) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.enableDisable(1, scope.row.id, '禁用')
            }
          }
        }, [_vm._v("禁用\n                        ")]) : _vm._e()], 1) : _vm._e()])]
      }
    }])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.goodspage.page.pageNum,
      "page-sizes": [10, 20, 30, 50],
      "page-size": _vm.goodspage.page.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.userPageSize,
      "current-change": _vm.userPage
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加虚拟币类型",
      "visible": _vm.confirm
    },
    on: {
      "update:visible": function($event) {
        _vm.confirm = $event
      },
      "close": _vm.dialogClose
    }
  }, [_c('el-tabs', {
    attrs: {
      "type": "border-card"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "基础信息"
    }
  }, [_c('el-form', {
    ref: "GoodsVo",
    attrs: {
      "model": _vm.GoodsVo,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*商品图标",
      "prop": "goodsIconUrl"
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": "/upload/nofilter/file",
      "list-type": "picture",
      "on-success": _vm.handleSuccess,
      "on-remove": _vm.handleRemove,
      "name": "uploadFile",
      "before-upload": _vm.handleBeforeUpload,
      "autoUpload": true,
      "data": _vm.data,
      "file-list": _vm.fileList
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("上传图标")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    slot: "tip"
  }, [_vm._v("只能上传jpg/png文件，512px*512px,且不超过2M")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*商品名称",
      "prop": "goodsName"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.GoodsVo.goodsName),
      callback: function($$v) {
        _vm.GoodsVo.goodsName = $$v
      },
      expression: "GoodsVo.goodsName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*商品编号",
      "prop": "goodsNo"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.GoodsVo.goodsNo),
      callback: function($$v) {
        _vm.GoodsVo.goodsNo = $$v
      },
      expression: "GoodsVo.goodsNo"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否允许提货"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.GoodsVo.isAllowDelivery),
      callback: function($$v) {
        _vm.GoodsVo.isAllowDelivery = $$v
      },
      expression: "GoodsVo.isAllowDelivery"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每次最小提现数量",
      "prop": "perDeliveryMinNum"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.GoodsVo.perDeliveryMinNum),
      callback: function($$v) {
        _vm.GoodsVo.perDeliveryMinNum = $$v
      },
      expression: "GoodsVo.perDeliveryMinNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每次最大提现数量",
      "prop": "perDeliveryMaxNum"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.GoodsVo.perDeliveryMaxNum),
      callback: function($$v) {
        _vm.GoodsVo.perDeliveryMaxNum = $$v
      },
      expression: "GoodsVo.perDeliveryMaxNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每天最大提现数量",
      "prop": "dayDeliveryMaxNum"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.GoodsVo.dayDeliveryMaxNum),
      callback: function($$v) {
        _vm.GoodsVo.dayDeliveryMaxNum = $$v
      },
      expression: "GoodsVo.dayDeliveryMaxNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每天最大提现次数",
      "prop": "dayDeliveryMaxTime"
    }
  }, [_c('el-input-number', {
    staticClass: "input-short",
    attrs: {
      "min": 1,
      "max": 100,
      "auto-complete": "off"
    },
    model: {
      value: (_vm.GoodsVo.dayDeliveryMaxTime),
      callback: function($$v) {
        _vm.GoodsVo.dayDeliveryMaxTime = $$v
      },
      expression: "GoodsVo.dayDeliveryMaxTime"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*商品总量",
      "prop": "totalNum"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.GoodsVo.goodsCount),
      callback: function($$v) {
        _vm.GoodsVo.goodsCount = $$v
      },
      expression: "GoodsVo.goodsCount"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.confirm = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.commitAction
    }
  }, [_vm._v("确 认")])], 1)], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_goodstype_vue__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_goodstype_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_goodstype_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_734a634a_hasScoped_true_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_goodstype_vue__ = __webpack_require__(1025);
function injectStyle (ssrContext) {
  __webpack_require__(943)
}
var normalizeComponent = __webpack_require__(23)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-734a634a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_goodstype_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_734a634a_hasScoped_true_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_goodstype_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isvalidUsername = isvalidUsername;
exports.validateURL = validateURL;
exports.validateLowerCase = validateLowerCase;
exports.validateUpperCase = validateUpperCase;
exports.validatAlphabets = validatAlphabets;
exports.validateChinese = validateChinese;
exports.characterSize = characterSize;
exports.validatePassword = validatePassword;
exports.validateIP = validateIP;
exports.validateIpPort = validateIpPort;
exports.validateEightDecimal = validateEightDecimal;
exports.validateSixDecimal = validateSixDecimal;
exports.validateFourDecimal = validateFourDecimal;
exports.validateTwoDecimal = validateTwoDecimal;
exports.validateTimeArea = validateTimeArea;
exports.validateTimeTwoArea = validateTimeTwoArea;
exports.validateDateTime = validateDateTime;
/**
 * Created by jiachenpan on 16/11/18.
 */

function isvalidUsername(str) {
    var valid_map = ['admin', 'editor'];
    return valid_map.indexOf(str.trim()) >= 0;
}

/* 合法uri*/
function validateURL(textval) {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}

/* 小写字母*/
function validateLowerCase(str) {
    var reg = /^[a-z]+$/;
    return reg.test(str);
}

/* 大写字母*/
function validateUpperCase(str) {
    var reg = /^[A-Z]+$/;
    return reg.test(str);
}

/* 大小写字母*/
function validatAlphabets(str) {
    var reg = /^[A-Za-z]{0,40}$/;
    return reg.test(str);
}

/*0-10位中文*/
function validateChinese(str) {
    var reg = /^[\u4e00-\u9fa5]{0,10}$/;
    return reg.test(str);
}

/*计算字符长度*/
function characterSize(str) {
    var reg = new RegExp(/[\u4E00-\u9FA5]/, "g");
    var result = str.replace(reg, '00');
    return result.length;
}

/*字母和数字*/
function validatePassword(str) {
    var reg = /^[A-Za-z0-9]+$/;
    return reg.test(str);
}

/*ip*/
function validateIP(str) {
    var reg = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/;
    return reg.test(str);
}

/*ip端口*/
function validateIpPort(str) {
    var reg = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;
    return reg.test(str);
}

/*小数位数8位*/
function validateEightDecimal(str) {
    var reg = /^[0-9]+(\.[0-9]{0,8})?$/;
    return reg.test(str);
}

/*小数位数6位*/
function validateSixDecimal(str) {
    var reg = /^[0-9]+(\.[0-9]{0,6})?$/;
    return reg.test(str);
}

/*小数位数4位*/
function validateFourDecimal(str) {
    var reg = /^[0-9]+(\.[0-9]{0,4})?$/;
    return reg.test(str);
}

/*小数位数2位*/
function validateTwoDecimal(str) {
    var reg = /^[0-9]+(\.[0-9]{0,2})?$/;
    return reg.test(str);
}

/*时间段   00:00-00:00*/
function validateTimeArea(str) {
    var reg = /^(([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9])-([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9]))$/;
    return reg.test(str);
}

/*两个时间段   00:00-00:00,00:00-00:00*/
function validateTimeTwoArea(str) {
    var reg = /^(([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9])-([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9]))$|^(([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9])-([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9])),(([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9])-([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9]))$/;
    return reg.test(str);
}

/*时间  0000-00-00 00:00*/
function validateDateTime(str) {
    var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))([# ])([1][0-9]|[2][0-3]|[0][0-9]|[0-9]):([0-5][0-9])$/;
    return reg.test(str);
}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.virtualcoin = virtualcoin;
exports.increasedVirtualcoin = increasedVirtualcoin;
exports.enableDisableCoin = enableDisableCoin;
exports.virtualCoinName = virtualCoinName;
exports.amendCoinBase = amendCoinBase;
exports.testCoinWallet = testCoinWallet;
exports.postgoodspage = postgoodspage;
exports.postgoods = postgoods;
exports.getgoods = getgoods;
exports.putgoods = putgoods;
exports.putgoodsstatus = putgoodsstatus;
exports.virtualCoinAndGoods = virtualCoinAndGoods;
exports.getNewAddress = getNewAddress;

var _fetch = __webpack_require__(24);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//搜索所有
function virtualcoin(query) {
    return (0, _fetch2.default)({
        url: 'admin/virtualcoinbases/query',
        method: 'post',
        data: query
    });
}

//添加币种
function increasedVirtualcoin(query) {
    return (0, _fetch2.default)({
        url: 'admin/virtualcoin',
        method: 'post',
        data: query
    });
}

//启用禁用一个虚拟币
function enableDisableCoin(query) {
    return (0, _fetch2.default)({
        url: 'admin/virtualcoinbase' + query,
        method: 'put'
    });
}

//查询虚拟币详细信息
function virtualCoinName(query) {
    return (0, _fetch2.default)({
        url: 'admin/virtualcoinbase/' + query,
        method: 'get'
    });
}

function amendCoinBase(query, id) {
    return (0, _fetch2.default)({
        url: '/admin/virtualcoin/' + id,
        method: 'put',
        data: query
    });
}

// 测试钱包
function testCoinWallet(id) {
    return (0, _fetch2.default)({
        url: 'admin/virtualcoin/' + id + '/testwallet',
        method: 'get'
    });
}

function postgoodspage(query) {
    return (0, _fetch2.default)({
        url: '/admin/postgoodsPage',
        method: 'post',
        data: query
    });
}

function postgoods(query) {
    return (0, _fetch2.default)({
        url: '/admin/postgoods',
        method: 'post',
        data: query
    });
}

function getgoods(query) {
    return (0, _fetch2.default)({
        url: '/admin/getgoods/' + query,
        method: 'get'
    });
}

function putgoods(query) {
    return (0, _fetch2.default)({
        url: '/admin/putgoods',
        method: 'put',
        data: query
    });
}

function putgoodsstatus(query) {
    return (0, _fetch2.default)({
        url: '/admin/putgoodsstatus' + query,
        method: 'put',
        data: query
    });
}

function virtualCoinAndGoods(types, status, entityFlag) {
    return (0, _fetch2.default)({
        url: '/admin/virtualcoinandgoods',
        method: 'put',
        data: { types: types, status: status, entityFlag: entityFlag }
    }).catch();
}

function getNewAddress(params) {
    return (0, _fetch2.default)({
        url: 'admin/virtualcoin/' + params.id + '/produceaddress',
        method: 'get',
        params: { size: params.size, password: params.password }
    });
}

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(747);

var _input2 = _interopRequireDefault(_input);

var _dom = __webpack_require__(750);

var _debounce = __webpack_require__(9);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElInputNumber',
  directives: {
    repeatClick: {
      bind: function bind(el, binding, vnode) {
        var interval = null;
        var startTime = void 0;
        var handler = function handler() {
          return vnode.context[binding.expression].apply();
        };
        var clear = function clear() {
          if (new Date() - startTime < 100) {
            handler();
          }
          clearInterval(interval);
          interval = null;
        };

        (0, _dom.on)(el, 'mousedown', function () {
          startTime = new Date();
          (0, _dom.once)(document, 'mouseup', clear);
          clearInterval(interval);
          interval = setInterval(handler, 100);
        });
      }
    }
  },
  components: {
    ElInput: _input2.default
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      default: 0
    },
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    }
  },
  data: function data() {
    return {
      currentValue: 0
    };
  },

  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var newVal = Number(value);
        if (isNaN(newVal)) return;
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.$emit('input', newVal);
      }
    }
  },
  computed: {
    minDisabled: function minDisabled() {
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled: function maxDisabled() {
      return this._increase(this.value, this.step) > this.max;
    },
    precision: function precision() {
      var value = this.value,
          step = this.step,
          getPrecision = this.getPrecision;

      return Math.max(getPrecision(value), getPrecision(step));
    }
  },
  methods: {
    toPrecision: function toPrecision(num, precision) {
      if (precision === undefined) precision = this.precision;
      return parseFloat(parseFloat(Number(num).toFixed(precision)));
    },
    getPrecision: function getPrecision(value) {
      var valueString = value.toString();
      var dotPosition = valueString.indexOf('.');
      var precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    _increase: function _increase(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      var precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
    },
    _decrease: function _decrease(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      var precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
    },
    increase: function increase() {
      if (this.disabled || this.maxDisabled) return;
      var value = this.value || 0;
      var newVal = this._increase(value, this.step);
      if (newVal > this.max) return;
      this.setCurrentValue(newVal);
    },
    decrease: function decrease() {
      if (this.disabled || this.minDisabled) return;
      var value = this.value || 0;
      var newVal = this._decrease(value, this.step);
      if (newVal < this.min) return;
      this.setCurrentValue(newVal);
    },
    handleBlur: function handleBlur() {
      this.$refs.input.setCurrentValue(this.currentValue);
    },
    setCurrentValue: function setCurrentValue(newVal) {
      var oldVal = this.currentValue;
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) {
        this.$refs.input.setCurrentValue(this.currentValue);
        return;
      }
      this.$emit('change', newVal, oldVal);
      this.$emit('input', newVal);
      this.currentValue = newVal;
    },
    handleInput: function handleInput(value) {
      if (value === '') {
        return;
      }
      var newVal = Number(value);
      if (!isNaN(newVal)) {
        this.setCurrentValue(newVal);
      } else {
        this.$refs.input.setCurrentValue(this.currentValue);
      }
    }
  },
  created: function created() {
    var _this = this;

    this.debounceHandleInput = (0, _debounce2.default)(this.debounce, function (value) {
      _this.handleInput(value);
    });
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emitter = __webpack_require__(749);

var _emitter2 = _interopRequireDefault(_emitter);

var _calcTextareaHeight = __webpack_require__(748);

var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

var _merge = __webpack_require__(751);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElInput',

  componentName: 'ElInput',

  mixins: [_emitter2.default],

  data: function data() {
    return {
      currentValue: this.value,
      textareaCalcStyle: {}
    };
  },


  props: {
    value: [String, Number],
    placeholder: String,
    size: String,
    resize: String,
    readonly: Boolean,
    autofocus: Boolean,
    icon: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    form: String,
    maxlength: Number,
    minlength: Number,
    max: {},
    min: {},
    step: {},
    validateEvent: {
      type: Boolean,
      default: true
    },
    onIconClick: Function
  },

  computed: {
    validating: function validating() {
      return this.$parent.validateState === 'validating';
    },
    textareaStyle: function textareaStyle() {
      return (0, _merge2.default)({}, this.textareaCalcStyle, { resize: this.resize });
    }
  },

  watch: {
    'value': function value(val, oldValue) {
      this.setCurrentValue(val);
    }
  },

  methods: {
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
      }
    },
    inputSelect: function inputSelect() {
      this.$refs.input.select();
    },
    resizeTextarea: function resizeTextarea() {
      if (this.$isServer) return;
      var autosize = this.autosize,
          type = this.type;

      if (!autosize || type !== 'textarea') return;
      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;

      this.textareaCalcStyle = (0, _calcTextareaHeight2.default)(this.$refs.textarea, minRows, maxRows);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('focus', event);
    },
    handleInput: function handleInput(event) {
      var value = event.target.value;
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('change', value);
    },
    handleIconClick: function handleIconClick(event) {
      if (this.onIconClick) {
        this.onIconClick(event);
      }
      this.$emit('click', event);
    },
    setCurrentValue: function setCurrentValue(value) {
      var _this = this;

      if (value === this.currentValue) return;
      this.$nextTick(function (_) {
        _this.resizeTextarea();
      });
      this.currentValue = value;
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [value]);
      }
    }
  },

  created: function created() {
    this.$on('inputSelect', this.inputSelect);
  },
  mounted: function mounted() {
    this.resizeTextarea();
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_input_number__ = __webpack_require__(763);


/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__src_input_number__["a" /* default */].install = function(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_input_number__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_input_number__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_input_number__["a" /* default */]);


/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_input__ = __webpack_require__(764);


/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_0__src_input__["a" /* default */].install = function(Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_input__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_input__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_input__["a" /* default */]);


/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = calcTextareaHeight;
let hiddenTextarea;

const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);

  const boxSizing = style.getPropertyValue('box-sizing');

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  );

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  );

  const contextStyle = CONTEXT_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';');

  return { contextStyle, paddingSize, borderSize, boxSizing };
}

function calcTextareaHeight(
  targetElement,
  minRows = null,
  maxRows = null
) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  let {
    paddingSize,
    borderSize,
    boxSizing,
    contextStyle
  } = calculateNodeStyling(targetElement);

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  let height = hiddenTextarea.scrollHeight;

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
  }
  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }

  return { height: height + 'px'};
};


/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
});


/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["hasClass"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["addClass"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["removeClass"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["setStyle"] = setStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* istanbul ignore next */



const isServer = __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$isServer;
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();
/* harmony export (immutable) */ __webpack_exports__["on"] = on;


/* istanbul ignore next */
const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();
/* harmony export (immutable) */ __webpack_exports__["off"] = off;


/* istanbul ignore next */
const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
/* harmony export (immutable) */ __webpack_exports__["once"] = once;


/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
const getStyle = ieVersion < 9 ? function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};
/* harmony export (immutable) */ __webpack_exports__["getStyle"] = getStyle;


/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};


/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
});;


/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_number_vue__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_number_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_number_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_a21aeec6_hasScoped_false_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_input_number_vue__ = __webpack_require__(779);
var normalizeComponent = __webpack_require__(23)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_number_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_a21aeec6_hasScoped_false_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_input_number_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_57b5ac86_hasScoped_false_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(773);
var normalizeComponent = __webpack_require__(23)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_57b5ac86_hasScoped_false_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [
      _vm.type === 'textarea' ? 'el-textarea' : 'el-input',
      _vm.size ? 'el-input--' + _vm.size : '',
      {
        'is-disabled': _vm.disabled,
        'el-input-group': _vm.$slots.prepend || _vm.$slots.append,
        'el-input-group--append': _vm.$slots.append,
        'el-input-group--prepend': _vm.$slots.prepend
      }
    ]
  }, [(_vm.type !== 'textarea') ? [(_vm.$slots.prepend) ? _c('div', {
    staticClass: "el-input-group__prepend"
  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), _vm._t("icon", [(_vm.icon) ? _c('i', {
    staticClass: "el-input__icon",
    class: [
      'el-icon-' + _vm.icon,
      _vm.onIconClick ? 'is-clickable' : ''
    ],
    on: {
      "click": _vm.handleIconClick
    }
  }) : _vm._e()]), _vm._v(" "), (_vm.type !== 'textarea') ? _c('input', _vm._b({
    ref: "input",
    staticClass: "el-input__inner",
    attrs: {
      "autocomplete": _vm.autoComplete
    },
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "input": _vm.handleInput,
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    }
  }, 'input', _vm.$props, false)) : _vm._e(), _vm._v(" "), (_vm.validating) ? _c('i', {
    staticClass: "el-input__icon el-icon-loading"
  }) : _vm._e(), _vm._v(" "), (_vm.$slots.append) ? _c('div', {
    staticClass: "el-input-group__append"
  }, [_vm._t("append")], 2) : _vm._e()] : _c('textarea', _vm._b({
    ref: "textarea",
    staticClass: "el-textarea__inner",
    style: (_vm.textareaStyle),
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "input": _vm.handleInput,
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    }
  }, 'textarea', _vm.$props, false))], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "el-input-number",
    class: [
      _vm.size ? 'el-input-number--' + _vm.size : '',
      {
        'is-disabled': _vm.disabled
      },
      {
        'is-without-controls': !_vm.controls
      }
    ]
  }, [(_vm.controls) ? _c('span', {
    directives: [{
      name: "repeat-click",
      rawName: "v-repeat-click",
      value: (_vm.decrease),
      expression: "decrease"
    }],
    staticClass: "el-input-number__decrease",
    class: {
      'is-disabled': _vm.minDisabled
    }
  }, [_c('i', {
    staticClass: "el-icon-minus"
  })]) : _vm._e(), _vm._v(" "), (_vm.controls) ? _c('span', {
    directives: [{
      name: "repeat-click",
      rawName: "v-repeat-click",
      value: (_vm.increase),
      expression: "increase"
    }],
    staticClass: "el-input-number__increase",
    class: {
      'is-disabled': _vm.maxDisabled
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })]) : _vm._e(), _vm._v(" "), _c('el-input', {
    ref: "input",
    attrs: {
      "value": _vm.currentValue,
      "disabled": _vm.disabled,
      "size": _vm.size,
      "max": _vm.max,
      "min": _vm.min
    },
    on: {
      "blur": _vm.handleBlur,
      "input": _vm.debounceHandleInput
    },
    nativeOn: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.increase($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.decrease($event)
      }]
    }
  }, [(_vm.$slots.prepend) ? _c('template', {
    slot: "prepend"
  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.append) ? _c('template', {
    slot: "append"
  }, [_vm._t("append")], 2) : _vm._e()], 2)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _virtual = __webpack_require__(414);

var _validate = __webpack_require__(297);

var _dctp = __webpack_require__(11);

var _dctp2 = _interopRequireDefault(_dctp);

var _inputNumber = __webpack_require__(746);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var calendarTypeOptions = [{ key: '', display_name: '查询所有' }, { key: '1', display_name: '禁用' }, { key: '2', display_name: '启用' }];
var holidayBusinessScope = [{ value: 1, label: '不限制' }, { value: 2, label: '每周六-周日' }, { value: 3, label: '中国法定节假日（含周末）' }];

exports.default = {
    data: function data() {
        var goodsIconUrl = function goodsIconUrl(rule, value, callback) {
            if (value === '') {
                callback(new Error('请上传图片'));
            }
            callback();
        };
        var goodsName = function goodsName(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入名字'));
            }
            callback();
        };
        var goodsNo = function goodsNo(rule, value, callback) {
            if (value === '') callback(new Error('请输入商品编号'));
            if (!(0, _validate.validatePassword)(value) || value.length > 100) callback(new Error('输入字母和数字，最大长度100'));
            callback();
        };
        var validateNumber = function validateNumber(rule, value, callback) {
            if (value === '') callback(new Error('请输入数量'));
            if (!(0, _validate.validateEightDecimal)(value) || value * 1 >= 9999999 || value <= 0) callback(new Error('手续费最大数量为9999999，小数点后最多8位'));
            callback();
        };

        return {
            listLoading: true,
            //搜索对象
            goodspage: {
                goodsName: '',
                status: '',
                page: {
                    pageNum: 1,
                    pageSize: 10
                }
            },
            //添加是的对象
            GoodsVo: {
                goodsName: '',
                goodsIconUrl: '',
                goodsNo: '',
                isAllowDelivery: '',
                perDeliveryMinNum: '',
                perDeliveryMaxNum: '',
                dayDeliveryMaxNum: '',
                dayDeliveryMaxTime: '',
                goodsCount: ''
            },
            //下拉框属性  - 状态
            optionsStatus: [{
                value: 0,
                label: '全部状态'
            }, {
                value: 1,
                label: '启用'
            }, {
                value: 2,
                label: '禁用'
            }],
            //添加框初始隐藏
            dialogFormVisible: false,
            rules: {
                goodsName: [{ validator: goodsName, trigger: 'blur' }],
                goodsIconUrl: [{ validator: goodsIconUrl, trigger: 'blur' }],
                goodsNo: [{ validator: goodsNo, trigger: 'blur' }],
                perDeliveryMinNum: [{ validator: validateNumber, trigger: 'blur' }],
                perDeliveryMaxNum: [{ validator: validateNumber, trigger: 'blur' }],
                dayDeliveryMaxNum: [{ validator: validateNumber, trigger: 'blur' }],
                dayDeliveryMaxTime: [{ validator: validateNumber, trigger: 'blur' }],
                goodsCount: [{ validator: validateNumber, trigger: 'blur' }]
            },
            //上传参数
            data: {
                type: 1,
                usageType: 3
            },
            //修改
            modification: false,
            //新增
            confirm: false,
            //----------------------分割线----------------------------------
            // 搜索框
            input: '',
            vitualLoading: false,

            // 状态
            valueStatus: '',
            // 不可交易时间
            optionsHoliday: holidayBusinessScope,
            valueHoliday: '',
            valueNumber: '',
            value: '',
            virtualWidth: '160px',
            currentRow: null,
            // 表单信息
            tableData: [],
            tableHeader: [{
                label: "FID",
                prop: "id",
                width: 60
            }, {
                label: "名称",
                prop: "goodsName",
                width: 120
            }, {
                label: "商品编号",
                prop: "goodsNo",
                width: 120
            }, {
                label: "状态",
                prop: "status",
                width: 80,
                formatter: function formatter(row, column, value) {
                    return value === 1 ? '禁用' : value === 2 ? '启用' : '';
                }
            }, {
                label: "每次最小提现数量",
                prop: "perDeliveryMinNum",
                width: 160
            }, {
                label: "每次最大提现数量",
                prop: "perDeliveryMaxNum",
                width: 160
            }, {
                label: "每天最大提现数量",
                prop: "dayDeliveryMaxNum",
                width: 160
            }, {
                label: "每天提现次数",
                prop: "dayDeliveryMaxTime",
                width: 120
            }, {
                label: "总量",
                prop: "goodsCount",
                width: 160
            }, {
                label: "是否允许提货",
                prop: "isAllowDelivery",
                width: 120,
                formatter: function formatter(row, column, value) {
                    return value === 1 ? '不允许' : value === 2 ? '允许' : '';
                }
            }, {
                label: "创建时间",
                prop: "createTime",
                width: 180,
                formatter: function formatter(row, column, value) {
                    return _dctp2.default.utils.parseDateTimeStr(value);
                }
            }],

            calendarTypeOptions: calendarTypeOptions,
            //总数
            total: 0,

            formLabelWidth: '120px',
            fileList: [],
            fileListModify: [],
            action: ''
        };
    },

    computed: {
        tableDataLength: function tableDataLength() {
            return this.tableData.length;
        }
    },

    //搜索功能
    methods: {
        //根据参数判断新增/修改方法
        handleDialogShow: function handleDialogShow(action) {
            this.action = action;
            switch (action) {
                case 'add':
                    this.confirm = true;
                    break;
                case 'update':
                    this.modificationCoin();
                    break;
            }
        },
        getList: function getList() {
            var _this = this;

            this.listLoading = true;
            (0, _virtual.postgoodspage)(this.goodspage).then(function (response) {
                _this.tableData = response.data.data;
                _this.total = response.data.page.count;
                _this.listLoading = false;
            });
        },

        //判断添加/修改虚拟币
        commitAction: function commitAction() {
            switch (this.action) {
                case 'add':
                    this.commitVirtual();
                    break;
                case 'update':
                    this.modificationCoinBase();
                    break;
            }
        },
        dialogClose: function dialogClose() {
            this.getList();
            this.clearData();
            this.fileList = [];
        },
        clearData: function clearData() {
            this.$refs['GoodsVo'].resetFields();
        },
        checkFrom: function checkFrom(formName) {
            this.$refs[formName].validate(function (valid) {
                return !!valid;
            });
        },

        //修改虚拟币开始
        modificationCoin: function modificationCoin(int) {
            var _this2 = this;

            this.action = 'update';
            (0, _virtual.getgoods)(int).then(function (response) {
                _this2.GoodsVo = response.data;
                _this2.fileList = [{ name: '当前图片', url: "http://image.178by.com/" + response.data.goodsIconUrl }];
            });
            this.confirm = true;
        },

        //添加虚拟币
        commitVirtual: function commitVirtual() {
            var _this3 = this;

            this.$refs['GoodsVo'].validate(function (valid) {
                if (valid) {
                    (0, _virtual.postgoods)(_this3.GoodsVo).then(function (response) {
                        if (response.result) {
                            _this3.$message.success("添加成功!");
                            _this3.confirm = false;
                            _this3.getList();
                        } else {
                            _this3.$message.error(response.msg);
                        }
                    });
                } else {
                    _this3.$message.error('请填完善内容');
                }
            });
        },

        //修改虚拟币
        modificationCoinBase: function modificationCoinBase() {
            var _this4 = this;

            this.$refs['GoodsVo'].validate(function (valid) {
                if (valid) {
                    (0, _virtual.putgoods)(_this4.GoodsVo).then(function (response) {
                        if (response.result) {
                            _this4.$message.success("修改成功!");
                            _this4.confirm = false;
                            _this4.getList();
                        } else {
                            _this4.$message.error(response.msg);
                        }
                    });
                } else {
                    _this4.$message.error('请填完善内容');
                }
            });
        },


        //搜索按钮提交数据
        virtualQuery: function virtualQuery() {
            this.getList();
        },

        //翻页的按钮
        userPage: function userPage(val) {
            this.virtualcoinquery.page.pageNum = val;
            this.getList();
        },

        //获取每页多少条
        userPageSize: function userPageSize(val) {
            this.virtualcoinquery.page.pageSize = val;
            this.getList();
        },

        //显示添加币种页面
        increasedCoin: function increasedCoin() {
            this.confirm = true;
        },

        //-------------------------------------------分割线---------------------------------------------------------------


        //启用禁用虚拟币方法
        coinBase: function coinBase() {
            var _this5 = this;

            (0, _virtual.putgoodsstatus)(this.strNum).then(function (response) {
                if (response.result) {
                    _this5.msg = "操作成功!";
                    _this5.$message({
                        type: 'success',
                        message: _this5.msg
                    });
                    _this5.getList();
                } else {
                    _this5.msg = response.msg;
                    _this5.$message({
                        type: 'error',
                        message: _this5.msg
                    });
                }
            });
        },

        //启用禁用虚拟币事件
        enableDisable: function enableDisable(int, id, str) {
            var _this6 = this;

            this.$confirm('要' + str + '此虚拟币,是否继续', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                if (int === 1) {
                    _this6.strNum = '/' + id + '/1';
                    _this6.coinBase();
                } else if (int === 2) {
                    _this6.strNum = '/' + id + '/2';
                    _this6.coinBase();
                }
            }).catch(function () {
                _this6.$message.info('操作已取消');
            });
        },


        //修改虚拟币结束
        //点击事件获取选中的单条信息的对象值
        /*handleCurrentChange(val) {
            this.currentRow = val;
        },*/
        handleRemove: function handleRemove(file, fileList) {
            this.GoodsVo.goodsIconUrl = '';
        },
        handleSuccess: function handleSuccess(response, file, fileList) {
            this.fileList = [fileList[fileList.length - 1]];
            this.GoodsVo.goodsIconUrl = response.data;
        },
        handleBeforeUpload: function handleBeforeUpload(file) {
            var filename = file.name.toLowerCase();
            if (!filename.endsWith('.jpg') && !filename.endsWith('.jpeg') && !filename.endsWith('.png')) {
                this.$message.error('格式不对，请重新选择');
                return false;
            }
            if (file.size > 1024 * 1024 * 2) {
                this.$message.error('图片太大，请重新选择');
                return false;
            }
            return true;
        },
        handleDataChange: function handleDataChange(val) {
            this.virtualCoinBase.openTime = val;
        }
    },

    created: function created() {
        this.getList();
    }
};

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(152)(true);
// imports


// module
exports.push([module.i, ".input-short[data-v-734a634a]{width:300px}.input-fee[data-v-734a634a]{width:90px}", "", {"version":3,"sources":["C:/Users/XY-5-16-02/Desktop/dctp-admin-code/src/views/goods/goodstype.vue"],"names":[],"mappings":"AACA,8BACE,WAAa,CACd,AACD,4BACE,UAAY,CACb","file":"goodstype.vue","sourcesContent":["\n.input-short[data-v-734a634a] {\n  width: 300px;\n}\n.input-fee[data-v-734a634a] {\n  width: 90px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(903);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("38730fd4", content, true);

/***/ })

});
//# sourceMappingURL=11.81acc7aa50d451e05fca.js.map