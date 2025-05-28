---
rule "multi_agent_coordination" {
  description = "Multi-agent orchestration patterns for creative AI teams"
  when = "working with AI agents, workflow orchestration, or creative automation"
  then = """
    MULTI-AGENT CREATIVE ORCHESTRATION
    
    ## Agent Architecture Standards
    - 6 Core Agents: Research, Brand Strategy, Design, Development, UX Intelligence, Coordinator
    - All agent communication via MCP protocol exclusively
    - Centralized agent state in PostgreSQL with real-time updates
    - Intelligent load balancing based on agent capabilities and current load
    - Graceful failure handling with automatic fallbacks
    
    ## Agent Communication Protocol
    interface AgentMessage {
      type: 'task_assignment' | 'result_handoff' | 'coordination_request'
      from: AgentId
      to: AgentId | 'broadcast'
      payload: CreativeTaskData
      mcpContext?: MCPContext
      timestamp: number
      priority: 'low' | 'medium' | 'high' | 'urgent'
    }
    
    ## Creative Workflow Orchestration
    - Agent assignment based on task requirements and workload
    - Dependency management between agent tasks
    - Conflict resolution for competing agent solutions
    - Progress synchronization across all active agents
    - Performance optimization and resource allocation
    
    ## Background Processing Integration
    - Docker-based creative environment setup
    - Long-running tasks designed in chunks for background processing
    - Real-time progress tracking via WebSocket connections
    - Resource monitoring with CPU/memory usage alerts
    - Graceful task cancellation and cleanup procedures
    
    ## Quality Assurance Standards
    - Single responsibility principle for each agent
    - Stateless design where possible for reliability
    - Performance metrics tracking and optimization
    - Isolated error handling per agent
    - 90%+ test coverage for agent logic
    
    ## Creative Output Standards
    - 99%+ brand compliance for all generated assets
    - WCAG 2.1 AA accessibility compliance for designs
    - Core Web Vitals optimization for generated code
    - Multi-framework export support (React, Vue, Angular, Svelte)
    - Cross-browser compatibility for modern browsers
    """
}