// provider-types.ts
export type Provider = 'openai' | 'stability' | 'runwayml' | 'elevenlabs';

export interface ProviderOptions {
  apiKey: string;
  [key: string]: any;
}
