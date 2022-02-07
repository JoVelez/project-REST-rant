
const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (<h3 className="inactive">
        No comments yet!
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
                    <h2>Comments</h2>
                    {comments}
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