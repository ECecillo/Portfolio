const fetchRandomPicture = async (imageSize?: { width: number; height: number }) => {
  const unsplashAPI = `https://source.unsplash.com/random/${
    imageSize?.width ?? 250
  }x${imageSize?.height ?? 250}`;
  const response = await fetch(unsplashAPI);
  const image = response.url;
  return image;
};

export default fetchRandomPicture;
