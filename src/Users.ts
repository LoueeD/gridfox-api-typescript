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

import {
  AddUserDto,
  ApiErrorResponse,
  EditUserDto,
  ProblemDetails,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Users<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name UsersCreate
   * @summary Adds a user to the project.
   * @request POST:/users
   * @secure
   */
  usersCreate = (data: AddUserDto, params: RequestParams = {}) =>
    this.request<void, ApiErrorResponse | ProblemDetails | void>({
      path: `/users`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersUpdate
   * @summary Changes which group a user is in.
   * @request PUT:/users/{userId}
   * @secure
   */
  usersUpdate = (
    userId: number,
    data: EditUserDto,
    params: RequestParams = {}
  ) =>
    this.request<void, ApiErrorResponse | ProblemDetails | void>({
      path: `/users/${userId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersDelete
   * @summary Removes a user from the project.
   * @request DELETE:/users/{userId}
   * @secure
   */
  usersDelete = (userId: number, params: RequestParams = {}) =>
    this.request<void, ApiErrorResponse | void>({
      path: `/users/${userId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
