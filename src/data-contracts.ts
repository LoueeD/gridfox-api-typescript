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
  GBP = 'GBP',
  USD = 'USD',
  EUR = 'EUR',
}

export enum DataAccessLevel {
  None = 'None',
  Read = 'Read',
  Create = 'Create',
  Edit = 'Edit',
  Delete = 'Delete',
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
  Number = 'Number',
  Money = 'Money',
  Percentage = 'Percentage',
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
  None = 'None',
  Created = 'Created',
  Updated = 'Updated',
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
  None = 'None',
  Standard = 'Standard',
  ProjectAdmin = 'ProjectAdmin',
  AccountAdmin = 'AccountAdmin',
}

export enum PublicFieldType {
  Text = 'text',
  TextArea = 'textArea',
  RichText = 'richText',
  Url = 'url',
  Number = 'number',
  Money = 'money',
  Date = 'date',
  DateTime = 'dateTime',
  Checkbox = 'checkbox',
  File = 'file',
  List = 'list',
  Child = 'child',
  Parent = 'parent',
  ManyToMany = 'manyToMany',
  AutoCounter = 'autoCounter',
  Image = 'image',
  Icon = 'icon',
  Formula = 'formula',
  User = 'user',
  Percentage = 'percentage',
  MultiSelectList = 'multiSelectList',
  MultiSelectUser = 'multiSelectUser',
}

export enum RecordFilterType {
  Field = 'Field',
  CreatedBy = 'CreatedBy',
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
  ProjectAdmin = 'ProjectAdmin',
  Custom = 'Custom',
  Default = 'Default',
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
