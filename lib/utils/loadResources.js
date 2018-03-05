"use strict";

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

let loadResources = (() => {
    var _ref = (0, _asyncToGenerator3.default)(function* (source, callback) {
        try {
            const options = _1.getNormalizedOptions.call(this);
            const resources = yield _1.getResources.call(this, options);
            const { injector } = options;
            const next = injector(source, resources);
            if (typeof next !== 'string' && !(next instanceof Buffer)) {
                throw new TypeError('[style-resources-loader] Expected options.injector(...) returns a string or a Buffer. ' + `Instead received ${typeof next}.`);
            }
            return callback(null, next);
        } catch (err) {
            return callback(err);
        }
    });

    return function loadResources(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");

exports.loadResources = loadResources;
//# sourceMappingURL=loadResources.js.map