import { createContext } from "react";

export const RCC = createContext({
  requestedCourses: [
    {
      name: "Yash",
      email: "yashgupta@gmail.com",
      date: "2021-06-01",
      title: "React",
      text: "This is the react course",
      description:
        "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      imageURL: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
    },
  ],
});
