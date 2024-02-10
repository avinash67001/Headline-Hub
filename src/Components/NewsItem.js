import React from "react";

const NewsItem =(props)=>{

  //  1.1
  // Everytime we make a class in JS, we have to make use of Constructors
  // Also we know that constructor is initialized only when make use of object of the parent class in our case it is Component
  // constructor() {
  //   super();//Also we know that super keyword is used when we have to acess the data members of the parent class(Component)
  //   console.log("Hello I am a constructor")
  // }

    let { title, desc, imgUrl, newsUrl, author, published, source} = props; 
    //This is how props are passed in Class Based Components.
    // This keyword is used to pass the props since we are getting title and desc from the class Components(Process of Destructuring)
    
    return (
      <div>
        <div className="card">
          {/*Style is passed in double brackets because the first bracket is of JS and the second one is of passing the object */}
        
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <span class="badge text-bg-danger d-flex justify-content-center">{source}</span> 
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">By {author===null?"Unknown":author} on {new Date(published).toGMTString()}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
