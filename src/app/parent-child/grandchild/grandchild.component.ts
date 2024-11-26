import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandchildComponent {
  @Input()
  onPushChange = 'hello1234';

  simpleBoolean: boolean = false;
}
