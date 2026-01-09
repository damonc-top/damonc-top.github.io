# Agent Guidelines for Jekyll Theme Chirpy

This document provides comprehensive guidelines for agentic coding assistants working on the Jekyll Theme Chirpy codebase. Follow these conventions to maintain code quality and consistency.

## Build, Lint, and Test Commands

### Primary Build Commands
- **`npm run build:assets`** - Build all assets (CSS and JS) concurrently using Webpack
- **`npm run build:css`** - Build optimized Bootstrap SCSS using PurgeCSS
- **`npm run build:assets`** - Build and bundle JavaScript and SCSS using Webpack

### Linting Commands
- **`npm run lint:js`** - Lint JavaScript files using ESLint with custom configuration
- **`npm run lint:scss`** - Lint SCSS files using Stylelint with standard SCSS rules
- **`npm run test`** - Run both JavaScript and SCSS linting (comprehensive code quality check)

### Testing and Development Commands
- **`bash tools/test.sh`** - Build Jekyll site in production mode and run HTML proofer for link validation
  - Supports custom config: `bash tools/test.sh -c "_config.yml,_config.test.yml"`
- **`bash tools/run.sh`** - Start Jekyll development server with live reload
  - Production mode: `bash tools/run.sh -p`
  - Custom host: `bash tools/run.sh -H 0.0.0.0`

### Running Individual Tests
Since this project doesn't have unit tests, the closest equivalent to running a single test is:
- **Lint specific file**: `npx eslint _dev/specific-file.js`
- **Lint specific SCSS**: `npx stylelint _dev/sass/specific-file.scss`
...
_dev/sass/
...
- **Ignores**: Vendor files in `_dev/sass/vendors/`

### Webpack Configuration
- **Input**: Multiple entry points from `_dev/js/` and `_dev/sass/main.bundle.scss`
- **Output**: JS bundles in `assets/js/dist/` and CSS in `assets/css/jekyll-theme.css`
- **Plugins**: Babel, Webpack built-ins, MiniCssExtractPlugin, Terser, custom frontmatter injection

### Jekyll Configuration
- **Ruby Version**: 3.1+ required
- **Plugins**: paginate, seo-tag, archives, sitemap, include-cache
- **Theme Structure**: Follows standard Jekyll theme gem layout

## Performance Considerations

### JavaScript
- **Bundle Splitting**: Separate bundles for different pages
- **Minification**: Terser in production builds
- **Tree Shaking**: Webpack handles dead code elimination

### CSS
- **PurgeCSS**: Removes unused CSS in production
- **SCSS Architecture**: Modular imports prevent duplication
- **Critical CSS**: Consider for above-the-fold content

### Jekyll
- **Include Cache**: Use `jekyll-include-cache` for performance
- **Asset Optimization**: Compress and minify all assets
- **Lazy Loading**: Implement for images and components

## Security Best Practices

### Content Security Policy
- **External Scripts**: Careful with CDN dependencies
- **Inline Scripts**: Minimize or use hashes
- **Service Workers**: Secure PWA implementation

### Dependency Management
- **Audit Dependencies**: Regular `npm audit` checks
- **Update Strategy**: Keep dependencies current but stable
- **Lock Files**: Commit `package-lock.json` and `Gemfile.lock`

### User Input Handling
- **Sanitization**: Sanitize user content in posts/comments
- **XSS Prevention**: Escape output in templates
- **CSRF Protection**: Implement for forms if needed

## Accessibility Guidelines

### HTML Structure
- **Semantic HTML**: Use proper heading hierarchy
- **ARIA Labels**: Add for interactive elements
- **Alt Text**: Descriptive alt attributes for images

### Keyboard Navigation
- **Focus Management**: Ensure keyboard accessibility
- **Skip Links**: Provide navigation shortcuts
- **Focus Indicators**: Visible focus states

### Color Contrast
- **Theme Support**: Light and dark mode implementations
- **High Contrast**: Meet WCAG guidelines
- **Color Independence**: Don't rely solely on color for meaning</content>
<parameter name="filePath">/Users/mac/project/blog-site/AGENTS.md