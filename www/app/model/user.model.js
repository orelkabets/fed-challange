"use strict";
exports.__esModule = true;
/**
 * Created by or.e on 05/09/2017.
 */
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.userName = '';
        this.password = '';
        this.userImage = './userImage.png';
        this.active = false;
        // for dragging positioning
        this.userNameCords = { x: 0, y: 0 };
        this.userImageCords = { x: 0, y: 0 };
    }
    return UserModel;
}());
exports.UserModel = UserModel;
