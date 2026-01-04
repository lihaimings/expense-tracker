import fs from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), "public/blog");

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".md"));

  return files.map(filename => {
    const content = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    let title = filename.replace(".md", "");
    let date = "";
    let description = "";

    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
      const dateMatch = frontmatter.match(/date:\s*"([^"]+)"/);
      const descMatch = frontmatter.match(/description:\s*"([^"]+)"/);

      if (titleMatch) title = titleMatch[1];
      if (dateMatch) date = dateMatch[1];
      if (descMatch) description = descMatch[1];
    }

    return {
      slug: filename.replace(".md", ""),
      title,
      date,
      description
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="section">
      <div className="container-custom max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Expense Tracker
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600 mt-2">Tips, guides, and updates</p>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500">No articles yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="card hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  {post.date && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  )}
                  {post.description && (
                    <p className="text-gray-600 mt-2 line-clamp-2">{post.description}</p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
