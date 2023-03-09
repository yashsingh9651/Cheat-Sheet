import React, { useRef } from "react";

export const Home = () => {
  const router = useRef();
  const tailwind = useRef();
  const deploy = useRef();
  const deployTailwind = useRef();
  const Git = useRef();
  const handleClick = (ele) => {
    console.log(ele);
    window.scrollTo({ top: ele.current.offsetTop, behavior: "smooth" });
  };
  return (
      <>
      <div className="flex">
      {/* Button Box */}
        <div className="flex1">
          <div className="sidebarItem">
            <button
              onClick={() => {
                handleClick(router);
              }}
              className="button"
            >
              react router dom
            </button>
            <button
              onClick={() => {
                handleClick(tailwind);
              }}
              className="button"
            >
              tailwind CSS
            </button>
            <button
              onClick={() => {
                handleClick(deploy);
              }}
              className="button"
            >
              github deployment
            </button>
            <button
              onClick={() => {
                handleClick(deployTailwind);
              }}
              className="button"
            >
              github deployment with tailwind
            </button>
            <button onClick={()=>{handleClick(Git)}} className='button'>Git Commands</button>
          </div>
        </div>
        {/* Content Router Box */}
        <div className="flex2">
          <div ref={router}>
            <h1>react router dom</h1>
            <div className="content">
              <div className="install">npm i react-router-dom@6.4.1</div>
              <div className="import">
                import &#123; BrowserRouter, Route, Routes &#125; from
                "react-router-dom";
              </div>
              <div className="import">
                import &#123; Link &#125; from 'react-router-dom';
              </div>
              <div className="material">
                &#60;BrowserRouter basename='/GitHub_Apllication_Name' &#62;
                <br />
                &#60;Routes&#62;
                <br />
                &#60;Route exact path ="/"
                element=&#123;&#60;Home&#62;&#125;/&#62;
                <br />
                &#60;/Routes&#62;
                <br />
                &#60;/BrowserRouter&#62;
              </div>
            </div>
          </div>
        {/* Content Tailwind Box */}
          <div ref={tailwind}>
            <h1>Tailwind CSS</h1>
            <div className="content">
              <div className="install">npm install -D tailwindcss</div>
              <div className="install">npx tailwindcss init</div>
              <div className="import">
                content: &#91; "./src/**/*.&#123;js,jsx,ts,tsx&#125;", &#93;,
              </div>
            </div>
          </div>
        {/* Content Deployment Box */}
          <div ref={deploy}>
            <h1>github deployment</h1>
            <div className="content">
              <h2>Open Gitbash or poweshell</h2>
              <div className="install">
                cd d:web_development_2Dec/my_projects/ <br />
                git config --global user.name "Yash Singh"
                <br />
                git config --global user.email "yashsingh9009670@gmail.com"
                <br />
                git init
                <br />
                git add .<br />
                git commit -m ""
                <br />
              </div>
              <h2>Open GitHub</h2>
              <div className="material">
                Create New Repository <br />
                Push Respository from gitbash
              </div>
              <h2>Open Package.json</h2>
              <div className="material">
                "homepage": "https://myusername.github.io/my-app",
                <br />
                npm install --save gh-pages
              </div>
              <h2>Add in scripts in Package.json</h2>
              <div className="material">
                "predeploy": "npm run build",
                <br />
                "deploy": "gh-pages -d build",
              </div>
              <h2>Open Terminal</h2>
              <div className="material">npm run deploy</div>
            </div>
          </div>
        {/* Content Deployment with Tailwind Box */}
          <div ref={deployTailwind}>
            <h1>github deployment with tailwind CSS</h1>
            <div className="content">
              <h2>Open Gitbash or poweshell</h2>
              <div className="install">
                cd d:web_development_2Dec/my_projects/ <br />
                git config --global user.name "Yash Singh"
                <br />
                git config --global user.email "yashsingh9009670@gmail.com"<br />
                git init
                <br />
                git add .<br />
                git commit -m ""
                <br />
              </div>
              <h2>Open GitHub</h2>
              <div className="material">
                Create New Repository <br />
                Push Respository from gitbash
              </div>
              <h2>Add in top in Package.json</h2>
              <div className="material">
                "homepage": "https://myusername.github.io/my-app",
              </div>
              <h2>Open Terminal</h2>
              <div className="material">npm install --save gh-pages</div>
              <h2>Add in Scripts in Package.json</h2>
              <div className="material">
                "predeploy": "npm run build",
                <br />
                "deploy": "gh-pages -d build",
                <br />
                "tailwindcss" : "postcss tailwind.css -o src/index.css",
              </div>
              <h2>Open Terminal</h2>
              <div className="install">
                npm install postcss-cli tailwind --save-dev
              </div>
              <h2>Create File postcss.config.js and Paste Below Content</h2>
              <div className="install">
                const plugins = &#91;require&#40;"tailwindcss"&#41;&#93;; <br />
                module.exports = &#123;plugins:plugins&#125;;
              </div>
              <h2>Create File tailwind.css and Paste Below Content and Also Content of src/index.css File and delete the content from src/index.css</h2>
              <div className="install">
                @tailwind base;
                <br />
                @tailwind components;
                <br />
                @tailwind utilities;
              </div>
              <h2>Open Terminal</h2>
              <div className="material">
                npm run tailwindcss <br />
                npm run deploy
              </div>
            </div>
          </div>
          <div ref={Git}>
            <h1>Git Commands</h1>
            <div className="content">
              <h2>Open Gitbash or poweshell</h2>
              <div className="material">
               <span>cd</span> = Change Directory.<br /><span>pwd</span> = Present Working Directory.<br /><span>ls</span> = List Content.<br /> <span>git init</span> = To initialize the repository &#40;Untracked Stage&#41;.<br /><span>rm -rf.git</span> = To delete the git file or repository.<br /> <span>git status </span>= To get the status of the repository.<br /><span>touch.gitignore</span> = It will create a gitignore file.<br /><span>git clone "web_url"</span> = To clone a respository.<br /><span>git add. or git add --a</span> = Add all the changes or files to Staging Area &#40;Unmodified or Staged Stage&#41;.<br /><span>git commit -m "Add all the changes"</span>= Add Comments.<br /><span>git log</span> = It will give you all the previous commits.<br /><span>git log -p</span> = It will give you all the previous commits with all details.<br /><span>git log -p -3</span> = It will give you the 3 previous commits with details.<br /><span>git log --stat</span> = It will give you the all commits with details in short.<br /><span>git log --pretty=oneline</span> = It will give you all the commits in single line.<br/><span>git log --pretty=short</span> = It will give you all the commits with details in short.<br/><span>git log --since=2.days</span> = It will give you all commits with details of previous 2 days.<span>q</span> = to exit from the log area or commit area.<br /> <span>git commit --amend</span> = It will open vim editor and <span className="p">click i to write commit and then click esc button then click semi-collon button and then click w and q button and</span> it will add commit with the previous commmit.<br /><span>git differ</span> = Compare the files or changes of working directory and staging area.<br /><span>git differ --staged</span> = Compare the files or changes of previous commit and staging area.<br /><span>git commit -a -m "DirectCommit"</span> = Stage all the tracked files and make commit of it *but if any untracked file is there then it will not go to staged area.<br /><span>git rm file.html</span> = It will delete the file.html file.<br /><span>git mv before.html after.html</span> = It will rename the file and also get staged.<br /><span>git rm --cached file.html</span> = Now it will stop tracking the file.html file.<br /><span>git restore --staged file.html</span> = This will unstaged the file. <br /><span>git checkout -- file.html</span> = It will restore your file data to previous commit file data. <br /><span>git checkout -f</span> = It will restore your all files data to previous commit file data. <br /><span>git config --global alias.last 'log -p -1'</span> = Now we can type git last and we get the log of 1 last commit. <br /><span>git checkout -b develop</span> = It will create new branch named develop and take you into that branch. <br /><span>git checkout master</span> = This will take you to master branch. <br /><span>git branch</span>   = This will give you all the name of branches. <br /><span>git merge develop</span> = This will merge the develop branch with the current branch in which you are working. <br /><span>git branch --merged</span> = This will give you the names of the merged branches. <br /><span>git branch --no-merged</span> = This will give you the names of branches that are not merged. <br /><span>git branch -d develop</span> = This will delete the branch .But gives the error if the branch is not merged. <br /> <span>git branch -v</span>  = This will give you all the last comment of every branch. <br /><span>git push origin develop</span> = This will push your develop branch in the repository. <br /> <span>git push origin develop:remoteDevelop</span> = This will push your develop branch in repository with the name remoteDevelop. <br /><span>git push -d origin develop</span> = This will delete the develop branch from the remote respository. <br /><span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
