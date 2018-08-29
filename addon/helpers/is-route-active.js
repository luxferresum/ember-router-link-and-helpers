import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object'

export default Helper.extend({
  router: service(),
  onChangeUrl: observer('router.currentURL', function() {
    this.recompute();
  }),
  compute([to]) {
    return this.router.isActive(to);
  },
});
