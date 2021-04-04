
let url = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=biLnYM8L5VoUa4Fx7L6fv52KpSDehthMXrBShWhI2AslZMPC`
let topic = document.getElementsByClassName('banner-sub-content')[0]
let section = document.getElementsByClassName('main-container-right')[0]
fetch (url)
    .then(respon => {
        return respon.json()
    })
    .then((data)=>{
        console.log(data)
        for(let i = 0; i < data.news.length; i++){
            let articl = data.news[i]
            if (i < 4){
                let hotdiv = document.createElement('div')
                hotdiv.classList.add('hot-topic')
                let img = document.createElement('img')
                if(articl.image === 'None'){
                    img.src = 'technews-website-master/images/banner-news-1.jpg'
                }else {           
                    img.src = articl.image
                }
                let div = document.createElement('div')
                div.classList.add('hot-topic-content')
                let h2 = document.createElement('h2')
                h2.innerText = articl.title
                let p = document.createElement('p')
                p.innerText = articl.description
                let a = document.createElement('a')
                a.href = articl.url
                a.innerText = 'Read More'
                topic.appendChild(hotdiv)
                hotdiv.appendChild(img)
                hotdiv.appendChild(div)
                div.appendChild(h2)
                div.appendChild(p)
                div.appendChild(a)
            }else if (i < 9){
                let article = document.createElement('article')
                let img = document.createElement('img')
                if(articl.image === 'None'){
                    img.src = 'technews-website-master/images/banner-news-1.jpg'
                }else {           
                    img.src = articl.image
                }
                let div = document.createElement('div')
                let h2 = document.createElement('h2')
                h2.innerText = articl.title
                let p = document.createElement('p')
                p.innerText = articl.description
                let a = document.createElement('a')
                a.href = articl.url
                a.innerText = 'Read More'
                let span = document.createElement('span')
                span.innerText = '<<<'
                section.appendChild(article)
                article.appendChild(img)
                article.appendChild(div)
                div.appendChild(h2)
                div.appendChild(p)
                div.appendChild(a)
                a.appendChild(span)

            }else {
                
            }
        }
    })
    .catch(err => console.log(err))




