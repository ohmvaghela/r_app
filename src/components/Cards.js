// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Box from './Box'


export class Cards extends Component {
  static propTypes = {}

  article = [
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "Daniel Politi",
        "title": "Despite tear gas, Peru protesters vow to keep demonstrating - The Associated Press - en Español",
        "description": "LIMA, Peru (AP) — Thousands of protesters took to the streets of Peru’s capital Friday and were met with volleys of tear gas for the second straight day, as demonstrators made clear they will keep up their mobilizations to demand the resignation of President …",
        "url": "https://apnews.com/article/politics-peru-government-protests-and-demonstrations-caribbean-dina-boluarte-5058729c16cef9beedcc4b8ab97c9e42",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/23cac4d9bfaf40fa91fb41b4a7d366d7/3000.webp",
        "publishedAt": "2023-01-21T02:26:15Z",
        "content": "LIMA, Peru (AP) Thousands of protesters took to the streets of Perus capital Friday and were met with volleys of tear gas for the second straight day, as demonstrators made clear they will keep up th… [+4494 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Steve Almasy, Raja Razek",
        "title": "5 Memphis officers fired after death of man who was hospitalized after his arrest - CNN",
        "description": "The Memphis Police Department has terminated five police officers in connection with the death of Tyre Nichols, who passed away in a hospital after being arrested by police earlier this month, according to a post from the department's verified Twitter account.",
        "url": "https://www.cnn.com/2023/01/20/us/memphis-tennessee-tyre-nichols-death-friday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230120172320-tyre-nichols-memorial.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-21T02:00:00Z",
        "content": "The Memphis Police Department has terminated five police officers in connection with the death of Tyre Nichols, who passed away in a hospital after being arrested by police earlier this month, accord… [+2740 chars]"
    },
    {
        "source": {
            "id": "entertainment-weekly",
            "name": "Entertainment Weekly"
        },
        "author": "Maureen Lee Lenker",
        "title": "Brooke Shields reveals she was raped shortly after college in Pretty Baby documentary - Yahoo Entertainment",
        "description": "\"I didn't fight that much. I didn't. I just absolutely froze,\" the actress says in a new documentary.",
        "url": "https://ew.com/movies/pretty-baby-documentary-brooke-shields-reveals-she-was-raped/",
        "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B705%2C260%5D&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F01%2F21%2FBrooke-Shields-20191112_56.jpg",
        "publishedAt": "2023-01-21T01:01:00Z",
        "content": "Brooke Shields has never shied away from talking about the ways she was sexualized as a child star in Hollywood. But now the actress is revealing that she was raped as a young adult.\r\nIn new document… [+3587 chars]"
    },
]

constructor(){
    super();
    // console.log("constructor passed");
    this.state = {
        article : this.article,
        loading : false
    } ;
}



  render() {
    return (
    <>
    <div className="container text-center my-3 ">
            <div className='row align-items-start'>
            {
                this.state.article.map((element)=>{
                    return <div className='col my-3' key={element.url}>
                        <Box title={element.title.slice(0,30)+"..."} description={element.description.slice(0,100)} imgUrl={element.urlToImage}></Box>
                    </div>                    
                })
            }
            </div>
        
    </div>
    </>
    )
  }
}


Cards.defaultProps = {
    title : "default title",
    description : "default description"    
}
export default Cards