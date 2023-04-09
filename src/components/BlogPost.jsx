import React from 'react'

export default function BlogPost({post}) {
  return (
    <div>
        <div className="card mt-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="card-img-top" src={"https://picsum.photos/500?random={randint(1,100)}"
} alt="random" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">{ post.date_created }</h6>
                        <h5 className="card-title">{ post.title }</h5>
                        <h6 className="card-subtitle"> { post.content }</h6>
                        <p className="card-text">{ post.body }</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
