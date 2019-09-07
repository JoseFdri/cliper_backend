'use strict'

exports.createRoom = function(req, res, next){
    let arr = new Array(10).fill(0)
    arr.fill( (a) => {return 1 } );
    //console.log(arr)
    res.send({arr})
}

exports.clipboard = function(req, res){
    //req.io.route('hello')
}
