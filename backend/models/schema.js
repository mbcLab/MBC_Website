import { Schema, model } from "mongoose";

export default model(
  "data",
  new Schema({
    projects: [
      {
        title: { type: String, required: true },
        content: { type: String, required: true },
        date: { type: Date, required: false, value: Date.now() },
        finish: { type: Boolean, required: false, value: false },
        photo: { type: String, required: false },
      },
    ],
    blogs: [
      {
        title: { type: String, required: true },
        date: { type: Date, value: Date.now(), required: false },
        content: { type: String, required: true },
        photo: { type: String, required: false },
      },
    ],
    users: {
      gametech: [
        {
          name: { type: String, required: true },
          social: [
            {
              media: { type: String, required: true },
              link: { type: String, required: true },
            },
          ],
          photo: { type: String, required: true },
        },
      ],
      gis: [
        {
          name: { type: String, required: true },
          social: [
            {
              media: { type: String, required: true },
              link: { type: String, required: true },
            },
          ],
          photo: { type: String, required: true },
        },
      ],
      bigdata: [
        {
          name: { type: String, required: true },
          social: [
            {
              media: { type: String, required: true },
              link: { type: String, required: true },
            },
          ],
          photo: { type: String, required: true },
        },
      ],
      cyber: [
        {
          name: { type: String, required: true },
          social: [
            {
              media: { type: String, required: true },
              link: { type: String, required: true },
            },
          ],
          photo: { type: String, required: true },
        },
      ],
    },
  })
);
