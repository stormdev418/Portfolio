git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "Wiscaksono" ];
        then
                GIT_COMMITTER_NAME="felipealmeida85";
                GIT_AUTHOR_NAME="felipealmeida85";
                GIT_COMMITTER_EMAIL="felipedealmeida@gmail.com";
                GIT_AUTHOR_EMAIL="felipedealmeida@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD