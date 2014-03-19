'use strict';
/*!
 * Transform 2D Component unit tests
 */

/**
 * Module Dependencies
 */

var test = require('tape'),
    sinon = require('sinon'),
    Transform2DProvider = require('../index'),
    Transform2D,
    transform,
    scope;

/**
 * Setup
 */

var setup = function (t) {
  scope = {};
  Transform2D = Transform2DProvider();
  transform = Transform2D(scope);
};

/**
 * Teardown
 */

var teardown = function (t) {
  
};

/**
 * Transform2D Class
 */

test('Transform2D', function (t) {
  setup(t);
  t.plan(1);
  t.ok(Transform2D, 'class should exist');
  teardown(t);
});

/**
 * Instance
 */

test('transform component should add position to scope', function (t) {
  setup(t);
  t.plan(3);
  t.ok(scope.position, 'scope.position should exist');
  t.equal(scope.position.x, 0);
  t.equal(scope.position.y, 0);
  teardown(t);
});

test('transform component should add rotation to scope', function (t) {
  setup(t);
  t.plan(1);
  t.equal(scope.rotation, 0);
  teardown(t);
});