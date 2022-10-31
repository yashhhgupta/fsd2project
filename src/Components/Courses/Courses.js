import { createContext } from "react";

export const CoursesContext = createContext({
  courses: [
    {
      id: "rubix",
      title: "Rubik's Cube",
      text: "Master the Rubik's cube - Learn to solve it AND Get faster",
      description:
        "Learn a beginner friendly method to solve a cube, and advanced techniques to get faster. Taught by a UK semi-finalist",
      creator: "Ross",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sNGlXGfEerbW8D09xP6155A0fo4QD7MKZg&usqp=CAU",
      contentList: [
      "Step 1: Learn to make a White Cross",
      "Step 2: Learn to arrange the colors on the middle lane of side of the cubes",
      "Step 3: Learn to arrange the top layers of the side of the cube",
      "Step 4: Learn to arrang the second layer of the side of the cube",
      "Step 5: Learn to arrange the third layer of the sides of the cube",
      "Step 6: Learn to arrange the base of the cube",
    ],
    },
    {
      id : "chess",
      title: "Chess",
      text: "The Complete Beginner's Guide to Chess",
      description:
        "This course will take you from absolute chess beginner to a good intermediate level chess player",
      // progress: 0,
      creator: "Ross",
      imageURL:
        "https://content.instructables.com/ORIG/FPI/EUBU/FD80BVW8/FPIEUBUFD80BVW8.jpg?auto=webp&fit=bounds&frame=1",
        contentList: [
          "Step 1: Setting up the chess board and moving the pieces",
          "Step 2: Discover the special rules",
          "Step 3: Studying the basic strategies",
          "Step 4: Learn how to check the oppenent",
          "Step 5: The three step checkmate strategy",
        ],
    },
    {
      id:"basketball",
      title: "Basketball",
      text: "Basketball Dribbling and Ball Handling. Workout",
      description:
        "Improve Your Dribble, Ball Handling, Basketball Skills. Basketball Dribbling and Ball Handling Fundamentals, Drills, and Workouts",
        creator: "Ross",
        imageURL:
        "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyNDUyMzI2MDA5NjExNTc3/duke-basketball-logo.jpg",
      progress: 25,
      contentList: [
        "Step 1: Learn to Dribble the ball",
        "Step 2: Learn to have movements with ball",
        "Step 3: Learn to Shoot the ball",
        "Step 4: Learn Lay up shots",
        "Step 5: Learn to fake pass a ball",
        "Step 6: Tips for better movement with the ball",
      ],
    },
    {
      id:"poker",
      title: "Poker",
      text: "Poker: The Complete Mastery Guide",
      description:
        "Learn to Master Online Micro Stakes 6-Max and Full Ring No Limit Hold’em Poker Games!",
        creator: "Ross",
        progress: 90,
      imageURL:
        "https://assets.entrepreneur.com/content/3x2/2000/20151023204134-poker-game-gambling-gamble-cards-money-chips-game.jpeg?crop=4:3",
        contentList: [
          "Step 1: Know the cards",
          "Step 2: Each player is dealt five cards ",
          "Step 3: PreFlop",
          "Step 4: Flop",
          "Step 5: Turn",
          "Step 6: River",
          "Step 7: Tips and tricks",
        ],
    },
    {
      id:"guitar",
      title: "Guitar",
      text: "Ultimate Beginner Guitar Masterclass",
      description:
        "Beginner Guitar Lessons: Learn Acoustic Guitar, Blues Guitar, Basic Fingerstyle Guitar, Guitar Chords, Guitar Technique",
        creator: "Ross",
        imageURL:
        "http://cdn.shopify.com/s/files/1/0151/0741/products/a11b624fde54661c0202be302b4c69b7_1024x1024.jpg?v=1578647607",
        contentList: [
          "Step 1: Learn the parts of the guitar",
          "Step 2: Learn how to hold a guitar",
          "Step 3: Learn the cords and the notations",
          "Step 4: Learn how to place the fingers on the guitar with numbering",
          "Step 5: Pick up songs by ear and learn to play it",
        ],
    },
    {
      id :"cycle",
      title: "Cycle",
      text: "Learn to wheelie a bicycle",
      description:
        "Easy to follow step by step guide to learn how to wheelie a bicycle",
        creator: "Ross",
        imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZtIu6ZRxEi6O4mX6aY2AkkYdZmIjiZSeIQ&usqp=CAU",
        contentList: [
          "Step 1: Learn the posture",
          "Step 2: Learn when to paddle",
          "Step 3: Avoid cross chaining the gears",
        ],
    },
  ],
});
