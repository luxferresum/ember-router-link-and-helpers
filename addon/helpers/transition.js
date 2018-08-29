import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  router: service(),
  compute(_, params) {
    const {to, replace} = params;

    return () => this.router[replace ? 'replaceWith' : 'transitionTo'](to);
  },
});
