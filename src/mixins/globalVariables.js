export default{
    methods:{
        getEventType() {
            return window.ontouchstart ? 'touchstart' : 'click';
        }
    }
}