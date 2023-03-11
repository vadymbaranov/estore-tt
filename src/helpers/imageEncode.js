/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-template */
import fs from 'fs/promises';
import path from 'path';

async function base64_encode() {
  const dirName = 'public/assets';
  const fileNames = ['huawei-phone.png', 'huawei-tablet.png', 'watch.png', 'iphone.png', 'macbook.png', 'macbook.png' ];
  const resultFilePath = path.resolve(dirName, 'encodedImages.json');
  const data = [];

  for (let i = 0; i < fileNames.length; i += 1) {
    const filePath = path.resolve(dirName, fileNames[i]);
    const bitmap = await fs.readFile(filePath, 'base64');

    data.push({ image: 'data:image/png;base64,' + bitmap });
  }

  const encodedFile = await fs.writeFile(resultFilePath, JSON.stringify(data));

  return encodedFile;
}

base64_encode();
