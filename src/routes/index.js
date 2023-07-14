import { Parameter } from "../app/models/model.js";
import { Notification } from "../app/models/model.js";

export default function route(app) {

    app.get('/', (req, res) => {
        Parameter.find({}).sort({timestamp: 1})
            .then(parameters => {
                parameters = parameters.map(parameters => parameters.toObject())
                res.render('home', { parameters });
               
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Internal Server Error');
            });
    });

    app.get('/chart', (req, res) => {
        Parameter.find({})
            .then(parameters => {
                parameters = parameters.map(parameters => parameters.toObject())
                res.render('chart', { parameters });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Internal Server Error');
            });
    });


    app.get('/warning', (reg, res) => {
        Notification.find({})
            .then(notifications => {
                notifications = notifications.map(notifications => notifications.toObject())
                res.render('warning', { notifications });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Internal Server Error');
            });
    })

}

