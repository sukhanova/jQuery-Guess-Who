console.log('Here are all the available people:', people);

var people = [
    {
      name: 'Dev',
      githubUsername: 'devjanaprime'
    },
    {
      name: 'Dane',
      githubUsername: 'DoctorHowser'
    },
    {
      name: 'Mary',
      githubUsername: 'mbmosman'
    },
    {
      name: 'Kris',
      githubUsername: 'kdszafranski'
    },
    {
      name: 'Edan',
      githubUsername: 'eschwartz'
    },
    {
      name: 'Casie',
      githubUsername: 'cassandradanger'
    },
    {
      name: 'Chris',
      githubUsername: 'christopher-black'
    },
  ];
$(document).ready(readyNow);

function readyNow(){
    appendUserImages(people);
    
    //appendUserImages();

    // $('#userImage').append(`<div><img src="https://github.com/devjanaprime.png?size=250" alt="Profile image of Dev"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/DoctorHowser.png?size=250" alt="Profile image of Dane"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/mbmosman.png?size=250" alt="Profile image of Mary"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/kdszafranski.png?size=250" alt="Profile image of Kris"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/eschwartz.png?size=250" alt="Profile image of Edan"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/cassandradanger.png?size=250" alt="Profile image of Casie"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris"></div>`);
}

function appendUserImages(array){
    //console.log('in appendUserImages');
    for (let i = 0; i < array.length; i++){
        let appendUserInfo = `<div>
                             <img src="https://github.com/array[i].${githubUsername}.png alt="Profile image of array[i].${name}</div>`;
    }
    
}

