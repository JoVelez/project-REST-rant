const db = require('../models')

async function seed() {
    //get place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    //create the comment
    let comment = await db.Comment.create({
        author: 'Starving Steve',
        rant: false,
        stars: 5.0,
        content: 'Yeehaw'
    })

    //add comment to the place's comment array
    place.comments.push(comment.id)

    //save the place with the comment attached
    await place.save()

    //Exit the Program
    process.exit()
}

seed()