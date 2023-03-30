import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-headless-forms-changeset-test/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TestForm />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <TestForm>
        template block text
      </TestForm>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
