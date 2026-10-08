# Saujanya Dubale — Portfolio V10 (standalone)

This ZIP includes the **complete** portfolio website; V9 is NOT required.

## View locally

1. Unzip this archive.
2. Open Terminal in its `site` folder.
3. Run `python3 -m http.server 8000`.
4. Visit `http://localhost:8000`. If port 8000 is already in use, use 8001.

## V10 changes

- A single cohesive **Institutions, companies & organizations** section appears just below the homepage hero. It features the supplied logos of FAU, ECAP, Siemens Healthineers, University of Mumbai, BEST, Knowter, High Serve Society, Leo Club of Vashi Gold, and TERI. Each links to a relevant section of the site.
- Removed the **Project presentation · Athens** photo only; kept the other BEST activity photos.
- The ST5937 interactive PMT now provides adjustable lower/upper color limits using number inputs and sliders. Default is **15%–28%**; an enhanced detail preset and the full 0%–28% range are also offered. Hover shows actual calibrated QE (%) without scaling the measurements.
- Includes the complete V8 media and sections: ECAP thesis animations and measurement schematic, robotics videos and research comparisons, FeelAI poster, environmental volunteering and nine laboratory reports.

## Publishing

Upload **contents of `site`** to a GitHub repository and enable Settings → Pages → Deploy from branch → main → /(root).

The interactive PMT uses Three.js through a public CDN; it needs internet access. Other locally packaged assets work without external media hosting.

Before public deployment, verify permission to publish employer-related recordings, images, report figures and photos of third parties. Logos indicate personal affiliation or participation, not organizational endorsement.


V11 additions: new QC section (#ecap-qc), source-faithful figures, detailed ACT/Diffusion/Residual SAC section, PROMEOS affiliation, and homepage metric 124 PMT spectra + reference.
