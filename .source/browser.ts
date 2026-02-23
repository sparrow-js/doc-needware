// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"discord.en.mdx": () => import("../content/docs/discord.en.mdx?collection=docs"), "discord.zh.mdx": () => import("../content/docs/discord.zh.mdx?collection=docs"), "feishu.en.mdx": () => import("../content/docs/feishu.en.mdx?collection=docs"), "feishu.zh.mdx": () => import("../content/docs/feishu.zh.mdx?collection=docs"), "index.en.mdx": () => import("../content/docs/index.en.mdx?collection=docs"), "index.zh.mdx": () => import("../content/docs/index.zh.mdx?collection=docs"), "telegram.en.md": () => import("../content/docs/telegram.en.md?collection=docs"), "telegram.zh.mdx": () => import("../content/docs/telegram.zh.mdx?collection=docs"), }),
};
export default browserCollections;