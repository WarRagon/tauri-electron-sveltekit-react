# Tauri + Electron + ( SvelteKit , React )

This project is a template combining **Tauri**, **Electron**, and **SvelteKit**, **React** for building cross-platform desktop applications with modern web technologies.

# create

pnpm create tauri-app@latest

# install

pnpm install

# update check

pnpm outdated

# update

pnpm update --latest

# electron

pnpm add -D electron concurrently wait-on

pnpm add cross-env

# eslint

pnpm add eslint prettier -D

pnpm eslint --init

pnpm add eslint-config-prettier eslint-plugin-prettier -D

# tailwindcss

pnpm add -D tailwindcss postcss autoprefixer

pnpm dlx tailwindcss init -p

# file check

## svelte-setting

electron

src/app.css

src/+layout.svelte

tailwind.config.js

svelte.config.js

## react-setting

electron

src/app.css

tailwind.config.js

index.html

# package.json

"scripts": {
    "electron:dev": "concurrently \"pnpm dev\" \" wait-on http://localhost:1420 && cross-env NODE_ENV=development electron ./electron/main.js\"",
    "electron:build": "pnpm build && electron ./electron/main.js"  
}

# To get started run:

pnpm tauri android init

pnpm tauri ios init

# For Desktop development, run:

pnpm tauri dev

# For Android development, run:

pnpm tauri android dev

# For iOS development, run:

pnpm tauri ios dev

# For Desktop development, electron run:

pnpm electon:dev
