// import config from "@/sanity/config/client-config";
// import { Blog } from "@/app/types/blog";
// import { PortableText } from "@portabletext/react";
// import { getImageDimensions } from "@sanity/asset-utils";
// import urlBuilder from "@sanity/image-url";
// import Image from "next/image";

// const ImageComponent = ({ value, isInline }: any) => {
//   const { width, height } = getImageDimensions(value);
//   return (
//     <div className="my-10 overflow-hidden rounded-[15px]">
//       <Image
//         src={
//           urlBuilder(config)
//             .image(value)
//             .fit("max")
//             .auto("format")
//             .url() as string
//         }
//         width={width}
//         height={height}
//         alt={value.alt || "blog image"}
//         loading="lazy"
//         style={{
//           display: isInline ? "inline-block" : "block",
//           aspectRatio: width / height,
//         }}
//       />
//     </div>
//   );
// };

// const components = {
//   types: {
//     image: ImageComponent,
//   },
// };

// const RenderBodyContent = ({ post }: { post: Blog }) => {
//   return (
//     <>
//       <PortableText value={post?.body as any} components={components} />
//     </>
//   );
// };

// export default RenderBodyContent;



import config from "@/sanity/config/client-config";
import { Blog } from "@/app/types/blog";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

interface ImageComponentProps {
  value: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  isInline?: boolean;
}

const ImageComponent = ({ value, isInline }: ImageComponentProps) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="my-10 overflow-hidden rounded-[15px]">
      <Image
        src={
          urlBuilder(config)
            .image(value)
            .fit("max")
            .auto("format")
            .url() as string
        }
        width={width}
        height={height}
        alt={value.alt || "blog image"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ImageComponent,
  },
};

interface RenderBodyContentProps {
  post: Blog;
}

const RenderBodyContent = ({ post }: RenderBodyContentProps) => {
  return (
    <>
      <PortableText value={post?.body} components={components} />
    </>
  );
};

export default RenderBodyContent;
