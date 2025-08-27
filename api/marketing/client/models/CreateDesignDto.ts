/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DesignVariant } from './DesignVariant';
import type { DesignVariantOptionsPayLoad } from './DesignVariantOptionsPayLoad';
import type { FileTemplate } from './FileTemplate';
export type CreateDesignDto = {
  podTemplateId: number;
  storeId: string;
  name: string;
  description?: string;
  keyFeature?: string;
  sizeGuide?: string;
  supplierContact?: string;
  sku?: string;
  benefit?: number;
  othersFee?: number;
  serviceFee?: number;
  variantOption: Array<DesignVariantOptionsPayLoad>;
  variants: Array<DesignVariant>;
  files: Array<FileTemplate>;
  isDraft?: boolean;
};

