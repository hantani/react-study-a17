import { atom } from "recoil";

export const secondState = atom({
  key: "secondState",
  default: 5,
});

export const minuteState = atom({
  key: "minuteState",
  default: 0,
});

export const roundState = atom({
  key: "roundState",
  default: 4,
});

export const goalState = atom({
  key: "goalState",
  default: 0,
});

// export const formattedSecondSelector = selector({
//   key: "formattedSecondSelector",
//   get: ({ get }) => {
//     const second = get(secondState);
//     const formattedSecond =
//       second === 60 ? "00" : second < 10 ? "0" + second : second;

//     return formattedSecond;
//   },
// });

// export const formattedMinuteSelector = selector({
//   key: "formattedMinuteSelector",
//   get: ({ get }) => {
//     const minute = get(minuteState);
//     const formattedMinute = minute < 10 ? "0" + minute : minute;

//     return formattedMinute;
//   },
// });
