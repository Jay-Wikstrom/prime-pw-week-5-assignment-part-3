console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished, tracks){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  } //end object
  collection.push(album);
  return album;
} //end function

function showCollection(array){
  console.log('The length of this array is:', array.length)
  for (let i = 0; i < array.length; i++){
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}.`)
    for (let j = 0; j<array[i].tracks.length; j++){
      console.log(array[i].tracks);
      break;
    } //end inside for loop
  } //end outside for loop
} //end function

function findByArtist(artist){
  let array = [];
  for (let i = 0; i < collection.length; i++ ){
    if (collection[i].artist === artist){
      array.push(artist);
    }
  } //end for loop
  return array;
} //end function

//Add 4 tracks for each album
let thriller = [
  ['Wanna Be Startin Something', 362],
  ['Baby Be Mine', 260],
  ['The Girl is Mine', 221],
  ['Thriller', 357]
];

let bad = [
  ['Bad', 248],
  ['The Way You Make Me Feel', 299],
  ['Speed Demon', 243],
  ['Liberian Girl', 235]
];

let theMarshallMathersLP = [
  ['The Way I Am', 290],
  ['The Real Slim Shady', 284],
  ['Stan', 404],
  ['Marshall Mathers', 320]
];

let hybridTheory = [
  ['Papercut', 184],
  ['One Step Closer', 155],
  ['With You', 203],
  ['In the End', 216]
];

let theDarkSideOfTheMoon = [
  ['Breathe (In The Air)', 150],
  ['On the Run', 225],
  ['Time', 704],
  ['The Great Gig in the Sky', 287]
];

let nevermind = [
  ['Smells Like Teem Spirit', 301],
  ['In Bloom', 254],
  ['Come as You Are', 219],
  ['Breed', 183]
]

//Test for addToCollection function
//Test for same artist
console.log('*** Test for same artist ***');
console.log(addToCollection('Thriller', 'Michael Jackson', 1982, thriller));
console.log(addToCollection('Bad', 'Michael Jackson', 1987, bad));

//Test for same year
console.log('*** Test for same year ***');
console.log(addToCollection('The Marshall Mathers LP', 'Eminem', 2000, theMarshallMathersLP));
console.log(addToCollection('Hybrid Theory', 'Linkin Park', 2000, hybridTheory));

//Test for not matching
console.log('*** Test for not matching ***');
console.log(addToCollection('The Dark Side of the Moon', 'Pink Floyd', 1973, theDarkSideOfTheMoon));
console.log(addToCollection('Nevermind', 'Nirvana', 1991, nevermind));

console.log('*** collection logged to console ***');
console.log(collection);

//Test for showCollection
console.log('*** Test for show collection function ***')
showCollection(collection);

//Test for findByArtist
console.log('** Test for find by artist function ***');
console.log(findByArtist('Eminem'));
console.log(findByArtist(''));
console.log(findByArtist('Michael Jackson'));

//Failed search function attempts
/*

function search(searchCriteria){
  for (let key in collection){
    let array = [];
    //console.log(collection[key]);
    if(searchCriteria === collection[key]){
      array.push(collection[key]);
      console.log(collection[key]);
    }
  } //end for in loop
} //end function




function search(searchCriteria){
  let array = [];
  for (let i = 0; i < collection.length; i++){
    if (collection[i].artist == searchCriteria){
      array.push(searchCriteria);
    }
    return array;
  }
}


function search(searchCriteria){
  //collection.forEach(item => console.log(item))
  array = [];
  Object.keys(collection).forEach(key => {
    if (key, collection[key] === searchCriteria){
      array.push(searchCriteria);
    }
  })
}



/*let array = [];
for (let index in collection){
  if(collection.hasOwnProperty(index)){
    array.push[searchCriteria];
  }
  return array;
}

//Test search function
let searchResult = search({
  title: 'Bad',
  artist: 'Michael Jackson',
  yearPublished: 1987
})
console.log(searchResult);
//console.log(search('Michael Jackson', 1987));
//console.log(search());
//console.log(search('Ray Charles', 1957));


*/
