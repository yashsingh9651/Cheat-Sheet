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
                element=&#123;&#60;Home&#62;&#125;&#62;
                <br />
                &#60;Routes&#62;
                <br />
                &#60;BrowserRouter&#62;
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
              <div className="material">
                &#60;BrowserRouter basename='/GitHub_Apllication_Name' &#62;
                <br />
                &#60;Routes&#62;
                <br />
                &#60;Route exact path ="/"
                element=&#123;&#60;Home&#62;&#125;&#62;
                <br />
                &#60;Routes&#62;
                <br />
                &#60;BrowserRouter&#62;
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
                <br />
                npm install --save gh-pages
              </div>
              <h2>Open Terminal</h2>
              <div className="material">npm install --save gh-pages</div>
              <h2>Add in Scripts in Package.json</h2>
              <div className="material">
                "predeploy": "npm run build",
                <br />
                "deploy": "gh-pages -d build",
                <br />
                "tailwindcss" : "postcss tailwind.css -o public/app.css",
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
              <h2>Create File tailwind.css and Paste Below Content and Also Content of index.css File</h2>
              <div className="install">
                @tailwind base;
                <br />
                @tailwind components;
                <br />
                @tailwind utilities;
              </div>
              <h2>Now Link app.css File to index.html file in Public Folder and delete index.css File and Remove import from index.js File</h2>
              <div className="material">
                npm run deploy
              </div>
            </div>
          </div>
          <div ref={Git}>
            <h1>Git Commands</h1>
            <div className="content">
              <h2>Open Gitbash or poweshell</h2>
              <div className="install">
               cd = Change Directory <br />pwd = Present Working Directory <br />ls = List Content <br /> git init = To initialize the repository<br />rm -rf .git = To delete the git file or repository<br /> git status = To get the status of the repository <br />git clone "web_url" = To clone a respository <br />git add --a = Add all the changes or file to Staging Area <br />git commit -m "Add all the changes" <br />git log = It will give you all the previous commits <br />q = to exit from the log area or commit area 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
