---
rule "mcp_creative_integration" {
  description = "MCP protocol integration patterns for creative workflows"
  when = "working with MCP Group tools, tools, or creative integrations"
  then = """
    MCP CREATIVE INTEGRATION STANDARDS
    
    ## MCP Server Development
    - Use @modelcontextprotocol/sdk for ALL MCP server implementations
    - Transport: JSON-RPC 2.0 + Server-Sent Events for real-time
    - Naming: kebab-case for server names (creative-assets, code-export)
    - Version: Semantic versioning for all MCP Group tools
    
    ## Creative MCP Server Architecture
    interface CreativeMCPServer {
      tools: CreativeTool[]        // Brand extraction, design generation
      resources: CreativeResource[] // Asset libraries, templates
      prompts: CreativePrompt[]    // Brand analysis, design critique
      transport: 'stdio' | 'sse+fetch'
      authentication?: MCPAuth
    }
    
    ## Tool Definition Standards
    - Clear, actionable descriptions for creative tools
    - Comprehensive JSON schemas for all inputs
    - Standardized output formats for consistency
    - Detailed error responses with recovery suggestions
    - Performance targets: < 500ms for standard operations
    
    ## Creative Resource Management
    - Asset caching for creative resources
    - Version control for resource consistency
    - Access control for sensitive creative data
    - Performance optimization for < 1s response times
    
    ## Integration Testing Requirements
    - Test all tools with realistic creative scenarios
    - Validate error handling and recovery mechanisms
    - Performance testing under load conditions
    - Compatibility verification with multiple MCP clients
    
    ## Security Standards
    - Input validation for all MCP client inputs
    - Rate limiting for resource protection
    - Secure authentication for sensitive operations
    - Comprehensive audit logging for security
    """
}
