## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.


#### add
Adds files to the index. This stages them to be committed. You can specify certain files, folders, or add anything that is new. Add will not only add new files, but changes within existing files.

#### branch
Allows you to create, view, delete, or rename branches in your repository. Branches are useful to create a safe environment away from the master branch in which to make significant changes or add features.

#### checkout
Allows you to view previous versions of files, previous commits, and different branches within a repository.

#### clone
Copies an entire existing repository. Also creates a remote connection (named origin) which points to the original repository.

#### commit
Commits the staged files to the project's history. Basically creates a safe "save-point" or version.

#### fetch
Imports commits from a remote repo into a branch in your local repo. This allows you to review them before merging them with your repo.

#### log
Displays the projects history of commits. You can also filter through the history and search for specific changes.

#### merge
Integrates multiple branches into a single branch. If changes to a single file were made in both branches, you will need to manually resolve the conflict.

#### pull
Rolls 'fetch' and 'merge' into a single command.

#### push
Transfers commits from your local repo to a remote repo (like one on GitHub).

#### reset
Reset can either remove files from staging, or remove local commits entirely. This is not to be used in a public repository.

#### rm
Completely removes a file from an index, not just the working directory.

#### status
Shows the state of the working directory. Allows you to see which files have been staged, changed, removed, or are not being tracked. 

## Release 4: Git Workflow

- Push files to a remote repository
	- git init
	- git add .
	- git commit -m "Initial commit"
	- create remote repository on GitHub
	- git remote add origin https://github.com/user/repo.git
	- git push origin master

- Fetch changes
	- git clone https://github.com/user/repo.git
	- git remote add upstream https://github.com/**original_user**/repo.git
	- git fetch upstream
	- get merge upstream/master

- Commit locally
	- git add `<file>`
	- git commit -m "Message"

## Release 5: Reflection
It was beneficial to review this list of git commands. I have become accustomed to using the common commands needed to commit/fetch changes, push changes, and add remotes. Reviewing the commands that I don't use as often helped solidify my understanding of their purposes. For example, I was unaware of the various ways reset could be used to roll back commits locally, or to simply unstage files.

[The Atlassian Git Tutorials](https://www.atlassian.com/git/tutorial/git-basics) were quite helpful when reviewing commands because of their great illustrations and example situations.

After completing this challenge, I feel quite comfortable with most commands. I am still a little hesitant when it comes to resetting changes or resolving conflicts, but I'm confident that more experience will come soon.