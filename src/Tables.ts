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

import { ApiErrorResponse, ProblemDetails, TableDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Tables<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Tables
   * @name TablesList
   * @summary Gets the tables in the Project.
   * @request GET:/tables
   * @secure
   */
  tablesList = (params: RequestParams = {}) =>
    this.request<TableDto[], ApiErrorResponse | ProblemDetails | void>({
      path: `/tables`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
