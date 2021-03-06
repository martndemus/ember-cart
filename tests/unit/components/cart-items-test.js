import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const set = Ember.set;

moduleForComponent('cart-items', 'Unit | Component | cart items', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('adds the class "empty" when the cart is empty', function(assert) {
  let component = this.subject();

  let cart = Ember.ArrayProxy.create({
    content: Ember.A(),
    counter: 0
  });

  set(component, 'cart', cart);
  this.render();

  assert.ok(this.$().hasClass('cart-empty'));
});

test('removes the class "empty" when the cart is not empty', function(assert) {
  let component = this.subject();

  let cart = Ember.ArrayProxy.create({
    content: Ember.A(),
    counter: 1
  });

  set(component, 'cart', cart);
  this.render();

  assert.ok(!this.$().hasClass('cart-empty'));
});
