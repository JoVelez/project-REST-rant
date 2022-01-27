
const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
              <h1>NAME</h1>
              <h1>RATE</h1>
              <h1>DESC</h1>
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