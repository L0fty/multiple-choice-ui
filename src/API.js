export const fetchProblems = () =>
  new Promise((resolve, reject) => {
    const data = {
      sectionId: "IdNumber",
      sectionName: "Mock Probability Section Name",
      sectionNumber: 1,
      problems: [
        {
          question: `A car dealership sells 0, 1, or 2 luxury cars on any day. When selling a car, the dealer also tries to persuade the customer to buy an extended warranty for the car. Let X denote the number of luxury cars sold in a given day, and let Y denote the number of extended warranties sold.       What is the variance of X? Author’s note: Solve this problem two different ways; (1) using marginal probabilities and (2) directly.`,
          answers: [0.47, 0.58, 0.83, 1.42, 2.58],
          solution: "a solution to your problem will go here"
        }
      ]
    };
    resolve(data);
  });
