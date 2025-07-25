/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { _36_Enums_StoreUserInviteStatus } from '../models/_36_Enums_StoreUserInviteStatus';
import type { CreateStaffDto } from '../models/CreateStaffDto';
import type { PrismaJson_Permissions } from '../models/PrismaJson_Permissions';
import type { UpdateStaffDto } from '../models/UpdateStaffDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StaffService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStaff({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: CreateStaffDto,
  }): CancelablePromise<{
    inviteId: string;
    inviteStatus: _36_Enums_StoreUserInviteStatus;
    userName: string;
    permissions: PrismaJson_Permissions;
    isOwner: boolean;
    role: _36_Enums_StoreRole;
    userId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/store/{storeId}/staff',
      path: {
        'storeId': storeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getAllStaff({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<Array<({
    User: {
      avatar: string;
      email: string;
      name: string;
      updatedAt: string;
      createdAt: string;
      id: string;
    };
  } & {
    inviteId: string;
    inviteStatus: _36_Enums_StoreUserInviteStatus;
    userName: string;
    permissions: PrismaJson_Permissions;
    isOwner: boolean;
    role: _36_Enums_StoreRole;
    userId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  })>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/store/{storeId}/staff',
      path: {
        'storeId': storeId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public updateStaff({
    storeId,
    userId,
    requestBody,
  }: {
    storeId: string,
    userId: string,
    requestBody: UpdateStaffDto,
  }): CancelablePromise<{
    inviteId: string;
    inviteStatus: _36_Enums_StoreUserInviteStatus;
    userName: string;
    permissions: PrismaJson_Permissions;
    isOwner: boolean;
    role: _36_Enums_StoreRole;
    userId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/store/{storeId}/staff/{userId}',
      path: {
        'storeId': storeId,
        'userId': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public deleteStaff({
    storeId,
    userId,
  }: {
    storeId: string,
    userId: string,
  }): CancelablePromise<{
    inviteId: string;
    inviteStatus: _36_Enums_StoreUserInviteStatus;
    userName: string;
    permissions: PrismaJson_Permissions;
    isOwner: boolean;
    role: _36_Enums_StoreRole;
    userId: string;
    updatedAt: string;
    createdAt: string;
    storeId: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/store/{storeId}/staff/{userId}',
      path: {
        'storeId': storeId,
        'userId': userId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
