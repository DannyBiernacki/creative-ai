// asset-types.ts
export type AssetType = 'image' | 'video' | 'audio';

export interface Asset {
  id: string;
  type: AssetType;
  url: string;
  metadata: Record<string, any>;
}
