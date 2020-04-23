/*
  type: ["Categorical","Set","Image","String","Longtext","List","Numerical"]
*/

let arr = [
  {
    name: "color",
    type: "String",
  },
  {
    name: "director_name",
    type: "String",
  },
  {
    name: "num_critic_for_reviews",
    type: "Numerical",
  }, {
    name: "duration",
    type: "Numerical",
  }, {
    name: "director_facebook_likes",
    type: "Categorical",
  }, {
    name: "actor_3_facebook_likes",
    type: "Numerical",
  }, {
    name: "actor_2_name",
    type: "String",
  }, {
    name: "actor_1_facebook_likes",
    type: "Numerical",
  }, {
    name: "gross",
    type: "Numerical",
  }, {
    name: "genres",
    type: "Longtext",
  }, {
    name: "actor_1_name",
    type: "String",
  }, {
    name: "movie_title",
    type: "String",
  }, {
    name: "cast_total_facebook_likes",
    type: "Numerical",
  }, {
    name: "facenumber_in_poster",
    type: "Numerical",
  }, {
    name: "plot_keywords",
    type: "Longtext",
  }, {
    name: "num_voted_users",
    type: "Numerical",
  }, {
    name: "movie_imdb_link",
    type: "Link",
  }, {
    name: "num_user_for_reviews",
    type: "Numerical",
  }, {
    name: "country",
    type: "Categorical",
  },
  {
    name: "content_rating",
    type: "Categorical",
  }, {
    name: "budget",
    type: "Numerical",
  }, {
    name: "title_year",
    type: "Numerical",
  }, {
    name: "imdb_score",
    type: "Numerical",
  }, {
    name: "aspect_ratio",
    type: "Numerical",
  }, {
    name: "movie_facebook_likes",
    type: "Numerical",
  }, {
    name: "actor_2_facebook_likes",
    type: "Numerical",
  }, {
    name: "actor_3_name",
    type: "String"
  },
  {
    name: "language",
    type: "String"
  }
]

// let arr = [{
//   name: "Conference",
//   type: "List",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "Year",
//   type: "Numerical",
//   bucketName: [100, 200, 300],
//   histogram: [20, 40],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 2;
//   }
// }, {
//   name: "Title",
//   type: "String",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 3;
//   }
// }, {
//   name: "DOI",
//   type: "String",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "Link",
//   type: "String",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "FirstPage",
//   type: "Numerical",
//   bucketName: [100, 200, 300],
//   histogram: [20, 40],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "LastPage",
//   type: "Numerical",
//   bucketName: [100, 200, 250, 400],
//   histogram: [20, 40, 100],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "PaperType",
//   type: "Categorical",
//   bucketName: ["M", "C", "F"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "Abstract",
//   type: "Longtext",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "AuthorNames-Deduped",
//   type: "String",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "AuthorNames",
//   type: "String",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "AuthorAffiliation",
//   type: "Longtext",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "InternalReferences",
//   type: "String",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "AuthorKeywords",
//   type: "String",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "AminerCitationCount_02-2019",
//   type: "Numerical",
//   bucketName: [100, 200, 300],
//   histogram: [20, 40],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "XPloreCitationCount_02-2019",
//   type: "Numerical",
//   bucketName: [100, 200, 300],
//   histogram: [20, 40],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "PubsCited",
//   type: "Numerical",
//   bucketName: [100, 200, 300],
//   histogram: [20, 40],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "Award",
//   type: "Categorical",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// }, {
//   name: "image_file",
//   type: "Image",
//   bucketName: ["A", "B", "C"],
//   histogram: [100, 200, 300],
//   comparator: function (a, b) {
//     return 1;
//   },
//   getIndex: function (value) {
//     return 1;
//   }
// },
// ];

export default (function () {
  return arr;
})();
