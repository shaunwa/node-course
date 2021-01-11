import fs, { fchmodSync } from 'fs';
import path from 'path';

// const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8');
// console.log(data);
// fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// });

// fs.writeFileSync(path.join(__dirname, 'my-new-file.txt'), 'Hello');
// fs.writeFileSync(path.join(__dirname, 'my-new-file.txt'), 'Goodbye');
// fs.writeFile(path.join(__dirname, 'my-new-file.txt'), 'Hello', (err, data) => {
//     if (err) console.log(err);
//     console.log("Done writing my-new-file.txt");
// });

// fs.appendFileSync(path.join(__dirname, 'my-new-file.txt'), '\nHello');
// fs.appendFileSync(path.join(__dirname, 'my-new-file.txt'), '\nGoodbye');
// fs.appendFile(path.join(__dirname, 'my-new-file.txt'), '\nGoodbye', (err) => {
//     if (err) console.log(err);
//     console.log("Done appending to my-new-file.txt");
// });

// fs.appendFileSync(path.join(__dirname, 'my-json-file.json'), JSON.stringify({ message: "Hello!" }));

// fs.unlinkSync(path.join(__dirname, 'my-new-file.txt'));
// fs.unlink(path.join(__dirname, 'my-new-file.txt'), (err) => {
//     if (err) console.log(err);
//     console.log("Done deleting my-new-file.txt");
// });

// fs.mkdirSync(path.join(__dirname, 'my-parent-directory', 'my-directory'), { recursive: true });
// fs.rmdirSync(path.join(__dirname, 'my-directory'));

// const exampleExists = fs.existsSync(path.join(__dirname, 'asdfasdf.txt'));
// console.log(exampleExists);

// const contents = fs.readdirSync(__dirname);
// console.log(contents);

// const stats = fs.lstatSync(path.join(__dirname, 'my-parent-directory'));
// console.log(stats);
// console.log(stats.isFile());
// console.log(stats.isDirectory());
