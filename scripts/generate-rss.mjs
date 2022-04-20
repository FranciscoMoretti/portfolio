import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogPostContents } from  '../.contentlayer/generated/index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Francisco Moretti',
    site_url: 'https://franciscomoretti.com',
    feed_url: 'https://franciscomoretti.com/feed.xml'
  });

  allBlogPostContents.map((post) => {
    feed.item({
      title: post.title,
      url: `https://franciscomoretti.com/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
