const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const http = require('http')
const bodyparser = require('body-parser')

app.use(bodyparser.text())
app.use(bodyparser.urlencoded())
app.use(express.urlencoded())
app.use(express.static(path.resolve(__dirname, '../frontend/build')));
app.use(express.json({ limit: '200mb' }))

const DataBaseName = 'QuantomyPodcast'
const CollectionName1 = 'Podcast'

mongoose.connect(`mongodb+srv://LakshyaPratapMonga:SML@9713@quantomypodcast.njcax.mongodb.net/${DataBaseName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const db = mongoose.connection
db.once('open', () => {
    console.dir('THE DATABASE IS SUCCESSFULLY CONNECTED')
})

const Schema1 = new mongoose.Schema({
    EmbedString: String,
    Subject: String,
    // Hosts: Array,
    Host: String,
    Speaker: String,
    BackgroundImage: String,
    Quoteline: String,

})


const podcastEpisode = mongoose.model(CollectionName1, Schema1)

const Episode = new podcastEpisode({
    EmbedString: '<iframe src="https://open.spotify.com/embed/episode/0Det5ifwY7PHsSlWb4lkpG" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> <iframe src="https://open.spotify.com/embed/episode/2emqpyJeKdMP3wfAa8AaGR" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> <iframe src="https://open.spotify.com/embed/episode/1iPySFFLDtr1J16x15q6ad" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    Subject: 'Physics',
    Hosts: ['Lakshya', 'Shourya']
})

// Episode.save()



app.post('/uploadepisode', (req, res) => {

    const episodedetails = JSON.parse(req.body)
    console.log(episodedetails)

    const Episode = new podcastEpisode({
        EmbedString: episodedetails.EmbedCode,
        Subject: episodedetails.Subject,
        Host: episodedetails.Host,
        Speaker: episodedetails.Speaker,
        BackgroundImage: episodedetails.BackgroundImage,
        Quoteline: episodedetails.QuoteLine

    })
    Episode.save()


})
app.get('/episodes', (req, res) => {

    podcastEpisode.find({}, (err, CollectionName) => {
        // res.send(JSON.stringify(CollectionName))
        res.send(CollectionName)
    })


})


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});



app.post('/authentication', (req, res) => {

    if (req.body === 'SML@9713') {
        res.json(true)
    }
    else {
        res.json(false)
    }


})

app.listen(process.env.PORT || 80, () => {
    console.log('THE PORT IS UP AND RUNNING')
    console.dir(`http://localhost/`)
})
