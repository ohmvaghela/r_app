// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Box from "./Box";

export class Cards extends Component {
  article = [
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Daniel Politi",
      title:
        "Despite tear gas, Peru protesters vow to keep demonstrating - The Associated Press - en Español",
      description:
        "LIMA, Peru (AP) — Thousands of protesters took to the streets of Peru’s capital Friday and were met with volleys of tear gas for the second straight day, as demonstrators made clear they will keep up their mobilizations to demand the resignation of President …",
      url: "https://apnews.com/article/politics-peru-government-protests-and-demonstrations-caribbean-dina-boluarte-5058729c16cef9beedcc4b8ab97c9e42",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/23cac4d9bfaf40fa91fb41b4a7d366d7/3000.webp",
      publishedAt: "2023-01-21T02:26:15Z",
      content:
        "LIMA, Peru (AP) Thousands of protesters took to the streets of Perus capital Friday and were met with volleys of tear gas for the second straight day, as demonstrators made clear they will keep up th… [+4494 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Steve Almasy, Raja Razek",
      title:
        "5 Memphis officers fired after death of man who was hospitalized after his arrest - CNN",
      description:
        "The Memphis Police Department has terminated five police officers in connection with the death of Tyre Nichols, who passed away in a hospital after being arrested by police earlier this month, according to a post from the department's verified Twitter account.",
      url: "https://www.cnn.com/2023/01/20/us/memphis-tennessee-tyre-nichols-death-friday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230120172320-tyre-nichols-memorial.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-21T02:00:00Z",
      content:
        "The Memphis Police Department has terminated five police officers in connection with the death of Tyre Nichols, who passed away in a hospital after being arrested by police earlier this month, accord… [+2740 chars]",
    },
    {
      source: {
        id: "entertainment-weekly",
        name: "Entertainment Weekly",
      },
      author: "Maureen Lee Lenker",
      title:
        "Brooke Shields reveals she was raped shortly after college in Pretty Baby documentary - Yahoo Entertainment",
      description:
        "\"I didn't fight that much. I didn't. I just absolutely froze,\" the actress says in a new documentary.",
      url: "https://ew.com/movies/pretty-baby-documentary-brooke-shields-reveals-she-was-raped/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B705%2C260%5D&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F01%2F21%2FBrooke-Shields-20191112_56.jpg",
      publishedAt: "2023-01-21T01:01:00Z",
      content:
        "Brooke Shields has never shied away from talking about the ways she was sexualized as a child star in Hollywood. But now the actress is revealing that she was raped as a young adult.\r\nIn new document… [+3587 chars]",
    },
    {
      source: {
        id: null,
        name: "Entertainment Tonight",
      },
      author: "Mona Khalifeh",
      title:
        "Watch Lisa Marie Presley's Memorial at Graceland: Live - Entertainment Tonight",
      description:
        "Presley is being laid to rest at the Presley family estate alongside her father, Elvis, and her late son, Benjamin.",
      url: "https://www.etonline.com/watch-lisa-marie-presleys-memorial-at-graceland-live-197465",
      urlToImage:
        "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2023-01/GettyImages-180792482.jpg?h=bd7c98e2&itok=DmJKNnWZ",
      publishedAt: "2023-01-21T00:20:08Z",
      content:
        "Lisa Marie Presley is being honored at Graceland, her father Elvis Presley's former home. ET is streaming her memorial service Live on Sunday, Jan. 22, at 9 a.m. CT on etonline.com.\r\nIn a statement s… [+2413 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Adam Shaw",
      title:
        "Over quarter of a million migrant encounters in December alone, CBP confirms - Fox News",
      description:
        "There were 251,487 migrant encounters at the southern border in December alone, Customs and Border Protection confirmed Friday — a new high in the historic crisis.",
      url: "https://www.foxnews.com/politics/over-quarter-million-migrant-encounters-december-alone-cbp-confirms",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/elpaso3.jpg",
      publishedAt: "2023-01-21T00:06:00Z",
      content:
        "The number of migrant encounters at the southern border in December surpassed 250,000 in December alone, Customs and Border Protection (CBP) confirmed Friday evening marking a new high for the Biden-… [+5945 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Alli Rosenbloom",
      title: "Neil Young pays tribute to David Crosby: 'Love you man' - CNN",
      description:
        "Legendary rocker Neil Young has paid tribute to former Crosby, Stills, Nash & Young bandmate David Crosby.",
      url: "https://www.cnn.com/2023/01/20/entertainment/neil-young-david-crosby-tribute/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230120131109-neil-young-david-crosby-file-2013.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-20T23:39:00Z",
      content:
        "Legendary rocker Neil Young has paid tribute to former Crosby, Stills, Nash &amp; Young bandmate David Crosby. \r\nDavid is gone, but his music lives on. The soul of CSNY, Davids voice and energy were … [+1965 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Supreme Court investigation into leaked draft overturning Roe continues - CBS News",
      description:
        "Following an eight-month investigation, the Supreme Court said investigators have not been able to determine who leaked a draft of its ruling overturning Roe...",
      url: "https://www.youtube.com/watch?v=GQeAKlx9RLg",
      urlToImage: "https://i.ytimg.com/vi/GQeAKlx9RLg/maxresdefault.jpg",
      publishedAt: "2023-01-20T22:45:19Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "Alex Scarborough",
      title:
        "Source - Gators release '23 QB recruit Jaden Rashada from NLI - ESPN",
      description:
        "Florida has released 2023 quarterback prospect Jaden Rashada from his letter of intent, a source told ESPN. Rashada asked for his release after a reported $13 million NIL deal fell through.",
      url: "https://www.espn.com/college-football/story/_/id/35490106/source-gators-release-23-qb-recruit-jaden-rashada-nli",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0118%2Fr1119133_1296x729_16%2D9.jpg",
      publishedAt: "2023-01-20T22:40:16Z",
      content:
        "Jaden Rashada, a top quarterback prospect in the 2023 class, has been released from his national letter of intent by Florida and is now free to sign with another team, a source told ESPN.\r\nRashada, w… [+1475 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Kyle Shanahan Shares Final Updates Ahead of #DALvsSF | 49ers - San Francisco 49ers",
      description:
        "#49ers #PressPass #DALvsSFHear from head coach Kyle Shanahan as he speaks with the media ahead of the team's Divisional Round matchup against the Dallas Cowb...",
      url: "https://www.youtube.com/watch?v=dUZu0Ow9nLY",
      urlToImage: "https://i.ytimg.com/vi/dUZu0Ow9nLY/maxresdefault.jpg",
      publishedAt: "2023-01-20T22:38:47Z",
      content: null,
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Inga Parkel",
      title:
        "Alec Baldwin news – live: Hollywood backs actor in wake of Rust shooting involuntary manslaughter charges - The Independent",
      description: "Alec Baldwin faces jail time after Rust movie shooting",
      url: "https://www.independent.co.uk/arts-entertainment/films/news/alec-baldwin-rust-charged-manslaughter-shooting-news-b2266368.html",
      urlToImage:
        "https://static.independent.co.uk/2023/01/19/12/rust%20shooting%20copy.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-01-20T22:38:27Z",
      content:
        "Get our free weekly email for all the latest cinematic news from our film critic Clarisse Loughrey\r\nGet our The Life Cinematic email for free\r\nAs Alec Baldwin faces charges of involuntary manslaughte… [+6518 chars]",
    },
    {
      source: {
        id: null,
        name: "The Center Square",
      },
      author: "Greg Bishop | The Center Square",
      title:
        "BREAKING: Judge blocks Illinois' gun ban for more than 860 who sued - The Center Square",
      description:
        "(The Center Square) – Enforcement of Illinois’ gun ban has been temporarily suspended for the 860-plus individuals who sued the state.",
      url: "https://www.thecentersquare.com/illinois/breaking-judge-blocks-illinois-gun-ban-for-more-than-860-who-sued/article_48691d5a-990d-11ed-b4e8-7b5e45bff0d6.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/thecentersquare.com/content/tncms/assets/v3/editorial/9/54/9540de96-7ccb-11ed-bbc4-5b6a269250c3/639ba60f503ac.image.png?crop=1206%2C633%2C43%2C0&resize=1200%2C630&order=crop%2Cresize",
      publishedAt: "2023-01-20T22:36:00Z",
      content:
        "(The Center Square) Enforcement of Illinois gun ban has been temporarily suspended for the 860-plus individuals who sued the state.\r\nGov. J.B. Pritzker signed the gun and magazine ban into law last w… [+1226 chars]",
    },
    {
      source: {
        id: null,
        name: "The Information",
      },
      author: "Amir Efrati, Jon Victor",
      title:
        "Google Laid Off High Performers and Earners While Largely Sparing 'Brain' AI Lab - The Information",
      description:
        "Google's move to lay off 6.4% of staff on Fridaydidn’t come as a shock to most employees, but it stunned some of the individuals who were cut. Laid-off employees included those who had previously received high performance reviews or held managerial positions …",
      url: "https://www.theinformation.com/articles/google-laid-off-high-performers-and-earners-while-brain-ai-lab-largely-spared",
      urlToImage:
        "https://tii.imgix.net/production/articles/9627/eeac3533-ca09-4655-9058-3c4fed8b5bc0.jpeg?fm=jpg&auto=compress&w=1200&frame=0",
      publishedAt: "2023-01-20T22:20:00Z",
      content:
        "Google's move to lay off 6.4% of staff on Friday didnt come as a shock to most employees, but it stunned some of the individuals who were cut. Laid-off employees included those who had previously rec… [+852 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Tanaya Macheel, Carmen Reinicke",
      title:
        "Stocks close higher Friday, Nasdaq notches third straight week of wins - CNBC",
      description:
        "Investors fought to hang onto the January rally as earnings reports continue to trickle in.",
      url: "https://www.cnbc.com/2023/01/19/stock-futures-tick-up-after-dow-goes-negative-for-the-year.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107182064-1674249084948-a8_img_100_99_112_1877665_1000-1674248919163.jpg?v=1674249206&w=1920&h=1080",
      publishedAt: "2023-01-20T22:15:00Z",
      content:
        'A large batch of expiring options could make for some strange trading patterns on Friday, according to Vishal Vivek, vice president of derivatives research at Goldman Sachs. \r\n"$797bn of single stock… [+1036 chars]',
    },
    {
      source: {
        id: null,
        name: "MMA Fighting",
      },
      author: "MMA Fighting Newswire",
      title:
        "Jamahal Hill issues final warning to Glover Teixeira, Brazilian fans ahead of UFC 283 - MMA Fighting",
      description:
        "Jamahal Hill didn’t mince words in his final message to the Brazilian fans.",
      url: "https://www.mmafighting.com/2023/1/20/23564508/jamahal-hill-issues-final-warning-to-glover-teixeira-brazilian-fans-ahead-of-ufc-283",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/RmhVXNTkAow-O-ydKPJwyRVEZDE=/296x0:1581x673/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24374982/Golver_Teixeira_x_Jamahal_Hill.jpg",
      publishedAt: "2023-01-20T21:17:22Z",
      content:
        "Jamahal Hill didnt mince words in his final message to the Brazilian fans.\r\nHill and Teixeira faced off for the final time on Friday ahead of their UFC 283 showdown in Rio de Janeiro, Brazil. Hill, w… [+1717 chars]",
    },
    {
      source: {
        id: null,
        name: "Kotaku",
      },
      author: "Sisi Jiang",
      title:
        "Xbox's Phil Spencer: Microsoft Laying Off 10K People 'Hurts' - Kotaku",
      description:
        "The CEO of Xbox sent a company-wide email addressing the mass layoffs at ZeniMax and other game studios",
      url: "https://kotaku.com/phil-spencer-xbox-layoffs-microsoft-zenimax-1850013315",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f1a78a51931d05c8a1ce5506ef3cdeef.jpg",
      publishedAt: "2023-01-20T21:00:00Z",
      content:
        "A few hours ago, Xbox CEO Phil Spencer sent out a company-wide email to all full-time employees under Microsofts gaming divisions. A copy of the email was shared with Kotaku by a current Xbox employe… [+2694 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Natasha Bertrand, Katie Bo Lillis",
      title:
        "US to designate Russia's Wagner mercenary group as a 'transnational criminal organization' - CNN",
      description:
        'The US Treasury Department will designate the Russian mercenary organization Wagner Group as a "transnational criminal organization" and will impose additional sanctions next week against the group and its support network across the world, the White House sai…',
      url: "https://www.cnn.com/2023/01/20/politics/us-russia-wagner-group/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221130152839-us-russia-wagner-group-file-110422.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-20T20:48:00Z",
      content:
        "The US Treasury Department will designate the Russian mercenary organization Wagner Group as a transnational criminal organization and will impose additional sanctions next week against the group and… [+3535 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Fire Emblem Engage: 20 Essential Tips and Tricks - IGN",
      description:
        "With the release of Fire Emblem Engage comes a brand new combat system to learn, so we’re here with 20 tips and tricks to help ease you into the characters, ...",
      url: "https://www.youtube.com/watch?v=mBShOXloWdQ",
      urlToImage: "https://i.ytimg.com/vi/mBShOXloWdQ/maxresdefault.jpg",
      publishedAt: "2023-01-20T20:01:08Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Ed Cara",
      title: "Super Gonorrhea Has Reached the U.S. - Gizmodo",
      description:
        "Massachusetts officials have reported two cases of gonorrhea that are resistant or less susceptible to all known antibiotics used to treat it.",
      url: "https://gizmodo.com/super-gonorrhea-detected-massachusetts-united-states-1850012423",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9886137fd771871b8fa98c682839f0f9.jpg",
      publishedAt: "2023-01-20T19:59:00Z",
      content:
        "Super gonorrhea has infected people in the United States for the first knowntime. This week, Massachusetts public health officials announced the discovery of two gonorrhea cases appearing to display … [+4133 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Lorenzo Tondo",
      title:
        "‘Heads in the sand’: code of silence in Sicilian town that sheltered mafia boss - The Guardian",
      description:
        "Authorities suspect omerta may have helped Matteo Messina Denaro live in freedom among 10,000 people",
      url: "https://www.theguardian.com/world/2023/jan/20/sicilian-town-mafia-boss-campobello-di-mazara-matteo-messina-denaro",
      urlToImage:
        "https://i.guim.co.uk/img/media/865f13e6f46704cf3f73365a0c921fe94360b487/0_120_5464_3279/master/5464.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7cb04c98058b5e02b6cab86d96dd8365",
      publishedAt: "2023-01-20T19:51:00Z",
      content:
        "It is hard to believe that in the small Sicilian town of Campobello di Mazara, where everyone knows each other and their secrets, no one thought to inquire after the identity of the man who had turne… [+7560 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Timothy Bella",
      title:
        "All hail, 'Toadzilla': Giant toad in Australia could be world's largest - The Washington Post",
      description:
        "Kylee Gray, a park ranger in Queensland, Australia, stumbled upon a cane toad that's pushing the world record at nearly six pounds.",
      url: "https://www.washingtonpost.com/climate-environment/2023/01/20/toadzilla-cane-toad-australia/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/01-20-2023/t_6a080b42b8f048788163ce7835e127db_name_20230120_toadzilla_reuters_thumb.jpg&w=1440",
      publishedAt: "2023-01-20T19:13:00Z",
      content:
        "Comment on this story\r\nAs Kylee Gray got out of her car, she looked to the ground and gasped in disbelief.\r\nThe ranger at Conway National Park in Queensland, Australia, had stopped the vehicle last w… [+3729 chars]",
    },
  ];

  constructor() {
    super();
    // console.log("constructor passed");
    this.state = {
      article: this.article,
      loading: false,
    };
  }

  // async componentDidMount(){
  //     let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8629268f6f5e4947aba4c00626389b7e";
  //     let data = await fetch(url);
  //     let dataJSON = await data.json();
  //     console.log(dataJSON);
  //     this.setState({article : dataJSON.article});
  // }

  render() {
    return (
      <>
        <div className="container text-center my-3 ">
          <div className="row align-items-start row-cols-3">
            {this.state.article?.map((element) => {
              return (
                <div className="col my-3" key={element.url}>
                  {/* {console.log(element.title)} */}
                  <Box
                    title={element.title}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    url={element.url}
                  ></Box>
                  {/* <Box></Box> */}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

Cards.defaultProps = {
  title: "default title",
  description: "default description",
};
export default Cards;
