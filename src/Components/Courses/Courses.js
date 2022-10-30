import { createContext } from "react";

export const CoursesContext = createContext({
  courses: [
    {
      title: "Rubik's Cube",
      text: "Master the Rubik's cube - Learn to solve it AND Get faster",
      description:
        "Learn a beginner friendly method to solve a cube, and advanced techniques to get faster. Taught by a UK semi-finalist",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sNGlXGfEerbW8D09xP6155A0fo4QD7MKZg&usqp=CAU",
    },
    {
      title: "Chess",
      text: "The Complete Beginner's Guide to Chess",
      description:
        "This course will take you from absolute chess beginner to a good intermediate level chess player",
      // progress: 0,
      imageURL:
        "https://content.instructables.com/ORIG/FPI/EUBU/FD80BVW8/FPIEUBUFD80BVW8.jpg?auto=webp&fit=bounds&frame=1",
    },
    {
      title: "Basketball",
      text: "Basketball Dribbling and Ball Handling. Workout",
      description:
        "Improve Your Dribble, Ball Handling, Basketball Skills. Basketball Dribbling and Ball Handling Fundamentals, Drills, and Workouts",
      imageURL:
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyNDUyMzI2MDA5NjExNTc3/duke-basketball-logo.jpg",
      progress: 25,
    },
    {
      title: "Poker",
      text: "Poker: The Complete Mastery Guide",
      description:
        "Learn to Master Online Micro Stakes 6-Max and Full Ring No Limit Hold’em Poker Games!",
      progress: 90,
      imageURL:
        "https://assets.entrepreneur.com/content/3x2/2000/20151023204134-poker-game-gambling-gamble-cards-money-chips-game.jpeg?crop=4:3",
    },
    {
      title: "Guitar",
      text: "Ultimate Beginner Guitar Masterclass",
      description:
        "Beginner Guitar Lessons: Learn Acoustic Guitar, Blues Guitar, Basic Fingerstyle Guitar, Guitar Chords, Guitar Technique",
      imageURL:
        "http://cdn.shopify.com/s/files/1/0151/0741/products/a11b624fde54661c0202be302b4c69b7_1024x1024.jpg?v=1578647607",
    },
    {
      title: "Cycle",
      text: "Learn to wheelie a bicycle",
      description:
        "Easy to follow step by step guide to learn how to wheelie a bicycle",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZtIu6ZRxEi6O4mX6aY2AkkYdZmIjiZSeIQ&usqp=CAU",
    },
  ],
});
