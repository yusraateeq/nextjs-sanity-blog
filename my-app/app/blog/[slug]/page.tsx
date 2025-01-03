// import React from "react";
// import { getPostBySlug } from "@/sanity/sanity-utils";
// import RenderBodyContent from "@/app/components/Blog/RenderBodyContent";
// import Header from "@/app/components/Header/page";

// interface Params {
//   slug: string;
// }

// const SingleBlogPage = async ({ params }: { params: Params }) => {
//   const post = await getPostBySlug(params.slug);

//   return (
//     <article>
//       <Header />

//       <div className="max-w-3xl mx-auto p-5">
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
//           <p className="text-lg text-gray-600 mt-3">
//             <span className="font-medium">Published:</span>
//             {new Date(post.publishedAt).toDateString()}
//             <span className="font-medium pl-2">by </span>
//           </p>
//           <p className="text-gray-500 mt-2">{post.metadata}</p>
//         </div>

//         <div className="prose lg:prose-xl mt-8">
//           <RenderBodyContent post={post} />
//         </div>
//       </div>
//     </article>
//   );
// };

// export default SingleBlogPage;





import React from "react";
import { getPostBySlug } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/app/components/Blog/RenderBodyContent";
import Header from "@/app/components/Header/page";

interface Params {
  slug: string;
}

const SingleBlogPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params; // Resolving the promise to get the slug
  const post = await getPostBySlug(slug);

  return (
    <article>
      <Header />

      <div className="max-w-3xl mx-auto p-5">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
          <p className="text-lg text-gray-600 mt-3">
            <span className="font-medium">Published:</span>
            {new Date(post.publishedAt).toDateString()}
            <span className="font-medium pl-2">by </span>
          </p>
          <p className="text-gray-500 mt-2">{post.metadata}</p>
        </div>

        <div className="prose lg:prose-xl mt-8">
          <RenderBodyContent post={post} />
        </div>
      </div>
    </article>
  );
};

export default SingleBlogPage;
