export default {
    changeCity(state,city){
        state.city = city
        try{
            localStorage.city = city   //之所以使用localStorage，是防止刷新时城市没有使用缓存，                             //而接刷新了
        }catch(e){

        }
    }
}