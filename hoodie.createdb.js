/* global Hoodie */
Hoodie.extend(function(hoodie) {
  'use strict';

  hoodie.createDb = hoodie.task('createdb').start;
});
