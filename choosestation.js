const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  let goodStations = [];
  for(const elements of stations)
{ const capacity = elements[1];
    const type = elements[2]; 
 
    if ((capacity >= 20) && (type === "school" || type === "community centre")){  
    goodStations.push(elements[0]);
       
  } 
  } 
  return goodStations;
}
chooseStations(stations);