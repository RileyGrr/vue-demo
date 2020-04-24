export const myMixin = {
  data() {
   return {
    num: 1
   }
  },
  created() {
    this.hello();
  },
  mounted() {

  },
  methods: {
    hello() {
      console.log('使用vuemixin')
    },
    one(){
      console.log('one 1111111111111')
    },
    two(){
      console.log('two 2222222222')
    }
  }
 }
// export const toggle =  {
//   data() {
//     return {
//       isShowing: false
//     }
//   },
//   created() {
//   },
//   mounted() {},
//   methods: {
//     toggleShow() {
//       this.isShowing  = !this.isShowing
//     }
//   }
// }