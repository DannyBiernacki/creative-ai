---
rule "background_processing" {
  description = "Background processing standards for autonomous creative tasks"
  when = "implementing background tasks, Docker environments, or autonomous workflows"
  then = """
    BACKGROUND CREATIVE PROCESSING STANDARDS
    
    ## Roo Code Background Agent Integration
    - Declarative environment setup in .roo/creative-environment.json
    - Docker-based creative task processing
    - Long-running creative workflows (4-12 hours)
    - Resource monitoring and automatic scaling
    - Task progress streaming and real-time updates
    
    ## Autonomous Creative Workflows
    - Brand identity generation (logo, colors, typography, guidelines) - 4-6 hours
    - Multi-page website creation (design + responsive code) - 6-8 hours
    - Design system development (components + documentation) - 8-12 hours
    - Asset optimization pipeline (batch processing) - 2-4 hours
    - A/B testing variant generation - 3-5 hours
    
    ## Background Task Architecture
    interface BackgroundCreativeTask {
      id: string
      type: 'brand_identity' | 'website_design' | 'design_system' | 'asset_optimization'
      status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled'
      progress: number // 0-100
      estimatedCompletion: Date
      resourceUsage: ResourceMetrics
      humanInterventionGates: InterventionPoint[]
    }
    
    ## Resource Management
    - Efficient CPU/memory usage for creative tasks
    - Automatic scaling based on task complexity
    - Memory optimization for large creative projects
    - Network bandwidth management for asset processing
    - Storage optimization for generated assets
    
    ## Quality Gates and Human Intervention
    - Automatic quality validation at key milestones
    - Human approval gates for critical creative decisions
    - Brand compliance checking throughout process
    - Accessibility validation for all generated designs
    - Performance benchmarking for exported code
    
    ## Error Handling and Recovery
    - Graceful task cancellation and cleanup
    - Checkpoint system for long-running tasks
    - Automatic retry logic with exponential backoff
    - Rollback capabilities for failed tasks
    - Comprehensive error logging and diagnostics
    
    ## Performance Requirements
    - 99%+ completion rate for autonomous creative tasks
    - < 30s startup time for background tasks
    - Real-time progress updates via WebSocket
    - Resource usage monitoring with alerts
    - Immediate notification on task completion
    """
}