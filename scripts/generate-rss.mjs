import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogPostContents } from '.contentlayer/generated';

async function generate() {
  const feed = new RSS({
    title: 'Francisco Moretti',
    site_url: 'https://franciscomoretti.vercel.app',
    feed_url: 'https://franciscomoretti.vercel.app/feed.xml'
  });

  allBlogPostContents.map((post) => {
    feed.item({
      title: post.title,
      url: `https://franciscomoretti.vercel.app/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
