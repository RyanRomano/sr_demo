import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    model: function(){
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.get("/sample.json").then(
                (response) => {
                    //Just 1 user in our JSON file
                    resolve(response.data[0])
                },
                reject
            )
        });
    }
});
