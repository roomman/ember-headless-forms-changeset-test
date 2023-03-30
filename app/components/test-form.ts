import Component from '@glimmer/component';

import {
  validatePresence,
  validateFormat,
  // @ts-expect-error: ember-changeset-validations is not typed
} from 'ember-changeset-validations/validators';

interface MyFormData {
  firstName?: string;
  email?: string;
}

export default class TestFormComponent extends Component {
  data: MyFormData = {};

  validations = {
    name: validatePresence(true),
    email: validateFormat({ type: 'email' }),
  };

  handleSubmit({ firstName, email }: MyFormData) {
    alert(`Hello ${firstName} with email ${email}!`);
  }
}
