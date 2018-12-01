import {
  Vue,
  Component,
  Prop,
} from 'vue-property-decorator';

const makeId = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

@Component({ name: 'Uid' })
export class Uid extends Vue  {
  @Prop({
    type: String,
    required: false,
    default: () => makeId(),
  }) public uid!: string;
}
