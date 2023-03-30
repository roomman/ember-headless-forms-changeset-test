import Component from '@glimmer/component';

interface MyFormData {
  firstName?: string;
  lastName?: string;
}

export default class TestFormComponent extends Component {
  data: MyFormData = {};

  handleSubmit({ firstName, lastName }: MyFormData) {
    alert(`Hello ${firstName} ${lastName}!`);
  }
}
