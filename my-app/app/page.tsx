import { client } from '@/sanity/sanity-utils';
import BlogItem from './components/Blog/page';
import { PortableTextBlock } from "sanity";
import Header from "./components/Header/page";

interface Iblog {
  _id: string; // Make sure this is a string
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  metadata: string;
  body: PortableTextBlock[];
  mainImage: string;
  author: string;
  tags: string[];
}

export default async function Home() {
  const res: Iblog[] = await client.fetch(`*[_type == 'post']`);

  return (
    <div>
      <Header/>
      {res.map((blog) => (
        <BlogItem key={blog._id} blog={blog} />  // Ensure the `blog` matches the `Blog` type here
      ))}
    </div>
  );
}
