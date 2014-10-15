/* global Hoodie */
Hoodie.extend(function(hoodie, lib, utils) {
  'use strict';

  hoodie.createDb = hoodie.task.start.bind(hoodie, 'createdb');
});
