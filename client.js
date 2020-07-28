console.log('Here are all the available people:', people);

let questionNumberAsked;

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
    guessWho(people);
    $('#userImage').on('click', '.userPicture', getAnswer);
    
    //appendUserImages();

    // $('#userImage').append(`<div><img src="https://github.com/devjanaprime.png?size=250" alt="Profile image of Dev"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/DoctorHowser.png?size=250" alt="Profile image of Dane"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/mbmosman.png?size=250" alt="Profile image of Mary"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/kdszafranski.png?size=250" alt="Profile image of Kris"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/eschwartz.png?size=250" alt="Profile image of Edan"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/cassandradanger.png?size=250" alt="Profile image of Casie"></div>`);
    // $('#userImage').append(`<div><img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris"></div>`);
}



function appendUserImages(people){
    //console.log('in appendUserImages');
    for (let i = 0; i < people.length; i++){
        let appendUserInfo = [];
        appendUserInfo +=$('#userImage').append(`
        <img id ="primePic${i}" class="userPicture" data-person="${people[i].name}" src="https://github.com/${people[i].githubUsername}.png?size=250"
        alt="Profile image of ${people[i].name}">
        `);
        $('#userImage').append(appendUserImages);
    }
    
}

function guessWho(people){
  questionNumberAsked = Math.floor(Math.random() * people.length);
  $('h2').text(`Which GitHub user is: ${people[questionNumberAsked].name} ?`);
}


function getAnswer(){
  //console.log($(this).data());
  if(questionNumberAsked === $(this).parent().data()){
    alert('You guessed right!');
  } else{
    alert('Try more!');
  }
}