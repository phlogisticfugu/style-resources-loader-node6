"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const loader_utils_1 = require("loader-utils");
const _1 = require("./");
function getNormalizedOptions() {
    const defaultInjector = (source, resources) => resources.map(({ content }) => content).join('') + source;
    const defaultGlobOptions = {};
    const defaultResolveUrl = true;
    const { patterns, injector = defaultInjector, globOptions = defaultGlobOptions, resolveUrl = defaultResolveUrl } = loader_utils_1.getOptions(this) || {};
    if (!_1.isString(patterns) && !(Array.isArray(patterns) && patterns.every(_1.isString))) {
        throw new TypeError('[style-resources-loader] Expected options.patterns to be a string or an array of string. ' + `Instead received ${typeof patterns}.`);
    }
    if (typeof injector !== 'function') {
        throw new TypeError('[style-resources-loader] Expected options.injector to be a function. ' + `Instead received ${typeof injector}.`);
    }
    if (typeof globOptions !== 'object') {
        throw new TypeError('[style-resources-loader] Expected options.globOptions to be an object. ' + `Instead received ${typeof globOptions}.`);
    }
    if (typeof resolveUrl !== 'boolean') {
        throw new TypeError('[style-resources-loader] Expected options.resolveUrl to be a boolean. ' + `Instead received ${typeof resolveUrl}.`);
    }
    return {
        patterns,
        injector,
        globOptions,
        resolveUrl
    };
}
exports.getNormalizedOptions = getNormalizedOptions;
//# sourceMappingURL=getNormalizedOptions.js.map