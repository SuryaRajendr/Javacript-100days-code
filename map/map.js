let map = new Map()
console.log("map",map)

map.set(1)
console.log("map",map)

map.set(2,"2")
console.log("map",map)

map.set("3")
console.log("map",map)

map.set(true ,"4")
console.log("map",map)


console.log("-----------------",map.get("4"))

console.log(map.has(1))
console.log(map.has(7))

const obj = {
  true:"abc",
  2:2
}

obj[1] =0
console.log("obj",obj)