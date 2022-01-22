const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h1>Currently not rated</h1>
            <h1>Comments</h1>
            <p>no comments yet!</p>
          </main>
        </Def>
    )
}

module.exports = show