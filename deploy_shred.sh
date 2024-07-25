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

# cd into 'build' folder, which is now on the gh-pages branch
cd _site

# fail if for some reason this isn't the gh-pages branch
current_branch=$(git symbolic-ref --short -q HEAD)
if [ "$current_branch" != "gh-pages" ]; then
  echo "Expected build folder to be on gh-pages branch."
  exit 1
fi

# Check which branch you are on
echo $current_branch #this should be gh-pages

# commit and push to gh-pages
git add . && git commit -m "Update gh-pages"
git push

# cd back to base folder
cd ..