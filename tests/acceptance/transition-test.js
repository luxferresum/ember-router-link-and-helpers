import { module, test } from 'qunit';
import { visit, currentURL, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | is route active', function(hooks) {
  setupApplicationTest(hooks);

  test('does transition to', async function(assert) {
    await visit('/people');
    assert.equal(currentURL(), '/people');
    await click('#transition-to-items');
    assert.equal(currentURL(), '/items');
    assert.equal(find('#is-items-route-active').textContent.trim(), 'true');
  });
});
