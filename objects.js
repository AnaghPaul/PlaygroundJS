// const storage = {
//   file1: "file1",
//   dir1: {
//     dir1File1: "dir1File1",
//     subdir1: {
//       subsubdir1: {
//         fileA: "fileA",
//         fileB: "fileB",
//         ultraSubDir: { lastDir: [Object], dirR: [Object] }
//       }
//     },
//     subdir2: {}
//   },
//   dir2: { fileX: "fileX", subdir2: { fileY: "fileY", fileZ: "fileZ" } }
// }

// let currDir = storage;

// const cd = function (path) {
//   console.log('path:', path);
//   for (const fileOrFolder of path) {
//     console.log('\n\ncurrDir:', currDir);
//     currDir = currDir[fileOrFolder];
//   }

//   console.log('new currDir', currDir);
// }

// const fn = function () {
//   const path1 = ['dir1', 'subdir1', 'subsubdir1', 'ultraSubDir'];



//   cd(path1);

// }

// fn();
