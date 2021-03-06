class Formatter {
  //add static methods here

  static capitalize(string1) {
    let capString = string1.charAt(0).toUpperCase() + string1.slice(1)
    return capString
  }

  // static

  static sanitize(string1) {
    return string1.replace(/[^A-Za-z0-9-' - " " '']+/g, '');
  }


  static titleize(string1) {
    // if(!string1.split) return string1;
    let result = [];

    let _titleizeWord = function(string1) {
            return string1.charAt(0).toUpperCase() + string1.slice(1).toLowerCase();
        };


    string1.split(" ").forEach(function(w) {
      // maybe i have to make sure it's picking up these words in a case insensitive way?
        if (w === string1.charAt(0) ) {
          // console.log("w", w)
          // console.log("titleize word", _titleizeWord(w))
          result.push(_titleizeWord(w));
        } else if (w === "the" || w === "a" || w === "an" || w === "but" || w === "of" || w === "and" || w === "for" || w === "at" || w === "by" || w === "from") {
          result.push(w);
        } else {
          result.push(_titleizeWord(w));
        }
    });
    return result.join(" ");
  }
}
