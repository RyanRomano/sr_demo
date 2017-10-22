import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    model() {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.get("/sample.json").then(
                (response) => {
                    // We only ever have 1 user in our JSON file,
                    // resolve them directly
                    resolve(response.data[0])
                },
                reject
            )
        });
    }
});
