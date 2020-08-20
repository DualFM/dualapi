const fetch = require("node-fetch");

module.exports = async function(){
    const res = await fetch("https://api.dual.pw/stats").then(res => res.json());
    return `${res.now.artist}`

}