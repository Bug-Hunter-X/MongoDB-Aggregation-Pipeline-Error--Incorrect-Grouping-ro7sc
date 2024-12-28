```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: {status: "active"}
  },
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "user_id",
      as: "userData"
    }
  },
  {
    $unwind: "$userData"
  },
  {
    $group: {
      _id: "$userData.city",
      count: { $sum: 1 }
    }
  }
])
```