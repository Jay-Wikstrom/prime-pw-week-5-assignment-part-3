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

function search(searchCriteria){
  let array = [];
  let i = 0;

  for (i of collection)
  {
    if (searchCriteria.artist === i.artist && searchCriteria.year === i.yearPublished){
      array.push(i.artist, i.yearPublished)
      return array;
    } //end if
  } //end for loop

    if (Object.keys(searchCriteria).length === 0){
      array = collection;
      return array;
    } //end if

    if(searchCriteria.artist !== i.artist || searchCriteria.year !== i.yearPublished){
      return array;
    } //end if
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

console.log('*** Collection logged to console ***');
console.log(collection);

//Test for showCollection
console.log('')
console.log('*** Test for show collection function ***')
showCollection(collection);

//Test for findByArtist
console.log('')
console.log('** Test for find by artist function ***');
console.log(findByArtist('Eminem'));
console.log(findByArtist(''));
console.log(findByArtist('Michael Jackson'));

//Test for search function
console.log('')
console.log('*** Test for search function ***')
console.log(search({}));
console.log(search({artist: 'Michael Jackson', year: 1987}));
console.log(search({artist: 'Ray Charles', year: 1957}));
