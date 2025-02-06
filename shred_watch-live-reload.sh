# just to get us all at the same starting point
git checkout master

# delete your build folder
rm -rf _site/

#remove any old gh-pages branches
git worktree prune

# create a 'build' directory checked out to the gh-pages branch
git worktree add -B gh-pages _site origin/gh-pages

# build the project
bundle exec jekyll build
# To watch the webpage locally, run bundle exec jekyll serve --watch
bundle exec jekyll serve --watch --port 4001 --force-polling