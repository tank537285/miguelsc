#! /usr/bin/env node
const {cwd} = require('process');
const { program } = require('commander');
const inquirer = require('inquirer');
const fs=require('fs');
program.version('0.0.1');
program
    .option('-d, --debug', 'output extra debugging')
    .option('-n, --name <type>', '设置项目名字');

program.parse(process.argv);
const options = program.opts();


/*针对有选项*/
inquirer
    .prompt([
        /* Pass your questions in here */
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

const editFile = function({ version, projectName }) {
    let pro=new Promise((resolve,reject) => {
        // 读取文件
        fs.readFile(`${cwd()}/${projectName}/package.json`, (err, data) => {
            if (err) throw err;
            // 获取json数据并修改项目名称和版本号
            let _data = JSON.parse(data.toString())
            _data.name = projectName
            _data.version = version
            let str = JSON.stringify(_data, null, 4);
            // 写入文件
            fs.writeFile(`${cwd()}/${projectName}/package.json`, str, function (err) {
                if (err) {
                    reject(err);
                }else {
                    resolve();
                }
            })
        });
    });
    return pro;

};

async function removeDirector(name){
    const fs = require('fs-extra');
    const src = `${cwd()}/_${name}/packages/miguelreacttemp`;
    const dest = `${cwd()}/${name}`;
    const pro=new Promise((resolve,reject)=>{
        fs.move(src, dest, err => {
            if(err) return reject(err);
            fs.remove(`${cwd()}/_${name}`, err => {
                if (err) return reject(err);
                resolve();
            })
        })
    });

    return pro;
}

async function getGit(name) {
    /*var Git = require("nodegit");
    return Git.Clone("https://github.com/tank537285/miguelsc.git", `${cwd()}/_${name}`)
        .then(function(repo) {
            return Promise.resolve();
        })
        .catch(function(err) {
            fs.remove(`${cwd()}/_${name}`, err => {
                if (err) return Promise.reject(err);
                return Promise.reject(err)
            })
        });*/
    const shell = require('shelljs')
    /*const path = 'absolute/path/to/folder'
    shell.cd(path)*/
    try {
        shell.exec(`git clone https://github.com/tank537285/miguelsc.git ${cwd()}/_${name}`);
        return Promise.resolve();
    } catch(e) {
        return Promise.reject(e);
    }
}

//执行
async function getcli(name) {
    console.log("开始下载模版");
    await getGit(name);
    console.log("开始初始化模版")
    await removeDirector(name);
    console.log("开始修改版本号")
    await editFile({version:'0.0.1',projectName:name});
}

if(options.name) {
    getcli(options.name).then(()=>{
        console.log('模版加载成功');
    }).catch(err=>{
        console.log(err);
    });
// Clone a given repository into the `./tmp` folder.
}else{
    console.log('--name 未指定');
}