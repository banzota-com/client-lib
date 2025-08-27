import type { TemplateVariantOptionValues } from './TemplateVariantOptionValues';
export type PodTemplateVariantData = {
    isActive: boolean;
    variantOption: TemplateVariantOptionValues;
    supplierCost: number;
    sku?: string;
    name: string;
};
