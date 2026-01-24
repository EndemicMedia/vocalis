# pollinations.ai API

- **OpenAPI Version:** `3.1.0`
- **API Version:** `0.3.0`

Documentation for `gen.pollinations.ai` - the pollinations.ai API gateway.

[📝 Edit docs](https://github.com/pollinations/pollinations/edit/master/enter.pollinations.ai/src/routes/docs.ts)

## Quick Start

Get your API key at <https://enter.pollinations.ai>

### Image Generation

```bash
curl 'https://gen.pollinations.ai/image/a%20cat?model=flux' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

### Text Generation

```bash
curl 'https://gen.pollinations.ai/v1/chat/completions' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"model": "openai", "messages": [{"role": "user", "content": "Hello"}]}'
```

### Vision (Image Input)

```bash
curl 'https://gen.pollinations.ai/v1/chat/completions' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"model": "openai", "messages": [{"role": "user", "content": [{"type": "text", "text": "Describe this image"}, {"type": "image_url", "image_url": {"url": "https://example.com/image.jpg"}}]}]}'
```

**Gemini Tools:** `gemini`, `gemini-large` have `code_execution` enabled (can generate images/plots). `gemini-search` has `google_search` enabled. Responses may include `content_blocks` with `image_url`, `text`, or `thinking` types.

### Simple Text Endpoint

```bash
curl 'https://gen.pollinations.ai/text/hello?key=YOUR_API_KEY'
```

### Streaming

```bash
curl 'https://gen.pollinations.ai/v1/chat/completions' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"model": "openai", "messages": [{"role": "user", "content": "Write a poem"}], "stream": true}' \
  --no-buffer
```

### Model Discovery

**Always check available models before testing:**

- **Image models:** [/image/models](https://gen.pollinations.ai/image/models)
- **Text models:** [/v1/models](https://gen.pollinations.ai/v1/models)

## Authentication

**Two key types (both consume Pollen from your balance):**

- **Publishable Keys (`pk_`):** ⚠️ **Beta - not yet ready for production use.** For client-side apps, IP rate-limited (1 pollen per IP per hour). **Warning:** Exposing in public code will consume your Pollen if your app gets traffic.
- **Secret Keys (`sk_`):** Server-side only, no rate limits. Keep secret - never expose publicly.

**Auth methods:**

1. Header: `Authorization: Bearer YOUR_API_KEY`
2. Query param: `?key=YOUR_API_KEY`

## Account Management

Check your balance and usage:

```bash
# Check pollen balance
curl 'https://gen.pollinations.ai/account/balance' \
  -H 'Authorization: Bearer YOUR_API_KEY'

# Get profile info
curl 'https://gen.pollinations.ai/account/profile' \
  -H 'Authorization: Bearer YOUR_API_KEY'

# View usage history
curl 'https://gen.pollinations.ai/account/usage' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

## Servers

- **URL:** `https://gen.pollinations.ai`

## API Endpoints

### Image Generation

#### GET /image/{prompt}

Generate images from text prompts.

**Parameters:**

| Parameter | Required | Description | Default |
|-----------|----------|-------------|---------|
| `prompt` | Yes | URL-encoded text description | - |
| `model` | No | Image model to use (see /image/models) | `flux` |
| `width` | No | Image width in pixels | `1024` |
| `height` | No | Image height in pixels | `1024` |
| `seed` | No | Seed for reproducible results | - |
| `nologo` | No | Remove watermark (registered users) | `false` |
| `private` | No | Keep image private | `false` |
| `enhance` | No | Enhance prompt with LLM | `false` |
| `safe` | No | Enable NSFW filtering | `false` |

**Example:**

```bash
curl 'https://gen.pollinations.ai/image/a%20beautiful%20sunset?model=flux&width=1024&height=768' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

#### GET /image/models

List available image generation models with pricing and capabilities.

**Returns:** JSON array of model objects with name, aliases, pricing, and metadata.

**Example:**

```bash
curl 'https://gen.pollinations.ai/image/models' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

### Text Generation

#### POST /v1/chat/completions

OpenAI-compatible chat completions endpoint supporting text, vision, audio, and function calling.

**Request body parameters:**

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `messages` | array | Message history with role and content | Required |
| `model` | string | Model name (see /v1/models) | `openai` |
| `temperature` | number | Randomness (0.0-3.0) | `1` |
| `max_tokens` | number | Maximum response length | - |
| `stream` | boolean | Enable streaming responses | `false` |
| `tools` | array | Available function definitions | - |

**Example:**

```bash
curl 'https://gen.pollinations.ai/v1/chat/completions' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "openai",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ]
  }'
```

#### GET /v1/models

List available text models.

**Example:**

```bash
curl 'https://gen.pollinations.ai/v1/models' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

### Account Management

#### GET /account/balance

Get your current pollen balance.

**Returns:** `{"balance": number}`

#### GET /account/profile

Get user profile information.

**Returns:** Profile with name, email, tier, and dates.

#### GET /account/usage

Get usage history and spending data.

**Returns:** Array of usage records with timestamps, models, tokens, and costs.

## Rate Limits & Tiers

| Tier | Rate Limit | Notes |
|------|------------|-------|
| Anonymous | 15 seconds | No authentication |
| Seed | 5 seconds | Registered users |
| Flower | 3 seconds | Enhanced access |
| Nectar | None | Unlimited usage |

## Notes for Vocalis Implementation

The Vocalis landing page uses a publishable API key (`pk_9sbL41ofRXSoaOC2`) for image generation. This provides:

- **Better rate limits:** 5 seconds between requests (Seed tier) vs 15 seconds for anonymous
- **No watermark:** Images are generated without the Pollinations logo
- **Consistent quality:** Priority access to generation resources

**Security considerations:**

Publishable keys are designed for client-side use and are safe to expose in public code. However, note:
- The key is IP rate-limited (1 pollen per IP per hour)
- Traffic to your app will consume your Pollen balance
- Consider monitoring usage at <https://enter.pollinations.ai>

**Current implementation:**

```javascript
const url = `https://gen.pollinations.ai/image/${encodeURIComponent(prompt)}?model=flux&width=${width}&height=${height}&nologo=true&key=pk_9sbL41ofRXSoaOC2`;
```

**Best practices:**

1. Monitor your Pollen balance regularly
2. Cache generated images to reduce API calls
3. Implement error handling for rate limits
4. Consider using a server-side proxy with a secret key for high-traffic production deployments
