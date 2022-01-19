const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                <img src="/images/foodpic1.jpg" alt="Isk what food this is" height="500" width="600"></img>
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }

module.exports = home