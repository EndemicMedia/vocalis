# AGENTS Instructions

## Scope
These instructions apply to the entire repository.

## General Guidelines
- Use `rg` for searching; avoid `grep -R`.
- Use two spaces for indentation; never tabs.
- Keep lines under 100 characters.
- Favor semantic, accessible HTML and leverage [Shoelace](https://shoelace.style/)
  web components when needed.
- Keep the project lightweight: prefer vanilla HTML, CSS, and JS without additional
  build steps unless necessary.

## Code Guidelines
- Write modern JavaScript with ES modules; include `type="module"` for script tags.
- Prefer `const` and `let`; avoid `var`.
- Use strict equality (`===` and `!==`) and avoid implicit type coercion.
- Document functions and modules with brief JSDoc comments when context is not
  obvious.
- Break complex tasks into small, single-purpose functions.
- Avoid `eval` and similar dynamic code features.
- Keep DOM manipulation minimal and avoid polluting the global scope.

## Workflow
1. Update or add tests whenever code changes to keep coverage current.
2. After modifying files, run `npm test` to ensure everything passes.
3. Document rationale in comments where code may be non-obvious.
4. Keep JavaScript modular and well-documented.

## Commit Standards
- Commit messages should be in present tense and imperative mood (e.g., "Add
  feature" not "Added feature").
- Each commit should focus on a single logical change.

## Pull Request Guidelines
- Summaries must mention key changes and reference the relevant files.
- Include the output of `npm test` in the PR description.
