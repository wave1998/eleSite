const state = {
    formattedAddress: localStorage.formattedAddress || "定位中...",
    province:localStorage.province || "北京市",
    tips:[]
}
const mutations ={
    CHANGE_LOCATION(state,{formattedAddress,province="北京市"}){
        state.formattedAddress = localStorage.formattedAddress = formattedAddress
        state.province = localStorage.province = province
    },
    CHANGE_TIPS(state,tips){
        state.tips = tips;
    }
}
const actions = {
    getLocation({state,commit}){
        if(state.formattedAddress === "定位中...")
            AMap.plugin('AMap.Geolocation', function() {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'RB'
            })

            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete)
            AMap.event.addListener(geolocation, 'error', onError)

            function onComplete (data) {
                // data是具体的定位信息
                commit("CHANGE_LOCATION",{formattedAddress:data.formattedAddress,province:data.addressComponent.province})
            }

            function onError (data) {
                // 定位出错
            }
        })
    },
    autoComplete({state,commit},keyword){
        if(keyword.length>0)
            AMap.plugin('AMap.Autocomplete', function(){
            // 实例化Autocomplete
            var autoOptions = {
                //city 限定城市，默认全国
                city: state.province
            }
            var autoComplete= new AMap.Autocomplete(autoOptions);
            autoComplete.search(keyword, function(status, result) {
                // 搜索成功时，result即是对应的匹配数据
                result.tips = result.tips || []
                 commit("CHANGE_TIPS",result.tips)
            })
        })
    }
}
export default {
    state,
    mutations,
    actions,
}