// src/editor/js/slideFactory.js

export const slideFactory = {

    titleAndSubtitle: () => ({
      type: "titleAndSubtitle",
      data: [
        { name: "title", content: "" },
        { name: "subtitle", content: "" }
      ]
    }),
  
    titleAndPara: () => ({
      type: "titleAndPara",
      data: [
        { name: "title", content: "" },
        { name: "para", content: "" }
      ]
    }),
  
    bulletList: () => ({
      type: "bulletList",
      data: [
        { name: "heading", content: "" }, // your future support
        { name: "bullet", content: "" }
      ]
    }),
  
    twoColumnText: () => ({
      type: "twoColumnText",
      data: [
        { name: "left", content: "" },
        { name: "right", content: "" }
      ]
    }),
  
    imageSlide: () => ({
      type: "imageSlide",
      data: [
        { name: "image", content: "" }
      ]
    }),
  
    fillImage: () => ({
      type: "fillImage",
      data: [
        { name: "image", content: "" }
      ]
    }),
  
    imageWithTitle: () => ({
      type: "imageWithTitle",
      data: [
        { name: "title", content: "" },
        { name: "image", content: "" }
      ]
    }),
  
    imageWithCaption: () => ({
      type: "imageWithCaption",
      data: [
        { name: "image", content: "" },
        { name: "caption", content: "" }
      ]
    }),
  
    imageLeftBulletsRight: () => ({
      type: "imageLeftBulletsRight",
      data: [
        { name: "image", content: "" },
        { name: "bullet", content: "" }
      ]
    }),
  
    imageRightBulletsLeft: () => ({
      type: "imageRightBulletsLeft",
      data: [
        { name: "image", content: "" },
        { name: "bullet", content: "" }
      ]
    }),
  
    keyIdeasSlide: () => ({
      type: "keyIdeasSlide",
      data: [
        { name: "card", icon: "🧠", label: "" },
        { name: "card", icon: "📘", label: "" },
        { name: "card", icon: "🧩", label: "" },
        { name: "card", icon: "🎯", label: "" }
      ]
    }),
  
    quoteSlide: () => ({
      type: "quoteSlide",
      data: [
        { name: "quote", content: "" },
        { name: "author", content: "" }
      ]
    }),
  
    table: () => ({
      type: "table",
      data: [
        ["Column A", "Column B"],
        ["", ""]
      ]
    }),
  
    barChart: () => ({
      type: "barChart",
      data: [
        { name: "bar", label: "A", value: 0 }
      ]
    }),
  
    progressbar: () => ({
      type: "progressbar",
      data: [
        { name: "bar", label: "Progress", value: 0 }
      ]
    }),
  
    eq: () => ({
      type: "eq",
      data: []
    })
  
  };