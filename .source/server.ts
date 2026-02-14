// @ts-nocheck
import * as __fd_glob_5 from "../content/docs/telegram.zh.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/telegram.en.md?collection=docs"
import * as __fd_glob_3 from "../content/docs/index.zh.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.en.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/feishu.zh.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/feishu.en.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"feishu.en.mdx": __fd_glob_0, "feishu.zh.mdx": __fd_glob_1, "index.en.mdx": __fd_glob_2, "index.zh.mdx": __fd_glob_3, "telegram.en.md": __fd_glob_4, "telegram.zh.mdx": __fd_glob_5, });