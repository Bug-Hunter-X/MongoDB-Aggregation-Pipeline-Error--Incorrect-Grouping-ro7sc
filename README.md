# MongoDB Aggregation Pipeline Error: Incorrect Grouping

This repository demonstrates a common error encountered when using MongoDB's aggregation pipeline. The provided code attempts to group documents based on a field in a joined collection, but it fails to produce the expected results due to an issue in the `$group` stage.

The `bug.js` file contains the erroneous code, which results in incorrect aggregation and inaccurate counts.  The `bugSolution.js` file provides the corrected code.

## How to Reproduce

1. Clone this repository.
2. Set up a MongoDB instance and collections as described in the code comments.
3. Run the code in `bug.js`. Observe the incorrect results.
4. Run the code in `bugSolution.js` to see the corrected output.

## Solution
The solution involves careful consideration of field selection within the `$group` stage to ensure correct grouping and accurate counts.  The corrected `$group` stage uses the appropriate field from the original collection rather than relying solely on data from the joined collection.