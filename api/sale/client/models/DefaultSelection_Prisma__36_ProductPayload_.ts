/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_AvailableSet } from './PrismaJson_AvailableSet';
import type { PrismaJson_CustomVariantOptions } from './PrismaJson_CustomVariantOptions';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_PodPhotos } from './PrismaJson_PodPhotos';
import type { PrismaJson_VariantOptions } from './PrismaJson_VariantOptions';
export type DefaultSelection_Prisma__36_ProductPayload_ = {
  snapshotAt: string;
  podDesignId: number;
  podTemplateId: number;
  campaignId: string;
  isEnable: boolean;
  supplierContact: string;
  customVariantOption: PrismaJson_CustomVariantOptions;
  variantOption: PrismaJson_VariantOptions;
  availableSet: PrismaJson_AvailableSet;
  SKU: string;
  podPhotos: PrismaJson_PodPhotos;
  details: string;
  permalink: string;
  platformProductId: number;
  deleted: boolean;
  photos: PrismaJson_Photos;
  description: string;
  isActive: boolean;
  shippingFeeAdditional: number;
  shippingFee: number;
  name: string;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: number;
};

