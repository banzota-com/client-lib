/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FileType } from './_36_Enums_FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
export type FileCreateTemplate = {
  color?: Array<{
    value: string;
    name: string;
  }>;
  groupLayers?: Array<{
    meshPoint?: Array<{
      'y': number;
      'x': number;
    }>;
    height?: number;
    width?: number;
    left?: number;
    top?: number;
    opacity?: number;
    blendMode?: string;
    url: string;
    subName?: string;
    name: string;
  }>;
  properties?: PrismaJson_PodFileProperties;
  type: _36_Enums_FileType;
  size?: string;
  url?: string;
  fileName?: string;
};

