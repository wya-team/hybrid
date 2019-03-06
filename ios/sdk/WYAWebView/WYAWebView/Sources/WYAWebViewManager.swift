//
//  WYAWebViewManager.swift
//  Alamofire
//
//  Created by 李世航 on 2018/8/15.
//

import Alamofire
import MediaPlayer
import UIKit
import WYAKit

import AudioToolbox
import AVKit
import UserNotifications

import ContactsUI
import MessageUI

@objc public enum jumpType: Int {
    case push = 0
    case present = 1
}

protocol WebViewDelegate: AnyObject {
    func getNativeActionResult(_ type: String, _ obj: String) -> Void
}

class WYAWebViewManager: NSObject {
    weak var nativeDelegate: WebViewDelegate?

    static let shared = WYAWebViewManager()
    var config = SystemConfig()
    let netManager = NetworkReachabilityManager(host: "www.apple.com")
    var audioRecorder = WYAAudioRecoder()

    // 模块方法配置表
    let actionModuleParams: [String: Selector] = {
        var params = [String: Selector]()
        // 模拟js触发原生方法（动态配置需要方法前加@objc）
        params.updateValue(#selector(openWinWithParams(outParams:)), forKey: "push")
        params.updateValue(#selector(closeWinWithParams(outParams:)), forKey: "pop")
        params.updateValue(#selector(closeToWinWithParams(outParams:)), forKey: "closeToWin")
        params.updateValue(#selector(setWinAttrWithParams(outParams:)), forKey: "setWinAttr")
        params.updateValue(#selector(openFrameWithParams(outParams:)), forKey: "openFrame")
        params.updateValue(#selector(closeFrameWithParams(outParams:)), forKey: "closeFrame")
        params.updateValue(#selector(setFrameAttrWithParams(outParams:)), forKey: "setFrameAttrWithParams")
        params.updateValue(#selector(bringFrameToFrontWithParams(outParams:)), forKey: "bringFrameToFrontWithParams")
        params.updateValue(#selector(sendFrameToBackWithParams(outParams:)), forKey: "sendFrameToBackWithParams")
        params.updateValue(#selector(setFrameClientWithParams(outParams:)), forKey: "setFrameClientWithParams")
        params.updateValue(#selector(animationWithParams(outParams:)), forKey: "animation")
        params.updateValue(#selector(openFrameGroupWithParams(outParams:)), forKey: "openFrameGroup")
        params.updateValue(#selector(closeFrameGroupWithParams(outParams:)), forKey: "closeFrameGroup")
        params.updateValue(#selector(setFrameGroupAttrWithParams(outParams:)), forKey: "setFrameGroupAttr")
        params.updateValue(#selector(setFrameGroupIndexWithParams(outParams:)), forKey: "setFrameGroupIndex")
        params.updateValue(#selector(openPopoverWinWithParams(outParams:)), forKey: "openPopoverWin")
        params.updateValue(#selector(closePopoverWinWithParams(outParams:)), forKey: "closePopoverWin")
        params.updateValue(#selector(openSlidLayoutWithParams(outParams:)), forKey: "openSlid")
        params.updateValue(#selector(openSlidPaneWithParams(outParams:)), forKey: "openSlidPane")
        params.updateValue(#selector(closeSlidPaneWithParams(outParams:)), forKey: "closeSlidPane")
        params.updateValue(#selector(lockSlidPaneWithParams(outParams:)), forKey: "lockSlidPane")
        params.updateValue(#selector(unlockSlidPaneWithParams(outParams:)), forKey: "unlockSlidPane")
        params.updateValue(#selector(openDrawerLayoutWithParams(outParams:)), forKey: "openDrawerLayout")
        params.updateValue(#selector(openDrawerPaneWithParams(outParams:)), forKey: "openDrawerPane")
        params.updateValue(#selector(closeDrawerPaneWithParams(outParams:)), forKey: "closeDrawerPane")
        params.updateValue(#selector(loadDataWithParams(outParams:)), forKey: "loadData")
        params.updateValue(#selector(execScriptWithParams(outParams:)), forKey: "execScript")
        params.updateValue(#selector(setBlurEffectWithParams(outParams:)), forKey: "setBlurEffect")
        params.updateValue(#selector(historyBackWithParams(outParams:)), forKey: "historyBack")
        params.updateValue(#selector(historyForwardWithParams(outParams:)), forKey: "historyForward")
        params.updateValue(#selector(pageUpWithParams(outParams:)), forKey: "pageUp")
        params.updateValue(#selector(pageDownWithParams(outParams:)), forKey: "pageDown")
        params.updateValue(#selector(removeLaunchViewWithParams(outParams:)), forKey: "removeLaunchView")
        params.updateValue(#selector(showLaunchViewWithParams(outParams:)), forKey: "showLaunchView")
        params.updateValue(#selector(parseTapmodeWithParams(outParams:)), forKey: "parseTapmode")
        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "installApp")
        params.updateValue(#selector(openAppWithParams(outParams:)), forKey: "openApp")
        params.updateValue(#selector(appInstalledWithParams(outParams:)), forKey: "appInstalled")
        params.updateValue(#selector(rebootAppWithParams(outParams:)), forKey: "reboot")
        params.updateValue(#selector(openWidgetWithParams(outParams:)), forKey: "openWidget")
        params.updateValue(#selector(closeWidgetWithParams(outParams:)), forKey: "closeWidget")
        params.updateValue(#selector(ajaxWithParams(outParams:)), forKey: "ajax")
        params.updateValue(#selector(cancelAjaxWithParams(outParams:)), forKey: "cancelAjax")
        params.updateValue(#selector(downloadWithParams(outParams:)), forKey: "download")
        params.updateValue(#selector(cancelDownloadWithParams(outParams:)), forKey: "cancelDownload")
        params.updateValue(#selector(imageCacheWithParams(outParams:)), forKey: "imageCache")
        params.updateValue(#selector(readFileWithParams(outParams:)), forKey: "readFile")
        params.updateValue(#selector(writeFileWithParams(outParams:)), forKey: "writeFile")
        params.updateValue(#selector(setPrefsWithParams(outParams:)), forKey: "setPrefs")
        params.updateValue(#selector(getPrefsWithParams(outParams:)), forKey: "getPrefs")
        params.updateValue(#selector(removePrefsWithParams(outParams:)), forKey: "removePrefs")
        params.updateValue(#selector(clearCacheWithParams(outParams:)), forKey: "clearCache")
        params.updateValue(#selector(getCacheSizeWithParams(outParams:)), forKey: "getCacheSize")
        params.updateValue(#selector(getTotalSpaceWithParams(outParams:)), forKey: "getTotalSpace")
        params.updateValue(#selector(getFreeDiskSpaceWithParams(outParams:)), forKey: "getFreeDiskSpace")
        params.updateValue(#selector(loadSecureValueWithParams(outParams:)), forKey: "loadSecureValue")
        params.updateValue(#selector(addEventListenerWithParams(outParams:)), forKey: "addEventListener")
        params.updateValue(#selector(removeEventListenerWithParams(outParams:)), forKey: "removeEventListener")
        params.updateValue(#selector(sendEventWithParams(outParams:)), forKey: "sendEvent")
        params.updateValue(#selector(accessNativeWithParams(outParams:)), forKey: "accessNative")
        params.updateValue(#selector(notificationWithParams(outParams:)), forKey: "notification")
        params.updateValue(#selector(cancelNotificationWithParams(outParams:)), forKey: "cancelNotification")
        params.updateValue(#selector(startLocationWithParams(outParams:)), forKey: "startLocation")
        params.updateValue(#selector(stopLocationWithParams(outParams:)), forKey: "stopLocation")
        params.updateValue(#selector(getLocationWithParams(outParams:)), forKey: "getLocation")
        params.updateValue(#selector(startSensorWithParams(outParams:)), forKey: "startSensor")
        params.updateValue(#selector(stopSensorWithParams(outParams:)), forKey: "stopSensor")
        params.updateValue(#selector(smsWithParams(outParams:)), forKey: "sms")
        params.updateValue(#selector(mailWithParams(outParams:)), forKey: "mail")
        params.updateValue(#selector(callWithParams(outParams:)), forKey: "call")
        params.updateValue(#selector(openContactsWithParams(outParams:)), forKey: "openContacts")
        params.updateValue(#selector(setStatusBarStyleWithParams(outParams:)), forKey: "setStatusBarStyle")
        params.updateValue(#selector(setScreenOrientationWithParams(outParams:)), forKey: "setScreenOrientation")
        params.updateValue(#selector(setKeepScreenOnWithParams(outParams:)), forKey: "setKeepScreenOn")
        params.updateValue(#selector(toLauncherWithParams(outParams:)), forKey: "toLauncher")
        params.updateValue(#selector(setScreenSecureWithParams(outParams:)), forKey: "setScreenSecure")
        params.updateValue(#selector(setAppIconBadgeWithParams(outParams:)), forKey: "setAppIconBadge")
        params.updateValue(#selector(getPhoneNumberWithParams(outParams:)), forKey: "getPhoneNumber")
        params.updateValue(#selector(alertWithParams(outParams:)), forKey: "alert")
        params.updateValue(#selector(confirmWithParams(outParams:)), forKey: "confirm")
        params.updateValue(#selector(actionSheetWithParams(outParams:)), forKey: "actionSheet")
        params.updateValue(#selector(showProgressWithParams(outParams:)), forKey: "showProgress")
        params.updateValue(#selector(hideProgressWithParams(outParams:)), forKey: "hideProgress")
        params.updateValue(#selector(toastWithParams(outParams:)), forKey: "toast")
        params.updateValue(#selector(openPickerWithParams(outParams:)), forKey: "openPicker")
        params.updateValue(#selector(setRefreshHeaderInfoWithParams(outParams:)), forKey: "setRefreshHeaderInfo")
        params.updateValue(#selector(setCustomRefreshHeaderInfoWithParams(outParams:)), forKey: "setCustomRefreshHeaderInfo")
        params.updateValue(#selector(refreshHeaderLoadingWithParams(outParams:)), forKey: "refreshHeaderLoading")
        params.updateValue(#selector(refreshHeaderLoadDoneWithParams(outParams:)), forKey: "refreshHeaderLoadDone")
        params.updateValue(#selector(showFloatBoxWithParams(outParams:)), forKey: "showFloatBox")
        params.updateValue(#selector(getPictureWithParams(outParams:)), forKey: "getPicture")
        params.updateValue(#selector(saveMediaToAlbumWithParams(outParams:)), forKey: "saveMediaToAlbum")
        params.updateValue(#selector(startRecordWithParams(outParams:)), forKey: "startRecord")
        params.updateValue(#selector(stopRecordWithParams(outParams:)), forKey: "stopRecord")
        params.updateValue(#selector(startPlayWithParams(outParams:)), forKey: "startPlay")
        params.updateValue(#selector(stopPlayWithParams(outParams:)), forKey: "stopPlay")
        params.updateValue(#selector(openVideoWithParams(outParams:)), forKey: "openVideo")
        return params
    }()

    var smsID: String?
    var mailID: String?
    var currentVolume: Float?
    var recorderPath: String?

    typealias callbackBlock = () -> Void
    var callback: callbackBlock!

    func listenAction(_ actionType: String, _ params: [String: Any]) {
        let string = dicTosJsonString(params)
        nativeDelegate?.getNativeActionResult(actionType, string)
    }

    deinit {
        removeNotice()
    }
}

// MARK: - js调用原生方法,方法需要在actionModuleParams里注册

extension WYAWebViewManager: MFMessageComposeViewControllerDelegate, MFMailComposeViewControllerDelegate {
    func nativeAction(_ method: String, params: [String: Any]) {
        if self.actionModuleParams.keys.contains(method) {
            let sel = actionModuleParams[method]
            print(sel!)
            performSelector(inBackground: sel!, with: params)
        }
    }

    func getModel<T>(_ params: [String: Any]) -> T where T: Codable {
        let jsonDecoder = JSONDecoder()
        let jsonData = try? JSONSerialization.data(withJSONObject: params, options: [])
        var briefModel: T?

        do {
            briefModel = try jsonDecoder.decode(T.self, from: jsonData!)
        } catch {
            print(error)
        }
        return briefModel!
    }

    /// openWin
    ///
    /// - Parameter params: 接收到的参数
    @objc func openWinWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController
        let vc = developParams["vc"]
        let type = developParams["jumpType"]

        let model = getModel(outParams["params"] as! [String: Any]) as OpenWinModel

        print(model as Any)

        func push(_ vc: UIViewController, _ animation: Bool) {
            DispatchQueue.main.async {
                vc.hidesBottomBarWhenPushed = model.hideBottomBar ?? true
                if (model.replace)! {
                    rootVC.navigationController?.popViewController(animated: false)
                }
                rootVC.navigationController?.pushViewController(vc, animated: animation)
                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
            }
        }

        func present(_ vc: UIViewController) {
            DispatchQueue.main.async {
                rootVC.present(vc, animated: true, completion: {})
                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
            }
        }

        guard rootVC.navigationController != nil else { return }

        let centerVC = WYAViewController()
        centerVC.model = model

        switch model.animation {
        case "card": push(centerVC, true); break
        case "modal": present(centerVC); break
        case "none": push(centerVC, false); break
        default:
            self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "调用失败，未指定跳转动画", "data": NSNull()])
            break
        }
    }

    @objc func closeWinWithParams(outParams: [String: Any]) {
        print("返回")
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let param = outParams["params"] as! [String: Any]
        let vcName = param["name"] as? String
        let animation = param["animation"] as? String

        func pop(_ animation: Bool) {
            if vcName != nil, (vcName?.count)! > 0 {
                let viewControllers = rootVC.navigationController?.viewControllers
                for vc in viewControllers! {
                    if vc is WYAViewController {
                        let viewController = vc as! WYAViewController
                        if viewController.model?.name == vcName {
                            DispatchQueue.main.async {
                                rootVC.navigationController?.popToViewController(viewController, animated: animation)
                                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
                            }
                        }
                    }
                }
            } else if vcName?.count == 0 {
                self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "vcName不能为空字符串", "data": NSNull()])
            } else {
                self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "vcName不能为空", "data": NSNull()])
            }
        }

        func dismiss() {
            rootVC.dismiss(animated: true, completion: nil)
        }

        switch animation {
        case "card": pop(true); break
        case "modal": dismiss(); break
        case "none": pop(false); break
        default:
            break
        }
    }

    @objc func closeToWinWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let param = outParams["params"] as! [String: Any]
        let vcName = param["name"]
        let animation = param["animation"] as? String

        func pop(_ animation: Bool) {
            let viewControllers = rootVC.navigationController?.viewControllers
            for vc in viewControllers! {
                if vc is WYAViewController {
                    let viewController = vc as! WYAViewController
                    if viewController.model?.name == (vcName as? String) {
                        DispatchQueue.main.async {
                            rootVC.navigationController?.popToViewController(viewController, animated: true)
                        }

                        return
                    }
                }
            }
        }

        switch animation {
        case "card": pop(true); break
        case "modal": pop(true); break
        case "none": pop(false); break
        default:
            break
        }
    }

    @objc func setWinAttrWithParams(outParams: [String: Any]) {}
    @objc func openFrameWithParams(outParams: [String: Any]) {}
    @objc func closeFrameWithParams(outParams: [String: Any]) {}
    @objc func setFrameAttrWithParams(outParams: [String: Any]) {}
    @objc func bringFrameToFrontWithParams(outParams: [String: Any]) {}
    @objc func sendFrameToBackWithParams(outParams: [String: Any]) {}
    @objc func setFrameClientWithParams(outParams: [String: Any]) {}
    @objc func animationWithParams(outParams: [String: Any]) {}
    @objc func openFrameGroupWithParams(outParams: [String: Any]) {}
    @objc func closeFrameGroupWithParams(outParams: [String: Any]) {}
    @objc func setFrameGroupAttrWithParams(outParams: [String: Any]) {}
    @objc func setFrameGroupIndexWithParams(outParams: [String: Any]) {}
    @objc func openPopoverWinWithParams(outParams: [String: Any]) {}
    @objc func closePopoverWinWithParams(outParams: [String: Any]) {}
    @objc func openSlidLayoutWithParams(outParams: [String: Any]) {}
    @objc func openSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func closeSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func lockSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func unlockSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func openDrawerLayoutWithParams(outParams: [String: Any]) {}
    @objc func openDrawerPaneWithParams(outParams: [String: Any]) {}
    @objc func closeDrawerPaneWithParams(outParams: [String: Any]) {}
    @objc func loadDataWithParams(outParams: [String: Any]) {}
    @objc func execScriptWithParams(outParams: [String: Any]) {}
    @objc func setBlurEffectWithParams(outParams: [String: Any]) {}
    @objc func historyBackWithParams(outParams: [String: Any]) {}
    @objc func historyForwardWithParams(outParams: [String: Any]) {}
    @objc func pageUpWithParams(outParams: [String: Any]) {}
    @objc func pageDownWithParams(outParams: [String: Any]) {}
    @objc func removeLaunchViewWithParams(outParams: [String: Any]) {}
    @objc func showLaunchViewWithParams(outParams: [String: Any]) {}
    @objc func parseTapmodeWithParams(outParams: [String: Any]) {}

    /// 安装应用,如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页
    ///
    /// - Parameter outParams: 需要下载的appUri
    @objc func installAppWithParams(outParams: [String: Any]) {
        let params = outParams["params"] as! [String: Any]
        let developParams = outParams["DevelopParams"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let tempString = params["url"] as! String
        var urlString = ""
        if tempString.hasPrefix("http") {
            urlString = tempString.replacingOccurrences(of: "http", with: "itms-apps")
        }
        if tempString.hasPrefix("https") {
            urlString = tempString.replacingOccurrences(of: "https", with: "itms-apps")
        }

        if urlString.hasPrefix("itms-apps") {
            let url = URL(string: urlString)
            DispatchQueue.main.async {
                guard UIApplication.shared.canOpenURL(url!) else {
                    UIView.wya_showCenterToast(withMessage: "无效的地址")
                    self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "无效地址"))
                    return
                }
                UIApplication.shared.openURL(url!)
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "调用成功"))
            }
        }
    }

    /// 打开手机上其它应用，可以传递参数
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func openAppWithParams(outParams: [String: Any]) {
        print(outParams)
        let params = outParams["params"] as! [String: Any]
        let developParams = outParams["DevelopParams"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let scheme = params["scheme"] as! String
        let url = URL(string: scheme)
        DispatchQueue.main.async {
            guard UIApplication.shared.canOpenURL(url!) else {
                UIView.wya_showCenterToast(withMessage: "无法打开APP")
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "无效的scheme"))
                return
            }
            UIApplication.shared.openURL(url!)
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "调用成功"))
        }
    }

    /// 判断设备上是否已安装指定应用
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func appInstalledWithParams(outParams: [String: Any]) {
        let params = outParams["params"] as! [String: Any]
        let developParams = outParams["DevelopParams"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction("appInstalled", self.callBackJsonData(0, "缺少参数"))
            return
        }
        let scheme = params["scheme"] as! String
        let url = URL(string: scheme)
        DispatchQueue.main.async {
            if UIApplication.shared.canOpenURL(url!) {
                print("存在")
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "没有查询到APP"))
            } else {
                print("不存在")
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "调用成功"))
            }
        }
    }

    @objc func rebootAppWithParams(outParams: [String: Any]) {}
    @objc func openWidgetWithParams(outParams: [String: Any]) {}
    @objc func closeWidgetWithParams(outParams: [String: Any]) {}
    @objc func ajaxWithParams(outParams: [String: Any]) {}
    @objc func cancelAjaxWithParams(outParams: [String: Any]) {}
    @objc func downloadWithParams(outParams: [String: Any]) {}
    @objc func cancelDownloadWithParams(outParams: [String: Any]) {}
    @objc func imageCacheWithParams(outParams: [String: Any]) {}
    @objc func readFileWithParams(outParams: [String: Any]) {}
    @objc func writeFileWithParams(outParams: [String: Any]) {}
    @objc func setPrefsWithParams(outParams: [String: Any]) {}
    @objc func getPrefsWithParams(outParams: [String: Any]) {}
    @objc func removePrefsWithParams(outParams: [String: Any]) {}

    /// 清理缓存
    ///
    /// - Parameter outParams: 需要的清理的路径信息
    @objc func clearCacheWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let actionID = developParams["actionID"] as! String
        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(actionID, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let path = params["path"] as! String

        guard path == "" else {
            WYAClearCache.wya_clearFile(atPath: path) { _ in
                print("清理缓存成功")
                self.listenAction(actionID, self.callBackJsonData(1, "调用成功"))
            }
            return
        }

        WYAClearCache.wya_clearCachesClearStatusBlock { _ in
            print("清理缓存成功")
            self.listenAction(actionID, self.callBackJsonData(1, "调用成功"))
        }
    }

    /// 获取缓存占用空间大小
    ///
    /// - Parameter outParams: 缓存的路径默认为Cache
    @objc func getCacheSizeWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let path = params["path"] as! String

        guard path == "" else {
            WYAClearCache.wya_cacheFileSizeValue(atPath: path) { size in
                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": size, "label": NSNull()]])
            }
            return
        }
        WYAClearCache.wya_defaultCachesFolderSizeValueBlock { folderSize in
            self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": folderSize, "label": NSNull()]])
        }
    }

    /// 获取总空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getTotalSpaceWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let divceTotalSpace = WYAClearCache.wya_getDivceTotalSizeValue()
        print("系统总空间\(divceTotalSpace)")
        self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": divceTotalSpace, "label": NSNull()]])
    }

    /// 获取剩余存储空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getFreeDiskSpaceWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let space = NSString.wya_phoneFreeMemory()
        WYAClearCache.wya_getDivceAvailableSizeValueBlock { folderSize in
            print("系统可用空间\(folderSize)")
            self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": folderSize, "label": NSNull()]])
        }
        print(space)
    }

    @objc func loadSecureValueWithParams(outParams: [String: Any]) {}
    @objc func addEventListenerWithParams(outParams: [String: Any]) {}
    @objc func removeEventListenerWithParams(outParams: [String: Any]) {}
    @objc func sendEventWithParams(outParams: [String: Any]) {}
    @objc func accessNativeWithParams(outParams: [String: Any]) {}

    @objc func notificationWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let actionID = developParams["actionID"] as! String
        let model = getModel(outParams["params"] as! [String: Any]) as NotificationModel
        print(model as Any)

        if #available(iOS 10.0, *) {
            let content = UNMutableNotificationContent()
            content.title = model.notify?.title ?? ""
            content.subtitle = ""
            content.body = model.notify?.content ?? "有新消息"

            content.sound = UNNotificationSound.default()

            let date = Date(timeIntervalSince1970: model.timestamp!)
            let dateComponents = Calendar.current.dateComponents([.year, .month, .day, .hour, .minute, .second], from: date)

            let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: false)
            //            let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 60, repeats: true)
            let request = UNNotificationRequest(identifier: actionID, content: content, trigger: trigger)

            // 4
            UNUserNotificationCenter.current().add(request, withCompletionHandler: nil)

        } else {
            func addNotiction(date: Date) {
                let not = UILocalNotification()
                not.fireDate = date
                not.timeZone = TimeZone.autoupdatingCurrent
                if #available(iOS 8.2, *) {
                    not.alertTitle = model.notify?.title
                    not.repeatInterval = NSCalendar.Unit(rawValue: 1)
                } else {}
                not.alertBody = model.notify?.content
                not.userInfo = ["key": actionID]
                UIApplication.shared.scheduleLocalNotification(not)
            }

            let setDate = Date(timeIntervalSince1970: model.timestamp!)
            print(setDate as Any)

            let nowDate = Date()
            if setDate.compare(nowDate) == .orderedAscending {
                return
            }
            if setDate.compare(nowDate) == .orderedSame {
                addNotiction(date: setDate)
            }
            if setDate.compare(nowDate) == .orderedDescending {
                addNotiction(date: setDate)
            }
        }
        self.listenAction(actionID, ["status": 1, "msg": "调用成功", "data": ["id": actionID]])
    }

    @objc func cancelNotificationWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let actionID = developParams["actionID"] as! String
        let param = outParams["params"] as! [String: Any]
        let id = param["id"] as! String
        if #available(iOS 10.0, *) {
            UNUserNotificationCenter.current().removeDeliveredNotifications(withIdentifiers: [id])
        } else {
            let arr = UIApplication.shared.scheduledLocalNotifications
            if (arr?.count)! > 0 {
                for item in arr! {
                    if (item.userInfo!["key"] as! String) == id {
                        UIApplication.shared.cancelLocalNotification(item)
                    }
                }
            }
        }
        self.listenAction(actionID, ["status": 1, "msg": "调用成功", "data": NSNull()])
    }

    @objc func startLocationWithParams(outParams: [String: Any]) {}
    @objc func stopLocationWithParams(outParams: [String: Any]) {}
    @objc func getLocationWithParams(outParams: [String: Any]) {}
    @objc func startSensorWithParams(outParams: [String: Any]) {}
    @objc func stopSensorWithParams(outParams: [String: Any]) {}

    // MARK: MFMessageComposeViewControllerDelegate

    func messageComposeViewController(_ controller: MFMessageComposeViewController, didFinishWith result: MessageComposeResult) {
        controller.dismiss(animated: true, completion: nil)
        var msg = ""
        switch result {
        case .sent:
            print("短信发送成功")
            msg = "发送成功"
        case .cancelled:
            print("短信取消发送")
            msg = "取消发送"
        case .failed:
            print("短信发送失败")
            msg = "发送失败"
        }
        self.listenAction(self.smsID!, ["status": 1, "msg": msg, "data": NSNull()])
    }
    /// 调用系统短信界面发送短信，或者后台直接发送短信
    ///
    /// - Parameter outParams: 需要的参数
    @objc func smsWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        smsID = developParams["actionID"] as? String
        guard MFMessageComposeViewController.canSendText() else {
            print("该设备不能发送短信")
            self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "调用失败", "data": NSNull()])
            return
        }

        let rootVC = developParams["rootVC"] as! UIViewController

        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let body = params["text"] as! String
        let phoneNumbers = params["numbers"] as! Array<String>
        // 发送短信的Controller
        let messageController = MFMessageComposeViewController()
        // 设置短信内容
        messageController.body = body
        // 设置收件人列表
        messageController.recipients = phoneNumbers
        // 设置代理
        messageController.messageComposeDelegate = self
        // 打开界面
        rootVC.present(messageController, animated: true, completion: nil)
    }

    // MARK: MFMailComposeViewControllerDelegate

    func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
        controller.dismiss(animated: true, completion: nil)
        var msg = ""
        switch result {
        case .cancelled:
            print("取消发送")
            UIView.wya_showCenterToast(withMessage: "取消发送")
            msg = "取消发送"
        case .saved:
            print("保存成功")
            UIView.wya_showCenterToast(withMessage: "保存成功")
            msg = "保存成功"
        case .sent:
            print("发送成功")
            UIView.wya_showCenterToast(withMessage: "发送成功")
            msg = "发送成功"
        case .failed:
            print("发送失败")
            UIView.wya_showCenterToast(withMessage: "发送失败")
            msg = "发送失败"
        }
        self.listenAction(self.mailID!, ["status": 1, "msg": msg, "data": NSNull()])
    }

    /// 发送邮件
    ///
    /// - Parameter outParams: 邮件收件人以及发送内容
    @objc func mailWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        mailID = developParams["actionID"] as? String
        guard MFMailComposeViewController.canSendMail() else {
            print("无法发送邮件")
            self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "调用失败", "data": NSNull()])
            return
        }

        let rootVC = developParams["rootVC"] as! UIViewController
        let emailVC = MFMailComposeViewController()
        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let recipients = params["recipients"] as! Array<String>
        let subject = params["subject"] as! String
        let body = params["body"] as! String
        emailVC.mailComposeDelegate = self
        emailVC.setSubject(subject)
        emailVC.setToRecipients(recipients)
        emailVC.setMessageBody(body, isHTML: false)
        rootVC.present(emailVC, animated: true, completion: nil)
    }

    /// 打电话
    ///
    /// - Parameter outParams: 打电话的参数
    @objc func callWithParams(outParams: [String: Any]) {
        DispatchQueue.main.async {
            UIApplication.shared.openURL(URL(string: "telprompt://" + "10086")!)
        }
    }

    /// 在应用内打开系统通讯录界面选择联系人
    ///
    /// - Parameter outParams: 通讯录所需的参数
    @objc func openContactsWithParams(outParams: [String: Any]) {
        let developeParams = outParams["DevelopParams"] as! [String: Any]
        //        let rootVC = developeParams["rootVC"] as! UIViewController
        //        //联系人选择控制器
        //        guard #available(iOS 9.0, *) else{
        //            return
        //        }
        //        let contactPicker = CNContactPickerViewController()
        //        //设置代理
        //        contactPicker.delegate = self
        //
        //        //弹出控制器
        //        rootVC.present(contactPicker, animated: true, completion: nil)

        let manager = WYAContacts()
        let list = manager.getConTacts()
        print(list)
        self.listenAction(developeParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": list])
        //        UIView.wya_showCenterToast(withMessage: "获取联系人成功")
    }

    // 多选联系人
    //    @available(iOS 9.0, *)
    //    func contactPicker(_ picker: CNContactPickerViewController, didSelect contacts: [CNContact]) {
    //        print("一共选择了\(contacts.count)个联系人。")
    //        for contact in contacts {
    //            print("--------------")
    //            //获取联系人的姓名
    //            let lastName = contact.familyName
    //            let firstName = contact.givenName
    //            print("选中人的姓：\(lastName)")
    //            print("选中人的名：\(firstName)")
    //
    //            //获取联系人电话号码
    //            print("选中人电话：")
    //            let phones = contact.phoneNumbers
    //            for phone in phones {
    //                //获得标签名（转为能看得懂的本地标签名，比如work、home）
    //                let phoneLabel = CNLabeledValue<NSString>.localizedString(forLabel: phone.label!)
    //                //获取号码
    //                let phoneValue = phone.value.stringValue
    //                print("\(phoneLabel):\(phoneValue)")
    //            }
    //        }
    //    }

    @objc func setScreenOrientationWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! WYAViewController

        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        rootVC.orientation = params["orientation"] as? String
        switch params["orientation"] as! String {
        case "portraitUp":
            UIDevice.current.newOrientation(UIInterfaceOrientation.portrait)
            break
        case "portraitDown":
            UIDevice.current.newOrientation(UIInterfaceOrientation.portraitUpsideDown)
            break
        case "landscapeLeft":
            UIDevice.current.newOrientation(UIInterfaceOrientation.landscapeLeft)
            break
        case "landscapeRight":
            UIDevice.current.newOrientation(UIInterfaceOrientation.landscapeRight)
            break
        case "auto":
            break
        case "autoPortrait":
            break
        case "autoLandscape":
            break
        default:
            break
        }
    }

    /// 设置状态栏颜色
    ///
    /// - Parameter outParams: 需要改变的颜色参数
    @objc func setStatusBarStyleWithParams(outParams: [String: Any]) {
        let developeParams = outParams["DevelopParams"] as! [String: Any]
        DispatchQueue.main.async {
            let rootVC = developeParams["rootVC"] as! UIViewController
            let params = outParams["params"] as! [String: Any]
            guard params.count != 0 else {
                self.listenAction(developeParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
                return
            }
            let style = params["style"] as! String
            var bgColor = UIColor.white
            if style == "dark" {
                UIApplication.shared.statusBarStyle = .lightContent
                bgColor = UIColor.black
            } else if style == "light" {
                UIApplication.shared.statusBarStyle = .default
                bgColor = UIColor.white
            }

            let stateView = UIView()
            stateView.frame = CGRect(x: 0, y: 0, width: rootVC.view.frame.size.width, height: UIApplication.shared.statusBarFrame.size.height)
            stateView.backgroundColor = bgColor
            rootVC.view.addSubview(stateView)
        }
        self.listenAction(developeParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
    }

    /// 设置是否禁止屏幕休眠
    ///
    /// - Parameter outParams: 是否禁止休眠
    @objc func setKeepScreenOnWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let keepOn = params["keepOn"] as! Bool
        DispatchQueue.main.async {
            UIApplication.shared.isIdleTimerDisabled = keepOn
        }
        self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
    }

    @objc func toLauncherWithParams(outParams: [String: Any]) {}
    @objc func setScreenSecureWithParams(outParams: [String: Any]) {}
    @objc func setAppIconBadgeWithParams(outParams: [String: Any]) {}
    @objc func getPhoneNumberWithParams(outParams: [String: Any]) {}
    @objc func alertWithParams(outParams: [String: Any]) {}
    @objc func confirmWithParams(outParams: [String: Any]) {}
    @objc func actionSheetWithParams(outParams: [String: Any]) {}
    @objc func showProgressWithParams(outParams: [String: Any]) {}
    @objc func hideProgressWithParams(outParams: [String: Any]) {}
    @objc func toastWithParams(outParams: [String: Any]) {}
    @objc func openPickerWithParams(outParams: [String: Any]) {}
    @objc func setRefreshHeaderInfoWithParams(outParams: [String: Any]) {}
    @objc func setCustomRefreshHeaderInfoWithParams(outParams: [String: Any]) {}
    @objc func refreshHeaderLoadingWithParams(outParams: [String: Any]) {}
    @objc func refreshHeaderLoadDoneWithParams(outParams: [String: Any]) {}

    @objc func getPictureWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let model = getModel(outParams["params"] as! [String: Any]) as GetPictureModel
        switch model.sourceType {
        case "camera":
            var camera: WYACameraViewController?
            var orientation: WYACameraOrientation?

            if model.direction! {
                orientation = .front
            } else {
                orientation = .back
            }

            if model.mediaValue == "pic" {
                camera = WYACameraViewController(type: .image, cameraOrientation: orientation!)
            } else if model.mediaValue == "video" {
                camera = WYACameraViewController(type: .video, cameraOrientation: orientation!)
            } else {
                camera = WYACameraViewController(type: .all, cameraOrientation: orientation!)
            }

            if model.videoQuality == "low" {
                camera?.preset = .low
            } else if model.videoQuality == "medium" {
                camera?.preset = .medium
            } else if model.videoQuality == "high" {
                camera?.preset = .high
            }

            camera?.saveAblum = model.saveToPhotoAlbum!
            camera?.albumName = model.groupName

            camera?.takePhoto = { image, url in
                var data: Data?
                if model.encodingType == "png" {
                    let img = UIImage.wya_ImageCompressFitSizeScale(image!, targetSize: CGSize(width: model.targetWidth!, height: model.targetHeight!))

                    data = UIImagePNGRepresentation(img!)

                } else if model.encodingType == "jpg" {
                    let img = UIImage.wya_ImageCompressFitSizeScale(image!, targetSize: CGSize(width: model.targetWidth!, height: model.targetHeight!))
                    data = UIImageJPEGRepresentation(img!, CGFloat(model.quality! / 100))
                }

                if model.destinationType == "url" {
                    if model.saveToPhotoAlbum == false {
                        self.listenAction(developParams["actionID"] as! String, [
                            "status": "0",
                            "msg": "参数不匹配",
                            "data": NSNull()
                        ])
                    } else {
                        self.listenAction(developParams["actionID"] as! String,
                                          [
                                              "status": "1",
                                              "msg": "调用成功",
                                              "data": [
                                                  "list":
                                                      ["url": url]
                                              ]
                        ])
                    }
                } else if model.destinationType == "base64" {
                    let base = data?.base64EncodedString()
                    self.listenAction(developParams["actionID"] as! String,
                                      [
                                          "status": "1",
                                          "msg": "调用成功",
                                          "data": [
                                              "list":
                                                  ["base64": base]
                                          ]
                    ])
                }
            }
            camera?.takeVideo = { url in
                self.listenAction(developParams["actionID"] as! String,
                                  [
                                      "status": "1",
                                      "msg": "调用成功",
                                      "data": [
                                          "list":
                                              ["url": url]
                                      ]
                ])
            }
            DispatchQueue.main.async {
                rootVC.present(camera!, animated: true, completion: nil)
            }

            break
        case "album":
            var photoBrowser: WYAPhotoBrowser?

            if model.mediaValue == "pic" {
                photoBrowser = WYAPhotoBrowser(maxCount: 1, photoBrowserType: .photo)
            } else if model.mediaValue == "video" {
                photoBrowser = WYAPhotoBrowser(maxCount: 1, photoBrowserType: .video)
            }
            photoBrowser?.callBackBlock = { images in
                var items = [[String: Any]]()
                for image in images {
                    var item = [String: Any]()

                    if image is UIImage {
                        let img = UIImage.wya_ImageCompressFitSizeScale(image as? UIImage, targetSize: CGSize(width: model.targetWidth!, height: model.targetHeight!))

                        var data: Data?
                        if model.encodingType == "png" {
                            data = UIImagePNGRepresentation(img!)
                        } else if model.encodingType == "jpg" {
                            data = UIImageJPEGRepresentation(img!, CGFloat(model.quality! / 100))
                        }
                        let base64 = data?.base64EncodedString()
                        item["base64"] = base64
                    } else if image is URL {
                        item["url"] = (image as! URL).absoluteString
                    }
                    items.append(item)
                }

                self.listenAction(developParams["actionID"] as! String, [
                    "status": "1",
                    "msg": "调用成功",
                    "data": ["list": items]
                ])
            }

            DispatchQueue.main.async {
                rootVC.present(photoBrowser!, animated: true, completion: nil)
            }

            break
        default:
            break
        }
    }

    /// 展示一个悬浮框，浮动在屏幕上。
    ///
    /// - Parameter outParams: 浮窗图片，自动消失时间
    @objc func showFloatBoxWithParams(outParams: [String: Any]) {}

    @objc func saveMediaToAlbumWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String: Any]
        let url = param["url"] as! String
        let type = param["mediaType"] as! String

        let tool = WYACameraTool(cameraOrientation: .front)
        tool?.albumName = param["groupName"] as? String
        switch type {
        case "pic":
            let data = try? Data(contentsOf: URL(string: url)!)
            tool?.savePhtots(with: UIImage(data: data!), videoUrl: nil, callBack: { _, _ in

            })
            break
        case "video":

            let downloader = WYADownloader.shared()

            let model = WYADownloadModel()
            model.urlString = "https://vd1.bdstatic.com/mda-hgvt5nvfzpftdxcs/sc/mda-hgvt5nvfzpftdxcs.mp4"
            model.addObserver(self, forKeyPath: "downloadState", options: .new, context: nil)
            downloader.wya_DownloadTask(with: model) { _, result in
                print(result)
            }
            self.callback = { () in
                DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
                    let data = try! Data(contentsOf: URL(fileURLWithPath: model.destinationPath))
                    print(data)
                    tool?.savePhtots(with: nil, videoUrl: URL(fileURLWithPath: model.destinationPath), callBack: { _, _ in

                    })
                }
            }

            break
        default:
            break
        }
    }

    /// 由于ios生成音频格式为WAV，需要转化为amr
    ///
    /// - Parameter outParams: <#outParams description#>
    @objc func startRecordWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let param = outParams["params"] as! [String: Any]
        let path = param["path"] as? String

        let date = Date().timeIntervalSince1970
        if path != nil, (path?.count)! > 0 {
            self.recorderPath = path! + "/" + "\(date)"
        } else {
            let audioFile = NSHomeDirectory() + "/Documents/WYAHybridAudio"
            let success = FileManager.default.fileExists(atPath: audioFile)
            if success == false {
                try! FileManager.default.createDirectory(atPath: audioFile, withIntermediateDirectories: true, attributes: nil)
            }
            self.recorderPath = audioFile + "/" + "\(date)"
        }

        let url = URL(fileURLWithPath: recorderPath! + ".wav")

        let error = Error.self
        let isSuccess = audioRecorder.wya_startRecorder(with: url, error: error as! Error)
        if isSuccess {
            self.listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": ["path": path]])
        } else {
            self.listenAction(developParams["actionID"] as! String, ["status": "0", "msg": "录制失败", "data": ["path": path]])
        }

    }

    @objc func stopRecordWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        audioRecorder.wya_stopRecorder()
        let issuccess = audioRecorder.wya_turnAmrAudio(withWavPath: recorderPath! + ".wav", amrPath: recorderPath! + ".amr", deleteRedundantAudio: true)
        if issuccess {
            let data = try! Data(contentsOf: URL(fileURLWithPath: recorderPath! + ".amr"))
            var time = 0.0

            if #available(iOS 10.0, *) {
                do {
                    let player = try AVAudioPlayer(data: data)
                    time = player.duration
                    let format = player.format
                    time = time * (8000 / format.sampleRate)
                } catch {
                    print(error)
                }

            } else {
                let avURL = AVURLAsset(url: URL(fileURLWithPath: recorderPath! + ".amr"))
                let duration = avURL.duration
                time = CMTimeGetSeconds(duration)
            }
            self.listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": ["path": recorderPath! + ".amr", "duration": time]])
        } else {
            self.listenAction(developParams["actionID"] as! String, ["status": "0", "msg": "格式转换失败", "data": NSNull()])
        }
    }

    @objc func startPlayWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let param = outParams["params"] as! [String: Any]
        let path = param["path"] as! String
        let isSuccess = audioRecorder.wya_turnWavAudio(withAmrPath: path + ".amr", wavPath: path + ".wav", deleteRedundantAudio: true)

        if isSuccess == true {
            let url = URL(fileURLWithPath: path + ".wav")
            let err = Error.self

            audioRecorder.wya_startPlayAudio(with: url, volume: 0.5, numberOfLoops: 1, currentTime: 0, error: err as! Error)

            listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": NSNull()])
        } else {
            self.listenAction(developParams["actionID"] as! String, ["status": "0", "msg": "播放失败，音频格式不正确", "data": NSNull()])
        }
    }

    @objc func stopPlayWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        audioRecorder.wya_stopPlayAudio()
        listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": NSNull()])
    }

    @objc func openVideoWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String: Any]
        let url = param["url"] as! String

        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController
        let videoUrl = URL(string: url)
        let playerViewController = AVPlayerViewController()
        if videoUrl?.scheme == "http" || videoUrl?.scheme == "https" {
            playerViewController.player = AVPlayer(url: URL(string: (videoUrl?.absoluteString)!)!)
        } else {
            playerViewController.player = AVPlayer(url: URL(fileURLWithPath: (videoUrl?.absoluteString)!))
        }
        rootVC.present(playerViewController, animated: true) {}

        self.listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": ""])
    }
}

// MARK: - 事件

extension WYAWebViewManager {
    func registerSystemNotice() {
        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true

        self.handleVolum()

        func assemblyParams(_ actionType: String, _ inParams: [String: Any]) {
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")
            params.updateValue(inParams, forKey: "data")
            listenAction(actionType, params)
        }

        self.netManager?.listener = { status in
            print("网络状态: \(status)")

            let inParams = [String: Any]()
            var actionType: String

            if (self.netManager?.isReachable)! {
                actionType = "online"
            } else {
                actionType = "offline"
            }
            assemblyParams(actionType, inParams)
        }
        self.netManager?.startListening()

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池电量变化")

            var subParams = [String: Any]()

            if device.batteryLevel <= 0.2 {
                subParams.updateValue(device.batteryLevel * 100, forKey: "level")
                switch device.batteryState {
                case .unknown: break
                case .unplugged: subParams.updateValue(false, forKey: "isPlugged"); break
                case .charging: subParams.updateValue(true, forKey: "isPlugged"); break
                case .full: subParams.updateValue(false, forKey: "isPlugged"); break
                }
                assemblyParams("batteryStatus", subParams)
            }
        }

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池状态")

            var subParams = [String: Any]()
            subParams.updateValue(device.batteryLevel * 100, forKey: "level")
            switch device.batteryState {
            case .unknown: subParams.updateValue(false, forKey: "isPlugged"); break
            case .unplugged: subParams.updateValue(false, forKey: "isPlugged"); break
            case .charging: subParams.updateValue(true, forKey: "isPlugged"); break
            case .full: subParams.updateValue(false, forKey: "isPlugged"); break
            }
            assemblyParams("batteryStatus", subParams)
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationDidEnterBackground, object: nil, queue: OperationQueue.main) { _ in
            print("后台")
            assemblyParams("pause", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationDidBecomeActive, object: nil, queue: OperationQueue.main) { _ in
            print("前台")
            assemblyParams("resume", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main) { _ in
            print("休眠")
            assemblyParams("appIdle", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillShow, object: nil, queue: OperationQueue.main) { _ in
            print("键盘将要弹出")
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidShow, object: nil, queue: OperationQueue.main) { not in
            print("键盘已经弹出")
            let rect = not.userInfo?[UIKeyboardFrameEndUserInfoKey] as! CGRect
            let height = rect.size.height

            var inParams = [String: Any]()
            inParams.updateValue(height, forKey: "height")
            assemblyParams("keyboardShow", inParams)
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘将要消失")
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘已经消失")
            assemblyParams("keyboardShow", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil, queue: OperationQueue.main) { _ in
            print("截屏")

            UIGraphicsBeginImageContextWithOptions((UIApplication.shared.keyWindow?.frame.size)!, false, UIScreen.main.scale)
            UIApplication.shared.keyWindow?.layer.render(in: UIGraphicsGetCurrentContext()!)

            let image = UIGraphicsGetImageFromCurrentImageContext()
            UIGraphicsEndImageContext()

            print(image as Any)
            let inParams = [String: Any]()

            self.listenAction("takeScreenshot", inParams)
        }

        //        note.addObserver(forName: NSNotification.Name.closeWin, object: nil, queue: OperationQueue.main) { _ in
        //            // 关闭窗口
        //            print("closewin")
        //            let inParams = [String: Any]()
        //成功
        //            self.listenAction("closeWin", inParams)
        //        }
    }
}

extension WYAWebViewManager {
    func getNetWork(params: [String: String]) {
        // 获取网络状态

        // 回传信息
        self.nativeDelegate?.getNativeActionResult("", "sss")
    }
}

// MARK: 按键事件

extension WYAWebViewManager {
    /**
     返回事件
     */
    func backBtnPressed() {
        self.nativeDelegate?.getNativeActionResult("keyBack", "")
    }

    /// 音量变化监听
    func handleVolum() {
        do {
            try AVAudioSession.sharedInstance().setActive(true)
        } catch let error as NSError {
            print("\(error)")
        }
        self.currentVolume = AVAudioSession.sharedInstance().outputVolume
        NotificationCenter.default.addObserver(self, selector: #selector(self.changeVolumSlider(notifi:)), name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        UIApplication.shared.beginReceivingRemoteControlEvents()
    }

    @objc func changeVolumSlider(notifi: NSNotification) {
        if let volum: Float = notifi.userInfo?["AVSystemController_AudioVolumeNotificationParameter"] as! Float? {
            if volum > self.currentVolume! {
                self.nativeDelegate?.getNativeActionResult("volumeUp", "")
                print("增大")
            } else {
                self.nativeDelegate?.getNativeActionResult("voolumeDown", "")
                print("减小")
            }
            self.currentVolume = volum
        }
    }
}

extension WYAWebViewManager {
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "downloadState" {
            let prog = change![.newKey] as! WYADownloadState.RawValue
            if prog == 4 {
                self.callback()
            }
        }
    }
}

// MARK: - json字符串与字典之间的互转

extension WYAWebViewManager {
    /// 拆分url获取方法名形成字典
    ///
    /// - Parameter urlString: urlString
    /// - Returns: dic
    func cutString(urlString: String) -> NSMutableDictionary {
        print(urlString)
        let dic = NSMutableDictionary()
        if !urlString.contains("//") {
            return dic
        }
        let array = urlString.components(separatedBy: "//")
        dic.setValue(array.first ?? "不存在", forKey: "protocol")

        let lastString = array.last
        if !(lastString?.contains("?"))! {
            dic.setValue(lastString, forKey: "method")
            return dic
        }
        let methodArray = lastString?.components(separatedBy: "?")
        dic.setValue(methodArray?.first ?? "不存在", forKey: "method")

        let queryString = methodArray?.last
        if queryString != nil {
            let arra = queryString?.components(separatedBy: "=")

            dic.setValue(arra?.last, forKey: "id")
        }

        return dic
    }

    // MARK: 字典转字符串

    func dicTosJsonString(_ dic: [String: Any]) -> String {
        let data = try? JSONSerialization.data(withJSONObject: dic, options: .prettyPrinted)
        let str = String(data: data!, encoding: String.Encoding.utf8)
        return str!
    }

    // MARK: 字符串转字典

    func jsonStringToDic(_ str: String) -> [String: Any]? {
        let data = str.data(using: String.Encoding.utf8)
        if let dict = try? JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? [String: Any] {
            return dict
        }
        return nil
    }
}

extension WYAWebViewManager {
    public func removeNotice() {
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidEnterBackground, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidBecomeActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationWillResignActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardWillShow, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidShow, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardWillHide, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidHide, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.closeWin, object: nil)
        UIApplication.shared.endReceivingRemoteControlEvents()
    }
}

extension Notification.Name {
    static let closeWin = NSNotification.Name("closeWin")
}

extension WYAWebViewManager {
    func callBackJsonData(_ status: Int, _ msg: String) -> Dictionary<String, Any> {
        return ["status": status, "msg": msg, "data": NSNull()]
    }
}

// MARK:模块方法配置表
// MARK:导航模块
extension WYAWebViewManager{

    /// navigator方法表配置
    func navigatorDictionary()->Dictionary<String, Any>  {

        var navigatorDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(openWinWithParams(outParams:)), forKey: "push")

        params.updateValue(#selector(closeWinWithParams(outParams:)), forKey: "pop")

        navigatorDictionary.updateValue(params, forKey: "navigator")

        return navigatorDictionary
    }

}

// MARK:app模块
extension WYAWebViewManager{

    /// app方法配置表
    func appDictionary() ->Dictionary<String, Any>  {

        var appDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "install")

        params.updateValue(#selector(openAppWithParams(outParams:)), forKey: "open")

        params.updateValue(#selector(appInstalledWithParams(outParams:)), forKey: "has")

        appDictionary.updateValue(params, forKey: "app")

        return appDictionary
    }
}

// MARK:clipboard 剪切板
extension WYAWebViewManager{

    /// clipboard方法配置表
    func clipboardDictionary() ->Dictionary<String, Any>  {

        var clipboardDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(setClipBoard(outParams:)), forKey: "get")

        params.updateValue(#selector(getClipBoard(outParams:)), forKey: "set")

        clipboardDictionary.updateValue(params, forKey: "clipboard")

        return clipboardDictionary
    }
    /// 设置剪切板内容
    @objc func setClipBoard(outParams: [String: Any]){}
    /// 得到剪切板内容
    @objc func getClipBoard(outParams: [String: Any]){}
}

// MARK: photo 模块
extension WYAWebViewManager{

    /// photo方法配置表
    func photoDictionary() -> Dictionary<String, Any> {

        var photoDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(getPictureWithParams(outParams:)), forKey: "get")

        params.updateValue(#selector(saveMediaToAlbumWithParams(outParams:)), forKey: "save")

        photoDictionary.updateValue(params, forKey: "photo")

        return photoDictionary
    }
}

// MARK: notification 模块
extension WYAWebViewManager{

    /// notification方法配置表
    func notificationDictionary() -> Dictionary<String, Any> {

        var notificationDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(notificationWithParams(outParams:)), forKey: "add")

        params.updateValue(#selector(cancelNotificationWithParams(outParams:)), forKey: "remove")

        notificationDictionary.updateValue(params, forKey: "notification")

        return notificationDictionary
    }
}

// MARK: floatBall 悬浮球模块
extension WYAWebViewManager{
    /// notification方法配置表
    func floatBallDictionary() -> Dictionary<String, Any> {

        var floatBallDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(showFloatBoxWithParams(outParams:)), forKey: "show")

        params.updateValue(#selector(hideFloatBoxWithParams(outParams:)), forKey: "hide")

        floatBallDictionary.updateValue(params, forKey: "floatBall")

        return floatBallDictionary
    }

    @objc func hideFloatBoxWithParams(outParams:[String:Any]){}
}

// MARK: system 系统模块
extension WYAWebViewManager{
    /// system方法配置表
    func systemDictionary() -> Dictionary<String, Any> {
        var systemDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(smsWithParams(outParams:)), forKey: "sms")

        params.updateValue(#selector(mailWithParams(outParams:)), forKey: "mail")

        params.updateValue(#selector(callWithParams(outParams:)), forKey: "call")

        params.updateValue(#selector(openContactsWithParams(outParams:)), forKey: "contacts")

//        params.updateValue(#selector(openContactsWithParams(outParams:)), forKey: "getBattery")
//        params.updateValue(#selector(openContactsWithParams(outParams:)), forKey: "getNetwork")
        systemDictionary.updateValue(params, forKey: "system")

        return systemDictionary
    }

}

// MARK: screen 屏幕模块
extension WYAWebViewManager{
    /// screen方法配置表
    func screenDictionary() -> Dictionary<String, Any> {

        var screenDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(setScreenOrientationWithParams(outParams:)), forKey: "orientation")

        params.updateValue(#selector(setKeepScreenOnWithParams(outParams:)), forKey: "keepOn")

        screenDictionary.updateValue(params, forKey: "screen")

        return screenDictionary
    }

}

// MARK: style 样式模块
extension WYAWebViewManager{
    /// style方法配置表
    func styleDictionary() -> [String:Any] {

        var styleDictionary = [String:Any]()

        var params = [String:Selector]()

//        params.updateValue(#selector(setScreenOrientationWithParams(outParams:)), forKey: "setWin")
//        params.updateValue(#selector(setScreenOrientationWithParams(outParams:)), forKey: "setBadge")

        params.updateValue(#selector(setStatusBarStyleWithParams(outParams:)), forKey: "setStatusBar")

        styleDictionary.updateValue(params, forKey: "screen")

        return styleDictionary
    }

}

// MARK: memory 缓存模块

extension WYAWebViewManager{

    func memoryDicaionary() -> [String:Any] {
        var memoryDicaionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(clearCacheWithParams(outParams:)), forKey: "clearCache")

        params.updateValue(#selector(getCacheSizeWithParams(outParams:)), forKey: "getCache")

        params.updateValue(#selector(getTotalSpaceWithParams(outParams:)), forKey: "getTotal")
        
        params.updateValue(#selector(getFreeDiskSpaceWithParams(outParams:)), forKey: "getFree")

        memoryDicaionary.updateValue(params, forKey: "screen")

        return memoryDicaionary
    }
}

// MARK: storage (数据库)模块
extension WYAWebViewManager{

    /// 待定
    func storageDictionary() -> [String:Any] {
        var storageDictionary = Dictionary<String, Any>()

        var params = [String:Selector]()

        params.updateValue(#selector(setClipBoard(outParams:)), forKey: "get")

        params.updateValue(#selector(getClipBoard(outParams:)), forKey: "set")

        params.updateValue(#selector(getClipBoard(outParams:)), forKey: "remove")

        params.updateValue(#selector(getClipBoard(outParams:)), forKey: "clear")

        params.updateValue(#selector(getClipBoard(outParams:)), forKey: "getAllKeys")

        storageDictionary.updateValue(params, forKey: "storage")
        return storageDictionary
    }
}
