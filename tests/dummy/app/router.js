import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items');
  this.route('people');
  this.route('item', { path: '/item/:item_id' });
});

export default Router;
