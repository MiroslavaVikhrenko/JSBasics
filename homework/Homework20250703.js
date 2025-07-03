// TASK 1 Count how many times each tag appears in posts.
const tags = ["js", "css", "js", "html", "css", "js"];
// output: { js: 3, css: 2, html: 1 }

const tagCounts = tags.reduce((accum, tag) => {
  if (accum[tag]) {
    accum[tag] += 1;
  } else {
    accum[tag] = 1;
  }
  //   accum[tag] = (accum[tag] || 0) + 1;
  return accum;
}, {});

console.log(tagCounts);

// TASK 2 flatten an Array of Arrays
const nums = [[23, 32], [15, 65], [25]];
// output: [23, 32, 15, 65, 25]

const flattenedArray = nums.reduce((accum, number) => {
  return accum.concat(number);
}, []); // return array [], not object {}

console.log(flattenedArray);

// TASK 3 Find Maximum/Minimum Value
const videos = [
  { title: "Video A", views: 12000 },
  { title: "Video B", views: 9500 },
  { title: "Video C", views: 3000 },
];

const maxViewed = videos.reduce((max, video) => {
  return video.views > max.views ? video : max;
});

const minViewed = videos.reduce((min, video) => {
  return video.views < min.views ? video : min;
});

console.log(maxViewed);
console.log(minViewed);
