export const PROJECTS = [
  {
    title: "Security Bank App",
    description:
      "A mobile app designed for intuitive online banking, featuring secure transactions, real-time account management, and a user-friendly interface.",
    tags: ["react", "javascript"],
    codeUrl: null,
    siteUrl: "https://mexplay.mx/",
    id: 0,
    technologies: [
      { name: "React Native", url: "https://reactjs.org/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Redux", url: "https://redux.js.org/" },
      { name: "Firebase", url: "https://firebase.google.com/" },
      { name: "React Navigation", url: "https://reactnavigation.org/" },
      { name: "Sass", url: "https://sass-lang.com/" },
    ],
  },
  {
    title: "Mexplay",
    description:
      "A web and mobile app that offers a dynamic casino experience with a wide range of games, betting options, and exciting prizes. ",
    tags: ["react", "javascript"],
    codeUrl: null,
    siteUrl: "https://mexplay.mx/",
    id: 0,
    technologies: [
      { name: "React", url: "https://react.dev/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Redux", url: "https://redux.js.org/" },
      { name: "styled-components", url: "https://styled-components.com/" },
      { name: "i18next", url: "https://www.i18next.com/" },
    ],
  },
  {
    title: "Spotify Replay",
    description:
      "A web app where users can view their top artists, tracks, and genres on Spotify. They can also generate playlists based on their personalized data.",
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/spotify-replay#readme",
    siteUrl: "https://spotify-replay.vercel.app/",
    id: 1,
    technologies: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "tRPC", url: "https://trpc.io/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
      { name: "NextAuth", url: "https://next-auth.js.org/" },
      { name: "Turborepo", url: "https://turbo.build/" },
      {
        name: "zustand",
        url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
    ],
  },
  {
    title: "2ner",
    description:
      "An online tuner that makes tuning instruments quick and accurate, it offers real-time tuning through a straightforward and intuitive interface.",
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/todo-list#readme",
    siteUrl: "https://2ner.vercel.app/",
    id: 4,
    technologies: [
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
      { name: "React", url: "https://react.dev/" },
    ],
  },
  {
    title: "Conjugador",
    description:
      "A Discord bot built with Go that provides Spanish verb conjugations from a SQLite database. Users input a verb, mood, and tense, and get the correct conjugation instantly.",
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/goConjugationBot#readme",
    siteUrl: "",
    id: 2,
    technologies: [
      { name: "Go", url: "https://go.dev/" },
      { name: "SQLite", url: "https://www.sqlite.org/" },
      { name: "sqlc", url: "https://sqlc.dev/" },
      { name: "Docker", url: "https://www.docker.com/" },
    ],
  },
  {
    title: "TS-808",
    description:
      "An interactive drum machine website where users can play 16 drum pads with their mouse or keyboard. The drum samples were sampled from a Roland TR-808 drum machine.",
    tags: ["react", "javascript"],
    codeUrl: "https://github.com/felipeantoniob/TS-808#readme",
    siteUrl: "https://ts-808.vercel.app/",
    id: 3,
    technologies: [
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "Vitest", url: "https://vitest.dev/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "Tailwind", url: "https://tailwindcss.com/" },
    ],
  },
] as const;
