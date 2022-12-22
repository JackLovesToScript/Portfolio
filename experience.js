AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Whitehat Hacker Intern",
    cardImage: "https://media.istockphoto.com/id/511653492/vector/incognito-hacker-spy-agent.jpg?s=612x612&w=0&k=20&c=IO9KG36TQ2wnIR3idSk-oEDV9zx5BsyduKQAlWPhNJU=",
    place: "Whitehat Jr",
    time: "(May, 2019 - present)",
    desp: "<li>Has experience in Whitehat Hacking</li>",
  },
  {
    title: "HTML Developer",
    cardImage: "data:image/png;base64,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",
    place: "W3 Schools",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Took HTML coding class and graduated.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Discord Management",
    cardImage: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    place: "Discord",
    time: "(Dec, 19, 2018 - Present)",
    desp: "<li>Currently experienced in Discord Moderation, Management and Ownership.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Jacksonville Roleplay",
    cardImage: "https://cdn.discordapp.com/icons/1031043086723325963/c78e90f622d4232a0c54bf26a64303c3.png?size=4096",
    description:
      "Owner | 50+",
  },
  {
    title: "SR Studios",
    cardImage: "https://cdn.discordapp.com/icons/1023627474569007205/c2f5a0f330b07018780997158304b890.webp",
    description:
      "Management | Unknown+",
  },
  {
    title: "Bubble Studios",
    cardImage: "https://tr.rbxcdn.com/97ff0044799b760109d11778d5337206/150/150/Image/Png",
    description:
      "Developer/Scripter/Game Tester | 13k+",
  },
  {
    title: "Studio Services",
    cardImage: "https://tr.rbxcdn.com/9488f8eb9d89c422011964644f461727/150/150/Image/Png",
    description:
      "Chief Executive Officer | 10k+",
  },
  {
    title: "Dream Team Games",
    cardImage: "https://tr.rbxcdn.com/602b51f7cac3e703e95e041e3e45a7d7/150/150/Image/Png",
    description:
      "Senior Management | 400+",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Los Angeles City Roleplay",
    subtitle: "Owner",
    image: "https://cdn.discordapp.com/icons/940753381826396200/568fd03edc55399cae0ac19cfaf38f8a.png?size=4096",
    desp: "3k+",
  },
  {
    title: "Greenville Roleplay Community",
    subtitle: "Discord Manager",
    image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    desp: "3k+",
  },
  {
    title: "Palm Springs Roleplay",
    subtitle: "Community Management",
    image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    desp: "2k+",
  },
  {
    title: "Nova State Roleplay",
    subtitle: "Moderator",
    image: "https://media.discordapp.net/attachments/775466714254409769/934571948250378280/nsrp21.png?width=324&height=324",
    desp: "14k+",
  },
  {
    title: "United States Military (Roblox Group)",
    subtitle: "Aide-De-Camp to the Chairman Joint Chief Of Staff",
    image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    desp: "1M+",
  },
  {
    title: "Greenville Roleplay Diversion",
    subtitle: "Discord Management",
    image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    desp: "3k+",
  },
    {
    title: "Riverside restaurant",
    subtitle: "Founder",
    image: "https://tr.rbxcdn.com/99dbd35c0379eac687c7e40c19c7cdf1/150/150/Image/Png",
    desp: "200+",
  },
  {
    title: "Riverside Cafe",
    subtitle: "Founder",
    image: "https://tr.rbxcdn.com/39f877b45450ea53148d48df5a13b4ea/150/150/Image/Png",
    desp: "11+",
  },
    {
    title: "United States Army | 2000's",
    subtitle: "Chief Staff Of the Army",
    image: "https://tr.rbxcdn.com/17b46b66edac2f4406f6bf85d63797c3/150/150/Image/Png",
    desp: "1k+",
  },
   {
    title: "Clockwork Correctional Facility∞",
    subtitle: "Founder",
    image: "https://tr.rbxcdn.com/17b46b66edac2f4406f6bf85d63797c3/150/150/Image/Png",
    desp: "1.5k+",
  },
  {
    title: "Northwood Correctional Facility",
    subtitle: "Operations Director",
    image: "https://tr.rbxcdn.com/21c2ffd78c69cb8c7a81266f33470e26/150/150/Image/Png",
    desp: "100K+",
  },
    {
    title: "SDRP | San Deigo Roleplay",
    subtitle: "Owner",
    image: "https://tr.rbxcdn.com/f8f0edbe844bf83d4f9e8407b0814116/150/150/Image/Png",
    desp: "50+",
  },
   {
    title: "BeachBlox",
    subtitle: "Corperate Officer",
    image: "https://tr.rbxcdn.com/f4ada6e7ef4e3a3f8faf5119978efefa/150/150/Image/Png",
    desp: "179k+",
  },
   {
    title: "[BA] - British Army.",
    subtitle: "OF-6",
    image: "https://tr.rbxcdn.com/fe0c4efa93b5e64325aee12733d8f96c/150/150/Image/Png",
    desp: "159k+",
  },
   {
    title: "Koala Association",
    subtitle: "General Manager",
    image: "https://tr.rbxcdn.com/19d2578d52fbe8483e7b8e2ee95697d6/150/150/Image/Png",
    desp: "1M+",
  },
  {
    title: "UnᎥted States Marine Corps",
    subtitle: "O-9",
    image: "https://tr.rbxcdn.com/3f95b12cab87fd4eac564748f5dbc899/150/150/Image/Png",
    desp: "405k+",
  },
   {
    title: "Sunrise Corporation∙",
    subtitle: "Developer | Builder",
    image: "https://tr.rbxcdn.com/71b24acd0e38fe604c12b93e61b010a8/150/150/Image/Png",
    desp: "980+",
  },
  {
    title: "Pablo's",
    subtitle: "Supervisor",
    image: "https://tr.rbxcdn.com/b0c2542c4d0483b08cd604c7ca29df24/150/150/Image/Png",
    desp: "55k+",
  },
  {
    title: "BloxStreet Corporation",
    subtitle: "Executive Officer",
    image: "https://tr.rbxcdn.com/1f77c2419f7025745fff9af8debd2895/150/150/Image/Png",
    desp: "1M+",
  },
   {
    title: "Soro's Restaurant Franchise®",
    subtitle: "Head Chief",
    image: "https://tr.rbxcdn.com/bb90fcdf86ddcafd33b63ab331c97734/150/150/Image/Png",
    desp: "753k+",
  },
  {
    title: "Sunside Homestore",
    subtitle: "Community Management",
    image: "https://tr.rbxcdn.com/c0d852fb22ceeaa5aee9d86605260094/150/150/Image/Png",
    desp: "2k+",
  },
  {
    title: "SCPF : Special Containment Facility",
    subtitle: "The Administrator",
    image: "https://tr.rbxcdn.com/26610ddab58f6f08def5d1b6a68575ca/150/150/Image/Png",
    desp: "35+",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
