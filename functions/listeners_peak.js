const fetch = require("node-fetch");

module.exports = async function(){
    const res = await fetch("https://api.dualfm.net/stats").then(res => res.json());
    return `${res.listeners.peak}`
}