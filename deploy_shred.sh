# just to get us all at the same starting point
git checkout master

# delete your build folder
rm -rf _site/

# create a 'build' directory checked out to the gh-pages branch
git worktree add -B gh-pages _site origin/gh-pages

# build the project
bundle exec jekyll build

# cd into 'build' folder, which is now on the gh-pages branch
cd _site

# fail if for some reason this isn't the gh-pages branch
current_branch=$(git symbolic-ref --short -q HEAD)
if [ "$current_branch" != "gh-pages" ]; then
  echo "Expected build folder to be on gh-pages branch."
  exit 1
fi

# commit and push to gh-pages
git add . && git commit -m "Update gh-pages"
git push