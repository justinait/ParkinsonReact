import React, { useEffect, useState } from 'react';


const [paintings, setPaintings] = useState([]);

useEffect(()=> {
db.collection("paintings").onSnapshot(s => {
    setPaintings(s.docs.map(d => ({
    id: d.id,
    painting: d.data()
    })))
})
}, [])