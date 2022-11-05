/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ProblemDetails, UserPermissionsDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Permissions<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Permissions
   * @name PermissionsList
   * @summary Get the permissions of a user for a project.
   * @request GET:/permissions
   * @secure
   */
  permissionsList = (params: RequestParams = {}) =>
    this.request<UserPermissionsDto, ProblemDetails | void>({
      path: `/permissions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
