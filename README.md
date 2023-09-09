#Online Book-Store
A web based business model

HTML Creator : Yashodhan Devdhar
CSS Creator : Rushikesh Surve
JavaScript Creator : Vishwaved Kelkar


#Instructions for Git Configuration for the Project
Follow these commands:
In Book-Store folder:
1. git config --global user.name YourNameWithoutQuotes
(Skip if alredy done)
2. git config --global user.email YourEmailWithoutQuotes
3. git clone git@github.com:jtrio/Book-Store.git
4. . git remote add origin git@github.com:jtrio/Book-Store.git

5. ssh-keygen -t ed25519 -C "eyantrarvy@gmail.com"
After this : "/home/rushikesh/.ssh/id_ed25519.pub" similar type of path for you .pub file will be shown

6. cat YourPathForPUBFileWithoutQuotes
Copy the entire key starting eith  ssh-ed25519 and ending with eyantrarvy@gmail.com 

Go to Github Account > Profile icon top right corner > Settings > SSH and GPG Keys > New SSH Key > Add any title > Paste your key in 'key' section


Go to project folder and type commands
7. git fetch
8. git status etc.

Create your HTML or Javascript files (Dont edit any other file)
9. git add FileNameWIthExtensionWithoutQuotes
10. git commit -m "Commit message" 
Sample commit message : "style.css till 23:45" 
that is - filename.extension till <Your Last Video Playback time>

To push to github account
11.a)  git push -u origin
If error in above step
11.b)  git push --set-upstream origin master

Check Github account if changes are reflected
