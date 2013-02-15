AngularJS DC On Github
====================

This repo contains the code for angulardc.github.com -- a resource for the Washington, D.C., AngularJS Meetup group.

Contributing to this repo
-------------------

You will need [Yeoman](http://yeoman.io/) and all its dependencies installed. We also recommend [Nvie's](http://nvie.com/posts/a-successful-git-branching-model/) awesome [git-flow](https://github.com/nvie/gitflow) extension, and obviously, you'll need git. But you knew that already.

To work on the site, 
- Clone this repo to your local machine
- Check out the develop branch (you may need to git pull it)
- type `yeoman server` for automagic editing goodness

If you are serious about helping out with this site, please create an [issue](https://github.com/angulardc/angulardc.github.com/issues/new). Use the "enhancement" tag to let us know about anything you'd like to see on the site.

Or if you're really serious, check out the open issues on our [wishlist](https://github.com/angulardc/angulardc.github.com/issues?labels=enhancement&page=1&state=open)

Once you have a issue number, use the awesome `git flow feature start (awesome-n)` where awesome is the name of your awesome feature and n is the number corresponding to the issue you created. (Or volunteered to work on because you're so amazing!)

When you're finished, type `git flow feature finish (Awesome)` to merge your code back to the develop branch. 

Now the fun begins:
- Go to github and fork the main repo to your account
- Pull the origin one more time to merge any changes that happened while you were working on your sweet feature.
- Set your fork as a remote with `git remote add fork <url for your fork>`
- Push your changes to the fork
- Go back to the main repo and submit a pull request (reference the ticket number)
- A maintainer will merge your changes into the main codebase and push them live to the site
- Party on