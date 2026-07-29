# AGENTS.md

This file provides mandatory guidelines and strict engineering practices for AI agents working on the `n8n-nodes-falcon` repository.

---

## Project Overview

`n8n-nodes-falcon` is an n8n community node package written in TypeScript. It provides a comprehensive, modular integration for CrowdStrike Falcon APIs using the official `crowdstrike-falcon` SDK.

---

## Architecture & Directory Structure

All API resources follow a strict, modular layout under `nodes/CrowdStrikeFalcon/actions/`:

```
nodes/CrowdStrikeFalcon/
├── CrowdStrikeFalcon.node.ts              # Main n8n Node declaration & property registry
├── GenericFunctions.ts                     # Authentication & SDK client instantiation helpers
└── actions/
    ├── router.ts                           # Main execution router delegating to resource modules
    └── <resourceName>/
        ├── <ResourceName>.types.ts         # TypeScript interfaces & type definitions
        ├── <ResourceName>.resource.ts      # n8n node properties, operations & fields
        └── <ResourceName>.execution.ts     # Execution logic and helper functions
```

---

## Strict Coding Standards & Best Practices

### 1. JSDoc & Commenting Guidelines

- **NEVER** write lazy, informal, or low-effort JSDoc comments (e.g., `/** Handles getRules */` or `/** Handles foo */`).
- **ALWAYS** write complete, formal, and professional multi-line JSDoc comments for every function and handler.

#### Bad Examples (PROHIBITED):
```typescript
/** Handles getRules */
async function handleGetRules(...) {}

/** Handles queriesTemplatesGetV1 */
async function handleQueriesTemplatesGetV1(...) {}
```

#### Good Examples (MANDATORY):
```typescript
/**
 * Main execution handler for CrowdStrike Falcon Alerts operations.
 * Delegates execution to internal helper functions to maintain low Cognitive Complexity.
 */
export async function executeAlerts(
    this: IExecuteFunctions,
    index: number,
    falconClient: FalconClient,
): Promise<any> { ... }

/**
 * Handles the 'postEntitiesAlertsV1' operation.
 * Sends a request to create or update alert entity records in CrowdStrike Falcon.
 */
async function handlePostEntitiesAlertsV1(c: IExecuteFunctions, i: number, fc: FalconClient): Promise<any> {
    /* Process and validate payload parameters before executing API call. */
    ...
}
```

- **Inline Comments**: Use formal English block comments (`/* ... */`) inside functions to explain non-obvious logic or execution steps.

---

### 2. Cognitive Complexity & Function Scope (SonarQube Compliance)

- Main execution functions (`execute<ResourceName>`) in `<ResourceName>.execution.ts` **MUST NOT** contain business logic or API call implementations directly inside `switch` cases.
- Every operation **MUST** delegate directly to a dedicated, top-level async helper function (`handle<OperationName>`).
- Keep function Cognitive Complexity **strictly <= 15**.

```typescript
// GOOD: Main execution function cleanly delegates
export async function executeAlerts(this: IExecuteFunctions, index: number, falconClient: FalconClient): Promise<any> {
    const operation = this.getNodeParameter('operation', index) as string;

    switch (operation) {
        case 'getAlertsV2': return await handleGetAlertsV2(this, index, falconClient);
        case 'updateAlertsV3': return await handleUpdateAlertsV3(this, index, falconClient);
        default:
            throw new Error(`Operation ${operation} is not supported for Alerts.`);
    }
}
```

---

### 3. User Experience (UX) & Action Naming

- In `<ResourceName>.resource.ts`, the `action` property for an operation **MUST NOT** contain any resource name or category prefix (e.g., `action: 'Create GCP registration'`, **NEVER** `action: 'Cloud Google Cloud Registration: Create GCP registration'`).

```typescript
// GOOD: Clean action label
{
    name: 'Create GCP Registration',
    value: 'createGcpRegistration',
    description: 'Create a new Google Cloud Registration',
    action: 'Create GCP registration',
}

// BAD: Includes redundant resource prefix
{
    name: 'Create GCP Registration',
    value: 'createGcpRegistration',
    description: 'Create a new Google Cloud Registration',
    action: 'Cloud Google Cloud Registration: Create GCP registration',
}
```

---

### 4. Type Safety & Defensive Programming

- **Strict Null Checks Compliance (Prevent TS2533)**: Do not chain `.toString()` or call methods directly on `c.getNodeParameter(...)` if the returned value can be `undefined` or `null`.
- Use robust helper functions for parameter extraction:

```typescript
/** Safely parses string parameters from node execution context. */
function getStringParam(context: IExecuteFunctions, index: number, paramName: string, fallback = ''): string {
    const val = context.getNodeParameter(paramName, index, fallback);
    return val !== undefined && val !== null ? String(val) : String(fallback);
}

/** Safely splits comma-separated string inputs into cleaned arrays. */
function parseArrayParam(context: IExecuteFunctions, index: number, paramName = 'ids'): string[] {
    const str = (context.getNodeParameter(paramName, index, '') as string) || '';
    return str.split(',').map((id) => id.trim()).filter(Boolean);
}

/** Safely parses JSON string parameters into objects. */
function parseJsonParam(context: IExecuteFunctions, index: number, paramName = 'bodyJson'): any {
    const rawJson = context.getNodeParameter(paramName, index, '') as string;
    if (!rawJson) return {};
    try {
        return typeof rawJson === 'string' ? JSON.parse(rawJson) : rawJson;
    } catch (e) {
        throw new Error(`Invalid JSON in ${paramName}: ${(e as Error).message}`);
    }
}
```

---

### 5. Completeness & Exhaustiveness

- All non-`Raw` SDK methods defined in `crowdstrike-falcon` for a target resource **MUST** be implemented.
- **NEVER** leave missing switch cases, unhandled operations, or placeholder comments (`// TODO`).

---

### 6. Documentation Integrity (`README.md`)

- **STRICT CONSTRAINT**: When updating `README.md`, **ONLY** update the `## Operations` section. **DO NOT** alter or overwrite any other section (e.g., Installation, Credentials, Compatibility, Usage, Resources).
- Resources listed under `## Operations` **MUST** remain in strict alphabetical order.
- Each operation must follow the markdown format:
  `* **<Operation Display Name>**: <Description text>.`

---

## Workflow for Adding New API Resources

When adding or updating API resources, follow this exact sequence:

1. **Create Resource Directory & Files**:
   Create `nodes/CrowdStrikeFalcon/actions/<resourceName>/`:
   - `<ResourceName>.types.ts`
   - `<ResourceName>.resource.ts`
   - `<ResourceName>.execution.ts`

2. **Register in Router**:
   Import `execute<ResourceName>` and add the `case` branch in [router.ts](file:///C:/Users/carlospadilla/Documents/Dev/Other/n8n-falcon/nodes/CrowdStrikeFalcon/actions/router.ts).

3. **Register in Main Node**:
   Import `<resourceName>Operations` and `<resourceName>Fields`, add resource option to `properties[0].options`, and spread `...<resourceName>Operations` and `...<resourceName>Fields` in [CrowdStrikeFalcon.node.ts](file:///C:/Users/carlospadilla/Documents/Dev/Other/n8n-falcon/nodes/CrowdStrikeFalcon/CrowdStrikeFalcon.node.ts).

4. **Update Operations Documentation**:
   Add the resource entry and its operations under `## Operations` in [README.md](file:///C:/Users/carlospadilla/Documents/Dev/Other/n8n-falcon/README.md) in strict alphabetical order.

5. **Build & Verify**:
   Execute build using `run_command` with `BypassSandbox: true`:
   ```bash
   npm run build
   ```
   Confirm clean compilation with exit code 0 (`✓ Build successful`).
