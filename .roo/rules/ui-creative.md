---
rule "ui_creative_development" {
  description = "UI/UX development standards for creative interfaces with AI integration"
  when = "working on UI components, creative interfaces, or user experience features"
  then = """
    CREATIVE UI/UX DEVELOPMENT STANDARDS
    
    ## Framework Stack (2025)
    - Core UI: Next.js 14+ + TypeScript 5.4+ + Tailwind CSS 3.4+
    - Components: shadcn/ui + Radix UI primitives for accessibility
    - Creative Canvas: react-konva + fabric.js + tldraw for interactive design
    - Animation: Framer Motion + Lottie React for micro-interactions
    - State: Zustand 4.5+ global, TanStack Query 5.0+ server state
    - AI Integration: Vercel AI SDK 3.1+ with streaming support
    
    ## Creative-Specific Component Patterns
    - MCP Integration Components: Real-time tool integration via MCP protocol
    - Agent Communication UI: Multi-agent coordination interfaces
    - Background Task Monitors: Long-running creative task status displays
    - Creative Workflow Orchestrators: Step-by-step AI-assisted workflows
    - Collaborative Canvas: Human + AI real-time design collaboration
    
    ## Performance Standards for Creative UI
    - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
    - Creative Canvas: 60fps minimum during AI-assisted interactions
    - Component Lazy Loading: Optimize heavy creative components
    - Agent Response UI: < 200ms latency for AI suggestion displays
    - Real-time Sync: < 100ms for collaborative updates
    
    ## Accessibility Requirements (Creative Focus)
    - WCAG 2.1 AA compliance for all creative interfaces
    - Screen reader support for MCP server status and tools
    - Keyboard navigation for complete MCP tool access
    - Voice commands for agent interaction (accessibility)
    - High contrast mode for MCP status indicators
    
    ## Creative Design Token Integration
    :root {
      /* AI-extracted brand colors via MCP */
      --brand-primary: var(--mcp-extracted-primary);
      --brand-secondary: var(--mcp-extracted-secondary);
      
      /* Agent status indicators */
      --agent-active: #3b82f6;
      --agent-idle: #94a3b8;
      --agent-processing: #f59e0b;
      
      /* MCP connection status */
      --mcp-connected: #22c55e;
      --mcp-disconnected: #ef4444;
      --mcp-processing: #f59e0b;
    }
    """
}