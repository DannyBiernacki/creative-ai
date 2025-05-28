# MCP Creative Assets Server – API Documentation / Dokumentacja API

---

## Overview / Przegląd

This server provides a set of AI-powered creative asset tools (mock implementations) for images, video, audio, 3D, remixing, tagging, storage, metadata, optimization, and search.

Serwer udostępnia zestaw narzędzi AI do obsługi assetów kreatywnych (implementacje mock) – obrazy, wideo, audio, 3D, remiksowanie, tagowanie, storage, metadane, optymalizacja, wyszukiwanie.

---

## How to Run / Jak uruchomić

```
cd mcp_servers/creative-assets
npm install
npm start
```

Serwer domyślnie nasłuchuje na porcie 3001 (lub zgodnie z konfiguracją MCP SDK).

---

## Tools / Narzędzia

Każde narzędzie wywołujesz przez MCP SDK, HTTP POST lub RPC (w zależności od integracji). Input/output zgodny ze schematem poniżej.

Each tool is invoked via MCP SDK, HTTP POST or RPC (depending on integration). Input/output as below.

---

### 1. generate_image
**PL:** Generuje obraz na podstawie promptu tekstowego.  
**EN:** Generates an image from a text prompt.

**Input:**
```json
{
  "prompt": "futurystyczne miasto nocą",
  "style": "cyberpunk"
}
```
**Output:**
```json
{
  "url": "https://cdn.example.com/generated/futurystyczne%20miasto%20nocą_cyberpunk.png"
}
```

---

### 2. generate_video
**PL:** Generuje wideo na podstawie promptu tekstowego lub obrazu.  
**EN:** Generates a video from a text or image prompt.

**Input:**
```json
{
  "prompt": "dynamiczna animacja logo",
  "duration": 8,
  "style": "minimal"
}
```
**Output:**
```json
{
  "url": "https://cdn.example.com/generated/video_dynamiczna%20animacja%20logo_minimal_8s.mp4"
}
```

---

### 3. generate_audio
**PL:** Generuje audio na podstawie promptu tekstowego.  
**EN:** Generates audio from a text prompt.

**Input:**
```json
{
  "prompt": "epicka muzyka do trailera",
  "genre": "orchestral",
  "duration": 30
}
```
**Output:**
```json
{
  "url": "https://cdn.example.com/generated/audio_epicka%20muzyka%20do%20trailera_orchestral_30s.mp3"
}
```

---

### 4. generate_3d_asset
**PL:** Generuje model 3D lub teksturę na podstawie promptu.  
**EN:** Generates a 3D model or texture from a prompt.

**Input:**
```json
{
  "prompt": "low poly drzewo",
  "format": "glb"
}
```
**Output:**
```json
{
  "url": "https://cdn.example.com/generated/3d_low%20poly%20drzewo.glb"
}
```

---

### 5. remix_asset
**PL:** Tworzy warianty/remiksy istniejącego assetu.  
**EN:** Creates variants/remixes of an existing asset.

**Input:**
```json
{
  "asset_url": "https://cdn.example.com/generated/obraz1.png",
  "style": "vintage",
  "count": 2
}
```
**Output:**
```json
{
  "variants": [
    "https://cdn.example.com/generated/obraz1_remix1_vintage.png",
    "https://cdn.example.com/generated/obraz1_remix2_vintage.png"
  ]
}
```

---

### 6. tag_asset
**PL:** Automatycznie taguje asset (np. obraz, wideo).  
**EN:** Automatically tags an asset (e.g. image, video).

**Input:**
```json
{
  "asset_url": "https://cdn.example.com/generated/obraz1.png"
}
```
**Output:**
```json
{
  "tags": ["mock", "ai", "asset", "2025"]
}
```

---

### 7. store_asset
**PL:** Zapisuje asset do storage wraz z metadanymi.  
**EN:** Stores an asset with metadata.

**Input:**
```json
{
  "asset_url": "https://cdn.example.com/generated/obraz1.png",
  "metadata": { "author": "Jan", "project": "BrandX" }
}
```
**Output:**
```json
{
  "stored": true,
  "asset_id": "asset_12345"
}
```

---

### 8. get_asset_metadata
**PL:** Pobiera metadane assetu.  
**EN:** Retrieves asset metadata.

**Input:**
```json
{
  "asset_id": "asset_12345"
}
```
**Output:**
```json
{
  "metadata": {
    "id": "asset_12345",
    "created": 1720000000000,
    "tags": ["mock", "ai"],
    "type": "image"
  }
}
```

---

### 9. optimize_asset
**PL:** Optymalizuje asset (np. kompresja, zmiana rozdzielczości).  
**EN:** Optimizes an asset (e.g. compression, resizing).

**Input:**
```json
{
  "asset_url": "https://cdn.example.com/generated/obraz1.png",
  "format": "webp",
  "quality": 90
}
```
**Output:**
```json
{
  "optimized_url": "https://cdn.example.com/generated/obraz1_90.webp"
}
```

---

### 10. search_assets
**PL:** Wyszukuje assety po tagach, promptach, typie, dacie.  
**EN:** Searches assets by tags, prompt, type, date.

**Input:**
```json
{
  "query": "logo",
  "type": "image"
}
```
**Output:**
```json
{
  "results": [
    { "asset_id": "asset_1", "url": "https://cdn.example.com/search/image_1.png" },
    { "asset_id": "asset_2", "url": "https://cdn.example.com/search/image_2.png" }
  ]
}
```

---

## Example Call / Przykładowe wywołanie

```bash
curl -X POST http://localhost:3001/tool \
  -H "Content-Type: application/json" \
  -d '{
    "tool": "generate_image",
    "params": {
      "prompt": "futurystyczne miasto nocą",
      "style": "cyberpunk"
    }
  }'
```

---

## Notes / Uwagi
- Wszystkie narzędzia zwracają dane mock (do dalszej rozbudowy).
- All tools return mock data (for further development).
- Input/output schemas are compatible with MCP SDK and can be used in automation, tests, or UI.
- Schematy input/output są zgodne z MCP SDK i mogą być używane w automatyzacji, testach lub UI. 