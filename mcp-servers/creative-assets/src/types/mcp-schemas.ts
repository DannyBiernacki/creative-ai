// mcp-schemas.ts
export interface MCPRequest {
  tool: string;
  params: Record<string, any>;
}

export interface MCPResponse {
  result: any;
  error?: string;
}
