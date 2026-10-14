# Publication teasers

The WebP images are resized copies of the original research figures for the publication list. Transparent backgrounds are rendered on white. Original project assets are unchanged. The SVG teaser is a simplified, editable schematic based on the paper, as noted below.

- `benchmark-privacy.webp`: Final static frame of the overview animation on the [BenchmarkPrivacy project page](https://sprintml.com/Benchmarking_Empirical_Privacy_Protection_for_Adaptations_of_LLMs/), created by Bartłomiej Marek. Source: `static/images/schema_iclrpptx_gif.gif` on that page.
- `freqiar.webp`: `FreqIAR_poster/FreqIAR_poster/figures/IAR_backdoor_framework.png` from the local FreqIAR poster sources.
- `post.webp`: `projects/POST/POST_v2.png` in this repository.
- `spa.webp`: `projects/SPA/System_overview.png` in this repository.
- `agentprov.webp`: Rendered from `ARR_26may/arxiv_paper/figs/teaser.pdf`. The website export excludes the draft color palette below the illustration; the research illustration itself is unchanged. Paper: https://arxiv.org/abs/2609.00052.
- `privacy-cliff.svg`: Simplified schematic based on Figures 1–2 of *Auditing Privacy Leakage in Tabular Foundation Model Embeddings*, checked against the NeurIPS26_TabFM_inversion Overleaf project on 2026-10-13. It shows the audit inputs and sequential attribute recovery, not the complete differential-query algorithm or numerical results. Age, education, and occupation follow the illustrative attributes in Figure 2. No paper or project link is exposed until a public release is ready.

To add a teaser to another publication, set `header.teaser` (relative to `images/`), `header.teaser_alt`, `header.teaser_width`, and `header.teaser_height` in its front matter. The figure links to the project page, or to the paper if no project page is set. When neither is available, the teaser is displayed without a link.
