/***********************************
> 應用名稱：漫画台Lite(微信小程序)
> 軟件版本：0.0.0
> 下載地址：微信小程序搜索漫画台Lite
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 更新時間：2022-03-12
***********************************/
var cuttlefish ={"warning":"本腳本僅供學習交流使用，禁止轉載售賣"}
var body = $response.body.replace(/price":\d+/g,'price":0')
$done({ body });

