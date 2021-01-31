import * as fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

type BlogFrontMatter = {
  title: string;
  date: string;
};

type Fields = BlogFrontMatter & {
  slug: string;
  content: string;
};

export function getPostBySlug<T extends keyof Fields>(
  slug: string, fields: Array<T> = []
): Pick<Fields, typeof fields[number]> {
  // TODO Is this necessary?
  const realSlug = slug.replace(/\.md$/, '')
  console.log(slug, realSlug, `${realSlug}.md`);
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matter_ = matter(fileContents);
  const { content } = matter_;
  const data = matter_.data as BlogFrontMatter;
  const allItems = {
    ...data,
    slug: realSlug,
    content,
  };

  function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
    const ret: any = {};
    keys.forEach(key => {
      ret[key] = obj[key];
    })
    return ret;
  }

  const items = pick(allItems, ...fields)

  return items;
}

export function getAllPosts<T extends keyof Fields>(
  fields: Array<T> = []
): Array<Pick<Fields, typeof fields[number]>> {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // Sort posts by date in descending order
    .sort((post1, post2) => (((post1 as any).date > (post2 as any).date ? -1 : 1)));
  return posts;
}
