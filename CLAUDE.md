# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website for Xun Wang (Ph.D. student at CISPA Helmholtz Center for Information Security). Built with Jekyll using the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template, forked from Minimal Mistakes. Hosted on GitHub Pages at https://stephen016.github.io.

## Build & Development Commands

```bash
# Install Ruby dependencies (run once, or after Gemfile changes)
bundle install

# Serve locally with live reload at localhost:4000
jekyll serve -l -H localhost

# Rebuild JS assets (uglify jQuery + plugins into main.min.js)
npm run build:js
```

If `bundle install` fails, delete `Gemfile.lock` and retry.

## Architecture

### Content Collections

Content lives in markdown files with YAML front matter. Each collection maps to a section of the site:

| Directory        | Purpose                  | Layout        |
|-----------------|--------------------------|---------------|
| `_pages/`       | Static pages (about, CV, publications) | `single` |
| `_publications/`| Individual publication entries | `single` |
| `_talks/`       | Talk/presentation entries | `talk`   |
| `_teaching/`    | Teaching entries          | `single` |
| `_portfolio/`   | Portfolio entries         | `single` |
| `_posts/`       | Blog posts                | `single` |

### Key Configuration Files

- `_config.yml` — Site-wide settings (author info, social links, collections, plugins, defaults). **Requires server restart** after changes.
- `_data/navigation.yml` — Top navigation menu items. Currently only Publications and CV are enabled.
- `_data/authors.yml` — Author metadata.

### Theme Structure

- `_layouts/` — Page templates (default, single, archive, talk, splash)
- `_includes/` — Reusable HTML partials (author-profile, head, footer, masthead, etc.)
- `_sass/` — SCSS stylesheets, compiled with kramdown
- `assets/js/` — JavaScript; `main.min.js` is the bundled output

### Static Files

- `files/` — PDFs, downloads (accessible at `/files/filename.pdf`)
- `images/` — Site images including author avatar (`xun.png`)

### Active Pages

The site currently uses: About (homepage at `/`), Publications (`/publications/`), and CV (`/cv/`). Talks, Teaching, Blog Posts, and Guide are commented out in navigation.

### Markdown Generator

`markdown_generator/` contains Python/Jupyter tools that convert structured data (TSV/CSV) into properly formatted markdown files for publications and talks.
