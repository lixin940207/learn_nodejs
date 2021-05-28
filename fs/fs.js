const fs = require('fs/fs')

// fs.stat('./fs.js',(err, data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`is file: ${data.isFile()}`)
//     console.log(`is dir: ${data.isDirectory()}`)
// })

// fs.mkdir('./new_dir',(err => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('create sucess')
// }))

/*
writeFile, 没有则创建，有则替换
 */
// fs.writeFile('./new_dir/new_file', "hello nodejs, hahaha", err => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log("create and write sucess")
// })
/*
appendFile文件不存在则创建，存在则追加
 */
// fs.appendFile('./new_dir/new_file', 'append sth', err => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('append success')
// })

// fs.readFile('./new_dir/new_file', (err, data) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(data)//buffer数据
//     console.log(data.toString())
// })

// fs.readdir('./new_dir', (err, files) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(files)
// })

/*
rename or move file
 */
// fs.rename('./new_dir/new_file', './new_dir/new_file2', err => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log("rename success")
// })

// fs.rmdir('./new_dir', err => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log("remove sucess")
// })

// fs.unlink('./new_dir/new_file2', err => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log("remove success")
// })

//exercise
var path = './upload'

fs.stat(path, (err, stats) => {
    if (err){
        mkdir(path)
        return;
    }
    if (stats.isDirectory()){
        console.log("dir exists")
    }else {
        mkdir(path)
    }
})

function mkdir(dir){
    fs.mkdir(dir, err => {
        if(err){
            console.log(err);
            return;
        }
    });
    console.log("create sucess")
}