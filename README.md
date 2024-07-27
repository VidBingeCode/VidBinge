
<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,ts" />
  <br/>
</p>
<br/><br/>

This is the source code for VidBinge. I do not condone piracy of any kind. I just enjoy coding.

# ⚡ What is VidBinge?

VidBinge is a service that displays video files from third-party providers within an intuitive and aesthetic user interface.

# 🔥 Features

- Automatic saving of progress, optionally synced to an account.
- Bookmark shows or movies to keep track of what you want to watch.
- Minimalistic interface that only shows what's required, with no algorithm to consume you.

## 🍄 Philosophy

This project is designed to be simple and easy to use, keeping features minimal but polished. We aim for minimalism rather than becoming another bulky streaming site.

Hosting should be as cheap and simple as possible. It’s just a static website with a proxy, with an optional backend for cross-device syncing.

Content is fetched from third parties and scraping is fully done on the client-side. This means that the host does not store any files or media on their server. All files are streamed directly from the third parties.

## ⚠️ Limitations

- As a static site, there is no SSR (Server-Side Rendering).
- To keep hosting costs low, the number of proxied requests needs to be minimized.
- No content should be streamed through the proxy to keep costs low. Only streams not protected by CORS headers are used.

# 🧬 Running Locally for Development

To run locally, first clone the repository. Then run the following commands in the root of the repository:
```bash
pnpm install
pnpm run dev
```

You also need to create an `.env` file to configure your environment. Use the `example.env` file for reference.

To build production files, run:
```bash
pnpm build
```

> [!TIP]
> You must use pnpm (`npm i -g pnpm`) and run NodeJS 20.

# ✉️ Contact

[Discord Server](https://discord.gg/4jzBvV8E5r)

[Email](mailto:josh@vidbinge.com)

## 🤝 Thanks to all Contributors

This project would not be possible without our amazing contributors and the community. Thanks a lot! Keep rocking 🍻.
```
