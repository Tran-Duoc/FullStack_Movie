export const generateImagePath = (path: string) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};

export const generateAvatarPath = (AvatarName: string) => {
  return `http://localhost:8000/images/${AvatarName}`;
};
