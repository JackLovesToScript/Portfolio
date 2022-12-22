AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Discord Management",
    cardImage: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    moocLink: "https://discord.com/moderation/4405231667735-314-training-and-onboarding-new-moderators",
  },
  {
    title: "HTML Development",
    cardImage: "data:image/png;base64,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",
    moocLink: "https://www.w3schools.com/html/",
  },
  {
    title: "Roblox Development",
    cardImage: "data:image/png;base64,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",
    moocLink: "https://www.roblox.com/studio",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
