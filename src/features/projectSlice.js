import { createSlice } from "@reduxjs/toolkit";

const initState = {
  projects: [
    {
      id: 1,
      title: "todo",
      description:
        " I am a front end developer. That's it. privacy is important..lol. But I also like competitive online FPS games. So if you play CS or  Valorant let me know.",
    },
    {
      id: 2,
      title: "roboFriends",
      description:
        " I am a front end developer. That's it. privacy is important..lol. But I also like competitive online FPS games. So if you play CS or  Valorant let me know.",
    },
    {
      id: 3,
      title: "portfolio",
      description:
        " I am a front end developer. That's it. privacy is important..lol. But I also like competitive online FPS games. So if you play CS or  Valorant let me know.",
    },
    {
        id: 4,
        title: "Bg Generator",
        description:
          " I am a front end developer. That's it. privacy is important..lol. But I also like competitive online FPS games. So if you play CS or  Valorant let me know.",
      },
     
  ],
};

const projectSlice = createSlice({
  name: "projects",
  initialState: initState,
  reducers: {},
});

export default projectSlice.reducer;
