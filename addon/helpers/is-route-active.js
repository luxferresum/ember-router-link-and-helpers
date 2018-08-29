import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  router: service(),
  compute([to]) {
    debugger;
    return this.router.isActive(to);
  }
});
