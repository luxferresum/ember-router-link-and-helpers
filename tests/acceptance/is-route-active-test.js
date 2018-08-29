import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | is route active', function(hooks) {
  setupApplicationTest(hooks);

  test('simple route is active', async function(assert) {
    await visit('/items');
    assert.equal(find('#is-items-route-active').textContent.trim(), 'true');
  });

  test('simple route is inactive', async function(assert) {
    await visit('/people');
    assert.equal(find('#is-items-route-active').textContent.trim(), 'false');
  });

  test('switches from inactive to active', async function(assert) {
    await visit('/people');
    assert.equal(find('#is-items-route-active').textContent.trim(), 'false');
    await visit('/items');
    assert.equal(find('#is-items-route-active').textContent.trim(), 'true');
  });

  test('switches from active to inactive', async function(assert) {
    await visit('/items');
    assert.equal(find('#is-items-route-active').textContent.trim(), 'true');
    await visit('/people');
    assert.equal(find('#is-items-route-active').textContent.trim(), 'false');
  });
});
