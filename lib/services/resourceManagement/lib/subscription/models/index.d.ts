/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Location information.
 */
export interface Location {
  /**
   * The fully qualified ID of the location. For example,
   * /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus.
   */
  readonly id?: string;
  /**
   * The subscription ID.
   */
  readonly subscriptionId?: string;
  /**
   * The location name.
   */
  readonly name?: string;
  /**
   * The display name of the location.
   */
  readonly displayName?: string;
  /**
   * The latitude of the location.
   */
  readonly latitude?: string;
  /**
   * The longitude of the location.
   */
  readonly longitude?: string;
}

/**
 * Subscription policies.
 */
export interface SubscriptionPolicies {
  /**
   * The subscription location placement ID. The ID indicates which regions are visible for a
   * subscription. For example, a subscription with a location placement Id of Public_2014-09-01
   * has access to Azure public regions.
   */
  readonly locationPlacementId?: string;
  /**
   * The subscription quota ID.
   */
  readonly quotaId?: string;
  /**
   * The subscription spending limit. Possible values include: 'On', 'Off', 'CurrentPeriodOff'
   */
  readonly spendingLimit?: string;
}

/**
 * Subscription information.
 */
export interface Subscription {
  /**
   * The fully qualified ID for the subscription. For example,
   * /subscriptions/00000000-0000-0000-0000-000000000000.
   */
  readonly id?: string;
  /**
   * The subscription ID.
   */
  readonly subscriptionId?: string;
  /**
   * The subscription display name.
   */
  readonly displayName?: string;
  /**
   * The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted.
   * Possible values include: 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
   */
  readonly state?: string;
  /**
   * The subscription policies.
   */
  subscriptionPolicies?: SubscriptionPolicies;
  /**
   * The authorization source of the request. Valid values are one or more combinations of Legacy,
   * RoleBased, Bypassed, Direct and Management. For example, 'Legacy, RoleBased'.
   */
  authorizationSource?: string;
}

/**
 * Tenant Id information.
 */
export interface TenantIdDescription {
  /**
   * The fully qualified ID of the tenant. For example,
   * /tenants/00000000-0000-0000-0000-000000000000.
   */
  readonly id?: string;
  /**
   * The tenant ID. For example, 00000000-0000-0000-0000-000000000000.
   */
  readonly tenantId?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Resources
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
  /**
   * Description of the operation.
   */
  description?: string;
}

/**
 * Microsoft.Resources operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Result of the request to list Microsoft.Resources operations. It contains a list of operations
 * and a URL link to get the next set of results.
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * Location list operation response.
 */
export interface LocationListResult extends Array<Location> {
}

/**
 * Subscription list operation response.
 */
export interface SubscriptionListResult extends Array<Subscription> {
  /**
   * The URL to get the next set of results.
   */
  nextLink: string;
}

/**
 * Tenant Ids information.
 */
export interface TenantListResult extends Array<TenantIdDescription> {
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink: string;
}
