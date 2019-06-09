import {Subject} from 'rxjs';

export class UserService {
  // a Subject is like an observable but it allows to push to emit new data during the code execution
  // it is a better aproach for across-components communication to use a Subject instead of an event emitter
  userActivated = new Subject();


}
