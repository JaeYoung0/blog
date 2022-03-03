export const nextImgSrc = async (path: string) => {
  // public 폴더가 아니라 인접폴더에서 불러오고 싶다.
  // 만약에 이걸 쓰다면, promise를 어떻게 풀어낼까
  const result = await import(
    `@pages/play/components/SpaceBox/assets/textures/${path}`
  );

  return result.default.src;
};

//   nextImgSrc("earth_nasa.jpeg");
