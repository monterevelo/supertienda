const { raw } = require('express');
const express = require('express');
const router = express.Router();
var db = require ('./mockDBAdministrators.json');

//Request to obtain a particular administrator through his id
router.get('/', (req, res)=>{
    res.send(db);
})

//Request to obtain a particular administrator through his id
router.get('/:id', (req, res)=>{
    const aid = req.params.id;
    var administrator = db.filter(function(obj){
        return obj.id === aid;
    })
    res.send(administrator[0]);
})

//Request to create an administrator
router.post('/', (req, res)=>{
    const administrator = req.body;
    // administrtor.id = String(db.length+1);
    administrator.id = String(Number(db[db.length-1].id)+1);
    db.push(administrator);
    res.send('Administrator created successfully');
})

//Request to update an administrator, overwriting the DB
router.put('/:id', (req, res)=>{ 
    const aid = req.params.id;
    const administrator = req.body;
    administrator.id = aid;
    for(let i=0; i<db.length; i++){
        if(db[i].id === aid){
            db[i] = administrator;
            break;
        }
    }
    res.send('Administrator updated successfully');
})

//Request to update an administrator, without overwriting the DB
router.patch('/:id', (req, res)=>{ 
    const aid = req.params.id;
    const administrator = req.body;
    administrator.id = aid;
    
    //Find the position of the element inside the object based on the id entered in the route
    var end=0;
    for(var i in db){
        for (var j in db[i]){
            if (j=="id" & db[i][j]==aid){
                var pos = i;
                end = 1;
            }
            if (end == 1){
                break;
            }
        }
        if (end == 1){
            break;
        }
    }

    //Based on the position (pos) found earlier
    //we assign the new values ​​only to the keys entered to update the administrator
    for (var key in administrator){
        db[pos][key]= administrator[key];
    }
    res.send('Administrator updated successfully');
})


//Request to remove an administrator from the DB
router.delete('/:id', (req, res)=>{ 
    var aid = req.params.id;
    var array = [];
    var cont = 1;
    for(let i=0; i<db.length; i++){
        var element = db[i];
        if(element.id != aid){
            element.id = String(cont);
            cont++;
            array.push(element);
        }
    }
    db=array;
    res.send('Administrator removed successfully');
})

//Request to search for an administrator in the DB filtering data (by city)
router.get('/search1/:city', (req, res)=>{ 
    const city = req.params.city;
    var administrators = db.filter(function(obj){
        return obj.city == city;
    })
    res.send(administrators);  
})

//Request to search for an administrator in the DB filtering data (by country)
router.get('/search2/:pais', (req, res)=>{ 
    const country = req.params.country;
    var administrators = db.filter(function(obj){
        return obj.country == country;
    })
    res.send(administrators);  
})



module.exports = router;