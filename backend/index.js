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

mongoose.connect(`..............................................................`, {
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
    Host: Object,
    Speaker: Object,
    Host: String,
    Speaker: String,
    BackgroundImage: String,
    Quoteline: String,

})


const podcastEpisode = mongoose.model(CollectionName1, Schema1)




app.post('/uploadepisode', (req, res) => {

    const episodedetails = JSON.parse(req.body)
    console.log(episodedetails)

    const Episode = new podcastEpisode({
        EmbedString: episodedetails.EmbedCode,
        Subject: episodedetails.Subject,
        Host: JSON.parse(episodedetails.Host),
        Speaker: JSON.parse(episodedetails.Speaker),
        BackgroundImage: episodedetails.BackgroundImage,
        Quoteline: episodedetails.QuoteLine

    })
    Episode.save()


})
app.get('/episodes', (req, res) => {

    podcastEpisode.find({}, (err, CollectionName) => {
        res.send(CollectionName.reverse())
    })


})


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});



app.post('/authentication', (req, res) => {

    if (req.body === '.........................') {
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
