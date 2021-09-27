var startupinfo = [
  {
    name: "EACAD",
    desc: "EACAD is the premier ed-tech, training and skill development organization started with a vision to bring world-class, most innovative training content for aspirants of competitive exams like UPSC, MPSC, SSC, State Board Exams, Railways, GATE, JEE, NEET, NDA, CET, OLYMPIAD, etc. to everyone's doorsteps. OUR MOTO - SMARTER INDIA VISION: TO CREATE SMARTER INDIA. At EACAD, we are trying to build our content smarter at more affordable rates than anyone in the market. MISSION: 1. To innovate and bring the best content to our students by way of Animations, Simulations and best visual effects to learn and remember things for a longer time. 2. To make learning enjoyable. 3. To build students' basics knowledge strong at a tender age so that they will stand out from the regular crowd. 4. To teach the basics of Coding, Animations, Simulations to the inquisitive students so that they will excel in their future endeavour 5. To provide Free UPSC and GATE content to best and needy 20 students each year. 6.To reach out to every needy student at a very affordable rate.",
    stage: "Established",
    sector: "Ed-Tech",
    founder: "Avinash More",
    yr: "2002",
    "link-type": "linkedin",
    link: "https://www.linkedin.com/company/e-acad-private-limited/",
  },
  {
    name: "The Cricket Digest	",
    desc: "We are a cricket-based video content making venture. We focus on the rules and regulations of cricket. We have about 40k subscribers base with 11 million views.",
    stage: "Established",
    sector: "Sports",
    founder: "Lokesh Bhatt	",
    yr: "2010",
    "link-type": "youtube",
    link: "https://www.youtube.com/c/TheCricketDigest",
  },
  {
    name: "Aify Innovation Labs",
    desc: "",
    stage: "Scaling",
    sector: "Research",
    founder: "Pankaj Singh",
    yr: "2008",
    "link-type": "linkedin",
    link: "https://www.linkedin.com/in/pankaj-singh-b000894a/",
  },
  {
    name: "HelpNow",
    desc: "HelpNow is building the most reliable ambulance service for 1.3 billion Indians by reducing arrival time from 50 minutes to 10 minutes. Our cabs/ambulances are fitted with our patent-pending “Mini-ambulance” kit, containing almost all the equipment of a BLS (Basic Life Support) ambulance. And the drivers are trained with AHA certified Medical training. With 110M emergency cases annually in India, and an avg ambulance trip costing $100, it’s an eleven billion dollar market. Team: We are a team of alumni and students (dropped out post YC) from IIT Bombay. Aditya Makkar, has won National Award by the President of India for innovations, Shikhar Agrawal, was Government of India’s Youth Exchange ambassador and Venkatesh Amrutwar,left his job at a top fintech firm to join HelpNow full time as operations head. HelpNow has ex-directors and HODs from IIT Bombay and AIIMS Delhi as advisors.	",
    stage: "Scaling",
    sector: "Healthcare",
    founder: "Aditya Makkar",
    yr: "2010",
    "link-type": "",
    link: "",
  },
];

var table = document.getElementById("startuptable");
var cards = document.getElementById("cards");
var body = document.getElementById("body");
var index = 0;
startupinfo.forEach((startup) => {
  makeCard(startup, index);
  index++;
});

function expandReadMore(index) {
  document.getElementById("readmore" + index).innerHTML =
    startupinfo[index]["desc"];
}

function makeCard(startup, index) {
  //main div
  var div = document.createElement("div");
  div.setAttribute("class", "col-lg-3 mt-3");
  cards.appendChild(div);

  //main card div
  var div2 = document.createElement("div");
  div2.setAttribute("class", "card text-white bg-dark text-center");
  div.appendChild(div2);

  //card body
  var div3 = document.createElement("div");
  div3.setAttribute("class", "card-body");
  div2.appendChild(div3);

  //startup name h5
  var h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title");
  h5.innerHTML = startup["name"];
  div3.appendChild(h5);

  //founder name h6
  var h6 = document.createElement("h6");
  h6.setAttribute("class", "card-subtitle text-muted");
  h6.innerHTML = "Founder: " + startup["founder"];
  div3.appendChild(h6);

  //card stage footer
  var div4 = document.createElement("div");
  div4.setAttribute("class", "card-footer");
  div4.innerHTML = "Stage: " + startup["stage"];
  div2.appendChild(div4);

  //card sector footer
  var div5 = document.createElement("div");
  div5.setAttribute("class", "card-footer");
  div5.innerHTML = "Sector: " + startup["sector"];
  div2.appendChild(div5);

  //social media footer
  var div6 = document.createElement("div");
  div6.setAttribute("class", "card-footer mb-1");
  div6.innerHTML = "Social Media: &ensp;";
  div2.appendChild(div6);
  var a = document.createElement("a");
  if (startup["link-type"] == "") {
    a.innerHTML = "NA";
  } else {
    a.setAttribute("href", startup["link"]);
    a.setAttribute("target", "_blank");
    a.setAttribute("class", "fa fa-" + startup["link-type"]);
  }

  div6.appendChild(a);

  //Read more button
  var a = document.createElement("a");
  a.setAttribute("class", "btn btn-secondary");
  a.setAttribute("data-bs-toggle", "modal");
  a.setAttribute("data-bs-target", "#staticBackdrop");
  a.setAttribute("href", "#");
  a.setAttribute("id", "readmore" + index);
  a.setAttribute("startup-name", startup["name"]);
  a.setAttribute("startup-founder", startup["founder"]);
  a.setAttribute("startup-desc", startup["desc"]);
  a.setAttribute("startup-stage", startup["stage"]);
  a.setAttribute("startup-sector", startup["sector"]);
  a.setAttribute("startup-link-type", startup["link-type"]);
  a.setAttribute("startup-link", startup["link"]);
  a.setAttribute("onclick", "changeModalValues(" + index + ")");
  a.innerHTML = "Read More";
  div2.appendChild(a);
}

function changeModalValues(id) {
  var a = document.getElementById("readmore" + id);
  document.getElementById("startup-name-1").innerHTML =
    a.getAttribute("startup-name");
  document.getElementById("startup-name-2").innerHTML =
    a.getAttribute("startup-name");
  document.getElementById("founder").innerHTML =
    "Founder: " + a.getAttribute("startup-founder");
  document.getElementById("description").innerHTML =
    a.getAttribute("startup-desc");
  document.getElementById("stage").innerHTML =
    "Stage: " + a.getAttribute("startup-stage");
  document.getElementById("sector").innerHTML =
    "Sector: " + a.getAttribute("startup-sector");
  var link = document.getElementById("link");
  if (a.getAttribute("startup-link-type") == "") {
    link.innerHTML = "NA";
    link.removeAttribute("href");
    link.removeAttribute("class");
  } else {
    link.innerHTML = "";
    link.setAttribute("class", "fa fa-" + a.getAttribute("startup-link-type"));
    link.setAttribute("href", a.getAttribute("startup-link"));
  }
}
