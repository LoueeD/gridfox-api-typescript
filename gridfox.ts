import { Data } from './src/Data';
import { Users } from './src/Users';
import { Tables } from './src/Tables';
import { ApiConfig } from './src/http-client';
import { Permissions } from './src/Permissions';
import { Groups } from './src/Groups';

export class GridfoxAPI {
  private gridfoxData: Data;
  private gridfoxUsers: Users;
  private gridfoxTables: Tables;
  private gridfoxPermissions: Permissions;
  private gridfoxGroups: Groups;
  private apiConfig: ApiConfig;
  constructor(options: { apiKey: string; baseUrl?: string }) {
    this.apiConfig = {
      baseUrl: options.baseUrl || 'https://api.gridfox.com',
      baseApiParams: { headers: { 'gridfox-api-key': options.apiKey } },
    };
    this.gridfoxData = new Data(this.apiConfig);
    this.gridfoxUsers = new Users(this.apiConfig);
    this.gridfoxTables = new Tables(this.apiConfig);
    this.gridfoxPermissions = new Permissions(this.apiConfig);
    this.gridfoxGroups = new Groups(this.apiConfig);
  }

  get groups() {
    return {
      list: this.gridfoxGroups.groupsList,
    };
  }

  get permissions() {
    return {
      list: this.gridfoxPermissions.permissionsList,
    };
  }

  get tables() {
    return {
      list: this.gridfoxTables.tablesList,
    };
  }

  get users() {
    return {
      create: this.gridfoxUsers.usersCreate,
      update: this.gridfoxUsers.usersUpdate,
      delete: this.gridfoxUsers.usersDelete,
    };
  }

  get data() {
    const getRecord = this.gridfoxData.dataDetail;
    const updateRecord = this.gridfoxData.dataUpdate;
    const newRecord = this.gridfoxData.dataCreate;
    const uploadFilesToRecord = this.gridfoxData.dataCreate2;
    const downloadFileFromRecord = this.gridfoxData.dataDetail3;
    const deleteRecord = this.gridfoxData.dataDelete;
    const searchRecords = this.gridfoxData.dataDetail2;

    return {
      getRecord,
      updateRecord,
      deleteRecord,
      newRecord,
      searchRecords,
      uploadFilesToRecord,
      downloadFileFromRecord,
    };
  }
}
