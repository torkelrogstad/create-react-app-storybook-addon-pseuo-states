// @ts-nocheck
const loggerPack = require("@storybook/node-logger");
const utility = require('util');
const postcssPseudoClasses = require('postcss-pseudo-classes');

function modifyRules(rule) {

    if (rule.test) {
        // loggerPack.logger.info(
        //     `==> REACT webpack config - rule: ${utility.inspect(rule.test, {
        //         showHidden: false,
        //         depth: null,
        //     })}`
        // );
        if (rule.test && rule.test.toString().match(/.(scss|sass)/)) {
            // loggerPack.logger.info(
            //     `==> REACT webpack config - rule: ${utility.inspect(rule, {
            //         showHidden: false,
            //         depth: null,
            //     })}`
            // );
            rule.use.map(loader => {
                if ((loader && loader.loader && loader.loader.indexOf('/postcss-loader') >= 0)) {
                    // loggerPack.logger.info(
                    //     `==> REACT webpack config - loader: ${utility.inspect(loader, {
                    //         showHidden: false,
                    //         depth: null,
                    //     })}`
                    // );
                    // loggerPack.logger.info(
                    //     `==> REACT webpack config - loader: ${utility.inspect(loader.options.plugins(), {
                    //         showHidden: false,
                    //         depth: null,
                    //     })}`
                    // );

                    const defaultPlugins = loader.options.plugins;
                    loader.options.plugins = () => {
                        return [...defaultPlugins(), postcssPseudoClasses({})];
                    };
                    // loggerPack.logger.info(
                    //     `==> REACT webpack config - loader: ${utility.inspect(loader.options.plugins(), {
                    //         showHidden: false,
                    //         depth: null,
                    //     })}`
                    // );
                }

                if ((loader && loader.loader && loader.loader.indexOf('/css-loader') >= 0)) {
                    loggerPack.logger.info(
                        `==> REACT webpack config - css-loader: ${utility.inspect(loader, {
                            showHidden: false,
                            depth: null,
                        })}`
                    );

                    // overwrite css-loader's module ident name
                    if (loader.options && loader.options.modules) {
                        loader.options.modules.localIdentName = '[path][name]__[local]';
                        // TODO check if nothing breaks
                        delete loader.options.modules.getLocalIdent;// = () => '[path][name]__[local]';
                    }

                }
            })
        }
    } else if (rule.oneOf) {
        rule.oneOf.map(innerRule => {
            modifyRules(innerRule);
        })
    }

}

function webpackFinal(webpackConfig = {}, options = {}) {
    webpackConfig.module.rules.map(r => {
        modifyRules(r);
        return r;
    });

    return webpackConfig;
}

module.exports = {webpackFinal};
