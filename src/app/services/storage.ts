/**
 * Created by or.e on 05/09/2017.
 */

export default class StorageService {
    static getItem(key:string):any {
        let obj:any = JSON.parse(localStorage.getItem(key));
        return obj;
    }
    static setItem(key:string, value:any):void {
        if (typeof value === 'object')
            localStorage.setItem(key, JSON.stringify(value));
        else
            localStorage.setItem(key, value);
    }
    static removeItem(key:string):void {
        localStorage.removeItem(key)
    }

    static updateActive(key:string):void {
        let obj:any = this.getItem(key);
        if (obj) {
            obj.active = !obj.active;
            this.setItem(key, obj);
        }
    }

    static getActiveUser():any {
        for (let key in localStorage){
            let obj:any = this.getItem(key);
            if (obj && obj.active)
                return obj;
        }
        return null;
    }


}