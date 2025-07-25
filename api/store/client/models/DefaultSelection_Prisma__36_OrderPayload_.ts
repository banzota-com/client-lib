/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentStatus } from './_36_Enums_FulfillmentStatus';
import type { _36_Enums_OrderDisputeStatus } from './_36_Enums_OrderDisputeStatus';
import type { _36_Enums_OrderStatus } from './_36_Enums_OrderStatus';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
import type { PrismaJson_SyncBalanceAmount } from './PrismaJson_SyncBalanceAmount';
export type DefaultSelection_Prisma__36_OrderPayload_ = {
  disputeStatus: _36_Enums_OrderDisputeStatus;
  isHandleEvents: boolean;
  fingerPrint: string;
  taxTransactionId: string;
  customerLocale: string;
  currencyCustomerCode: string;
  paymentFee: number;
  paymentSource: string;
  timezoneLocalBrowser: string;
  fulfillmentCost: number;
  fulfillmentStatus: _36_Enums_FulfillmentStatus;
  isSyncTax: boolean;
  isSyncBalance: PrismaJson_SyncBalanceAmount;
  retentionRate: number;
  payoutIn: string;
  holdIn: string;
  latestNoItems: number;
  latestSubTotal: number;
  latestTotal: number;
  gatewayTransactionId: string;
  gatewayOrderId: string;
  supplierCost: number;
  discountShippingFee: number;
  noItems: number;
  totalAfterTax: number;
  taxable: boolean;
  taxNote: string;
  taxRate: number;
  tax: number;
  profitFulfillAdmin: number;
  deductedProfit: number;
  profit: number;
  subTotal: number;
  totalUSD: number;
  total: number;
  note: string;
  utmLink: string;
  historyTracking: any;
  additionalInfo: any;
  billingInfo: PrismaJson_BillingInfo;
  taxId: string;
  province: string;
  address2: string;
  address1: string;
  lastBalance: number;
  domain: string;
  paymentId: number;
  merchantId: string;
  currencyId: number;
  shippingFee: number;
  country: string;
  zipCode: string;
  city: string;
  isDeductedProfit: boolean;
  serviceFee: number;
  othersFee: number;
  platformFee: number;
  status: _36_Enums_OrderStatus;
  phone: string;
  email: string;
  name: string;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: string;
  fulfillmentShippingCost: number;
  discount: number;
};

