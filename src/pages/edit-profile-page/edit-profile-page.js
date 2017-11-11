var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
import { Camera } from '@ionic-native/camera';
import { ParseFile } from '../../providers/parse-file-service';
import { ViewController, ActionSheetController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
var EditProfilePage = (function (_super) {
    __extends(EditProfilePage, _super);
    function EditProfilePage(injector, formBuilder, actionSheetCtrl, camera, viewCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.formBuilder = formBuilder;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.camera = camera;
        _this.viewCtrl = viewCtrl;
        var user = _this.navParams.get('user');
        _this.form = new FormGroup({
            name: new FormControl(user.get('name'), Validators.required),
            email: new FormControl(user.get('email'), Validators.required),
            password: new FormControl('', Validators.minLength(6)),
            photo: new FormControl(user.get('photo')),
        });
        var trans = ['PROFILE_UPDATED', 'PROFILE_UPDATE_ERROR', 'CAMERA', 'CANCEL',
            'CHOOSE_AN_OPTION', 'PHOTO_LIBRARY', 'FILE_UPLOADED', 'ERROR_FILE_UPLOAD'];
        _this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
        });
        return _this;
    }
    EditProfilePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    EditProfilePage.prototype.ionViewDidLoad = function () { };
    EditProfilePage.prototype.onDismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditProfilePage.prototype.chooseImage = function (sourceType) {
        var _this = this;
        var options = {
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 80,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.showLoadingView();
            ParseFile.upload(imageData).then(function (file) {
                _this.form.value.photo = file;
                _this.showContentView();
                _this.showToast(_this.trans.FILE_UPLOADED);
            }, function (error) {
                _this.showContentView();
                _this.showToast(_this.trans.ERROR_FILE_UPLOAD);
            });
        });
    };
    EditProfilePage.prototype.onUpload = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.trans.CHOOSE_AN_OPTION,
            buttons: [{
                    text: this.trans.PHOTO_LIBRARY,
                    handler: function () {
                        _this.chooseImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: this.trans.CAMERA,
                    handler: function () {
                        _this.chooseImage(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: this.trans.CANCEL,
                    role: 'cancel'
                }]
        });
        actionSheet.present();
    };
    EditProfilePage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoadingView();
        User.save(this.form.value).then(function () {
            _this.showContentView();
            _this.showToast(_this.trans.PROFILE_UPDATED);
            _this.onDismiss();
        }, function (error) {
            _this.showContentView();
            _this.showToast(_this.trans.PROFILE_UPDATE_ERROR);
        });
    };
    return EditProfilePage;
}(BasePage));
EditProfilePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-edit-profile',
        templateUrl: 'edit-profile-page.html'
    }),
    __metadata("design:paramtypes", [Injector,
        FormBuilder,
        ActionSheetController,
        Camera,
        ViewController])
], EditProfilePage);
export { EditProfilePage };
//# sourceMappingURL=edit-profile-page.js.map