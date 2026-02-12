// GoldStart_deck.js
// A comprehensive test deck for mobile layout audit


export function defineDeck(deckbuilder){

  deckbuilder.addDetails({
    name:        "goldstart_deck",
    description: "A comprehensive test deck for mobile layout audit",
    tags:        ["mobile", "audit", "gold-standard"],
    status:      "draft",
    createdAt:   "2025-07-09T00:00:00Z",
    editedAt:    "2025-07-09T00:00:00Z"
  });
  
  deckbuilder.s.titleSlide(10, [
      { name: "title", content: "GoldStart Deck", showAt: 0 }
    ]);
    
    deckbuilder.s.titleAndSubtitle(20, [
      { name: "title", content: "Welcome to Physics", showAt: 0 },
      { name: "subtitle", content: "Mobile Audit Preview", showAt: 1 }
    ]);
    
    deckbuilder.s.bulletList(30, [
      { name: "bullet", content: "Point One", showAt: 21 },
      { name: "bullet", content: "Point Two", showAt: 22 },
      { name: "bullet", content: "Point Three", showAt: 23 }
    ]);
    
    deckbuilder.s.twoColumnText(40, [
      { name: "title", content: "Branches", showAt: 0 },
      { name: "left", content: "Mechanics\nOptics", showAt: 1 },
      { name: "right", content: "Thermodynamics\nQuantum", showAt: 2 }
    ]);
    
    deckbuilder.s.imageSlide(50, [
      { name: "image", content: "/images/box.webp", showAt: 0 }
    ]);
    
    deckbuilder.s.imageWithTitle(60, [
      { name: "image", content: "/images/box.webp", showAt: 50 },
      { name: "title", content: "Sample Image Title", showAt: 52 }
    ]);
    
    deckbuilder.s.imageWithCaption(70, [
      { name: "image", content: "/images/box.webp", showAt: 0 },
      { name: "caption", content: "This is a caption", showAt: 1 }
    ]);
    
    deckbuilder.s.imageLeftBulletsRight(80, [
      { name: "image", content: "/images/box.webp", showAt: 71 },
      { name: "bullet", content: "Left bullet one", showAt: 74 },
      { name: "bullet", content: "Left bullet two", showAt: 78 }
    ]);
    
    deckbuilder.s.imageRightBulletsLeft(90, [
      { name: "image", content: "/images/box.webp", showAt: 81 },
      { name: "bullet", content: "Right bullet one", showAt:84 },
      { name: "bullet", content: "Right bullet two", showAt: 86 }
    ]);
    
    deckbuilder.s.table(100, [
      { name: "headers", content: ["A", "B", "C"], showAt: 0 },
      { name: "rows", content: [["1", "2", "3"], ["4", "5", "6"]], showAt: 1 }
    ]);
    
    deckbuilder.s.statistic(110, [
      { name: "number", content: "42", showAt: 0 },
      { name: "label", content: "Answer", showAt: 1 }
    ]);
    
    deckbuilder.s.donutChart(120, [
      { name: "percent", content: "60", showAt: 0 },
      { name: "label", content: "Alpha", showAt: 0 },
      { name: "color", content: "#4CAF50", showAt: 0 },
      { name: "percent", content: "40", showAt: 1 },
      { name: "label", content: "Beta", showAt: 1 },
      { name: "color", content: "#FF9800", showAt: 1 }
    ]);
     
    
    deckbuilder.s.bigNumber(130, [
      { name: "number", content: "100%", showAt: 0 },
      { name: "label", content: "Completion", showAt: 1 }
    ]);
    
    deckbuilder.s.barChart(140, [
      { name: "bar", label: "Math", value: 80, showAt: 0 },
      { name: "bar", label: "Physics", value: 70, showAt: 1 },
      { name: "bar", label: "Chemistry", value: 90, showAt: 2 }
    ]);
    
    deckbuilder.s.quoteSlide(150, [
      { name: "quoteLine", content: "Physics is the poetry of nature.", showAt: 0 },
      { name: "author", content: "— Taleem.Help", showAt: 1 }
    ]);
    
    deckbuilder.s.quoteWithImage(160, [
      { name: "quoteLine", content: "Science is understanding.", showAt: 0 },
      { name: "author", content: "Taleem.help", showAt: 1 },
      { name: "image", content: "/images/activity1.jpg", showAt: 2 }
    ]);
    deckbuilder.s.cornerWordsSlide(170, [
      { name: "card", icon: "🔭", label: "Observe",    showAt: 160 },
      { name: "card", icon: "⚗️", label: "Experiment", showAt: 163 },
      { name: "card", icon: "🔬", label: "Analyze",     showAt: 165 },
      { name: "card", icon: "💡", label: "Innovate",    showAt: 168 }
    ]);
    
    deckbuilder.s.contactSlide(180, [
      { name: "headline", content: "Need Help?", showAt: 0 },
      { name: "email", content: "support@taleem.help", showAt: 1 },
      { name: "phone", content: "+92 300 0000000", showAt: 2 }
    ]);
    
  }