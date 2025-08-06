### Objectives

* Familiarize yourself with Git commands such as `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git merge`, and `git log`.
* Learn how to set up your machine with Git configuration.
* Work with `.gitignore` to ignore unwanted files.
* Create and switch between branches, and perform merges.
* Resolve merge conflicts using P4Merge visual merge tool.
* Clean up and push final changes to a remote repository on GitLab.

-----

### Step 1: Setup your machine with Git Configuration
1. **Check Git Client Installation:**
    ```bash
    git --version
    ```
    **Output:**
    ```
    git version 2.45.2.windows.1
    ```

2. **Configure User Level User ID and Email ID:**
    ```bash
    git config --global user.name "Sivani"
    git config --global user.email "ksssivani257@gmail.com"
    ```
    Sets your global Git username and email.

3. **Check Configuration:**
    ```bash
    git config --list
    ```
    Displays your configured details including `user.name` and `user.email`.

-----

### Step 2: Add a file to source code repository (Hands-on 1)
1. **Create a new project `GitDemo`:**
    ```bash
    mkdir GitDemo
    cd GitDemo
    git init
    ```

2. **Create `welcome.txt` with content:**
    ```bash
    echo "Welcome to Git Hands-On" > welcome.txt
    ```

3. **Stage and commit the file:**
    ```bash
    git add welcome.txt
    git commit -m "Initial commit - added welcome.txt"
    ```

4. **Connect to remote GitLab repo and push:**
    ```bash
    git remote add origin https://gitlab.com/sivani_25/gitdemo.git
    git push -u origin main
    ```

-----

### Step 3: Implement `.gitignore` (Hands-on 2)
1. **Create unwanted files:**
    ```bash
    echo "This is a log file" > error.log
    mkdir log
    echo "log content" > log/logfile.txt
    ```

2. **Create `.gitignore` file:**
    ```bash
    touch .gitignore
    ```
    Add:
    ```
    *.log
    log/
    ```

3. **Commit `.gitignore`:**
    ```bash
    git add .gitignore
    git commit -m "Added .gitignore to ignore .log files and log folder"
    git push origin main
    ```

-----

### Step 4: Branching & Merging (Hands-on 3)
1. **Create and switch to `GitNewBranch`:**
    ```bash
    git branch GitNewBranch
    git checkout GitNewBranch
    ```

2. **Add a file in the new branch:**
    ```bash
    echo "Branch-specific content" > feature.txt
    git add feature.txt
    git commit -m "Added feature.txt in GitNewBranch"
    ```

3. **Switch back to `main` and merge:**
    ```bash
    git checkout main
    git merge GitNewBranch
    git branch -d GitNewBranch
    ```

-----

### Step 5: Conflict Resolution with P4Merge (Hands-on 4)
1. **Create a branch `GitWork`:**
    ```bash
    git checkout -b GitWork
    echo "<message>Hello from GitWork branch</message>" > hello.xml
    git add hello.xml
    git commit -m "Added hello.xml in GitWork branch"
    ```

2. **Switch to `main` and create conflicting file:**
    ```bash
    git checkout main
    echo "<message>Hello from main branch</message>" > hello.xml
    git add hello.xml
    git commit -m "Added hello.xml in main branch"
    ```

3. **Merge and resolve conflict with P4Merge:**
    ```bash
    git merge GitWork
    git mergetool
    ```
    In P4Merge, edit the merged result to keep desired changes, save, and close.

4. **Commit the resolved file:**
    ```bash
    git add hello.xml
    git commit -m "Resolved merge conflict and merged GitWork into main"
    ```

5. **Ignore P4Merge backup files:**
    ```bash
    echo "*.orig" >> .gitignore
    git add .gitignore
    git commit -m "Ignored P4Merge backup files"
    ```

6. **Delete the branch:**
    ```bash
    git branch -d GitWork
    ```

-----

### Step 6: Final Cleanup & Push (Hands-on 5)
1. **Ensure main is clean:**
    ```bash
    git status
    ```

2. **Pull latest remote changes:**
    ```bash
    git pull origin main
    ```

3. **Push final changes to GitLab:**
    ```bash
    git push origin main
    ```

4. **Verify in GitLab UI** that all files and commits are present.

-----

## Output Images:
![Output](Outputs of Week-8 execution/Screenshot (164).png)
![Output](Outputs of Week-8 execution/Screenshot (166).png)
![Output](Outputs of Week-8 execution/Screenshot (167).png)
![Output](Outputs of Week-8 execution/Screenshot (168).png)
![Output](Outputs of Week-8 execution/Screenshot (170).png)
![Output](Outputs of Week-8 execution/Screenshot (171).png)
![Output](Outputs of Week-8 execution/Screenshot (172).png)