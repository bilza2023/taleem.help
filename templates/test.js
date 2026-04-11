import build from "./eqQnA.js";

// simple mock ctx (no fs, just passthrough)
const ctx = {
  resolveImage: (name) => name
};

// ---- FAKE DATA ----
const data = {
  title: "test-eq-qna",

  items: [
    {
      question: {
        line: "What is motion?",
        spText: [
          "Motion means change in position",
          "It happens over time"
        ]
      },
      answer: {
        line: "Motion = change in position / time",
        image: "box.webp",
        spText: [
          "Basic definition of motion",
          "Used in physics everywhere"
        ]
      }
    },

    {
      question: {
        line: "What is speed?",
        spText: [
          "Speed tells how fast",
          "Distance covered per time"
        ]
      },
      answer: {
        line: "Speed = distance / time",
        image: "image.png",
        spText: [
          "Measured in m/s",
          "Scalar quantity"
        ]
      }
    },

    {
      question: {
        line: "What is velocity?",
        spText: [
          "Velocity includes direction",
          "Not just speed"
        ]
      },
      answer: {
        line: "Velocity = speed + direction",
        image: "box.webp",
        spText: [
          "Vector quantity",
          "Direction matters"
        ]
      }
    },

    {
      question: {
        line: "What is acceleration?",
        spText: [
          "Change in velocity",
          "Can increase or decrease"
        ]
      },
      answer: {
        line: "Acceleration = Δv / t",
        image: "image.png",
        spText: [
          "Measured in m/s²",
          "Tracks change in motion"
        ]
      }
    },

    {
      question: {
        line: "What is force?",
        spText: [
          "Force pushes or pulls",
          "It affects motion"
        ]
      },
      answer: {
        line: "F = m × a",
        image: "box.webp",
        spText: [
          "Newton’s second law",
          "Links force and motion"
        ]
      }
    }
  ]
};

// ---- BUILD DECK ----
const deck = build(data, ctx);

// ---- OUTPUT ----
console.log(JSON.stringify(deck, null, 2));