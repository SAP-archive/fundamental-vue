import {
  Component,
  Vue,
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

@Component
export class Uid extends Vue {
  @Prop({
    type: String,
    required: false,
    default: () => makeId(),
  }) public uid!: string;
}
