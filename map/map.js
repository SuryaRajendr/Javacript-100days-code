let map = new Map()
console.log("map",map)
map.set(1)
console.log("map",map)
map.set(2,"2")
console.log("map",map)
map.set("3")
console.log("map",map)
map.set("4","4")
console.log("map",map)


console.log(map.get("4"))

console.log(map.has(1))
console.log(map.has(7))