webpackJsonp([10],{

/***/ 1036:
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
      "element-loading-text": "正在连接钱包"
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
      "placeholder": "请输入虚拟币名称、简介、描述"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.virtualQuery($event)
      }
    },
    model: {
      value: (_vm.virtualcoinquery.chineseName),
      callback: function($$v) {
        _vm.virtualcoinquery.chineseName = $$v
      },
      expression: "virtualcoinquery.chineseName"
    }
  }), _vm._v(" "), _c('span', [_vm._v("虚拟币类型")]), _vm._v(" "), _c('el-select', {
    staticClass: "filter-item",
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "查询所有"
    },
    model: {
      value: (_vm.virtualcoinquery.status),
      callback: function($$v) {
        _vm.virtualcoinquery.status = $$v
      },
      expression: "virtualcoinquery.status"
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
      "width": "250"
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
              _vm.modificationCoin(scope.row.baseSeq)
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
              _vm.enableDisable(2, scope.row.baseSeq, '启用')
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
              _vm.enableDisable(1, scope.row.baseSeq, '禁用')
            }
          }
        }, [_vm._v("禁用\n                        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('li', {
          staticStyle: {
            "float": "left",
            "width": "52px"
          }
        }, [(_vm.permission.testWallet) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.measurementWallet(scope.row.baseSeq)
            }
          }
        }, [_vm._v("测试钱包\n                        ")]) : _vm._e()], 1), _vm._v(" "), _c('li', {
          staticStyle: {
            "float": "left",
            "width": "52px"
          }
        }, [(_vm.permission.edit) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.showFeesDialog(scope.row.baseSeq)
            }
          }
        }, [_vm._v("OTC费率\n                        ")]) : _vm._e()], 1), _vm._v(" "), _c('li', {
          staticStyle: {
            "float": "left",
            "width": "52px"
          }
        }, [(_vm.permission.testWallet) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.getAddressOnId(scope.row.baseSeq)
            }
          }
        }, [_vm._v("生成地址\n                        ")]) : _vm._e()], 1)])]
      }
    }])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.virtualcoinquery.page.pageNum,
      "page-sizes": [10, 20, 30, 50],
      "page-size": _vm.virtualcoinquery.page.pageSize,
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
      "visible": _vm.confirm,
      "close-on-click-modal": false
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
    ref: "virtualCoinBase",
    attrs: {
      "model": _vm.virtualCoinBase,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*币种图标",
      "prop": "iconUrl"
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
      "label": "*币种名称",
      "prop": "chineseName"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.chineseName),
      callback: function($$v) {
        _vm.virtualCoinBase.chineseName = $$v
      },
      expression: "virtualCoinBase.chineseName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*币种简称",
      "prop": "shortName"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.shortName),
      callback: function($$v) {
        _vm.virtualCoinBase.shortName = $$v
      },
      expression: "virtualCoinBase.shortName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*英文名称",
      "prop": "englishName"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.englishName),
      callback: function($$v) {
        _vm.virtualCoinBase.englishName = $$v
      },
      expression: "virtualCoinBase.englishName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*符号",
      "prop": "symbol"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.symbol),
      callback: function($$v) {
        _vm.virtualCoinBase.symbol = $$v
      },
      expression: "virtualCoinBase.symbol"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*ACCESS_KEY",
      "prop": "accessKey"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.accessKey),
      callback: function($$v) {
        _vm.virtualCoinBase.accessKey = $$v
      },
      expression: "virtualCoinBase.accessKey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*SECRET_KEY",
      "prop": "secretKey"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.secretKey),
      callback: function($$v) {
        _vm.virtualCoinBase.secretKey = $$v
      },
      expression: "virtualCoinBase.secretKey"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "钱包密码",
      "prop": "walletPassword"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.walletPassword),
      callback: function($$v) {
        _vm.virtualCoinBase.walletPassword = $$v
      },
      expression: "virtualCoinBase.walletPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*IP地址",
      "prop": "addressIp"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.addressIp),
      callback: function($$v) {
        _vm.virtualCoinBase.addressIp = $$v
      },
      expression: "virtualCoinBase.addressIp"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*端口号",
      "prop": "portNumber"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.portNumber),
      callback: function($$v) {
        _vm.virtualCoinBase.portNumber = $$v
      },
      expression: "virtualCoinBase.portNumber"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否允许充值"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.rechargeStatus),
      callback: function($$v) {
        _vm.virtualCoinBase.rechargeStatus = $$v
      },
      expression: "virtualCoinBase.rechargeStatus"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否允许提现"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.withdrawStatus),
      callback: function($$v) {
        _vm.virtualCoinBase.withdrawStatus = $$v
      },
      expression: "virtualCoinBase.withdrawStatus"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否自动到帐"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.autoRecharge),
      callback: function($$v) {
        _vm.virtualCoinBase.autoRecharge = $$v
      },
      expression: "virtualCoinBase.autoRecharge"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否一代币"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.firstStatus),
      callback: function($$v) {
        _vm.virtualCoinBase.firstStatus = $$v
      },
      expression: "virtualCoinBase.firstStatus"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否ETH"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.statusETH),
      callback: function($$v) {
        _vm.virtualCoinBase.statusETH = $$v
      },
      expression: "virtualCoinBase.statusETH"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否USDT"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.usdtStatus),
      callback: function($$v) {
        _vm.virtualCoinBase.usdtStatus = $$v
      },
      expression: "virtualCoinBase.usdtStatus"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否ERC20"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.erc20Status),
      callback: function($$v) {
        _vm.virtualCoinBase.erc20Status = $$v
      },
      expression: "virtualCoinBase.erc20Status"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "汇总地址",
      "prop": "summaryAddress"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.summaryAddress),
      callback: function($$v) {
        _vm.virtualCoinBase.summaryAddress = $$v
      },
      expression: "virtualCoinBase.summaryAddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "ERC20URL",
      "prop": "erc20Url"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.erc20Url),
      callback: function($$v) {
        _vm.virtualCoinBase.erc20Url = $$v
      },
      expression: "virtualCoinBase.erc20Url"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "合约地址",
      "prop": "contractAddress"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.contractAddress),
      callback: function($$v) {
        _vm.virtualCoinBase.contractAddress = $$v
      },
      expression: "virtualCoinBase.contractAddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "地址生成密码",
      "prop": "sonPassword"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.sonPassword),
      callback: function($$v) {
        _vm.virtualCoinBase.sonPassword = $$v
      },
      expression: "virtualCoinBase.sonPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "授权阀值",
      "prop": "threshold"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.threshold),
      callback: function($$v) {
        _vm.virtualCoinBase.threshold = $$v
      },
      expression: "virtualCoinBase.threshold"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "授权金额",
      "prop": "authorizeAmount"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.authorizeAmount),
      callback: function($$v) {
        _vm.virtualCoinBase.authorizeAmount = $$v
      },
      expression: "virtualCoinBase.authorizeAmount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "合约小数位",
      "prop": "decimals"
    }
  }, [_c('el-input-number', {
    staticClass: "input-short",
    attrs: {
      "min": 0,
      "max": 100,
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.decimals),
      callback: function($$v) {
        _vm.virtualCoinBase.decimals = $$v
      },
      expression: "virtualCoinBase.decimals"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "地址生成路径",
      "prop": "mainPath"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.mainPath),
      callback: function($$v) {
        _vm.virtualCoinBase.mainPath = $$v
      },
      expression: "virtualCoinBase.mainPath"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "主地址",
      "prop": "mainAddress"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.mainAddress),
      callback: function($$v) {
        _vm.virtualCoinBase.mainAddress = $$v
      },
      expression: "virtualCoinBase.mainAddress"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "区块高度",
      "prop": "blockNum"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.blockNum),
      callback: function($$v) {
        _vm.virtualCoinBase.blockNum = $$v
      },
      expression: "virtualCoinBase.blockNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "gasLimit",
      "prop": "gasLimit"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.gasLimit),
      callback: function($$v) {
        _vm.virtualCoinBase.gasLimit = $$v
      },
      expression: "virtualCoinBase.gasLimit"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "nonce",
      "prop": "nonce"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.nonce),
      callback: function($$v) {
        _vm.virtualCoinBase.nonce = $$v
      },
      expression: "virtualCoinBase.nonce"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否自动提币"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinBase.autoWithdraw),
      callback: function($$v) {
        _vm.virtualCoinBase.autoWithdraw = $$v
      },
      expression: "virtualCoinBase.autoWithdraw"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否开启OTC交易"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 1,
      "off-value": 0
    },
    model: {
      value: (_vm.virtualCoinBase.legalFlag),
      callback: function($$v) {
        _vm.virtualCoinBase.legalFlag = $$v
      },
      expression: "virtualCoinBase.legalFlag"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "充币确认次数"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.virtualCoinBase.confirmNum),
      callback: function($$v) {
        _vm.virtualCoinBase.confirmNum = $$v
      },
      expression: "virtualCoinBase.confirmNum"
    }
  }, _vm._l((_vm.optionsNumber), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "OTC交易持有最少量",
      "prop": "leastNum"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.leastNum),
      callback: function($$v) {
        _vm.virtualCoinBase.leastNum = $$v
      },
      expression: "virtualCoinBase.leastNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*OTC交易小数位",
      "prop": "priceNum"
    }
  }, [_c('el-input-number', {
    staticClass: "input-short",
    attrs: {
      "min": 0,
      "max": 10,
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.priceNum),
      callback: function($$v) {
        _vm.virtualCoinBase.priceNum = $$v
      },
      expression: "virtualCoinBase.priceNum"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每次最小提现数量",
      "prop": "minWithdrawAmt"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.minWithdrawAmt),
      callback: function($$v) {
        _vm.virtualCoinBase.minWithdrawAmt = $$v
      },
      expression: "virtualCoinBase.minWithdrawAmt"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每次最大提现数量",
      "prop": "maxWithdrawAmt"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.maxWithdrawAmt),
      callback: function($$v) {
        _vm.virtualCoinBase.maxWithdrawAmt = $$v
      },
      expression: "virtualCoinBase.maxWithdrawAmt"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每天最大提现数量",
      "prop": "maxWithdrawAmtDaily"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.maxWithdrawAmtDaily),
      callback: function($$v) {
        _vm.virtualCoinBase.maxWithdrawAmtDaily = $$v
      },
      expression: "virtualCoinBase.maxWithdrawAmtDaily"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*每天最大提现次数",
      "prop": "maxWithdrawNumDaily"
    }
  }, [_c('el-input-number', {
    staticClass: "input-short",
    attrs: {
      "min": 1,
      "max": 100,
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.maxWithdrawNumDaily),
      callback: function($$v) {
        _vm.virtualCoinBase.maxWithdrawNumDaily = $$v
      },
      expression: "virtualCoinBase.maxWithdrawNumDaily"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "*虚拟币总量",
      "prop": "totalNum"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinBase.totalNum),
      callback: function($$v) {
        _vm.virtualCoinBase.totalNum = $$v
      },
      expression: "virtualCoinBase.totalNum"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "关于币种"
    }
  }, [_c('el-form', {
    ref: "virtualCoinIntroduce",
    attrs: {
      "model": _vm.virtualCoinIntroduce,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "是否显示关于币种"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": "",
      "on-value": 2,
      "off-value": 1
    },
    model: {
      value: (_vm.virtualCoinIntroduce.displayStatus),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.displayStatus = $$v
      },
      expression: "virtualCoinIntroduce.displayStatus"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "官网地址",
      "prop": "officialWebUrl"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinIntroduce.officialWebUrl),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.officialWebUrl = $$v
      },
      expression: "virtualCoinIntroduce.officialWebUrl"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "prop": "totalCirculation",
      "label": "发行总量"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinIntroduce.totalCirculation),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.totalCirculation = $$v
      },
      expression: "virtualCoinIntroduce.totalCirculation"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "prop": "totalStock",
      "label": "流通总量"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinIntroduce.totalStock),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.totalStock = $$v
      },
      expression: "virtualCoinIntroduce.totalStock"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "众筹价格",
      "prop": "releasePrice"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinIntroduce.releasePrice),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.releasePrice = $$v
      },
      expression: "virtualCoinIntroduce.releasePrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "发行日期",
      "prop": "releaseDate"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    on: {
      "change": _vm.handleTimeChange
    },
    model: {
      value: (_vm.virtualCoinIntroduce.releaseDate),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.releaseDate = $$v
      },
      expression: "virtualCoinIntroduce.releaseDate"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "白皮书",
      "prop": "whitePaper"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinIntroduce.whitePaper),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.whitePaper = $$v
      },
      expression: "virtualCoinIntroduce.whitePaper"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "区块查询",
      "prop": "blockExplorer"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinIntroduce.blockExplorer),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.blockExplorer = $$v
      },
      expression: "virtualCoinIntroduce.blockExplorer"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "简介",
      "prop": "description"
    }
  }, [_c('el-input', {
    staticClass: "input-short",
    attrs: {
      "type": "textarea",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinIntroduce.description),
      callback: function($$v) {
        _vm.virtualCoinIntroduce.description = $$v
      },
      expression: "virtualCoinIntroduce.description"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    staticClass: "m-serviceCharge",
    attrs: {
      "label": "手续费用"
    }
  }, [_c('el-form', {
    ref: "virtualCoinProcedure",
    attrs: {
      "model": _vm.virtualCoinProcedure,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "等级[ 1 ]提现手续费：",
      "prop": "fetchOne"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinProcedure.fetchOne),
      callback: function($$v) {
        _vm.virtualCoinProcedure.fetchOne = $$v
      },
      expression: "virtualCoinProcedure.fetchOne"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "等级[ 2 ]提现手续费：",
      "prop": "fetchTwo"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinProcedure.fetchTwo),
      callback: function($$v) {
        _vm.virtualCoinProcedure.fetchTwo = $$v
      },
      expression: "virtualCoinProcedure.fetchTwo"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "等级[ 3 ]提现手续费：",
      "prop": "fetchThree"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinProcedure.fetchThree),
      callback: function($$v) {
        _vm.virtualCoinProcedure.fetchThree = $$v
      },
      expression: "virtualCoinProcedure.fetchThree"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "等级[ 4 ]提现手续费：",
      "prop": "fetchFour"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinProcedure.fetchFour),
      callback: function($$v) {
        _vm.virtualCoinProcedure.fetchFour = $$v
      },
      expression: "virtualCoinProcedure.fetchFour"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "等级[ 5 ]提现手续费：",
      "prop": "fetchFive"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinProcedure.fetchFive),
      callback: function($$v) {
        _vm.virtualCoinProcedure.fetchFive = $$v
      },
      expression: "virtualCoinProcedure.fetchFive"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "等级[ 6 ]提现手续费：",
      "prop": "fetchSix"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinProcedure.fetchSix),
      callback: function($$v) {
        _vm.virtualCoinProcedure.fetchSix = $$v
      },
      expression: "virtualCoinProcedure.fetchSix"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "等级[ 7 ]提现手续费：",
      "prop": "fetchSeven"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.virtualCoinProcedure.fetchSeven),
      callback: function($$v) {
        _vm.virtualCoinProcedure.fetchSeven = $$v
      },
      expression: "virtualCoinProcedure.fetchSeven"
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
  }, [_vm._v("确 认")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "close-on-click-modal": false,
      "title": "生成地址",
      "visible": _vm.centerDialogVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.centerDialogVisible = $event
      },
      "close": function($event) {
        _vm.address.size = '';
        _vm.address.password = ''
      }
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.address
    }
  }, [_c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "生成地址的数量"
    }
  }, [_c('el-input-number', {
    staticClass: "input-300",
    attrs: {
      "min": 1,
      "max": 10000,
      "auto-complete": "off"
    },
    model: {
      value: (_vm.address.size),
      callback: function($$v) {
        _vm.address.size = $$v
      },
      expression: "address.size"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.virtualWidth,
      "label": "输入密码"
    }
  }, [_c('el-input', {
    staticClass: "input-300",
    attrs: {
      "type": "password",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.address.password),
      callback: function($$v) {
        _vm.address.password = $$v
      },
      expression: "address.password"
    }
  })], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.centerDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getAddress
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "修改OTC手续费",
      "visible": _vm.feesDialogVisible,
      "close-on-click-modal": false
    },
    on: {
      "update:visible": function($event) {
        _vm.feesDialogVisible = $event
      },
      "close": _vm.feesDialogClose
    }
  }, [_c('span', {
    staticStyle: {
      "color": "#FF0000",
      "position": "absolute",
      "top": "22px",
      "left": "140px"
    }
  }, [_vm._v("0.01 = 1%")]), _vm._v(" "), _c('el-form', {
    ref: "fees",
    staticClass: "m-serviceCharge",
    attrs: {
      "model": _vm.fees,
      "rules": _vm.ruleFees
    }
  }, [_c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 1 ]买入手续费：",
      "prop": "buyOne"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.buyOne),
      callback: function($$v) {
        _vm.fees.buyOne = $$v
      },
      expression: "fees.buyOne"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 1 ]卖出手续费：",
      "prop": "saleOne"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.saleOne),
      callback: function($$v) {
        _vm.fees.saleOne = $$v
      },
      expression: "fees.saleOne"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 2 ]买入手续费：",
      "prop": "buyTwo"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.buyTwo),
      callback: function($$v) {
        _vm.fees.buyTwo = $$v
      },
      expression: "fees.buyTwo"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 2 ]卖出手续费：",
      "prop": "saleTwo"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.saleTwo),
      callback: function($$v) {
        _vm.fees.saleTwo = $$v
      },
      expression: "fees.saleTwo"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 3 ]买入手续费：",
      "prop": "buyThree"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.buyThree),
      callback: function($$v) {
        _vm.fees.buyThree = $$v
      },
      expression: "fees.buyThree"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 3 ]卖出手续费：",
      "prop": "saleThree"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.saleThree),
      callback: function($$v) {
        _vm.fees.saleThree = $$v
      },
      expression: "fees.saleThree"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 4 ]买入手续费：",
      "prop": "buyFour"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.buyFour),
      callback: function($$v) {
        _vm.fees.buyFour = $$v
      },
      expression: "fees.buyFour"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 4 ]卖出手续费：",
      "prop": "saleFour"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.saleFour),
      callback: function($$v) {
        _vm.fees.saleFour = $$v
      },
      expression: "fees.saleFour"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 5 ]买入手续费：",
      "prop": "buyFive"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.buyFive),
      callback: function($$v) {
        _vm.fees.buyFive = $$v
      },
      expression: "fees.buyFive"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 5 ]卖出手续费：",
      "prop": "saleFive"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.saleFive),
      callback: function($$v) {
        _vm.fees.saleFive = $$v
      },
      expression: "fees.saleFive"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 6 ]买入手续费：",
      "prop": "buySix"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.buySix),
      callback: function($$v) {
        _vm.fees.buySix = $$v
      },
      expression: "fees.buySix"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 6 ]卖出手续费：",
      "prop": "saleSix"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.saleSix),
      callback: function($$v) {
        _vm.fees.saleSix = $$v
      },
      expression: "fees.saleSix"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 7 ]买入手续费：",
      "prop": "buySeven"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.buySeven),
      callback: function($$v) {
        _vm.fees.buySeven = $$v
      },
      expression: "fees.buySeven"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": _vm.itemWidth,
      "label": "等级[ 7 ]卖出手续费：",
      "prop": "saleSeven"
    }
  }, [_c('el-input', {
    staticClass: "input-fee",
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.fees.saleSeven),
      callback: function($$v) {
        _vm.fees.saleSeven = $$v
      },
      expression: "fees.saleSeven"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.feesDialogVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.modifyFees
    }
  }, [_vm._v("保 存")])], 1)], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_virtualType_vue__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_virtualType_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_virtualType_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_7dc1d1b6_hasScoped_true_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_virtualType_vue__ = __webpack_require__(1036);
function injectStyle (ssrContext) {
  __webpack_require__(948)
}
var normalizeComponent = __webpack_require__(23)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dc1d1b6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_script_index_0_virtualType_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_0_4_vue_loader_lib_template_compiler_index_id_data_v_7dc1d1b6_hasScoped_true_node_modules_vue_loader_13_0_4_vue_loader_lib_selector_type_template_index_0_virtualType_vue__["a" /* default */],
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

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by cong on 2017/8/15.
 */

var pass = 'DCTP';

var encodePassword = {
    // '0a1f35'   [0x0a, 0x1f, 0x35]
    hexToByte: function hexToByte(hexStr) {
        var result = [],
            t = void 0;
        for (var i = 0; i < hexStr.length; i += 2) {
            t = hexStr.substr(i, 2);
            t = parseInt(t, 16);
            result.push(t);
        }
        return result;
    },

    // [0x0a, 0x1f, 0x35]   '0a1f35'
    byteToHex: function byteToHex(bytes) {
        var result = [],
            t = void 0;
        for (var i = 0; i < bytes.length; i++) {
            t = bytes[i].toString(16).toUpperCase();
            if (t.length < 2) {
                t = '0' + t;
            }
            result.push(t);
        }
        return result.join('');
    },

    // 'abcdefg'   [0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67]
    strToByte: function strToByte(str) {
        var result = [],
            t = void 0;
        for (var i = 0; i < str.length; i++) {
            t = str.charCodeAt(i);
            result.push(t);
        }
        return result;
    },

    // [0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67]  'abcdefg'
    byteToStr: function byteToStr(bytes) {
        var result = [],
            t = void 0;
        for (var i = 0; i < bytes.length; i++) {
            t = String.fromCharCode(bytes[i]);
            result.push(t);
        }
        return result.join('');
    },
    xor: function xor(bytes1, bytes2) {
        var result = [],
            h1 = void 0,
            h2 = void 0;
        for (var i = 0; i < bytes1.length; i++) {
            h1 = bytes1[i];
            h2 = bytes2[i] || 0;
            result.push(h1 ^ h2);
        }
        return result;
    },
    encrypt: function encrypt(text) {
        var bt = void 0,
            bp = void 0;
        bt = this.strToByte(text);
        bp = this.strToByte(pass);
        return this.byteToHex(this.xor(bt, bp));
    },
    decrypt: function decrypt(enc) {
        var he = this.hexToByte(enc),
            hp = this.strToByte(pass),
            hr = this.xor(he, hp);
        return this.byteToStr(hr);
    }
};

exports.default = encodePassword;

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

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/core-js/promise\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _promise2 = _interopRequireDefault(_promise);

var _virtual = __webpack_require__(414);

var _fetch = __webpack_require__(24);

var _fetch2 = _interopRequireDefault(_fetch);

var _validate = __webpack_require__(297);

var _dctp = __webpack_require__(11);

var _dctp2 = _interopRequireDefault(_dctp);

var _inputNumber = __webpack_require__(746);

var _encodePassword = __webpack_require__(706);

var _encodePassword2 = _interopRequireDefault(_encodePassword);

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
        var validateUrl = function validateUrl(rule, value, callback) {
            if (value === '') {
                callback(new Error('请上传图片'));
            }
            callback();
        };
        var validateChineseName = function validateChineseName(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入名字'));
            }
            callback();
        };
        var validateShortName = function validateShortName(rule, value, callback) {
            if (value === '') callback(new Error('请输入简称'));
            if ((0, _validate.characterSize)(value) > 40) {
                callback(new Error('简称最大长度40'));
            }
            callback();
        };
        var validateEnglishName = function validateEnglishName(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入英文名称'));
            }
            if (value.length > 40) callback(new Error('请输入字母，最大长度40'));
            callback();
        };
        var validateSymbol = function validateSymbol(rule, value, callback) {
            if (value === '') callback(new Error('请输入符号'));
            if ((0, _validate.characterSize)(value) > 4) callback(new Error('符号最大长度4'));
            callback();
        };
        var validateAccessKey = function validateAccessKey(rule, value, callback) {
            if (value === '') callback(new Error('请输入accessKey'));
            if (!(0, _validate.validatePassword)(value) || value.length > 100) callback(new Error('输入字母和数字，最大长度100'));
            callback();
        };
        var validateSecretKey = function validateSecretKey(rule, value, callback) {
            if (value === '') callback(new Error('请输入secretKey'));
            if (!(0, _validate.validatePassword)(value) || value.length > 100) callback(new Error('输入字母和数字，最大长度100'));
            callback();
        };
        var validateWalletPassword = function validateWalletPassword(rule, value, callback) {
            if (value.length > 50) callback(new Error('输入字母和数字，最大长度50'));
            callback();
        };
        var validateAddressIp = function validateAddressIp(rule, value, callback) {
            if (value === '') callback(new Error('请输入IP地址'));
            if (!(0, _validate.validateIP)(value)) callback(new Error('IP地址不合法'));
            callback();
        };
        var validatePortNumber = function validatePortNumber(rule, value, callback) {
            if (value === '') callback(new Error('请输入端口号'));
            if (!(0, _validate.validateIpPort)(value)) callback(new Error('端口号不合法'));
            callback();
        };
        var validateOpenPrice = function validateOpenPrice(rule, value, callback) {
            if (value === '') callback(new Error('请输入开盘价'));
            if (!(0, _validate.validateSixDecimal)(value) || value * 1 > 10000000) callback(new Error('开盘价最大为9999999，小数点后最多6位'));
            callback();
        };
        var validateRechargeAmount = function validateRechargeAmount(rule, value, callback) {
            if (value === '') callback(new Error('请输入允许充值最大数量'));
            if (!(0, _validate.validateFourDecimal)(value) || value * 1 > 1000000000) callback(new Error('允许充值最大数量为999999999，小数点后最多4位'));
            callback();
        };
        var validateSummaryAddress = function validateSummaryAddress(rule, value, callback) {
            if ((0, _validate.characterSize)(value) > 100) callback(new Error('汇总地址最大长度100个字符'));
            callback();
        };

        var validateDurationTime = function validateDurationTime(rule, value, callback) {
            if (value === '') callback(new Error('请填写交易时间'));
            if (value === '24' || value === '0') callback();
            if (!(0, _validate.validateTimeArea)(value)) callback(new Error('时间格式不正确'));
            callback();
        };
        var validateFees = function validateFees(rule, value, callback) {
            if (value === '') callback(new Error('请输入手续费'));
            if (!(0, _validate.validateFourDecimal)(value) || value * 1 >= 10000) callback(new Error('手续费最大数量为10000，小数点后最多4位'));
            callback();
        };
        var validateNormal = function validateNormal(rule, value, callback) {
            if ((0, _validate.characterSize)(value) > 200) callback(new Error('最多输入200个字符'));
            callback();
        };
        var validateDescription = function validateDescription(rule, value, callback) {
            if ((0, _validate.characterSize)(value) > 500) callback(new Error('最多输入500个字符'));
            callback();
        };
        var validateNumber = function validateNumber(rule, value, callback) {
            if (value === '') callback(new Error('请输入数量'));
            if (!(0, _validate.validateEightDecimal)(value) || value * 1 >= 999999999 || value <= 0) callback(new Error('最大数量为999999999，小数点后最多8位'));
            callback();
        };
        return {
            itemWidth: '160px',
            centerDialogVisible: false,
            address: {
                id: '',
                size: '',
                password: ''
            },
            feesDialogVisible: false,
            listLoading: true,
            // 搜索框
            input: '',
            vitualLoading: false,
            //修改
            modification: false,
            //新增
            confirm: false,
            // 状态
            valueStatus: '',
            // 不可交易时间
            optionsHoliday: holidayBusinessScope,
            valueStock: '',
            // 充值确认次数   3-12次
            optionsNumber: [{ value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }, { value: 6, label: '6' }, { value: 7, label: '7' }, { value: 8, label: '8' }, { value: 9, label: '9' }, { value: 10, label: '10' }, { value: 11, label: '11' }, { value: 12, label: '12' }],
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
            virtualWidth: '160px',
            currentRow: null,
            // 表单信息
            tableData: [],
            tableHeader: [{
                label: "FID",
                prop: "baseSeq",
                width: 60
            }, {
                label: "名称",
                prop: "chineseName",
                width: 120
            }, {
                label: "英文名称",
                prop: "englishName",
                width: 120
            }, {
                label: "简称",
                prop: "shortName",
                width: 120
            }, {
                label: "状态",
                prop: "status",
                width: 80,
                formatter: function formatter(row, column, value) {
                    return value === 1 ? '禁用' : value === 2 ? '启用' : '';
                }
            }, {
                label: "符号",
                prop: "symbol",
                width: 80
            }, {
                label: "IP地址",
                prop: "addressIp",
                width: 160
            }, {
                label: "端口号",
                prop: "portNumber",
                width: 90
            }, {
                label: "每次最小提现数量",
                prop: "minWithdrawAmt",
                width: 160
            }, {
                label: "每次最大提现数量",
                prop: "maxWithdrawAmt",
                width: 160
            }, {
                label: "每天最大提现数量",
                prop: "maxWithdrawAmtDaily",
                width: 160
            }, {
                label: "每天提现次数",
                prop: "maxWithdrawNumDaily",
                width: 160
            }, {
                label: "总量",
                prop: "totalNum",
                width: 160
            }, {
                label: "是否可以充值",
                prop: "rechargeStatus",
                width: 120,
                formatter: function formatter(row, column, value) {
                    return value === 1 ? '否' : value === 2 ? '是' : '';
                }
            }, {
                label: "是否可以提现",
                prop: "withdrawStatus",
                width: 160,
                formatter: function formatter(row, column, value) {
                    return value === 1 ? '否' : value === 2 ? '是' : '';
                }
            }, {
                label: "充值是否自动到账",
                prop: "autoRecharge",
                width: 160,
                formatter: function formatter(row, column, value) {
                    return value === 1 ? '否' : value === 2 ? '是' : '';
                }
            }, {
                label: "创建时间",
                prop: "createTime",
                width: 180,
                formatter: function formatter(row, column, value) {
                    return _dctp2.default.utils.parseDateTimeStr(value);
                }
            }],
            //添加是的对象
            virtualCoinBase: {
                baseSeq: '',
                iconUrl: '',
                iconFullUrl: '',
                chineseName: '',
                shortName: '',
                englishName: '',
                symbol: '',
                status: '',
                accessKey: '',
                secretKey: '',
                walletPassword: '',
                addressIp: '',
                portNumber: '',
                rechargeStatus: 2,
                withdrawStatus: 2,
                autoRecharge: 1,
                autoWithdraw: 1,
                legalFlag: 1,
                firstStatus: 1,
                statusETH: 1,
                usdtStatus: 1,
                summaryAddress: '',
                confirmNum: 3,
                leastNum: '',
                priceNum: '',
                minWithdrawAmt: '',
                maxWithdrawAmt: '',
                maxWithdrawAmtDaily: '',
                maxWithdrawNumDaily: '',
                totalNum: '',
                erc20Status: '',
                erc20Url: '',
                contractAddress: '',
                decimals: '',
                mainPath: '',
                mainAddress: '',
                gasLimit: '',
                nonce: '',
                blockNum: '',
                sonPassword: '',
                threshold: '',
                authorizeAmount: ''
            },
            virtualCoinIntroduce: {
                baseSeq: '',
                introduceSeq: '',
                displayStatus: 1,
                officialWebUrl: '',
                walletAddressUrl: '',
                orepoolAddressUrl: '',
                developerSeq: '',
                releaseDate: '',
                kernelAlgorithm: '',
                blockSpeed: '',
                totalCirculation: '',
                totalStock: '',
                modeProof: '',
                adjustingDifficulty: '',
                blockAward: '',
                description: '',
                mainFeature: '',
                inadequacyMark: '',
                releasePrice: '',
                whitePaper: '',
                blockExplorer: ''
            },
            virtualCoinProcedure: {
                baseSeq: '',
                procedureSeq: '',
                fetchOne: '0',
                fetchTwo: '0',
                fetchThree: '0',
                fetchFour: '0',
                fetchFive: '0',
                fetchSix: '0',
                fetchSeven: '0'
            },
            rules: {
                iconUrl: [{ validator: validateUrl, trigger: 'blur' }],
                chineseName: [{ validator: validateChineseName, trigger: 'blur' }],
                shortName: [{ validator: validateShortName, trigger: 'blur' }],
                englishName: [{ validator: validateEnglishName, trigger: 'blur' }],
                symbol: [{ validator: validateSymbol, trigger: 'blur' }],
                accessKey: [{ validator: validateAccessKey, trigger: 'blur' }],
                secretKey: [{ validator: validateSecretKey, trigger: 'blur' }],
                walletPassword: [{ validator: validateWalletPassword, trigger: 'blur' }],
                addressIp: [{ validator: validateAddressIp, trigger: 'blur' }],
                portNumber: [{ validator: validatePortNumber, trigger: 'blur' }],
                rechargeAmount: [{ validator: validateRechargeAmount, trigger: 'blur' }],
                summaryAddress: [{ validator: validateSummaryAddress, trigger: 'blur' }],
                startTime: [{ validator: validateDurationTime, trigger: 'blur' }],
                fetchOne: [{ validator: validateFees, trigger: 'blur' }],
                fetchTwo: [{ validator: validateFees, trigger: 'blur' }],
                fetchThree: [{ validator: validateFees, trigger: 'blur' }],
                fetchFour: [{ validator: validateFees, trigger: 'blur' }],
                fetchFive: [{ validator: validateFees, trigger: 'blur' }],
                fetchSix: [{ validator: validateFees, trigger: 'blur' }],
                fetchSeven: [{ validator: validateFees, trigger: 'blur' }],
                officialWebUrl: [{ validator: validateNormal, trigger: 'blur' }],
                walletAddressUrl: [{ validator: validateNormal, trigger: 'blur' }],
                orepoolAddressUrl: [{ validator: validateNormal, trigger: 'blur' }],
                developerSeq: [{ validator: validateNormal, trigger: 'blur' }],
                kernelAlgorithm: [{ validator: validateNormal, trigger: 'blur' }],
                blockSpeed: [{ validator: validateNormal, trigger: 'blur' }],
                totalCirculation: [{ validator: validateNormal, trigger: 'blur' }],
                totalStock: [{ validator: validateNormal, trigger: 'blur' }],
                modeProof: [{ validator: validateNormal, trigger: 'blur' }],
                adjustingDifficulty: [{ validator: validateNormal, trigger: 'blur' }],
                blockAward: [{ validator: validateNormal, trigger: 'blur' }],
                releasePrice: [{ validator: validateNormal, trigger: 'blur' }],
                whitePaper: [{ validator: validateNormal, trigger: 'blur' }],
                blockExplorer: [{ validator: validateNormal, trigger: 'blur' }],
                description: [{ validator: validateDescription, trigger: 'blur' }],
                mainFeature: [{ validator: validateNormal, trigger: 'blur' }],
                inadequacyMark: [{ validator: validateNormal, trigger: 'blur' }],
                minWithdrawAmt: [{ validator: validateNumber, trigger: 'blur' }],
                maxWithdrawAmt: [{ validator: validateNumber, trigger: 'blur' }],
                maxWithdrawAmtDaily: [{ validator: validateNumber, trigger: 'blur' }],
                totalNum: [{ validator: validateNumber, trigger: 'blur' }]
            },
            fees: {
                id: '',
                coinId: '',
                buyOne: '0',
                buyTwo: '0',
                buyThree: '0',
                buyFour: '0',
                buyFive: '0',
                buySix: '0',
                buySeven: '0',
                saleOne: '0',
                saleTwo: '0',
                saleThree: '0',
                saleFour: '0',
                saleFive: '0',
                saleSix: '0',
                saleSeven: '0'
            },
            ruleFees: {
                buyOne: [{ validator: validateFees, trigger: 'blur' }],
                buyTwo: [{ validator: validateFees, trigger: 'blur' }],
                buyThree: [{ validator: validateFees, trigger: 'blur' }],
                buyFour: [{ validator: validateFees, trigger: 'blur' }],
                buyFive: [{ validator: validateFees, trigger: 'blur' }],
                buySix: [{ validator: validateFees, trigger: 'blur' }],
                buySeven: [{ validator: validateFees, trigger: 'blur' }],
                saleOne: [{ validator: validateFees, trigger: 'blur' }],
                saleTwo: [{ validator: validateFees, trigger: 'blur' }],
                saleThree: [{ validator: validateFees, trigger: 'blur' }],
                saleFour: [{ validator: validateFees, trigger: 'blur' }],
                saleFive: [{ validator: validateFees, trigger: 'blur' }],
                saleSix: [{ validator: validateFees, trigger: 'blur' }],
                saleSeven: [{ validator: validateFees, trigger: 'blur' }]
            },
            //添加框初始隐藏
            dialogFormVisible: false,
            calendarTypeOptions: calendarTypeOptions,
            //总数
            total: 0,
            //搜索对象
            virtualcoinquery: {
                chineseName: '',
                status: '',
                page: {
                    pageNum: 1,
                    pageSize: 10
                }
            },
            formLabelWidth: '120px',
            fileList: [],
            fileListModify: [],
            data: {
                type: 1,
                usageType: 3
            },
            action: ''
        };
    },

    computed: {
        tableDataLength: function tableDataLength() {
            return this.tableData.length;
        }
    },
    methods: {
        showDeleteDialog: function showDeleteDialog(id, str) {
            var _this2 = this;

            this.$confirm('确认生成地址？', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {}).catch(function () {
                _this2.$message.info('操作取消');
            });
        },
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
            this.clearData();
            this.getList();
            this.fileList = [];
        },
        clearData: function clearData() {
            this.resetData(this.virtualCoinBase);
            this.resetData(this.virtualCoinIntroduce);
            this.resetData(this.virtualCoinProcedure);
            this.$refs['virtualCoinBase'].resetFields();
            this.$refs['virtualCoinIntroduce'].resetFields();
            this.$refs['virtualCoinProcedure'].resetFields();
        },
        resetData: function resetData(data) {
            var key = void 0;
            for (key in data) {
                switch (key) {
                    case 'rechargeStatus':
                        data[key] = 2;
                        break;
                    case 'withdrawStatus':
                        data[key] = 2;
                        break;
                    case 'autoRecharge':
                        data[key] = 1;
                        break;
                    case 'autoWithdraw':
                        data[key] = 1;
                        break;
                    case 'firstStatus':
                        data[key] = 1;
                        break;
                    case 'statusETH':
                        data[key] = 1;
                        break;
                    case 'usdtStatus':
                        data[key] = 1;
                        break;
                    case 'confirmNum':
                        data[key] = 3;
                        break;
                    case 'displayStatus':
                        data[key] = 1;
                        break;
                    default:
                        data[key] = '';
                }
            }
        },
        setData: function setData(newData, oldData) {
            var key = void 0;
            for (key in newData) {
                switch (key) {
                    default:
                        newData[key] = oldData[key] === null ? '' : oldData[key];
                        break;
                }
            }
        },
        checkFrom: function checkFrom(formName) {
            this.$refs[formName].validate(function (valid) {
                return !!valid;
            });
        },

        //搜索功能
        getList: function getList() {
            var _this3 = this;

            this.listLoading = true;
            (0, _virtual.virtualcoin)(this.virtualcoinquery).then(function (response) {
                _this3.tableData = response.data.data;
                _this3.total = response.data.page.count;
                _this3.listLoading = false;
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

        //添加虚拟币
        commitVirtual: function commitVirtual() {
            var _this4 = this;

            var _this = this;
            this.$refs['virtualCoinBase'].validate(function (valid) {
                if (valid) {
                    _this4.$refs['virtualCoinIntroduce'].validate(function (valid) {
                        if (valid) {
                            _this4.$refs['virtualCoinProcedure'].validate(function (valid) {
                                if (valid) {
                                    var data = {
                                        virtualCoinBase: _this.virtualCoinBase,
                                        virtualCoinIntroduce: _this.virtualCoinIntroduce,
                                        virtualCoinProcedure: _this.virtualCoinProcedure
                                    };
                                    (0, _virtual.increasedVirtualcoin)(data).then(function (response) {
                                        if (response.result) {
                                            _this4.$message.success("添加成功!");
                                            _this4.confirm = false;
                                            _this4.getList();
                                        } else {
                                            _this4.$message.error(response.msg);
                                        }
                                    });
                                } else {
                                    _this4.$message.error('手续费用输入错误');
                                }
                            });
                        } else {
                            _this4.$message.error('关于币种输入错误');
                        }
                    });
                } else {
                    _this4.$message.error('基础信息输入错误');
                }
            });
        },


        //启用禁用虚拟币方法
        coinBase: function coinBase() {
            var _this5 = this;

            (0, _virtual.enableDisableCoin)(this.strNum).then(function (response) {
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
        enableDisable: function enableDisable(int, baseSeq, str) {
            var _this6 = this;

            /*let _this = this;
            if (_this.currentRow === null) {
                this.$message('没有选择要' + str + '的虚拟币');
            } else if (int === _this.currentRow.status) {
                this.$message('已经是' + str + '状态');
            } else {*/
            this.$confirm('要' + str + '此虚拟币,是否继续', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                if (int === 1) {
                    _this6.strNum = '/' + baseSeq + '/forbid';
                    _this6.coinBase();
                } else if (int === 2) {
                    _this6.strNum = '/' + baseSeq + '/enable';
                    _this6.coinBase();
                }
            }).catch(function () {
                _this6.$message.info('操作已取消');
            });
        },

        //修改虚拟币开始
        modificationCoin: function modificationCoin(int) {
            var _this7 = this;

            this.action = 'update';
            (0, _virtual.virtualCoinName)(int).then(function (response) {
                _this7.setData(_this7.virtualCoinBase, response.data.virtualCoinBase);
                if (response.data.virtualCoinIntroduce !== null) {
                    _this7.setData(_this7.virtualCoinIntroduce, response.data.virtualCoinIntroduce);
                }
                _this7.setData(_this7.virtualCoinProcedure, response.data.virtualCoinProcedure);
                _this7.fileList = [{ name: '当前图片', url: response.data.virtualCoinBase.iconFullUrl }];
            });
            this.confirm = true;
        },
        modificationCoinBase: function modificationCoinBase() {
            var _this8 = this;

            var _this = this;
            console.log(this.virtualCoinProcedure);
            this.$refs['virtualCoinBase'].validate(function (valid) {
                if (valid) {
                    _this8.$refs['virtualCoinIntroduce'].validate(function (valid) {
                        if (valid) {
                            _this8.$refs['virtualCoinProcedure'].validate(function (valid) {
                                if (valid) {
                                    var data = {
                                        virtualCoinBase: _this.virtualCoinBase,
                                        virtualCoinIntroduce: _this.virtualCoinIntroduce,
                                        virtualCoinProcedure: _this.virtualCoinProcedure
                                    };
                                    (0, _virtual.amendCoinBase)(data, _this8.virtualCoinBase.baseSeq).then(function (response) {
                                        if (response.result) {
                                            _this8.$message.success("修改成功!");
                                            _this8.confirm = false;
                                            _this8.getList();
                                        } else {
                                            _this8.$message.error(response.msg);
                                        }
                                    });
                                } else {
                                    _this8.$message.error('请填写手续费率');
                                }
                            });
                        } else {
                            _this8.$message.error('关于币种输入错误');
                        }
                    });
                } else {
                    _this8.$message.error('基础信息输入错误');
                }
            });
        },

        //修改虚拟币结束
        //点击事件获取选中的单条信息的对象值
        /*handleCurrentChange(val) {
            this.currentRow = val;
        },*/
        getAddress: function getAddress() {
            var _this9 = this;

            var _this = this;
            this.vitualLoading = true;
            var newAddress = {
                id: this.address.id,
                size: this.address.size,
                password: this.address.password
            };
            newAddress.password = _encodePassword2.default.encrypt(this.address.password);
            (0, _virtual.getNewAddress)(newAddress).then(function (response) {
                if (response.result) {
                    _this9.centerDialogVisible = false;
                }
                _this9.getMessage(response.msg, response.result);
                _this9.vitualLoading = false;
            }).catch(function (response) {
                _this.$message.error('请求失败');
                _this.vitualLoading = false;
            });
        },
        getAddressOnId: function getAddressOnId(id) {
            this.address.id = id;
            this.centerDialogVisible = true;
        },
        handleRemove: function handleRemove(file, fileList) {
            this.virtualCoinBase.iconUrl = '';
        },
        handleSuccess: function handleSuccess(response, file, fileList) {
            this.fileList = [fileList[fileList.length - 1]];
            this.virtualCoinBase.iconUrl = response.data;
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
        },
        measurementWallet: function measurementWallet(int) {
            var _this10 = this;

            var _this = this;
            this.vitualLoading = true;
            (0, _virtual.testCoinWallet)(int).then(function (response) {
                if (response.result) {
                    _this10.msg = response.msg;
                    _this10.$message({
                        type: 'success',
                        message: _this10.msg
                    });
                } else {
                    _this10.msg = response.msg;
                    _this10.$message({
                        type: 'error',
                        message: _this10.msg
                    });
                }
                _this10.vitualLoading = false;
            }).catch(function (response) {
                _this.$message.error('连接失败');
                _this.vitualLoading = false;
            });
        },
        handleTimeChange: function handleTimeChange(time) {
            this.virtualCoinIntroduce.releaseDate = time;
        },
        feesDialogClose: function feesDialogClose() {
            this.resetFees();
        },
        resetFees: function resetFees() {
            var key = void 0;
            for (key in this.fees) {
                switch (key) {
                    default:
                        this.fees[key] = '0';
                }
            }
        },
        showFeesDialog: function showFeesDialog(id) {
            var _this = this;
            return new _promise2.default(function (resolve, reject) {
                (0, _fetch2.default)({
                    url: '/admin/getOtcTransactionFeesByCoinId/' + id,
                    method: 'get'
                }).then(function (response) {
                    if (response.result) {
                        if (response.data) {
                            _this.fees = response.data;
                        }
                        _this.fees.coinId = id;
                        _this.feesDialogVisible = true;
                    }
                }).catch();
            });
        },
        modifyFees: function modifyFees() {
            var _this = this;
            this.$refs['fees'].validate(function (valid) {
                if (valid) {
                    return new _promise2.default(function (resolve, reject) {
                        (0, _fetch2.default)({
                            url: 'admin/saveOrUpdateOtcTransactionFees',
                            method: 'put',
                            data: _this.fees
                        }).then(function (response) {
                            if (response.result) {
                                _this.feesDialogVisible = false;
                            }
                            _this.getMessage(response.msg, response.result);
                        }).catch();
                    });
                }
            });
        }
    },
    created: function created() {
        this.getList();
    }
};

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(152)(true);
// imports


// module
exports.push([module.i, ".input-short[data-v-7dc1d1b6]{width:300px}.input-fee[data-v-7dc1d1b6]{width:90px}.m-serviceCharge .el-form-item[data-v-7dc1d1b6]{display:inline-block;width:49%;margin-bottom:10px}", "", {"version":3,"sources":["C:/Users/XY-5-16-02/Desktop/dctp-admin-code/src/views/virtual/virtualType.vue"],"names":[],"mappings":"AACA,8BACE,WAAa,CACd,AACD,4BACE,UAAY,CACb,AACD,gDACE,qBAAsB,AACtB,UAAW,AACX,kBAAoB,CACrB","file":"virtualType.vue","sourcesContent":["\n.input-short[data-v-7dc1d1b6] {\n  width: 300px;\n}\n.input-fee[data-v-7dc1d1b6] {\n  width: 90px;\n}\n.m-serviceCharge .el-form-item[data-v-7dc1d1b6] {\n  display: inline-block;\n  width: 49%;\n  margin-bottom: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(908);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("d7afbaf0", content, true);

/***/ })

});
//# sourceMappingURL=10.b00115186fb1d12483bf.js.map