import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building modern web applications.",
    readTime: "5 min read",
    image: "https://source.unsplash.com/random/800x600?react",
  },
  {
    id: 2,
    title: "CSS Best Practices",
    excerpt: "Discover the best practices for writing maintainable CSS code.",
    readTime: "4 min read",
    image: "https://source.unsplash.com/random/800x600?css",
  },
  {
    id: 3,
    title: "JavaScript Tips and Tricks",
    excerpt: "Improve your JavaScript skills with these helpful tips and tricks.",
    readTime: "6 min read",
    image: "https://source.unsplash.com/random/800x600?javascript",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-background">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="blog-card glass cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;