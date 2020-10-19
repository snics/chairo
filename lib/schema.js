'use strict';

// Load Modules

const Joi = require('@hapi/joi');
const Hoek = require('@hapi/hoek');

// Declare internals

const internals = {};

exports.action = function (options, message) {

    const result = internals.action.validate(options);
    Hoek.assert(!result.error, message);
    return result.value;
};

exports.compose = function (options, message) {

    const result = internals.compose.validate(options);
    Hoek.assert(!result.error, message);
    return result.value;
};

internals.action =  Joi.object({
    cache: Joi.object(),
    generateKey: Joi.func()
});

internals.compose = Joi.object({
    template: Joi.string().required(),
    context: Joi.object().required(),
    options: Joi.object()
});
