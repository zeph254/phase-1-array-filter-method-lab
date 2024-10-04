// Code your solution here
function findMatching(drivers,name) {
    return drivers.filter(driver=>driver===name );
}
let drivers =["John","Samson","Samson","Zeph"]
let driversMatch=findMatching(drivers,"John");
console.log(driversMatch);


function fuzzyMatch(divers,inquer) {
    return divers.filter(driver=>driver.startWith(inquer));
}
 let divers=["ben","rose"]
 let inquer="b"
 const matching=fuzzyMatch(divers,inquer)
 console.log(matching);



function matchName(rider,state) {
    return rider.filter(riders=>riders.play(state));
}
let rider=[
    {name:"John",
    Hometown:"Chala",
    },
    {name:"celestine",
     Hometown:"nairobi"
    }
]
let state="John"
 const ride=matchName(rider,state)
 console.log(ride);
 