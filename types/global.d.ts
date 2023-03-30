import '@glint/environment-ember-loose';

import type { HelperLike } from '@glint/template';
import type { TemplateFactory } from 'ember-cli-htmlbars';
import type HeadlessFormRegistry from 'ember-headless-form/template-registry';
import type HeadlessFormChangesetRegistry from 'ember-headless-form-changeset/template-registry';

// Types for compiled templates
declare module 'solomon-next-reporting-ui/templates/*' {
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends HeadlessFormRegistry,
      HeadlessFormChangesetRegistry {
    'page-title': HelperLike<{
      Args: { Positional: [title: string] };
      Return: void;
    }>;
  }
}
