# Publication teasers

The WebP images are resized copies of the original research figures for the publication list. Transparent backgrounds are rendered on white. Original project assets are unchanged. SVG sources are noted below.

- `benchmark-privacy.webp`: Final static frame of the overview animation on the [BenchmarkPrivacy project page](https://sprintml.com/Benchmarking_Empirical_Privacy_Protection_for_Adaptations_of_LLMs/), created by Bartłomiej Marek. Source: `static/images/schema_iclrpptx_gif.gif` on that page.
- `freqiar.webp`: `FreqIAR_poster/FreqIAR_poster/figures/IAR_backdoor_framework.png` from the local FreqIAR poster sources.
- `post.webp`: `projects/POST/POST_v2.png` in this repository.
- `spa.webp`: `projects/SPA/System_overview.png` in this repository.
- `agentprov.webp`: Rendered from `ARR_26may/arxiv_paper/figs/teaser.pdf`. The website export excludes the draft color palette below the illustration; the research illustration itself is unchanged. Paper: https://arxiv.org/abs/2609.00052.
- `privacy-cliff-camera-ready.svg`: Current teaser, exported directly from `figures/setup_camera_ready.pdf` (Figure 1) of *Auditing Privacy Leakage in Tabular Foundation Model Embeddings* on 2026-10-18. It includes the TabFM, private support context, and auditor query access. See `projects/PrivacyCliff/README.md` for provenance. The teaser links to the local project page; no manuscript link is exposed.
- `privacy-cliff.svg`: Retained earlier schematic, based on Figures 1–2 of the 2026-10-13 manuscript. Superseded by the camera-ready figure above.

To add a teaser to another publication, set `header.teaser` (relative to `images/`), `header.teaser_alt`, `header.teaser_width`, and `header.teaser_height` in its front matter. The figure links to the project page, or to the paper if no project page is set. When neither is available, the teaser is displayed without a link.
