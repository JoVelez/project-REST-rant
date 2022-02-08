
const React = require('react')
const Def = require('../default')

function show (data) {
    console.log(data)
    let comments= (
        <h3 className="inactive">
            no comments yet
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
              <h3>{data.place.name}</h3>
                <div>
                    <img src={data.place.pic} alt={data.place.name} />
                </div>
              <h1>RATING</h1>
              <div>
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3> 
                    <h4>
                        serving {data.place.cuisines}
                    </h4>
                </div>
                <div>
                <h4>Give us your opinion!</h4>
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                            <label htmlFor="author">Author</label>
                            <input id="author" name="author"/>

                            <label htmlFor="content">Content</label>
                            <textarea name="content" id="content"></textarea>
                           
                            <label htmlFor="stars">Rating</label>
                            <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                        
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" id="rant" name="rant"/>

                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form>
                </div>
                    <a href={`./${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
    
            </main>
        </Def>
    )
}

module.exports = show