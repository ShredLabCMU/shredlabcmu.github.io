# Build with Docker
Assuming you have Docker installed, pull the following image:
```bash
$ docker pull jekyll/jekyll:latest
```
Run a container:
```bash
$ docker-compose up
```
View the site here: `http://0.0.0.0:4000`
# Build locally
First install Jekyll according to [these instructions](https://jekyllrb.com/docs/installation/). Navigate to a folder of your preference and then:
```bash
$ git clone https://github.com/ShredLabCMU/shredlabcmu.github.io.git website
$ cd website
$ bundle install
$ bundle exec jekyll serve --watch --port 4001 --force-polling
```
This should start the web server locally, and enables incremental build.
Visit it here: `http://0.0.0.0:40001`

# Adding your profile
Adding your profile is very simple. First follow the instructions above and launch the site. Then add a markdown page in the `_team` folder with your first name. Edit that file accordingly following the template of the other files in that folder. Also add your picture (resized to `640x480`) in the `img/team` folder. Then push those two files to the master branch of this repository and you're done!

# Adding your publication
Edit the `_bibliography/references.bib` file to add your bibtex and commit to `master`.

# To submit once you are done
```bash
$ git add . 
$ git commit -m 'Updateed source code'
$ git push origin master 
```

## Optimizing Hero Images (Responsive, High Quality)

1. Place original high-resolution hero source images (JPG or PNG) in:
	`assets/img/hero/src/`
	Use the largest originals you have (ideally width >= 2880px if you want 2x large screens).

2. Build optimized responsive variants (AVIF, WebP, JPEG at sizes 960/1440/1920/2880). Two options:

	a) Using Node (requires `npm` + the dev dependency `sharp`):
	```bash
	npm install
	npm run build:hero
	```

	b) Using Docker (no local node install). Run a one-off container with Node + Sharp:
	```bash
	docker run --rm -v "$PWD":/app -w /app node:20 bash -lc 'npm install --no-audit --no-fund && npm run build:hero'
	```

3. In any page front matter, reference the base name (without size or extension) via `hero_image_base`:
	```yaml
	---
	title: Example Page
	hero_image_base: assets/img/hero/my-collage   # corresponds to files like my-collage-1440.jpg
	---
	```

4. The template will emit a `<picture>` with AVIF/WebP/JPEG fallbacks and pick an appropriate size automatically.

5. Commit only the generated files you actually need along with the originals (so future regenerations can occur). Generated outputs live in `assets/img/hero/` (not in `src/`).

Regeneration happens only if the source file is newer than existing outputs (simple timestamp check in the script).

