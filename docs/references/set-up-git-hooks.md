
## Set up the production server post-receive hook

### Remote server instructions

Make sure you have nginx and git installed on your server.

Provide ownership of the document root for user so that commands can execute in a bash script. In this case the document root is `/var/www/html` but it can be anything as long as you specify the path

```bash
sudo chown -R `whoami`:`id -gn` /var/www/html
```

Next, create a bare repository which will respond to git pushes and run git hooks + scripts. In this case, we will place the bare repository in the home directory.

```bash
mkdir ~/proj
cd /proj
git init --bare
```

Now create a bash script that will run in response to the `post-receive` hook.

```bash
#!/bin/bash
# We add this line to the top so that node commands can be run in this script
. ~/.nvm/nvm.sh

while read oldrev newrev ref
do
    # make sure that pushing to any branch other than master doesn't do anything
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received.  Deploying master branch to production..."
        # the work-tree path is the directory on which your website exists
        # the git directory is the bare git directory that you created earlier
        git --work-tree=/var/www/html --git-dir=/home/ozy/proj checkout -f
        # run any other commands as you wish
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
```

The final step is to make the `post-receive` script executable

```bash
chmod +x hooks/post-receive
```

### Client instructions

In your repo, create a remote that points to the server with the path to to the git bare repo

```bash
git remote add production demo@server_domain_or_IP:proj
```

All good! Now you can push to production with one line:

```bash
git push production master
```




# References



```bash

```

[https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks](https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks)

[https://stackoverflow.com/questions/34396821/how-to-execute-commands-after-post-receive-hook](https://stackoverflow.com/questions/34396821/how-to-execute-commands-after-post-receive-hook)

[https://unix.stackexchange.com/questions/184508/nvm-command-not-available-in-bash-script](https://unix.stackexchange.com/questions/184508/nvm-command-not-available-in-bash-script)