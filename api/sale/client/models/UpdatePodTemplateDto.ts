/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdatePodTemplateDto = {
  name?: string;
  podProductTypeId?: number;
  podCategoryId?: number;
  podTechniqueId?: number;
  description?: string;
  supplierContact?: string;
  benefit?: number;
  othersFee?: number;
  serviceFee?: number;
  keyFeature?: string;
  sizeGuide?: string;
  isStock?: boolean;
  isActive?: boolean;
  variants?: Array<{
    isActive: boolean;
    supplierCost: number;
    podTemplateVariantId: number;
  }>;
  podPrintArea?: Array<{
    printCost: number;
    podPrintAreaId: number;
  }>;
};

