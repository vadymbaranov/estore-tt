/* eslint-disable no-return-await */
import fs from 'fs/promises';
import path from 'path';

async function addImages() {
  const dirName = 'public/assets';
  const imageFile = 'encodedImages.json';
  const productsFile = 'products.json';
  const imagePath = path.resolve(dirName, imageFile);
  const productsPath = path.resolve(dirName, productsFile);

  const images = await fs.readFile(imagePath);
  const parsedImages = JSON.parse(images);

  const products = await fs.readFile(productsPath);
  const parsedProducts = JSON.parse(products);

  const combined = parsedProducts.map((product, i) => {
    return {
      ...product,
      image: parsedImages[i].image,
    };
});

  return await fs.writeFile(productsPath, JSON.stringify(combined));
}

addImages();
