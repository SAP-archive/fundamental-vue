<template>
  <transition name="modal-transition">
    <div v-if="show" class="modal-backdrop" aria-hidden="false">
        <div class="fd-modal modal">
            <div class="fd-modal__content" role="document">
                <div class="fd-modal__header">
                    <h1 class="fd-modal__title">
                            <slot name="header-title">
                         
                            </slot>
                    </h1>
        
                    <button class="fd-modal__close fd-button--secondary"
                            tabindex="0"
                            aria-label="close"
                            @click="dismissModal()">
                    </button>
                </div>
                <div class="fd-modal__body">
                    <slot name="body-content">
                    
                    </slot>
                </div>
                <!-- Footer is not present for Information modal prop type: 'information' - confitional rendering -->
                <footer v-if="type != 'information' || ''" class="fd-modal__footer">
                    <div class="fd-modal__actions">
                        <slot name="footer-content">
                        
                        </slot>
                    </div>
                    
                </footer>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {

    name: "Modal",
    props: {
        type: {
            default: '',
            type: String
        },
        show: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        dismissModal: function(){
            this.$emit('dismiss');
        }
    }
    

}
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: rgba(0,0,0,.5);
}

.modal {
    position: fixed;
    z-index: 9999;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #fff;
    margin: auto;
    width: 460px;
    min-height: 150px;
    outline: 0;
    border-radius: 4px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal-transition" when their visibility is toggled
 * by Vue.js. Transition behaviour is yet to be defined by Design Team.
 */

.modal-transition-enter-active, .modal-transition-leave-active {
    /* ToDo: Question regarding transitions and motion standards for Fiori 3.0 */
}
.modal-transition-enter, .modal-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
    
}
</style>
