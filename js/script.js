const anchors = document.querySelectorAll('a[href^="#"]'); // Loop through each anchorfor (const anchor of anchors) {    // Add click event to each anchor

for (anchor of anchors){
anchor.addEventListener("click", function (e) {
  e.preventDefault(); 
  const target = document.querySelector(this.getAttribute("href")); 
 
 
  target.scrollIntoView({
    behavior: "smooth",
  });
});
}

let arr=[
  "1921",
  "7 December (Magshar sud 8, VS 1978)",
  "Born in the village of Chansad near Vadodara, Gujarat; named Shantilal.",
  "1939",
  "7 November (Aso vad 11, VS 1995)",
  "Leaves home to become a sadhu.",
  "1939",
  "22 November (Kartik sud 11, VS 1996)",
  "Initiation into parshad order by Shastriji Maharaj, Ahmedabad.",
  "1940",
  "10 January (Posh sud 1, VS 1996)",
  "Initiated into sadhu order by Shastriji Maharaj at the Akshar Deri, Gondal; named Narayanswarupdas Swami.",
  "1939-1946",
  "Sanskrit studies, vicharan with Shastriji Maharaj, various services in the mandirs.",
  "Sanskrit studies, vicharan with Shastriji Maharaj, various services in the mandirs.",
  "1950",
  "21 May (Jeth sud 4, VS 2006)",
  "Appointed as Pramukh (President) of Bochasanwasi Shri Akshar Purushottam Swaminarayan Sanstha (BAPS) by Shastriji Maharaj, Ahmedabad.",
  "1951",
  "10 May (Vaishakh sud 4, VS 2007)",
  "In Sarangpur, Shastriji Maharaj returns to Akshardham. Yogiji Maharaj becomes spiritual guru of BAPS. Pramukh Swami serves the BAPS under the guidance and blessings of Yogiji Maharaj.",
  "1959-60",
  "24 October to 3 July 1960",
  "Overseas Satsang Tour to East Africa with Yogiji Maharaj.",
  "1968",
  "27 November",
  "Pramukh Swami s 48th birthday celebrated in presence of Yogiji Maharaj, Mumbai. Yogiji Maharaj instructs devotees to celebrate Pramukh Swami s birthday every year.",
  "1971",
  "23 January (Posh vad 11, VS 2027)",
  "In Mumbai, Yogiji Maharaj returns to Akshardham; cremation rites in Gondal. Pramukh Swami Maharaj becomes spiritual guru of BAPS.",
  "1971",
  "23 January (Posh vad 11, VS 2027)",
  "In Sankari, murti-pratishtha of the first shikharbaddha mandir by Pramukh Swami Maharaj. Over the next 45 years, he consecrated 1,100 mandirs in India and abroad.",
  "1973",
  "3 December",
  "Kalash Mahotsav, Ahmedabad; initiation of 56 youths into sadhu order.",
  "1974",
  "3 December",
  "First overseas satsang tour after becoming guru. Received many   Key to the City  honours. Consecrated first BAPS mandir in USA in New York. Over the next 40 years he consecrated 6 shikharbaddha mandirs and 70 hari mandirs in North America.",
  "1981",
  "7 March to 13 April",
  "Bhagwan Swaminarayan Birth Bicentenary Celebrations, Ahmedabad; 37-day festival. Initiation of 207 youths into sadhu- and parshad-order. Visited by 8 million people.",
  "1983",
  "5 February",
  "Pramukh Swami Maharaj, aged 62, suffers heart attack, Sundalpura. Even afterwards, for 30 years, he continued to serve tirelessly day and night.",
  "1984",
  "7 April 1984",
  "Meeting with Pope John Paul II, Vatican City.",
  "1985",
  "7 April 1984",
  "Grand 33-day Cultural Festival of India celebrated at Alexandra Park, London. Pramukh Swami Maharaj honoured in Suvarna Tula ceremony at QPR football stadium. All donations received gifted to Karamsad Medical College.",
  "1985",
  "22 October to 19 December",
  "59-day Aksharbrahman Gunatitanand Swami Birth Bicentenary Celebrations, Ahmedabad. Initiation of 200 youths into sadhu and parshad orders. Over 8 million visitors.",
  "1987-1988",
  "19 December",
  "Cattle camps and famine relief activities in Gujarat.",
  "1988",
  "19 December",
  "Pramukh Swami Maharaj honoured in the British parliament.",
  "1988",
  "19 December",
  "Pramukh Swami Maharaj honoured in Canadian parliaments.",
  "1989-90",
  "International Children s Convention (Adhiveshan), Vidyanagar; 15,000 children participated.",
  "International Youth Convention (Adhiveshan), Vidyanagar; 21,000 youths participated.",
  "1991",
  "12 July to 11 August",
  "Cultural Festival of India, Edison, New Jersey, USA; Over 1 million visitors.",
  "1992",
  "11 August",
  "Grand 35-day celebration of Yogiji Maharaj s Centenary. Inauguration of Swaminarayan Akshardham, Gandhinagar.",
  "1993",
  "11 August",
  "Relief and rehabilitation activities following earthquake in Latur, Maharashtra.",
  "1995",
  "20 August",
  "Murti-pratishtha of the BAPS shikharbaddha mandir in Neasden, London.",
  "1996",
  "8 July",
  "Guinness World Records recognizes Shri Swaminarayan Mandir, London as the   Largest Stone Hindu Mandir Outside India .",
  "1997",
  "8 July",
  "Pramukh Swami Maharaj received at St. James  Palace by HRH Prince Charles, The Prince of Wales.",
  "1998",
  "7 July",
  "Swamishri undergoes heart bypass surgery, New York, USA.",
  "1999",
  "8 July",
  "Murti-pratishtha of BAPS Shri Swaminarayan Mandir, Nairobi.",
  "2000",
  "8 July",
  "Pramukh Swami Maharaj addresses the Millennium World Peace Summit of Spiritual Leaders at the United Nations, New York, USA.",
  "2000",
  "8 July",
  "Mayor Mel Lastman of Toronto presents the Key to the City.",
  "2000",
  "8 July",
  "Historic meeting with US President Bill Clinton and Secretary-General of the UN Kofi Annan.Cattle camps and relief aid for victims of drought in Saurashtra.Inauguration of BAPS Swaminarayan Vidya Mandir for Girls, Karamsad.In Dabhoi, opening of general hospital for the underprivileged.De-addiction campaign by BAPS children. Over 400,000 de-addicted.",
  "2001",
  "8 July",
  "BAPS serves after earthquake in Gujarat: Emergency aid to 409 villages, infrastructure constructed in 15 villages and colonies; 49 schools built. Guinness World Records recognizes Pramukh Swami Maharaj as one of the 20 most influential people of the world.",
  "2004",
  "50th anniversary of BAPS Bal Mandal celebrated at Swaminarayan Akshardham, Gandhinagar, in the presence of H.E. APJ Abdul Kalam, President of India. 20,000 children attended.",
  "2005",
  "6 November (Kartik sud 5, VS 2062)",
  "Opening of Swaminarayan Akshardham, New Delhi, by Pramukh Swami Maharaj, H.E. President Dr APJ Abdul Kalam, Prime Minister Shri Manmohan Singh and other dignitaries.",
   "2007",
   "8 July",
  "Gifting the people of Canada with the Mandir in the presence of the Prime Minister of Canada, Mayor of Toronto and the Premier of Ontario.",
  "2007",
  "8 July",
  "De-addiction Campaign by BAPS children. 630,000 people pledge to give up addictions.",
  "2008",
  "8 July",
  "Assistance to victims of floods in Bihar and Hurricane Ike in USA.",
  "2009",
  "8 July",
  "Relief aid to flood-affected in South Gujarat.",
  "2010",
  "8 July",
  "Swamishri inaugurates the BAPS Swaminarayan Research Institute, New Delhi.",
  "2011",
  "8 July",
  "Readers Digest selects Swaminarayan Akshardham in New Delhi as one of   The Seven Wonders of the 21st Century .",
  "2012",
  "8 July",
  "Swamishri has pacemaker implant, Ahmedabad.",
  "2012",
  "15 August",

  "Inauguration of BAPS Yogiji Maharaj Hospital in Ahmedabad.",
  "2013",
  "15 August",
  "Over 60,000 youths attend BAPS Youth Activities Diamond Jubilee in Ahmedabad.",
  "2013",
  "15 August",
  "Inauguration of BAPS Shastriji Maharaj Hospital in Vadodara.",
  "2014",
  "10 August (Shravan sud 15, VS 2070)",
  "Pramukh Swami Maharaj performs murti-pratishtha of new shikharbaddha BAPS Shri Swaminarayan Mandir, Robbinsville, NJ, USA.",
  "2014",
  "15 August",
  "Pramukh Swami Maharaj performs the Bhumital Pujan ceremony of Swaminarayan Akshardham Mahamandir in Robbinsville, NJ, USA. During the year-long celebrations of Shastriji Maharaj s 150th Anniversary, 23,000 trees are planted and 572,000cc of blood donated.",
  "2015",
  "20 June, Sarangpur",
  "Former President of India, Dr APJ Abdul Kalam, presents his book   Transcendence: My Spiritual Experiences with Pramukh Swamiji  to Swamishri.",
  "2016",
  "3 to 13 May 2016",
  "The centenary celebrations of BAPS Swaminarayan Mandir, Sarangpur, was celebrated in Pramukh Swami Maharaj s presence.",
  "2016",

  "On 12 May,",
  " Pramukh Swami Maharaj performed the maha-abhishek and 100th patotsav arti of the murtis in the main mandir.",
  "2016",

  "On 13 May",
  " Pramukh Swami Maharaj blessed the centenary celebrations assembly in Sarangpur.",
  "2016",
  "13 August 2016 (Shravan sud 10, Samvat 2072) at 6.00 p.m",
  "Swamishri passed away at 95 years in BAPS Swaminarayan Mandir Sarangpur, India.",
]
let timelineh2=document.getElementById("timelineh2");
let appendto=timelineh2;


for(let i=0;i<=arr.length;i++){
let divmain=document.createElement('div');
divmain.classList.add('outer');
let left=document.createElement('div');
left.classList.add('tlleft');
left.innerHTML=arr[i++];

let right=document.createElement('div');
right.classList.add('tlright');

let p1=document.createElement('p');
p1.classList.add('p1');
p1.innerHTML=arr[i++];
let p2=document.createElement('p');
p2.classList.add('p2');
p2.innerHTML=arr[i];


appendto.appendChild(divmain);
divmain.appendChild(left);
divmain.appendChild(right);
right.appendChild(p1);
right.appendChild(p2);

// appendto=divmain;
// console.log(i);
// i=i+2;

}

// if(document.body)

window.onscroll = function() {scrollFunction()};

let mybutton =document.getElementById("btt");
function scrollFunction() {
  if (document.documentElement.scrollTop > 70) {
    console.log("mottu");
    mybutton.style.display = "block";
  } else {
    console.log("nanu");
    mybutton.style.display = "none";
  }
}

// scrollFunction()