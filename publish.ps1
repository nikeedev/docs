if (-ne Test-Path $env:temp/book) {
    echo "doesnt exist"
    mkdir $env:temp/book
}

git worktree add $env:temp/book gh-pages
mdbook build
rm -Force $env:temp/book/* # this won't delete the .git directory
cp -Recurse book/* $env:temp/book/
cd $env:temp/book
git add -A
git commit -m 'deploy new book'
git push origin gh-pages
cd -