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

export interface AddUserDto {
  /** @format email */
  email: string;
  groupName: string;
}

/** Contains messages to return from the Api. */
export interface ApiErrorResponse {
  /** Gets or sets the error messages. */
  messages?: string[] | null;
}

export enum Currency {
  GBP = "GBP",
  USD = "USD",
  EUR = "EUR",
}

export enum DataAccessLevel {
  None = "None",
  Read = "Read",
  Create = "Create",
  Edit = "Edit",
  Delete = "Delete",
}

export interface EditUserDto {
  groupName: string;
}

export interface EntityPermissionsDto {
  /** @format uuid */
  id?: string;
  accessLevel?: DataAccessLevel;
  canImportExport?: boolean;
  fields?: FieldPermissionsDto[] | null;
  records?: RecordPermissionsDto[] | null;
}

export interface FieldDto {
  name?: string | null;
  type?: PublicFieldType;
  isRequired?: boolean;
  isUnique?: boolean;
  properties?: FieldProperties | null;
}

export interface FieldPermissionsDto {
  /** @format uuid */
  id?: string;
  accessLevel?: DataAccessLevel;
}

export type FieldProperties = object;

export type FileFieldProperties = {
  /** @format int32 */
  fileLimit?: number;
};

export type FormulaFieldProperties = {
  formulaType?: FormulaFieldType;
  /** @format int32 */
  decimalPlaces?: number | null;
  currency?: Currency | null;
};

export enum FormulaFieldType {
  Number = "Number",
  Money = "Money",
  Percentage = "Percentage",
}

export interface IntegrationsRecordDto {
  id?: string | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  updated?: string;
  data?: Record<string, any>;
}

export interface IntegrationsSearchRecordResult {
  records?: IntegrationsRecordDto[] | null;
  /** @format int32 */
  pageNumber?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  /** @format int64 */
  totalRecords?: number;
  /** @format int32 */
  totalPages?: number | null;
}

export type ListFieldProperties = {
  items?: ListItemDto[] | null;
};

export interface ListItemDto {
  value?: string | null;
  color?: string | null;
}

export type MoneyFieldProperties = {
  currency?: Currency;
};

export enum OrderByInternal {
  None = "None",
  Created = "Created",
  Updated = "Updated",
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export enum ProjectAccessLevel {
  None = "None",
  Standard = "Standard",
  ProjectAdmin = "ProjectAdmin",
  AccountAdmin = "AccountAdmin",
}

export enum PublicFieldType {
  Text = "text",
  TextArea = "textArea",
  RichText = "richText",
  Url = "url",
  Number = "number",
  Money = "money",
  Date = "date",
  DateTime = "dateTime",
  Checkbox = "checkbox",
  File = "file",
  List = "list",
  Child = "child",
  Parent = "parent",
  ManyToMany = "manyToMany",
  AutoCounter = "autoCounter",
  Image = "image",
  Icon = "icon",
  Formula = "formula",
  User = "user",
  Percentage = "percentage",
  MultiSelectList = "multiSelectList",
  MultiSelectUser = "multiSelectUser",
}

export enum RecordFilterType {
  Field = "Field",
  CreatedBy = "CreatedBy",
}

export interface RecordPermissionsDto {
  recordFilterType?: RecordFilterType;
  /** @format uuid */
  fieldId?: string | null;
  includeGroupUsers?: boolean;
  accessLevel?: DataAccessLevel;
}

export type RelationshipFieldProperties = {
  relatedTableName?: string | null;
};

/** Represents the value of a new resource. */
export interface ResourceCreatedValue {
  /** Gets or sets the id of the created resource. */
  referenceFieldValue?: string | null;
}

export interface SearchRecordResult {
  records?: Record<string, any>[] | null;
  /** @format int32 */
  pageNumber?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  /** @format int64 */
  totalRecords?: number;
  /** @format int32 */
  totalPages?: number | null;
}

export interface TableDto {
  name?: string | null;
  singularName?: string | null;
  referenceFieldName?: string | null;
  fields?: FieldDto[] | null;
}

export interface UserGroupDto {
  /** @format uuid */
  groupId?: string | null;
  name?: string | null;
  type?: UserGroupType;
  access?: DataAccessLevel | null;
  users?: UserGroupMemberDto[] | null;
}

export interface UserGroupDtoPagingResult {
  data?: UserGroupDto[] | null;
  /** @format int32 */
  pageNumber?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  /** @format int64 */
  totalRecords?: number;
  /** @format int32 */
  totalPages?: number | null;
}

export interface UserGroupMemberDto {
  /** @format int32 */
  id?: number;
  email?: string | null;
}

export enum UserGroupType {
  ProjectAdmin = "ProjectAdmin",
  Custom = "Custom",
  Default = "Default",
}

export interface UserPermissionsDto {
  /** @format uuid */
  projectId?: string;
  projectAccessLevel?: ProjectAccessLevel;
  isAccessible?: boolean;
  requireMfa?: boolean;
  /** @format uuid */
  groupId?: string | null;
  defaultGroupAccessLevel?: DataAccessLevel | null;
  entities?: EntityPermissionsDto[] | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Gridfox Public API
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  groups = {
    /**
     * No description
     *
     * @tags Groups
     * @name GroupsList
     * @summary Searches user groups based on the specified searchRequest.
     * @request GET:/groups
     * @secure
     */
    groupsList: (
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
      params: RequestParams = {},
    ) =>
      this.request<UserGroupDtoPagingResult, ApiErrorResponse | ProblemDetails | void>({
        path: `/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  permissions = {
    /**
     * No description
     *
     * @tags Permissions
     * @name PermissionsList
     * @summary Get the permissions of a user for a project.
     * @request GET:/permissions
     * @secure
     */
    permissionsList: (params: RequestParams = {}) =>
      this.request<UserPermissionsDto, ProblemDetails | void>({
        path: `/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  data = {
    /**
     * No description
     *
     * @tags RuntimeData
     * @name DataDetail
     * @summary Gets the record with the given referenceFieldValue in the specified table and project.
     * @request GET:/data/{tableName}/{referenceFieldValue}
     * @secure
     */
    dataDetail: (tableName: string, referenceFieldValue: string, params: RequestParams = {}) =>
      this.request<Record<string, any>, ApiErrorResponse | ProblemDetails | void>({
        path: `/data/${tableName}/${referenceFieldValue}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RuntimeData
     * @name DataUpdate
     * @summary Updates the record with the given referenceFieldValue in the specified table, based on the specified model.
     * @request PUT:/data/{tableName}/{referenceFieldValue}
     * @secure
     */
    dataUpdate: (
      tableName: string,
      referenceFieldValue: string,
      data: Record<string, any>,
      params: RequestParams = {},
    ) =>
      this.request<void, ApiErrorResponse | ProblemDetails | void>({
        path: `/data/${tableName}/${referenceFieldValue}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RuntimeData
     * @name DataDelete
     * @summary Deletes the record with the given referenceFieldValue from the specified table.
     * @request DELETE:/data/{tableName}/{referenceFieldValue}
     * @secure
     */
    dataDelete: (tableName: string, referenceFieldValue: string, params: RequestParams = {}) =>
      this.request<void, ApiErrorResponse | ProblemDetails | void>({
        path: `/data/${tableName}/${referenceFieldValue}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RuntimeData
     * @name DataCreate
     * @summary Creates a record in the specified table based on the specified model.
     * @request POST:/data/{tableName}
     * @secure
     */
    dataCreate: (tableName: string, data: Record<string, any>, params: RequestParams = {}) =>
      this.request<ResourceCreatedValue, ApiErrorResponse | ProblemDetails | void>({
        path: `/data/${tableName}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
    dataDetail2: (
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
      params: RequestParams = {},
    ) =>
      this.request<SearchRecordResult, ApiErrorResponse | ProblemDetails | void>({
        path: `/data/${tableName}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

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
    dataCreate2: (
      tableName: string,
      referenceFieldValue: string,
      fieldName: string,
      data: {
        Files?: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ApiErrorResponse | ProblemDetails | void>({
        path: `/data/${tableName}/${referenceFieldValue}/${fieldName}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

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
    dataDetail3: (
      tableName: string,
      referenceFieldValue: string,
      fieldName: string,
      fileName: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ApiErrorResponse | ProblemDetails | void>({
        path: `/data/${tableName}/${referenceFieldValue}/${fieldName}/${fileName}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  tables = {
    /**
     * No description
     *
     * @tags Tables
     * @name TablesList
     * @summary Gets the tables in the Project.
     * @request GET:/tables
     * @secure
     */
    tablesList: (params: RequestParams = {}) =>
      this.request<TableDto[], ApiErrorResponse | ProblemDetails | void>({
        path: `/tables`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersCreate
     * @summary Adds a user to the project.
     * @request POST:/users
     * @secure
     */
    usersCreate: (data: AddUserDto, params: RequestParams = {}) =>
      this.request<void, ApiErrorResponse | ProblemDetails | void>({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersUpdate
     * @summary Changes which group a user is in.
     * @request PUT:/users/{userId}
     * @secure
     */
    usersUpdate: (userId: number, data: EditUserDto, params: RequestParams = {}) =>
      this.request<void, ApiErrorResponse | ProblemDetails | void>({
        path: `/users/${userId}`,
        method: "PUT",
        body: data,-
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersDelete
     * @summary Removes a user from the project.
     * @request DELETE:/users/{userId}
     * @secure
     */
    usersDelete: (userId: number, params: RequestParams = {}) =>
      this.request<void, ApiErrorResponse | void>({
        path: `/users/${userId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
