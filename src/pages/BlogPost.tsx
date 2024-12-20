import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const BLOG_POSTS = {
  1: {
    title: "Getting Started with React",
    content: "React is a popular JavaScript library for building user interfaces...",
    image: "https://source.unsplash.com/random/1200x600?react",
    readTime: "5 min read",
    date: "March 15, 2024",
  },
  2: {
    title: "CSS Best Practices",
    content: "Writing maintainable CSS code is crucial for any web project...",
    image: "https://source.unsplash.com/random/1200x600?css",
    readTime: "4 min read",
    date: "March 14, 2024",
  },
  3: {
    title: "JavaScript Tips and Tricks",
    content: "JavaScript is a versatile language with many hidden features...",
    image: "https://source.unsplash.com/random/1200x600?javascript",
    readTime: "6 min read",
    date: "March 13, 2024",
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_POSTS[Number(id) as keyof typeof BLOG_POSTS];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-4xl mx-auto">
        <article className="glass rounded-xl p-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex justify-center gap-4 text-gray-400 mb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{post.content}</p>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;