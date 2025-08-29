import type { VariantOptionValues } from './VariantOptionValues';
export type UpdateDesignVariant = {
    isActive: boolean;
    variantOption: VariantOptionValues;
    comparePrice: number;
    price: number;
    sku?: string;
    name?: string;
    podTemplateVariantId: number;
    id?: number;
};
