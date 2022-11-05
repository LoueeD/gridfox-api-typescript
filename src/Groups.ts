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
  ApiErrorResponse,
  ProblemDetails,
  UserGroupDtoPagingResult,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Groups<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Groups
   * @name GroupsList
   * @summary Searches user groups based on the specified searchRequest.
   * @request GET:/groups
   * @secure
   */
  groupsList = (
    query?: {
      GroupName?: string;
      OrderBy?: string;
      Descending?: boolean;
      Paged?: boolean;
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      UserGroupDtoPagingResult,
      ApiErrorResponse | ProblemDetails | void
    >({
      path: `/groups`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
