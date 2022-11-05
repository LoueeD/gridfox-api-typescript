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
  OrderByInternal,
  ProblemDetails,
  ResourceCreatedValue,
  SearchRecordResult,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Data<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags RuntimeData
   * @name DataDetail
   * @summary Gets the record with the given referenceFieldValue in the specified table and project.
   * @request GET:/data/{tableName}/{referenceFieldValue}
   * @secure
   */
  dataDetail = (
    tableName: string,
    referenceFieldValue: string,
    params: RequestParams = {}
  ) =>
    this.request<Record<string, any>, ApiErrorResponse | ProblemDetails | void>(
      {
        path: `/data/${tableName}/${referenceFieldValue}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }
    );
  /**
   * No description
   *
   * @tags RuntimeData
   * @name DataUpdate
   * @summary Updates the record with the given referenceFieldValue in the specified table, based on the specified model.
   * @request PUT:/data/{tableName}/{referenceFieldValue}
   * @secure
   */
  dataUpdate = (
    tableName: string,
    referenceFieldValue: string,
    data: Record<string, any>,
    params: RequestParams = {}
  ) =>
    this.request<void, ApiErrorResponse | ProblemDetails | void>({
      path: `/data/${tableName}/${referenceFieldValue}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags RuntimeData
   * @name DataDelete
   * @summary Deletes the record with the given referenceFieldValue from the specified table.
   * @request DELETE:/data/{tableName}/{referenceFieldValue}
   * @secure
   */
  dataDelete = (
    tableName: string,
    referenceFieldValue: string,
    params: RequestParams = {}
  ) =>
    this.request<void, ApiErrorResponse | ProblemDetails | void>({
      path: `/data/${tableName}/${referenceFieldValue}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags RuntimeData
   * @name DataCreate
   * @summary Creates a record in the specified table based on the specified model.
   * @request POST:/data/{tableName}
   * @secure
   */
  dataCreate = (
    tableName: string,
    data: Record<string, any>,
    params: RequestParams = {}
  ) =>
    this.request<
      ResourceCreatedValue,
      ApiErrorResponse | ProblemDetails | void
    >({
      path: `/data/${tableName}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags RuntimeData
   * @name DataDetail2
   * @summary Searches for record in the specified table based on the specified search parameters.
   * @request GET:/data/{tableName}
   * @originalName dataDetail
   * @duplicate
   * @secure
   */
  dataDetail2 = (
    tableName: string,
    query?: {
      OrderByInternal?: OrderByInternal;
      ExtraParameters?: Record<string, string[]>;
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
    this.request<SearchRecordResult, ApiErrorResponse | ProblemDetails | void>({
      path: `/data/${tableName}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
 * No description
 *
 * @tags RuntimeData
 * @name DataCreate2
 * @summary Updates the record with the given referenceFieldValue in the specified table, by adding the specified files to
            the file field with the name fieldName.
 * @request POST:/data/{tableName}/{referenceFieldValue}/{fieldName}
 * @originalName dataCreate
 * @duplicate
 * @secure
 */
  dataCreate2 = (
    tableName: string,
    referenceFieldValue: string,
    fieldName: string,
    data: {
      Files?: File[];
    },
    params: RequestParams = {}
  ) =>
    this.request<void, ApiErrorResponse | ProblemDetails | void>({
      path: `/data/${tableName}/${referenceFieldValue}/${fieldName}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags RuntimeData
   * @name DataDetail3
   * @summary Downloads the file with the name fileName.
   * @request GET:/data/{tableName}/{referenceFieldValue}/{fieldName}/{fileName}
   * @originalName dataDetail
   * @duplicate
   * @secure
   */
  dataDetail3 = (
    tableName: string,
    referenceFieldValue: string,
    fieldName: string,
    fileName: string,
    params: RequestParams = {}
  ) =>
    this.request<void, ApiErrorResponse | ProblemDetails | void>({
      path: `/data/${tableName}/${referenceFieldValue}/${fieldName}/${fileName}`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
