// Chunnu and Munnu have gone hiking and they have a shortage of food supplies. So, they want your help to figure out which plants are edible and which are not. You are given a stringediblerepresenting the types of plants that are edible, and another stringplantsrepresenting all plants that are on the trail. Your task is to find out how many plants are there on the trail which are edible.

// Note:Letters are case sensitive, so"a"is considered a different type of plant from"A".

function ediblePlants(N,edible,M,plants){
    let c=0;
    for(let i=0; i<N; i++){
        for(let j=0;j<M; j++ ){
            if(edible[i]==plants[j]){
                c++;
            }
        }
    }
    console.log(c);
}