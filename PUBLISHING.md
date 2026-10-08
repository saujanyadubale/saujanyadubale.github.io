# Publish Saujanya's portfolio on GitHub Pages

This folder is the website root. Upload/push the **contents of this folder** to the root of a new public GitHub repository named `saujanyadubale.github.io`. The entry file must be `index.html` at the repository root.

## On a Mac
1. Create a public repository called `saujanyadubale.github.io` at https://github.com/new. Do not initialize with a README, license or .gitignore.
2. In Terminal, `cd` into this extracted folder (the folder containing `index.html`).
3. Run:

```bash
git init
git branch -M main
git add .
git commit -m "Publish personal portfolio"
git remote add origin https://github.com/saujanyadubale/saujanyadubale.github.io.git
git push -u origin main
```

4. On GitHub, open repository **Settings → Pages** and select **Deploy from a branch**, branch **main**, folder **/(root)**; save.
5. The website should become available at `https://saujanyadubale.github.io` after Pages completes deployment.

## Critical pre-publication check
This website contains Siemens-related media and research material and full lab reports that may include student numbers or other personal details. Confirm authorization for any employer material and review the reports/PDFs and people shown in images before pushing publicly. Everything inside the repo will be publicly downloadable.

## Local preview
```bash
python3 -m http.server 8000
```
Visit http://localhost:8000.
