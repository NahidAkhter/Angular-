import {LikeComponent} from './like.component';

let component = new LikeComponent(2, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)