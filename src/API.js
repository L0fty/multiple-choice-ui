export const fetchProblems = () =>
  new Promise((resolve, reject) => {
    const data = {
      sectionId: "IdNumber",
      sectionName: "Mock Probability Section Name",
      sectionNumber: 1,
      problems: [
        {
          problemId: 0,
          question: `A car dealership sells 0, 1, or 2 luxury cars on any day. When selling a car, the dealer also tries to persuade the customer to buy an extended warranty for the car. Let X denote the number of luxury cars sold in a given day, and let Y denote the number of extended warranties sold.       What is the variance of X? Author’s note: Solve this problem two different ways; (1) using marginal probabilities and (2) directly.`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 1,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 2,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 3,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 4,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 5,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 6,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 7,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 8,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 9,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 10,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 11,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 12,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 13,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 14,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 15,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 16,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 17,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        },
        {
          problemId: 18,
          question: `Different Problem than first`,
          choices: [0.47, 0.58, 0.83, 1.42, 2.58],
          answer: 0.58,
          solution: "a solution to your problem will go here"
        }
      ],
      sections: [
        {
          sectionId: "IdNumber",
          sectionName: "Mock Probability Section Name",
          sectionNumber: 1
        },
        { sectionId: "2", sectionName: "mock", sectionNumber: 2 },
        { sectionId: "3", sectionName: "fake", sectionNumber: 3 },
        { sectionId: "4", sectionName: "not real", sectionNumber: 4 },
        { sectionId: "5", sectionName: "fraud", sectionNumber: 5 },
        { sectionId: "6", sectionName: "imposter", sectionNumber: 6 },
        { sectionId: "7", sectionName: "mock", sectionNumber: 7 },
        { sectionId: "8", sectionName: "fake", sectionNumber: 8 },
        { sectionId: "9", sectionName: "not real", sectionNumber: 9 },
        { sectionId: "10", sectionName: "fraud", sectionNumber: 10 },
        { sectionId: "11", sectionName: "imposter", sectionNumber: 11 }
      ]
    };
    resolve(data);
  });
