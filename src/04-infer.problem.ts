// CODE

import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

/* First solution */
type StarWarsPeopleResultsType = z.infer<typeof StarWarsPeopleResults>;

const logStarWarsPeopleResults = (data: StarWarsPeopleResultsType) => {
  //                                    ^ 🕵️‍♂️
  /* Second solution */
  // const parsedData = StarWarsPeopleResults.parse(data)
  data.results.map((person) => {
    console.log(person.name);
  });
};
