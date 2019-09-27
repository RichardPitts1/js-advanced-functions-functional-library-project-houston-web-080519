const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // EACH
    each: function(list, alert) {
      for (const item in list){
      alert(list[item], item, list);
      }
      return list
    },

    // MAP
    map: function(list, callback) {
      if(!(list instanceof Array))
        list = Object.values(list)
      let returnArray = []
      for (let item of list)
      {
        returnArray.push(callback(item))
      }
      return returnArray
    },

    // REDUCE
    reduce: function(list, callback, accumulator) {
      let sum = (accumulator ? accumulator : list[0]);
      let i = (sum === list[0] ? 1 : 0)
      for (i; i < list.length; i++){
      sum = callback(sum, list[i], list)
      }
      return sum
    },

    // FIND
    find: function(list, search){
      for(let item of list){
        if(search(item)){
          return item
        }
      }
    },

    // FILTER
    filter: function(list, search){
      let returnArray = []
      for (let item of list){
        if (search(item)){
          returnArray.push(item)
        }
      }
      return returnArray
    },

    // SIZE
    size: function(list){
      const temporaryObject = Object.assign({}, list)
      return Object.values(temporaryObject).length
    },

    // FIRST
    first: function(list, argument){
      if (!argument){
      return list[0]
      }
      else 
      return list.slice(0, argument)
    },

    // LAST
    last: function(list, argument){
      if (!argument){
        return list[list.length-1]
      }
      else
      return list.slice(argument * -1)
    },

    // COMPACT
    compact: function(list){
      let returnArray = []
      for (let item of list){
        if (Boolean(item) === true){
          returnArray.push(item)
        }
      }
      return returnArray

    },

    // SORTBY
    sortBy: function(list, callback){
      let returnArray = [...list];
      returnArray.sort(function(a,b){return callback(a) - callback(b)})


      return returnArray
    },

    // FLATTEN:
      // correctly flattens a ludicrously nested array
      // correctly flattens a single level when a second argument of "true" is passed
    flatten: function(list, argument){
      // So if true, flatten to a single level
      if (argument){
          return [].concat(...list)
      }
      else{
        while (list.find(item => Array.isArray(item))){
          list = [].concat(...list)
        }
        return list
      }
    },

    // UNIQ: removes duplicate values from an array
    uniq: function(list, callback){
      let returnArray = [];
      let callbackArray = []
      if (!callback){
        for (const item in list){
          if (!(returnArray.includes(list[item]))){
            returnArray.push(list[item])
          }
        }
      } else{
        for (const item in list){
          if (!(callbackArray.includes(callback(list[item])))){
            callbackArray.push(callback(list[item]))
            returnArray.push(list[item])
          }
        }
      }
      return returnArray
    },

    keys: function(list){
      let returnArray = []
      for (const key in list){
        returnArray.push(key)
      }
      return returnArray
    },

    values: function(list){
      let returnArray = []
      for (const key in list){
        returnArray.push(list[key])
      }
      return returnArray
    },


    functions: function(list) {
      let returnArray = []
      for (const key in list){
        if (typeof list[key] === 'function') {
          returnArray.push(key)
        }
      }
      return returnArray
    },

  }

})()

fi.libraryMethod()

