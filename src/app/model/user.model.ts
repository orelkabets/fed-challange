/**
 * Created by or.e on 05/09/2017.
 */
export class UserModel {
    userName: string = '';
    password: string = '';
    userImage: string = './userImage.png';
    active: boolean = false;
    // for dragging positioning
    userNameCords: any = {x:0, y:0};
    userImageCords: any = {x:0, y:0};
}