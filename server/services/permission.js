'use strict';

const domain = require('../domain/permission');
const createActionProvider = require('../domain/action/provider');
const createConditionProvider = require('../domain/condition/provider');
const createPermissionsManager = require('./permission/permissions-manager');
const createPermissionEngine = require('./permission/engine');
const createSectionsBuilder = require('./permission/sections-builder');
const permissionQueries = require('./permission/queries');

const actionProvider = createActionProvider();
const conditionProvider = createConditionProvider();
const sectionsBuilder = createSectionsBuilder();

const sanitizePermission = domain.sanitizePermissionFields;

const engine = createPermissionEngine({
  providers: { action: actionProvider, condition: conditionProvider },
});

module.exports = {
  // Queries / Actions
  ...permissionQueries,
  // Utils
  createPermissionsManager,
  sectionsBuilder,
  sanitizePermission,
  // Engine
  engine,
  // Providers
  actionProvider,
  conditionProvider,
};
