import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  // console.log(src);
  //   let img_split = src.split('/');
  //   let splitted_src = img_split[img_split.length - 1];
  //   let final_src;
  //   if (splitted_src) {
  //     let temp_url = splitted_src.replace('uploads\\', '');
  //     final_src = temp_url;
  //   }
  // console.log(img_split[img_split.length - 1]);

  return `https://res.cloudinary.com/dfygomb1s/image/fetch/${src}`;
};
const CommonImage = (props) => {
  return <Image loader={myLoader} {...props} />;
};

export default CommonImage;
