// import { Blog } from "@/app/types/blog";
// import Link from "next/link";
// import React from "react";

// const BlogItem = ({ blog }: { blog: Blog }) => {
//   return (
//     <Link
//       href={`/blog/${blog.slug.current}`}
//       className="block p-6 bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-gray-50 transition duration-300 ease-in-out my-8 mx-20"
//     >
//       <article>
//         <h3 className="mb-2 text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
//           {blog.title}
//         </h3>
//         <p className="mb-4 text-sm text-gray-500">
//           {new Date(blog.publishedAt).toDateString()}
//         </p>

//         <p className="mb-4 text-gray-600">
//           {blog.metadata.slice(0, 140)}...
//         </p>
//       </article>
//     </Link>
//   );
// };

// export default BlogItem;






import { Blog } from "@/app/types/blog";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }: { blog: Blog }) => {
  // Defensive check to ensure blog.slug and blog.slug.current exist
  if (!blog || !blog.slug || !blog.slug.current) {
    return <div>Invalid blog data</div>; // Or you can render a loading state, etc.
  }

  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="block p-6 bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-gray-50 transition duration-300 ease-in-out my-8 mx-20"
    >
      <article>
        <h3 className="mb-2 text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {blog.title}
        </h3>
        <p className="mb-4 text-sm text-gray-500">
          {new Date(blog.publishedAt).toDateString()}
        </p>

        <p className="mb-4 text-gray-600">
          {blog.metadata.slice(0, 140)}...
        </p>
      </article>
    </Link>
  );
};

export default BlogItem;
