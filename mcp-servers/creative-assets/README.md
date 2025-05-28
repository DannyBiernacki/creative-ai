# Creative Assets MCP Server

Platforma do generowania, zarządzania i optymalizacji assetów (obrazy, wideo, audio) z integracją AI (OpenAI, Stability, RunwayML, ElevenLabs).

## 📁 Struktura projektu

```
mcp-servers/creative-assets/
├── src/
│   ├── index.ts                 # Main MCP server entry
│   ├── handlers/
│   │   ├── image-generation.ts  # DALL-E, Midjourney, Stable Diffusion
│   │   ├── video-creation.ts    # RunwayML, Sora integration
│   │   ├── audio-synthesis.ts   # ElevenLabs, Suno integration
│   │   ├── content-optimization.ts # Smart compression & enhancement
│   │   └── asset-management.ts  # Storage, versioning, metadata
│   ├── services/
│   │   ├── ai-providers/
│   │   │   ├── openai-service.ts
│   │   │   ├── runwayml-service.ts
│   │   │   ├── elevenlabs-service.ts
│   │   │   └── stability-service.ts
│   │   ├── storage-service.ts
│   │   └── metadata-service.ts
│   ├── types/
│   │   ├── asset-types.ts
│   │   ├── mcp-schemas.ts
│   │   └── provider-types.ts
│   └── utils/
│       ├── validation.ts
│       ├── compression.ts
│       └── batch-processor.ts
├── package.json
├── tsconfig.json
├── README.md
└── .env.example
```

## Fazy wdrożenia

- Faza 1: Core infrastructure
- Faza 2: Image generation
- Faza 3: Video & audio
- Faza 4: Advanced features

## Uruchomienie

```bash
cd mcp-servers/creative-assets
npm install
npm run dev
```
