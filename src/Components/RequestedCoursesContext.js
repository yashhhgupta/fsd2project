import { createContext } from "react";
export const RCC = createContext({
  requestedCourses: [
    {
      name : "Yash",
      email : "yashgupta@gmail.com",
      date : "2021-06-01",
      title: "React",
      text: "This is the react course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageURL:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  ],
});
