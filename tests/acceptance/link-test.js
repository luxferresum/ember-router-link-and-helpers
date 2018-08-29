import { module, test } from 'qunit';
import { visit, currentURL, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | is route active', function(hooks) {
  setupApplicationTest(hooks);

  test('link is rendered', async function(assert) {
    await visit('/');
    assert.equal(find('#link-to-items-component').textContent.trim(), 'go to items');
  });

  test('does transition to', async function(assert) {
    await visit('/people');

    assert.equal(currentURL(), '/people');
    assert.notOk([...find('#link-to-items-component').classList].includes('active'), 'link is not active');

    await click('#link-to-items-component');

    assert.equal(currentURL(), '/items');
    assert.ok([...find('#link-to-items-component').classList].includes('active'), 'link is not active');
  });
});
