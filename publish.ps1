$temp_exits = Test-Path $env:temp/book
if ($temp_exits -eq $false) {
    Write-Output "doesnt exist"
    mkdir $env:temp/book
}

git worktree add $env:temp/book gh-pages
mdbook build
Remove-Item -Force $env:temp/book/* # this won't delete the .git directory
Copy-Item -Recurse book/* $env:temp/book/ -Confirm
Set-Location $env:temp/book
git add -A
git commit -m 'deploy new book'
git push origin gh-pages
Set-Location -