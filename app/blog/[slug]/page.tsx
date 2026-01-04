import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

function getPost(slug: string) {
  const filepath = path.join(process.cwd(), "public/blog", `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    return null;
  }

  const content = fs.readFileSync(filepath, "utf-8");
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

  let title = slug;
  let date = "";
  let description = "";
  let body = content;

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
    const dateMatch = frontmatter.match(/date:\s*"([^"]+)"/);
    const descMatch = frontmatter.match(/description:\s*"([^"]+)"/);

    if (titleMatch) title = titleMatch[1];
    if (dateMatch) date = dateMatch[1];
    if (descMatch) description = descMatch[1];

    body = content.replace(/^---\n[\s\S]*?\n---\n*/, "");
  }

  return { slug, title, date, description, body };
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | Expense Tracker`,
    description: post.description,
  };
}

export function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "public/blog");

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".md"));
  return files.map(f => ({ slug: f.replace(".md", "") }));
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container-custom max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {post.date && (
            <div className="flex items-center gap-4 text-gray-500">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>
          )}
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600"
          dangerouslySetInnerHTML={{ __html: formatMarkdown(post.body) }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Try Expense Tracker
          </Link>
        </div>
      </div>
    </article>
  );
}

function formatMarkdown(md: string): string {
  return md
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*<\/li>)/, "<ul>$1</ul>")
    .replace(/^(?!<[h|p|u|l])/gm, "<p>")
    .replace(/([^>])$/gm, "$1</p>");
}
