'use strict';
/*!
 * Transform 2D Component
 */

/**
 * Module Dependencies
 */

var Transform2D,
    Transform2DProvider;

/**
 * Transform 2D Component
 *
 * @api public
 */
Transform2D = function (scope) {

  scope.position = {};
  scope.position.x = 0;
  scope.position.y = 0;
  scope.rotation = 0;

};

Transform2DProvider = function () {
  return Transform2D;
};

/**
 * Module Exports
 */

exports = module.exports = Transform2DProvider;