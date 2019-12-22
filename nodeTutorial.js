var tutorial = require('./tutorial')

var exports = module.exports = {}

exports.nodeTutorial = function() {
    console.log("Tutorial z node'a");

    this.pt = function pTutor() {
        var pTutor = tutorial;
        pTutor.tutorial();
    }
}

exports.nodeTutorial.staticPt = function() {
    var pTutor = tutorial;
    pTutor.tutorial()
}