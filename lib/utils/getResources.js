"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

let getResources = (() => {
    var _ref = (0, _asyncToGenerator3.default)(function* (options) {
        var _this = this;

        const { patterns, globOptions, resolveUrl } = options;
        const resourceFragments = yield _promise2.default.all((_1.isString(patterns) ? [patterns] : patterns).map((() => {
            var _ref2 = (0, _asyncToGenerator3.default)(function* (pattern) {
                const partialFiles = yield new _promise2.default(function (resolve, reject) {
                    return glob(pattern, globOptions, function (err, matches) {
                        return err ? reject(err) : resolve(matches.filter(_1.isStyleFile));
                    });
                });
                partialFiles.forEach(_this.dependency.bind(_this));
                const partialResources = yield _promise2.default.all(partialFiles.map((() => {
                    var _ref3 = (0, _asyncToGenerator3.default)(function* (file) {
                        const content = yield util.promisify(fs.readFile)(file, 'utf8');
                        const resource = { file, content };
                        return resolveUrl ? {
                            file,
                            content: _1.resolveImportUrl.call(_this, resource)
                        } : resource;
                    });

                    return function (_x3) {
                        return _ref3.apply(this, arguments);
                    };
                })()));
                return partialResources;
            });

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        })()));
        const resources = [].concat(...resourceFragments);
        return resources;
    });

    return function getResources(_x) {
        return _ref.apply(this, arguments);
    };
})();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const util = require("util");
const glob = require("glob");
const _1 = require("./");

exports.getResources = getResources;
//# sourceMappingURL=getResources.js.map