const data = [
    {
        name:"John Doe",
        age : 32,
        gender:"male",
        lookingFor:"female",
        location: "Boston MA",
        image:"https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name:"Gilly Smith",
        age : 25,
        gender:"female",
        lookingFor:"male",
        location: "New Delhi",
        image:"https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
        name:"Jack Cena",
        age : 30,
        gender:"male",
        lookingFor:"female",
        location: "London",
        image:"https://randomuser.me/api/portraits/men/7.jpg"
    }
];


const profiles = profileIterator(data);
//Call first profile

nextProfile();
//Next Button event
document.getElementById("next").addEventListener("click",nextProfile);

//Next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `;

        document.getElementById("imageDisplay").innerHTML = `
            <img src="${currentProfile.image}">
        `;
    } else {
        //No more profiles
        window.location.reload();
    }
}
//Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++] , done: false} : 
            {done: true}
        }
    };
}