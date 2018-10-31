<template>
  <div>
    <Header>Modal</Header>
    <Description>The modal is a container generally displayed in response to an action. It is used for short forms, confirmation messages or to display contextual information that does not require a page. The modal should always be used in conjunction with the <a href="https://sap.github.io/fundamental/layouts/application-layout.html">Application Layout Containers</a>. See an example <a href="https://sap.github.io/fundamental/demo-pages/modal-overlay-demo-page.html">App layout page with Modal</a>.
    </Description>

    <Import module="Modal" path="/fundamental-vue/src/" />
    
    <Separator />

    <Properties type="Inputs" :desc = description />

    <Separator />
    
    <h2>Modal Types</h2>
    <Description>Types can be "information", "confirmation" and "form". Plain string content entered as a direct child of a named slot will have appropriate Fiori Fundamentals styles applied. A Modal's named slots can also accept any valid HTML elements</Description>
    
    <Separator />

    <h2>Information Modal</h2>
    <DocsTile>
      <Button @onclick="showInformationModal = true">Launch Demo</Button>

      <Modal type="information" :show="showInformationModal" @dismiss="showInformationModal = false">
        <template slot="header-title">
               Product Added
        </template>
        <template slot="body-content">
            <b>The new product has been added to your catalog.</b><br/>
            <br/>
            Automatic Product ID: <b>PD-3465334</b><br/>
            <br/>
            Expiration date: <b>13/03/2018</b><br/>
            <br/>
        </template>
      </Modal>

    </DocsTile>
    <DocsText>{{informationModalCode}}</DocsText>

    <Separator />

    <h2>Confirmation Modal</h2>
    <Description>This is used to confirm with the user before continuing with a destructive or complex action. In this case, the modal has action buttons at the bottom.</Description>
    <DocsTile>
      <Button @onclick="showConfirmationModal = true">Launch Demo</Button>

      <Modal type="confirmation" :show="showConfirmationModal" @dismiss="showConfirmationModal = false">
        <template slot="header-title">
               Delete
        </template>
        <template slot="body-content">
                Do you want to delete item <b>X</b>?
        </template>
        <template slot="footer-content">
                <Button type="secondary" @onclick="showConfirmationModal = false">No</Button>
                <Button type="primary" @onclick="showConfirmationModal = false">Yes</Button>
        </template>
      </Modal>
                
      
    </DocsTile>
    <DocsText>{{confirmationModalCode}}</DocsText>

    <Separator />

    <h2>Form Modal</h2>
    <Description>This is used for short forms in order to collect information from the user.</Description>
    <DocsTile>
       <Button @onclick="showFormModal = true">Launch Demo</Button>

      <Modal type="form" :show="showFormModal" @dismiss="showFormModal = false">
        <template slot="header-title">
               Invite User
        </template>
        <template slot="body-content">
          <div class="fd-form__group">
              <div class="fd-form__item">
                  <label class="fd-form__label is-required" for="input-2">Email*</label>
                  <input class="fd-form__control" type="text" id="input-2">
              </div>
          </div>
        </template>
        <template slot="footer-content">
                <Button type="secondary" @onclick="showFormModal = false">Cancel</Button>
                <Button type="primary" @onclick="showFormModal = false">Invite</Button>
        </template>
      
      </Modal>
                
                
      
    </DocsTile>
    <DocsText>{{confirmationModalCode}}</DocsText>

    <Separator />
  </div>
</template>

<script>

  import Modal from "./Modal";
  import Button from "../Button/Button";
  import Header from "../documentation/Header";
  import Separator from "../documentation/Separator";
  import Description from "../documentation/Description";
  import DocsText from "../documentation/DocsText";
  import DocsTile from "../documentation/DocsTile";
  import Import from "../documentation/Import";
  import Properties from "../documentation/Properties";

  const informationModal =
  `<Modal type="information" 
          :show="showModal" 
          @dismiss="showModal = false">
        <template slot="header-title">
               Product Added
        </template>
        <template slot="body-content">
            <b>The new product has been added to your catalog.</b><br/>
            <br/>
            Automatic Product ID: <b>PD-3465334</b><br/>
            <br/>
            Expiration date: <b>13/03/2018</b><br/>
            <br/>
        </template>
</Modal>
  `

  const confirmationModal =
  `<Modal type="confirmation" 
          :show="showModal" 
          @close="showModal = false">
        <template slot="header-title">
               Delete
        </template>
        <template slot="body-content">
                Do you want to delete item <b>X</b>?
        </template>
        <template slot="footer-content">
                <Button type="secondary" @onclick="yourFuncToCall">No</Button>
                <Button type="primary" @onclick="yourFuncToCall">Yes</Button>
        </template>
</Modal>
  `
  const formModal =
  `<Modal type="information" 
          :show="showModal" 
          @close="showModal = false">
        <template slot="header-title">
               Invite User
        </template>
        <template slot="body-content">
          <div class="fd-form__group">
              <div class="fd-form__item">
                  <label class="fd-form__label is-required" for="input-2">Email*</label>
                  <input class="fd-form__control" type="text" id="input-2">
              </div>
          </div>
        </template>
        <template slot="footer-content">
                <Button type="secondary" @onclick="yourFuncToCall">Cancel</Button>
                <Button type="primary" @onclick="yourFuncToCall">Invite</Button>
        </template>
</Modal>
  `

  export default {
    name: "ModalComponent",
    components: {
      Modal,
      Button,
      Header,
      Separator,
      Description,
      DocsText,
      DocsTile,
      Import,
      Properties
    },
    data() {
      return {
    
        showInformationModal: false,
        showConfirmationModal: false,
        showFormModal: false,
    
        informationModalCode: informationModal,
        confirmationModalCode: confirmationModal,
        formModalCode: formModal,
        description: [
          { name: 'type', description: 'String - The type of the modal. Options include \'information\', \'confirmation\', and \'form\'. Leave empty for default.' },
          { name: 'show', description: 'Boolean - True creates a  modal and makes it visible. Options include \'true\' or \'false\'. Bind this to anything you choose.' },
          { name: 'close', description: 'Boolean - Closes the open modal. You can bind this to the same boolean value as \'show\'.' },
         ]
      }
    },
    methods: {
        // showInformationModal: function (){
        //   console.log("Show Modal Called. Visibility: " + this.informationModalVisibility )
        //   this.informationModalVisibility = true;
        // },
        // dismissInformationModal: function() {
        //   console.log("Dismiss Modal Called. Visibility: " + this.informationModalVisibility )
        //   this.informationModalVisibility = false
        // }
    }
  };
</script>


<style scoped>
  .fd-button {
    margin-right: 10px;
  }
 
</style>
