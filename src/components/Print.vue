<template>
  <div>
    <transition name="contKj" tag="div">
      <div v-if="propsdata">
        현재 사용자는 <span class="user_name">경준</span> 입니다.
      </div>
    </transition>
    <transition name="contjy" tag="div">
      <div v-if="!propsdata">
        현재 사용자는 <span class="user_name">자연</span> 입니다.
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  data: function() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  ul {
    padding-left: 0;
    margin: 0;
  }
  .box {
    display: inline-block;
    width: 120px;
    height: 120px;
    border: 1px solid black;
  }
  .li_box {
    list-style-type: none;
    display: inline-block;
  }
  .contkj-enter-active,
  .contjy-enter-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .contkj-leave-active,
  .contjy-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .contkj-enter, .contkj-leave-to,
  .contjy-enter, .contjy-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
	
	input[type="checkbox"] {
		display: none;
	}

	.label__on-off {
		overflow: hidden;
		position: relative;
		display: inline-block;
		width: 58px;
		height: 26px;
		-webkit-border-radius: 13px;
		-moz-border-radius: 13px;
		border-radius: 13px;
		background-color: #ed4956;
		color: #fff;
		font-weight: bold;
		cursor: pointer;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		-ms-transition: all .3s;
		-o-transition: all .3s;
		transition: all .3s;
	}

	.label__on-off>* {
		vertical-align: middle;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		-ms-transition: all .3s;
		-o-transition: all .3s;
		transition: all .3s;
		font-size: 14px;
	}

	.label__on-off .marble {
		position: absolute;
		top: 1px;
		left: 1px;
		display: block;
		width: 24px;
		height: 24px;
		background-color: #fff;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .3);
		-moz-box-shadow: 0 0 10px rgba(0, 0, 0, .3);
		box-shadow: 0 0 10px rgba(0, 0, 0, .3);
	}

	.label__on-off .on {
		display: none;
		padding-left: 5px;
		padding-top: 5px;
	}

	.label__on-off .off {
		padding-left: 27px;
		line-height: 28px;
	}

	.input__on-off:checked+.label__on-off {
		background-color: #0bba82;
	}

	.input__on-off:checked+.label__on-off .on {
		display: inline-block;
	}

	.input__on-off:checked+.label__on-off .off {
		display: none;
	}

	.input__on-off:checked+.label__on-off .marble {
		left: 33px;
	}
	.user_name {
		font-weight: bold;
	}
</style>