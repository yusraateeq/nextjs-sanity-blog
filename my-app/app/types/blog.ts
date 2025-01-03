// import { PortableTextBlock } from "sanity";

// export type Author = {
//   name: string,
//   image: string,
//   bio?: string,
//   slug: {
//     current: string,
//   },
//   _id?: number | string,
//   _ref?: number | string,
// };

// export type Blog = {
//   _id: number,
//   title: string,
//   slug: any,
//   metadata: string,
//   body: PortableTextBlock[],
//   mainImage: string,
//   author: Author,
//   tags: string[],
//   publishedAt: string,
// };


// // import { PortableTextBlock } from "sanity";

// // // Author type definition
// // export type Author = {
// //   name: string;
// //   image: string;
// //   bio?: string;
// //   slug: {
// //     current: string;
// //   };
// //   _id?: number | string;
// //   _ref?: number | string;
// // };

// // // Blog type definition
// // export type Blog = {
// //   _id: number;
// //   title: string;
// //   slug: { current: string };  // Assuming slug is an object with a 'current' string property
// //   metadata: string;
// //   body: PortableTextBlock[];
// //   mainImage: string | { asset: { url: string } }; // Assuming mainImage is a string URL or an object with asset URL
// //   author: Author;
// //   tags: string[];
// //   publishedAt: string;
// // };





import { PortableTextBlock } from "sanity";

// Author type definition
export type Author = {
  name: string;
  image: string;
  bio?: string;
  slug: {
    current: string;
  };
  _id?: number | string;
  _ref?: number | string;
};

// Blog type definition
export type Blog = {
  _id: number;
  title: string;
  slug: { current: string }; // Ensure slug has a 'current' field of type string
  metadata: string;
  body: PortableTextBlock[];
  mainImage: string | { asset: { url: string } }; // Assuming mainImage is a string URL or an object with asset URL
  author: Author;
  tags: string[];
  publishedAt: string;
};
